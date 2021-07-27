<template>
  <div class="image-loader-container">
    <img class="placeholder" :src="placeholder" alt="" v-if="!completed" />
    <img
      class="origin"
      :src="src"
      :style="{
        opacity: originOpacity,       
      }"
      @load="handleLoad()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      originOpacity: 0,
      completed:false
    };
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  methods: {
    handleLoad:function(){
      setTimeout(()=>{
        this.originOpacity=1;
        this.completed=true;
        this.$emit('loading');
      },this.duration)
      
    }
    
  },
};
</script>

<style lang="less" scoped>
@import "../../less/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    object-fit: cover;
    .self-fill();
  }
  .placeholder {
    filter: blur(2vm);
    // opacity: ;
  }
  .origin{
    transition: opacity 1s;
  }
}
</style>