<template>
  <div class="blog-container">
    <Layout>
      <template #main>
        <blog-list />
      </template>
      <template #right>
        <blog-category />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@components/Layout";
import BlogCategory from "./components/BlogCategory.vue";
import BlogList from "./components/BlogList.vue";

export default {
  components: {
    Layout,
    BlogCategory,
    BlogList,
  },
};
</script>

<style lang="less" scoped>
.blog-container{
  height: 100%;
  width: 100%;
//  margin: 35px 0;
}
</style>