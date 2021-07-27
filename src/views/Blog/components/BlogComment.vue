<template>
  <message-area
    @submit="handleSubmit"
    :list="data.rows"
    title="评论列表"
    :subTitle="`(${data.total})`"
    :isListLoading="isLoading"
  />
</template>

<script>
import MessageArea from "@components/MessageArea";
import { postComment, getComments } from "@/api/blog.js";
import fetchData from "@/mixins/fetchData";
export default {
  components: {
    MessageArea,
  },
  data() {
    return {
      limit: 10,
      page: 1,
    };
  },
  mixins: [fetchData({})],
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async handleSubmit(formData, func) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      func("评论成功"); // 告诉子组件，我这边处理完了，你继续
    },
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async fetchMore() {
      if (!this.hasMore) {
        // 没有更多啦
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        // 目前正在加载更多
        return;
      }
      const range = 100; // 顶一个可接受的范围，在这个范围内都算达到了底部
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= range) {
        this.fetchMore();
      }
    },
  },
};
</script>

<style>
</style>