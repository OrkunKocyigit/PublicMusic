<template>
  <b-container
    id="app"
    class="vh-100 d-flex align-items-center justify-content-md-center"
    fluid="lg"
  >
    <b-card class="w-100">
      <b-row v-show="!start" aling-h="center" cols="1">
        <b-col class="mb-5">
          Start discovering new music
        </b-col>
        <b-col>
          <button v-on:click="createList">Start</button>
        </b-col>
      </b-row>
      <b-row>
        <div v-if="start">
          <Player :song="currentSong" :onSkipSong="onSkipSong"></Player>
        </div>
      </b-row>
      <b-row>
        <b-col>
          <Genre v-for="genre in genres" :key="genre.id" :genre="genre"></Genre>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
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
