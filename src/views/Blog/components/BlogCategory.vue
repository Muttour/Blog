<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <list-menu :datas="list" @select="handleSelect" />
  </div>
</template>

<script>
import ListMenu from "./ListMenu.vue";
import fetchData from "@/mixins/fetchData";
import { getBlogType } from "@/api/blog";
export default {
  components: { ListMenu },
  mixins: [fetchData([])],
  methods: {
    async fetchData() {
      return await getBlogType();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
        console.log(this.$route);
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });

         console.log(this.$route);
      }
    },
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );

      
      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];

      // console.log(result);

      return result.map((item) => {
        return {
          ...item,
          isSelected: item.id === this.categoryId,
          aside: `${item.articleCount}篇`,
        };
      });
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>