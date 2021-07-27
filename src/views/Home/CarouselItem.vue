<template>
  <div
    class="carousel-item"
    ref="carouselContainer"
    @mousemove="handleMouseMove"
    @mouseleave="center"
  >
    <div
      class="carousel-img"
      ref="image"
      :style="imagePosition"    
    >
      <image-loader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @loading="showWords"
      />
    </div>
    <h2 class="title" ref="title">{{ carousel.title }}</h2>
    <p class="desc" ref="desc">{{ carousel.description }}</p>
  </div>
</template>

<script>
import ImageLoader from "@components/ImageLoader";
export default {
  props: ["carousel"],
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      imgSize: null,
      containerSize: null,
      mouseX: 0,
      mouseY: 0,

    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    window.addEventListener("resize", this.setSize);
    this.center();
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  components: {
    ImageLoader,
  },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.title.clientWidth; // reflow
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      // 描述也是一样
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.desc.clientWidth; // reflow
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    handleMouseMove(e) {
      const rect = this.$refs.carouselContainer.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.carouselContainer.clientWidth,
        height: this.$refs.carouselContainer.clientHeight,
      };

      this.imgSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
    center() {
      this.mouseX = this.containerSize.width / 2;
      this.mouseY = this.containerSize.height / 2;
    },
  },
  computed: {
    imagePosition() {
      if (!this.imgSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.imgSize.width - this.containerSize.width;
      const extraHeight = this.imgSize.height - this.containerSize.height;

      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;

      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@less/mixin.less";
@import "~@less/var.less";
.carousel-item {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .title,
  .desc {
    .self-center();
    left: 35px;
    right: auto;
    letter-spacing: 3px;
    color: #fff;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
    line-height: 2.5;
    margin: 20px;
    opacity: 0;
  }

  .title {
    transform: translateY(-50%);
    font-size: 2em;
  }
  .desc {
    transform: translateY(-50%);
    top: calc(50% + 60px);
    font-size: 1.2em;
    color: lighten(@gray, 20%);
  }

  .carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s;
  }
}
</style>>
