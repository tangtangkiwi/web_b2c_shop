<template>
  <div id="app">
    <ul class="nav" v-if="onoff_show">
      <router-link to="/home" tag="li">
        <i class="iconfont icon-zhuye"></i>主页
      </router-link>
      <router-link to="/pro_categories" tag="li" :class="!onoff_2?'':'router-link-active'">
        <i class="iconfont icon-fenlei"></i>分类
      </router-link>
      <router-link to="/pro_search" tag="li">
        <i class="iconfont icon-sousuo"></i>搜索
      </router-link>
      <router-link to="/shop_cart" tag="li">
        <i class="iconfont icon-gouwuche"></i>购物车
      </router-link>
      <router-link to="/user" tag="li" :class="!onoff_5?'':'router-link-active'">
        <i class="iconfont icon-yonghu"></i>我的
      </router-link>
    </ul>

    <router-view></router-view>

  </div>
</template>

<script>
import Home from './router/nav_bottom.js'
export default {
  name: 'App',
  data(){
    return{
      onoff_2:false,
      onoff_5:false
    }
  },
  computed:{
    onoff_show:function(){
      return this.$store.state.onoff
    },
  },
  updated(){
    if(this.$route.path == '/order'){
      this.onoff_5 = true;
    }else{
      this.onoff_5 = false;
    }
    var str = this.$route.path;
    if(str.substring(0,str.length-1) == '/categories'){
      this.onoff_2 = true;
    }else{
      this.onoff_2 = false;
    }
  }
}
</script>

<style>
  @import './assets/css/reset.css';
  @import './assets/fonts/iconfont.css';
  @import './assets/css/app.css';
  .swiper-pagination-bullet{
    background: #05a26d!important;
    width: 12px;
    height: 12px;
    margin: 0 12PX;
    opacity: 1;
    }
  .swiper-pagination-bullet-active{
      background: #ff9c00!important;
      width: 12px;
      height: 12px;
      opacity: 1;
  }
</style>
