<template>
  <div>
      <icon :type="t"/>
      {{t}}
  </div>
</template>

<script>
import Icon from "./index.vue";
export default {
    data() {
        return {
            t: 'home',
        };
    },
  components: {
      Icon,
  },
};
</script>

<style>
</style>