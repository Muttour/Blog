<template>
  <div class="home-container" @wheel="handleWheel" v-loading="loading">
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      ref="container"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <carousel-item :carousel="item" />
      </li>
    </ul>
    <div class="icon icon-up" v-show="index > 0" @click="switchTo(index - 1)">
      <icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="index < totalNum - 1"
      @click="switchTo(index + 1)"
    >
      <icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{ active: i === index }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import Icon from "@components/Icon";
import { mapState } from "vuex";

export default {
  data() {
    return {
      index: 0,
      carouselItemHeight: 0,
      switching: false,
    };
  },
  components: {
    CarouselItem,
    Icon,
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.carouselItemHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.carouselItemHeight * this.index + "px";
    },
    totalNum() {
      return this.data.length;
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }

      if (e.deltaY > 0 && this.index < this.totalNum - 1) {
        this.switching = true;
        this.index++;
      }

      if (e.deltaY < 0 && this.index > 0) {
        this.switching = true;
        this.index--;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.carouselItemHeight = this.$refs.container.clientHeight;
    },    
  },
};
</script >

<style scoped lang='less'>
@import "~@less/mixin.less";
@import "~@less/global.less";

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: @gray;

  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 0.5s;

    li {
      width: 100%;
      height: 100%;
    }
  }

  @gap: 20px;
  .icon {
    .self-center();
    color: #fff;
    cursor: pointer;

    .iconfont {
      font-size: 30px;
    }

    &.icon-up {
      animation: jump-up 2s infinite;
      top: @gap;
      transform: translateX(-50%);
    }
    &.icon-down {
      top: auto;
      bottom: @gap;
      transform: translateX(-50%);
      animation: jump-dowm 2s infinite;
    }
  }

  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }

  @keyframes jump-dowm {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }

  .indicator {
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 15px;

    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      border: 2px solid #fff;
      background: @words;
      margin: 6px;
      cursor: pointer;
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>