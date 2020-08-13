<template>
  <div id="app">
    <div v-if="!start">
      Start discovering new music
      <button v-on:click="createList">Start</button>
    </div>
    <div v-else>
      <iframe width="0" height="0" :src="currentUrl" frameborder="0" allow="autoplay"></iframe>
      <div v-if="hidden">
        <button v-on:click="hidden = !hidden">Reveal</button>
        <button v-on:click="nextSong">Skip</button>
      </div>
      <div v-else>
        <button v-on:click="nextSong">Favorite</button>
        <button v-on:click="nextSong">Go to Source</button>
        <button v-on:click="nextSong">Next Song</button>
      </div>
    </div>
    <div>
      <button v-for="genre in genres" :key="genre.id">{{genre.name}}</button>
    </div>
  </div>
</template>

<script>
import songsJSON from "./assets/songs";
import genresJSON from "./assets/genres";
export default {
  name: "App",
  data: () => {
    return {
      start: false,
      hidden: true,
      songs: songsJSON,
      genres: genresJSON,
      index: 0,
    };
  },
  methods: {
    nextSong() {
      this.index += 1;
    },
    createList() {
      this.start = true;
    },
  },
  computed: {
    currentUrl() {
      let song = this.songs[this.index];
      let url = "";
      switch (song.provider) {
        case "youtube":
          url =
            "https://www.youtube.com/embed/" +
            song.id +
            "?autoplay=1&controls=0&start=0&end=30&fs=0&modestbranding=1&cc_load_policy=1";
      }
      return url;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
