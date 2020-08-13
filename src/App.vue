<template>
  <div id="app">
    <div v-if="!start">
      Start discovering new music
      <button v-on:click="start = !start">Start</button>
    </div>
    <div v-else>
      <iframe
      width="0"
      height="0"
      src="https://www.youtube.com/embed/FShbpXy-xAo?autoplay=1&controls=0&start=70&end=90&fs=0&modestbranding=1&cc_load_policy=1"
      frameborder="0" 
      allow="autoplay" >
      </iframe>
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
        <button v-on:click="nextSong">Rock</button>
        <button v-on:click="nextSong">Pop</button>
        <button v-on:click="nextSong">Classic</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      start: false,
      hidden: true
    }
  },
  methods: {
    nextSong: () => {

    }
  }
}
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
