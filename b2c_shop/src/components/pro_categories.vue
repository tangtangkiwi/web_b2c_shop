<template>
    <!-- 产品分类页 -->
    <div class="wrap">
        <header-nav :msg="'商品分类'"></header-nav>
        <div class="content">
            <div class="header">
                <div>
                    <input type="text" placeholder="输入关键字">
                </div>
                <i class="iconfont icon-fangdajing"></i>
            </div>
            <h3>全部</h3>
            <ul class="list">
                <router-link to="/categories1" tag="li">呼吸机</router-link>
                <router-link to="/categories2" tag="li">心电监护仪</router-link>
                <router-link to="/categories3" tag="li">心肺复苏机</router-link>
                <router-link to="/categories4" tag="li">全科诊断器</router-link>
                <router-link to="/categories5" tag="li">担架</router-link>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import headerNav from './pulblic/header_nav.vue';
export default {
    name:'pro_categories',
    components:{
        headerNav
    },
    data(){
        return{
            onoff : true
        }
    },
    created(){
        //console.log(this.$store.state.onoff);
        this.$store.commit('increment',this.onoff);//是否显示路由
    }
}
</script>

<style scoped>
    @import '../assets/css/pro_categories.css';
</style>