<template>
  <div class="top-container" v-show="show" @click="handleClick">top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleClick() {
      // 回到顶部
      this.$bus.$emit("setMainScroll", 0);
    },
    handleScroll(dom) {
        // console.log('123')
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 500;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@less/var.less";

.top-container {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: @primary;
  color: #fff;
  line-height: 60px;
  text-align: center;
  position: fixed;
  right: 60px;
  bottom: 60px;
  font-size: 16px;
  z-index: 999;
  cursor: pointer;
}
</style>>
