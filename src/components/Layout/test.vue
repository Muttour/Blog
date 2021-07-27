<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="site-aside">
          <SiteAside />
        </div>
      </template>
      <template #main>
        <div>主区域，宽度占满剩余空间，溢出隐藏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index.vue";
import SiteAside from "@components/SiteAside/index.vue";
export default {
  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style lang='less' scoped>

.test-container{
    height: 1000px;
    width: 500px;
    overflow: hidden;
    .site-aside{
        height: 100%;
    }
}
</style>