<template>  
  <div id="topHead">
    <img v-bind:src="url+adImgName" class="adImg">
    <div>
      <span class="font_bug">博客</span>
      <span class="ml_10 italic">都来这里涨姿势</span>
      <span class="fr">这里收录了{{num1}}个博客,和{{num2}}个博文</span>
    </div>
  </div>
</template>  

<script>
export default {
  name: 'topHead',
  data () {  
    return {
      url: "../static/image/",
      adImgName:"adImg.jpg",
      num1:0,
      num2:0,
    }  
  }, 
  methods:{
  }
}
</script>

<style scoped>  
  .adImg{
    margin-top: 10px;
    width:100%;
  }
  .font_bug{
    font-size: 25px;
    font-weight: 600;
  }
</style> 