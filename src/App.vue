<template>
  <div id="app">
    <div v-if="!start">
      Start discovering new music
      <button v-on:click="createList">Start</button>
    </div>
    <div v-else>
      <Player :song="currentSong" :onSkipSong="onSkipSong"></Player>
    </div>
    <div>
      <Genre v-for="genre in genres" :key="genre.id" :genre="genre"></Genre>
    </div>
  </div>
</template>

<script>
import songsJSON from "./assets/songs";
import genresJSON from "./assets/genres";
import * as d3 from "d3-array";
import Player from "./components/Player";
import Genre from "./components/Genre";

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
  components: {
    Player,
    Genre,
  },
  methods: {
    onSkipSong() {
      this.index += 1;
      if (this.index >= this.songs.length) {
        this.loopList();
      }
    },
    createList() {
      this.start = true;
      this.loopList();
    },
    loopList() {
      this.index = 0;
      this.songs = d3.shuffle(this.songs);
    },
  },
  computed: {
    currentSong() {
      return this.songs[this.index];
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
