<template>
  <Layout>
    <template #main>
      <div class="main-container" v-loading="isLoading" ref="mainContainer">
        <blog-detail :blog="data" v-if="data" />
        <blog-comment v-if="!isLoading" />
      </div>
    </template>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <blog-toc :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import getBlog from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import { getBlogDetail } from "@/api/blog.js";
import Layout from "@components/Layout";
import BlogToc from "./components/BlogToc.vue";
import BlogDetail from "./components/BlogDetail.vue";
import BlogComment from "./components/BlogComment.vue";

export default {
  data() {
    return {
      timer: null,
    };
  },
  components: {
    Layout,
    BlogToc,
    BlogDetail,
    BlogComment,
  },
  mixins: [getBlog(),mainScroll('mainContainer'),],
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
  methods: {
    async fetchData() {
      return await getBlogDetail(this.$route.params.id);
    },
  },
};
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>