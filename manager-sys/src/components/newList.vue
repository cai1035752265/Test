<template>  
  <div id="newList">
    <div>
      <h3 class="fl">最新文章</h3>
      <div class="fr sort_menus">
        <span v-for='(item,index) in sorts' class="fl sort_menu" :class="{'sort_active':index===mark }">
          {{item}}
        </span>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>  

<script>
export default {
  name: 'newList',
  data () {  
    return {
      sorts:['全部显示','秦时明月','天心九歌','武庚纪','天谕','斗罗大陆'],
      articles:[
          {'type':'0','head':'如遇古剑，一见惊艳','content':'剑是兵器之首，有王者气象，具高士之风。在古时，他是一个人地位的象征，是格调的体现。','href':'https://mp.weixin.qq.com/s/JwOweJ1n6LmZUaI2HzTA-g','img':'https://mmbiz.qpic.cn/mmbiz_jpg/xibx6icq3VaocbkbQ3ZmAXLtWxoJKqo7yiarWTqwibNI6qpezYtIHxud11qkOwBccaibIkoMSZpIhPHshoniaBhvP8EQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'},
          {'type':'0','head':'1月壁纸|送你一朵寒冬里最妩媚的赤玫瑰~~','content':'祝月饼们元旦快乐~2017年我们拥有很多的共同回忆~~2018年让我们相“秦”相爱吧~~⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄','href':'https://mp.weixin.qq.com/s?__biz=MjM5OTI1NTYyMA==&mid=2655295839&idx=1&sn=fa3be17193d387b52f694f7a75c21067&scene=19#wechat_redirect','img':'https://mmbiz.qpic.cn/mmbiz_jpg/xibx6icq3VaocbkbQ3ZmAXLtWxoJKqo7yiarWTqwibNI6qpezYtIHxud11qkOwBccaibIkoMSZpIhPHshoniaBhvP8EQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'},
          {'type':'0','head':'12月壁纸|惊鲵终亮相，惊艳了我的眼！','content':'12月惊喜福利：壁纸上的二维码拜拜啦~~PS：十年秦缘和74集抓老秦活动获奖名单公布，快来看看大奖最终花落谁家把！','href':'https://mp.weixin.qq.com/s?__biz=MjM5OTI1NTYyMA==&mid=2655295689&idx=1&sn=0934c7cc7425c5f85f3fbf761d632e68&scene=19#wechat_redirect','img':'https://mmbiz.qpic.cn/mmbiz_jpg/xibx6icq3VaocbkbQ3ZmAXLtWxoJKqo7yiarWTqwibNI6qpezYtIHxud11qkOwBccaibIkoMSZpIhPHshoniaBhvP8EQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'},
          {'type':'0','head':'立冬壁纸|今日立冬，老秦要宣布一件大事了！！','content':'立冬，宜看《秦时明月》，宜宣布大事！','href':'https://mp.weixin.qq.com/s?__biz=MjM5OTI1NTYyMA==&mid=2655295527&idx=1&sn=22aabe5c508518388137854e3459a358&scene=19#wechat_redirect','img':'https://mmbiz.qpic.cn/mmbiz_jpg/xibx6icq3VaocbkbQ3ZmAXLtWxoJKqo7yiarWTqwibNI6qpezYtIHxud11qkOwBccaibIkoMSZpIhPHshoniaBhvP8EQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'},
        ],
      mark:0,
    }  
  }, 
  methods:{
  }
}
</script>

<style scoped>  
  .sort_menu{
    line-height: 30px;
    margin: 5px 0 5px 10px;
    padding:0 5px;
  }
  .sort_menus span:hover{
    color:#FF3300;
    text-decoration: underline;
  }
  .sort_active{
    background-color:#EEF0F1;
    font-weight:600;
  }
  .font_bug{
    font-size: 25px;
    font-weight: 600;
  }
</style> 