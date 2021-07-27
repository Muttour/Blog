<template>
  <ul class="list-menu-container">
    <li v-for="(item, index) in datas" :key="index">
      <span :class="{ selected: item.isSelected }" @click="handleClick(item)">{{
        item.name
      }}</span>

      <span
        v-if="item.aside"
        @click="handleClick(item)"
        class="aside"
        :class="{selected: item.isSelected }"
      >
        {{ item.aside }}
      </span>
      <!-- 显示当前组件 -->
      <list-menu :datas="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListMenu",
  props: {
    //datas结构：[{name:xxx,isSelected:T/F,children:[]}]
    datas: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelected) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@less/var.less";
.list-menu-container {
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;

  .list-menu-container {
    padding: 0 1em;
  }

  span {
    height: 40px;
    line-height: 40px;
    cursor: pointer;

    &.selected {
      color: @warn;
    }
  }

  .aside {
    font-size: 12px;
    margin-left: 1em;
    color: @gray;
  }
}
</style>>
