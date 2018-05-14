<template>  
  <div id="imgShow" class="fl"  v-on:mouseover="pause()" v-on:mouseout="move()">
    <div class="fl">
      <ul>
        <li v-for="(img, index) in img" v-show="index==mark" :key="index">
          <span>
            <img v-bind:src="url+img"/>
          </span>
        </li>
      </ul>
    </div>
    <div class="bar fl">
      <div class="fl">
        <span v-for="(item, index) in msg" v-show="index==mark" :key="index">{{item}}</span>
      </div>  
      <div class="fr icon">
        <span v-for="(item, index) in img" :class="{ 'active':index===mark }" @click="change(index)" :key="index"></span> 
      </div>   
    </div> 
  </div>
</template>  

<script>
export default {
  name: 'imgShow',
  data () {  
    return {
      url:"../static/image/test/",
      //img:['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'],
      img:['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'],
      msg:['月儿','少司命1','墨鸦','少司命2','大叔'],
      mark:0,
      timer:null,
    }  
  }, 
  methods:{
    autoPlay(){  
      this.mark++;  
      if (this.mark === this.img.length) { //当遍历到最后一张图片置零  
        this.mark = 0; 
      }  
    },  
    play(){  
        this.timer = setInterval(this.autoPlay, 2500);
    },   
    pause(){  
      clearInterval(this.timer);
    },  
    change(i){  
        this.mark = i; 
    },
    move(){
      this.timer = setInterval(this.autoPlay, 2500);
    }
  },
  created(){
    this.play();
  },
}
</script>

<style scoped>  
  #imgShow{
    width:35%;
    height:420px;
    position:relative;
  }
  .font_bug{
    font-size: 25px;
    font-weight: 600;
  }
  ul li img{
    width:100%;
  }
  img{
    height:380px;
  }
  .bar {  
    position: absolute;  
    width: 100%;  
    bottom: 10px;  
    margin: 0 auto;  
    z-index: 10;  
    text-align: center;  
    background-color:#F0F0F0;
    line-height:40px;
  }
  .icon span {  
    width: 10px;  
    height: 10px;  
    border-radius:5px;
    border: 1px solid;  
    background: white;  
    display: inline-block;  
    margin-right: 8px;  
  }  
  .active {  
    background: #2965B1 !important;  
  }
</style> 