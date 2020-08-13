<template>
  <div>
    <component :is="providerComponent" :id="song.id" :active="active" />
    <div v-if="!active">
      <button v-on:click="active = !active">Reveal</button>
      <button v-on:click="skipSong">Skip</button>
    </div>
    <div v-else>
      <button v-on:click="goSource">Go to Source</button>
      <button v-on:click="skipSong">Next Song</button>
    </div>
  </div>
</template>

<script>
import YoutubeProviderVue from "./providers/YoutubeProvider.vue";
export default {
  props: {
    song: Object,
    onSkipSong: Function,
  },
  data: () => {
    return {
      active: false,
    };
  },
  components: {
    YoutubeProviderVue,
  },
  computed: {
    providerComponent() {
      let provider;
      switch (this.song.provider) {
        case "youtube":
          provider = YoutubeProviderVue;
      }
      return provider;
    },
  },
  methods: {
    skipSong() {
      this.active = false;
      this.onSkipSong();
    },
  },
};
</script>

<style scoped></style>
