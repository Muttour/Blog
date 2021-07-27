<template>
  <div class="message-container" ref="messageContainer">
    <message-area
      @submit="handleSubmit"
      :list="data.rows"
      title="评论列表"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
    />
  </div>
</template>

<script>
import MessageArea from "@components/MessageArea";
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll.js";
import { postComment, getComments } from "@/api/blog.js";
export default {
  data() {
    return {
      limit: 10,
      page: 1,
    };
  },
  components: {
    MessageArea,
  },
  mixins: [fetchData({ total: 0, rows: [] }),mainScroll('messageContainer')],
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
      // console.log('flag');
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

<style scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>