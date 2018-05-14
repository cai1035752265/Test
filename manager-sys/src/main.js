// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
// import router from './router'
import $ from 'jquery'
import mainTop from '@/components/mainTop'
import topHead from '@/components/topHead'
import imgShow from '@/components/imgShow'
import top_article from '@/components/article'
import newList from '@/components/newList'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import "../static/css/index.css";
import "../static/css/common.css";
Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

var BaseUrl="../static/image/";
var maintop = new Vue({
  el: '#mainTop',
  components: { mainTop },
  template: '<mainTop/>'
})

var tophead = new Vue({
  el: '#topHead',
  components: { topHead },
  template: '<topHead/>'
})

var imgshow = new Vue({
	el: '#imgShow',
	components:{ imgShow },
	template:'<imgShow/>'
})

var topArticle = new Vue({
	el: '#top_article',
	components:{ top_article },
	template:'<top_article/>'
})
var new_list = new Vue({
	el: '#newList',
	components:{ newList },
	template:'<newList/>'
})
// var imgarray=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'];
// new Vue({
//   el: '#test',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

// var headImg=new Vue({
// 	el:'#headImg',
// 	data:{
// 		url:BaseUrl,
// 		img:imgarray,
// 		mark:0,
// 		timer:null,
// 	},
// 	methods: { 
// 		autoPlay:function(){  
// 	      this.mark++;  
// 	      if (this.mark === 8) { //当遍历到最后一张图片置零  
// 	        this.mark = 0; 
// 	      }  
// 	    },  
// 	    play:function(){  
// 	      	this.timer = setInterval(this.autoPlay, 2500);
// 	    },   
// 	    pause:function(){  
// 	     	clearInterval(this.timer);
// 	    },  
// 	    change:function(i){  
// 	      	this.mark = i; 
// 	    },
// 	    move:function(){
// 	    	this.timer = setInterval(this.autoPlay, 2500);
// 	    }
//  	},
// })