<template>
    <!-- 我的订单页 -->
    <div>
        <header-nav :msg="'全部订单'"></header-nav>
        <ul class="list">
            <li>
                <div>
                    <img src="../../static/img/order_1.png" alt="">
                </div>
                <div>
                    <h6>鱼跃呼吸机家用<span>YH-360</span>正压单水平半自动呼吸器睡眠止鼾机</h6>
                    <div class="list-content">
                        <span>共一件商品</span>
                        <span><em>&#165;</em>3180.00</span>
                        <span>待收货</span>
                    </div>
                    <div class="list-footer">
                        <span>查看物流</span>
                        <span>追加评价</span>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../static/img/order_2.png" alt="">
                </div>
                <div>
                    <h6>鱼跃呼吸机家用<span>YH-360</span>正压单水平半自动呼吸器睡眠止鼾机</h6>
                    <div class="list-content">
                        <span>共一件商品</span>
                        <span><em>&#165;</em>3180.00</span>
                        <span>待付款</span>
                    </div>
                    <div class="list-footer">
                        <span @click="pay">立即付款</span>
                        <span>取消订单</span>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../static/img/order_3.png" alt="">
                </div>
                <div>
                    <h6>鱼跃呼吸机家用<span>YH-360</span>正压单水平半自动呼吸器睡眠止鼾机</h6>
                    <div class="list-content">
                        <span>共一件商品</span>
                        <span><em>&#165;</em>3180.00</span>
                        <span>待发货</span>
                    </div>
                    <div class="list-footer">
                        <span>追加评价</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import headerNav from '../components/pulblic/header_nav1.vue';
export default {
    name:'order',
    created(){
        this.$store.commit('increment',true);//是否显示路由
    },
    components:{headerNav},
    data(){
        return{
            
        }
    },
    methods:{
        pay(){
            this.$router.push('/pay');
        }
    }
}
</script>

<style scoped>
    @import '../assets/css/order.css';
</style>