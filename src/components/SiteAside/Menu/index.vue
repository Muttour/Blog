<template>
  <div class="menu-container">
    <li v-for="item in linkInfo" :key="item.name">
      <router-link
        
        active-class="selected"
        exact-active-class=""
        :exact="item.exact"
        :to="{name:item.name}"
      >
        <div class="icon">
          <Icon :type="item.icon" />
        </div>
        <span>{{ item.title }}</span>
      </router-link>
    </li>
  </div>
</template>

<script>
import Icon from "@components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      linkInfo: [
        {
          name: "home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "blog",
          title: "文章",
          icon: "blog",
          exact: false, // 激活状态是否要精确匹配
        },
        {
          name: "about",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style scoped lang='less'>
@import "~@/less/global.less";
.menu-container {
  color: @gray;
  margin: 20px 0;
  // background-color: #000;

  a {
    &.selected {
      background: darken(@words, 3%);
    }
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>