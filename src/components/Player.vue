<template>
  <b-container>
    <b-row class="mb-3 mr-auto ml-auto">
      <component :is="providerComponent" :id="song.id" :class="active ? '' : 'hide-player'" />
    </b-row>
    <b-row>
      <b-col>
        <b-row v-if="!active">
          <b-col cols="6">
            <b-button v-on:click="active = !active" size="lg" block>Reveal</b-button>
          </b-col>
          <b-col cols="6">
            <b-button v-on:click="skipSong" size="lg" block>Skip</b-button>
          </b-col>
        </b-row>
        <b-row v-else>
          <b-col cols="6">
            <b-button v-on:click="goSource" size="lg" block>Go to Source</b-button>
          </b-col>
          <b-col cols="6">
            <b-button v-on:click="skipSong" size="lg" block>Next Song</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
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
    goSource() {
      let url;
      switch (this.song.provider) {
        case "youtube":
          url = "https://www.youtube.com/watch?v=" + this.song.id;
      }
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.hide-player {
  width: 0px;
}
</style>
