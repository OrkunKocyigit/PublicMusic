<template>
  <b-embed type="iframe" aspect="16by9" :src="url" allow="autoplay" class="video-player"></b-embed>
</template>

<script>
export default {
  props: {
    id: String,
  },
  computed: {
    url() {
      let url =
        "https://www.youtube.com/embed/" +
        this.id +
        "?autoplay=1&controls=0&start=0&fs=0&modestbranding=1&cc_load_policy=1";
      return url;
    },
  },
};
</script>

<style scoped>
</style>
