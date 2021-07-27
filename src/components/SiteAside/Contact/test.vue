<template>
  <div class="test">
    <!-- <h1>lorem</h1> -->
    <contact />
  </div>
</template>

<script>
import Contact from "./index.vue";
export default {
  components: {
    Contact,
  },
};
</script>

<style>
.test{
    width: 300px;
    height: 500px;
    margin: 100px auto;
}
</style>