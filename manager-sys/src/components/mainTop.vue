<template>  
  <div id="mainTop">
    <div class="mainTopBox">
      <img v-bind:src="url+imgName" class="logo fl" >
      <div id="topLeft" class="fl">
        <a>论坛</a>
        <a>聚焦</a>
        <a>排行榜</a>
        <img v-bind:src="url+iconList" class="top_icon" >
        <img v-bind:src="url+iconSearch" class="top_icon" >
      </div>
      <div id="topRight" class="fr">
        <a>登录</a>
        <a>注册</a>
      </div>
    </div>  
  </div>
</template>  

<script>
export default {
  name: 'mainTop',
  data () {  
    return {
      color:"black",
      url: "../static/image/",
      imgName:"logo.png",
      iconList:"top_list.png",
      iconSearch:"top_search.png",
    }  
  }, 
  methods:{
  
  }
}
</script>

<style scoped>  
  .mainTopBox{
    width:100%;
    height:50px;
    background-color:#F7F7F7;
  }
  .logo{
    width:13%;
    height:50px;
  }
  #topLeft{
    line-height:50px;
  }
  #topLeft a{
    padding: 0 10px;
    border-right: 1px solid #C7C7C7;
  }
  #topLeft a:hover,#topRight a:hover{
    color:#6578AF;
  }
  #topRight{
    line-height:50px;
    margin-right:50px;
  }
  #topRight a{
    padding: 0 10px;
  }
  .top_icon{    
    height: 23px;
    padding: 0 0 5px 5px;
  }
</style> 