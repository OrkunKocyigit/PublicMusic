<template>
  <div>
    <iframe
      :width="width"
      :height="height"
      :src="url"
      frameborder="0"
      allow="autoplay"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    id: String,
  },
  computed: {
    url() {
      let url =
        "https://www.youtube.com/embed/" +
        this.id +
        "?autoplay=1&controls=0&start=0&fs=0&modestbranding=1&cc_load_policy=1";
      if (!this.active) {
        url += "&end=30";
      }
      return url;
    },
    width() {
      return this.active ? 480 : 0;
    },
    height() {
      return this.active ? 270 : 0;
    },
  },
};
</script>

<style scoped></style>
