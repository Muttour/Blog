<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe
      v-if="data"
      class="about-content"
      :src="data.url"
      frameborder="0"  
      @load="srcLoaded = true"  
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoaded: false,
    };
  },
  computed: {
    ...mapState('about', ['data','loading']),
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>
