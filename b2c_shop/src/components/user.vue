<template>
    <!-- 个人中心 -->
    <div class="wrap">
        <div style="background-image: url(static/img/user_bg.png)">
            <i class="iconfont icon-xinfeng"></i>
            <i class="iconfont icon-shezhi"></i>
            <div>
                <img src="../assets/img/user.png" alt="">
                <div>咪咪</div>
            </div>
        </div>
        <ul class="shop">
            <li><div>0</div><div>待付款</div></li>
            <li><div>0</div><div>待发货</div></li>
            <li><div>1</div><div>待收货</div></li>
            <li><div>0</div><div>待评价</div></li>
            <li><div>0</div><div>售后服务</div></li>
        </ul>
        <ul class="order">
            <li @click="order">
                <i class="iconfont icon-dingdan"></i>
                <div>全部订单</div>
                <div>查看详情</div>
            </li>
            <li>
                <i class="iconfont icon-tubiao_wuxing-"></i>
                <div>收藏商品</div>
                <div>已收藏的商品</div>
            </li>
            <li>
                <i class="iconfont icon-youhuiquan"></i>
                <div>优惠券</div>
                <div>5张优惠券</div>
            </li>
            <li>
                <i class="iconfont icon-wenjianjia"></i>
                <div>会员卡</div>
                <div>我的会员卡</div>
            </li>
            <li>
                <i class="iconfont icon-yue"></i>
                <div>余额宝</div>
                <div>查询余额</div>
            </li>
            <li>
                <i class="iconfont icon-zuanshi"></i>
                <div>会员等级</div>
                <div>点击查看</div>
            </li>
            <li @click="more">
                <i class="iconfont icon-diandiandian1"></i>
                <div>更多</div>
                <div>点击查看</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'user',
    methods:{
        order(){
            this.$router.push('/order');
        },
        more(){
            this.$router.push('/pro_list');
        }
    },
    created(){
        this.$store.commit('increment',true);//是否显示路由
    }
}
</script>

<style scoped>
    @import '../assets/css/user.css'
</style>