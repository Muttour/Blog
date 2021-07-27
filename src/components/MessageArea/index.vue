<template>
  <div class="message-area-container">
    <message-form @submit="handleSubmit" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <message-list :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import MessageForm from "./MessageForm/index.vue";
import MessageList from "./MessageList/index.vue";
export default {
  components: {
    MessageForm,
    MessageList,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleSubmit(formData, func) {
      this.$emit("submit", formData, func);
    },
  },
};
</script>

<style>
.loading {
  position: relative;
  height: 100px;
}
</style>