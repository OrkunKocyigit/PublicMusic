<template>
  <div v-on:click="toggleStatus" :class="selected ? 'active' : ''">
    <img :src="imageUrl" />
    <p>{{ genre.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    genre: Object,
  },
  data: () => {
    return {
      selected: true,
    };
  },
  computed: {
    imageUrl() {
      let url = this.genre.img;
      if (url == "") {
        url = "/imgs/default_genre.png";
      }
      return url;
    },
  },
  methods: {
    toggleStatus() {
      this.selected = !this.selected;
    },
  },
};
</script>

<style scoped>
.active {
  background-color: bisque;
}
</style>
