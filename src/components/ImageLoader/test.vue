<template>
  <div class="test-container">
    <image-loader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @loading="handleLoading()"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods:{
      handleLoading:function(){
          console.log('origin图片加载完成！！')
      }
  }
};
</script>

<style>
.test-container{
    width: 800px;
    height: 500px;
    border: blueviolet solid 1px;
    margin: 0 auto;
}
</style>