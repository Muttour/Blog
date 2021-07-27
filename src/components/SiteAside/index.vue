<template>
  <div class="site-aside-container">
    <div class="avatar">
      <avatar url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"  :size='150'/>
    </div>
    <div class="metu">
      <metu />
    </div>
    <div class="contact">
      <contact />
    </div>
  </div>
</template>

<script>
import Avatar from "../Avatar";
import Contact from "./Contact";
import Metu from "./Menu";

export default {
  components: {
    Avatar,
    Contact,
    Metu,
  },
};
</script>

<style scoped lang='less'>
@import "~@less/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 30px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  .avatar{
    display: flex;
    justify-content: center;
  }
  .metu,.contact {
    margin-top: 35px;
  }
}
</style>