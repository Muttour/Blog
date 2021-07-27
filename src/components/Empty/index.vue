<template>
  <div class="empty-container">
    <icon type="empty" class="icon-container" />
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon/index.vue";
export default {
  name: "Empty",
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "null",
    },
  },
};
</script>

<style scoped lang="less">
// @import "~@/styles/mixin.less";
// @import "~@/styles/var.less";

@import "../../less/mixin.less";
@import "../../less/var.less";

.empty-container {
  .self-center();
  color: @gray;
  text-align: center;
  height: auto;
}
.icon-container {
  font-size: 72px;
}
</style>