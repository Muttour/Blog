<template>
  <div class="contact-container">
    <li>
      <a href="#" class="item">
        <div class="icon"><icon type="github" /></div>
        <span>github</span>
      </a>
    </li>
    <li>
      <a
        class="item"
        href="tencent://message/?Menu=yes&uin=264090399&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon"><icon type="qq" /></div>
        <span>2640903995</span>
        <div class="pop">
          <img
            class="pop-img"
            src="~@/assets/imgs/纸飞机.png"
            alt=""
          />
        </div>
      </a>
    </li>
    <li>
      <a href="mailto:2640903995@qq.com" class="item">
        <div class="icon"><icon type="mail" /></div>
        <span>2640903995@qq.com</span>
      </a>
    </li>
    <li>
      <a href="#" class="item">
        <div class="icon"><icon type="weixin" /></div>
        <span>Muxxi233</span>
      </a>
    </li>
  </div>
</template>

<script>
import Icon from "@components/Icon";
import "@less/global.less";

export default {
  name: "Contact",
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@less/var.less";
@import "~@less/mixin.less";
.contact-container {
  // background-color: @dark;
  padding: 0 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;

  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;

    a {
      cursor: pointer;
      display: flex;
      align-items: center;
      // font-size: 14px;

      &:hover {
        .pop {
          transform: scaleY(1);
        }
      }

      .icon .iconfont {
        font-size: 26px;
        width: 36px;
        margin-right: 7px;
      }

      .pop {
        position: absolute;
        left: 0;
        bottom: @itemHeight + 5px;
        padding: 10px 15px;
        background: #fff;
        border-radius: 5px;
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: 0.3s;
        img {
          width: 150px;
          height: 150px;
        }
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 8px;
          height: 8px;
          background: #fff;
          bottom: -4px;
        }
      }
    }
  }
}
</style>