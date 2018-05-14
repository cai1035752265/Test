<template>  
  <div id="top_article" class="fl">
    <div class="articles" v-for="(article,index) in articles" @click="openNew(index)" :key="index">
      <h5>{{article.head}}</h5>
      <p class='content_font'>{{article.content}}</p>
    </div>
  </div>
</template>  

<script>
  export default {
    name: 'top_article',
    data () {  
      return {
        articles:[
          {'head':'如遇古剑，一见惊艳','content':'剑是兵器之首，有王者气象，具高士之风。在古时，他是一个人地位的象征，是格调的体现。','href':'https://mp.weixin.qq.com/s/JwOweJ1n6LmZUaI2HzTA-g'},
          {'head':'1月壁纸|送你一朵寒冬里最妩媚的赤玫瑰~~','content':'祝月饼们元旦快乐~2017年我们拥有很多的共同回忆~~2018年让我们相“秦”相爱吧~~⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄','href':'https://mp.weixin.qq.com/s?__biz=MjM5OTI1NTYyMA==&mid=2655295839&idx=1&sn=fa3be17193d387b52f694f7a75c21067&scene=19#wechat_redirect'},
          {'head':'12月壁纸|惊鲵终亮相，惊艳了我的眼！','content':'12月惊喜福利：壁纸上的二维码拜拜啦~~PS：十年秦缘和74集抓老秦活动获奖名单公布，快来看看大奖最终花落谁家把！','href':'https://mp.weixin.qq.com/s?__biz=MjM5OTI1NTYyMA==&mid=2655295689&idx=1&sn=0934c7cc7425c5f85f3fbf761d632e68&scene=19#wechat_redirect'},
          {'head':'立冬壁纸|今日立冬，老秦要宣布一件大事了！！','content':'立冬，宜看《秦时明月》，宜宣布大事！','href':'https://mp.weixin.qq.com/s?__biz=MjM5OTI1NTYyMA==&mid=2655295527&idx=1&sn=22aabe5c508518388137854e3459a358&scene=19#wechat_redirect'},
        ]
      }  
    }, 
    methods:{
      openNew(index){
        window.open(this.articles[index].href);
      }
    },
  }
</script>

<style scoped>  
  #top_article{
    width:65%;
    height:420px;
    padding:0 19px;
  }
  .articles{
    cursor:pointer;
  }
  .content_font{
    font-size: 14px;
    color: #999999;
  }
</style> 