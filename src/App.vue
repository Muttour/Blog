<template>
  <div class="app-container" >
    <layout>
      <template #left>
        <site-aside />
      </template>
      <template #main>
        <div class="main-container">
          <router-view></router-view>
        </div>
      </template>
    </layout>
    <to-top />
  </div>
</template>

<script>
import Layout from "@components/Layout";
import SiteAside from "@components/SiteAside";
import ToTop from "./components/ToTop";
export default {
  name: "App",
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style scoped lang='less'>
@import "~@less/mixin.less";
@import "~@less/global.less";
.app-container {
  .self-fill(fixed);
  overflow: hidden;
  .main-container {
    width: 100%;
    height: 100%;
  }
}
</style>
