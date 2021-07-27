<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script >

<style scoped>
.test-container {
    position: relative;
    width: 300px;
    height: 400px;
    margin: 0 auto;
    border: 1px solid beige;
}
</style>