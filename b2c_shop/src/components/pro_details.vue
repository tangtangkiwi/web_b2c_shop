<template>
    <!-- 产品详情页 -->
    <div>
        <header-nav :msg="'商品详情'"></header-nav>
        <div class="box">
            <img src="../assets/img/pro_details_show.png" alt="">
            <div class="details">
                <h3>{{pro.name}}</h3>
                <em><span>&#165;</span>{{pro.salePrice}}.00<i>本店优惠</i></em>
                <strong><span>价格:</span><i>&#165;</i>{{pro.price}}.00</strong>
                <div>
                    <i class="iconfont icon-tubiao_wuxing-"></i>
                    <span>关注</span>
                </div>
            </div>
            <ul>
                <li>快递：免运费</li>
                <li>正品保证</li>
                <li>急速退款</li>
                <li>七天无理由退货</li>
            </ul>
            <div>选择颜色及型号<i class="iconfont icon-arrow-right-copy-copy-copy"></i></div>
            <div>产品参数<i class="iconfont icon-arrow-right-copy-copy-copy"></i></div>
            <div class="comment">
                <h3><i class="iconfont icon-icon-test"></i>评论</h3>
                <h4>宝贝评价</h4>
                <ul class="user-total">
                    <li v-for="(item,index) in UserTotal" :key="index">
                        {{item.total}}({{item.num}})
                    </li>
                </ul>
                <ul class="user-comment">
                    <li v-for="(item,index) in UserComment" :key="index">
                        <div>
                            <img :src="item.img" alt="">
                            <em>{{item.user}}</em>
                            <i class="iconfont icon-xin"></i>
                            <i class="iconfont icon-xin"></i>
                            <i class="iconfont icon-xin"></i>
                        </div>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
                <div>查看更多评论</div>
                <img src="../assets/img/pro_details_1.png" alt="">
                <img src="../assets/img/pro_details_2.png" alt="">
                <img src="../assets/img/pro_details_3.png" alt="">
                <img src="../assets/img/pro_details_4.png" alt="">
                <ul class="details-info">
                    <li>稳定</li>
                    <li>舒适</li>
                    <li>智能</li>
                </ul>
                <img src="../assets/img/pro_details_5.png" alt="">
                <img src="../assets/img/pro_details_6.png" alt="">
                <img src="../assets/img/pro_details_7.png" alt="">
            </div>

        </div>
        <ul class="footer">
                <li><i class="iconfont icon-kefu"></i>客服</li>
                <li><i class="iconfont icon-shoucangjia"></i>收藏</li>
                <li @click="getCart">加入购物车</li>
                <li @click="getPay">立即购买</li>
        </ul>
    </div>
</template>

<script>
import headerNav from './pulblic/header_nav.vue';
export default {
    name:'pro_details',
    components:{
        headerNav
    },
    methods:{
        getCart(){
            this.$router.push({
                path:'/shop_cart'
            })
        },
        getPay(){
            this.$router.push({
                path:'/pay'
            })
        },
        
    },
    data(){
        return{
            onoff:false,//控制是否显示底部导航
            pro:{
                name:'鱼跃呼吸机YH-720S双水平全自动呼吸机家用医用无创打鼾止鼾器',
                salePrice:7980,
                price:14500
            },
            UserTotal:[
                {total:'服务好',num:300},
                {total:'效果不错',num:50},
                {total:'质量不错',num:50},
                {total:'便宜',num:40},
                {total:'品质不错',num:50},
                {total:'不太舒服',num:10}
            ],
            UserComment:[{
                img:'static/img/pro_details_user.png',
                user:'风***风',
                content:'晚上睡觉再也不打鼾了，晚上呼吸也正常了，工程师非常专业，也很热情，非常细致的讲解了使用方法，总之非常满意！机子是正品验证过了。'},{
                img:'static/img/pro_details_user.png',
                user:'风***风',
                content:'晚上睡觉再也不打鼾了，晚上呼吸也正常了，工程师非常专业，也很热情，非常细致的讲解了使用方法，总之非常满意！机子是正品验证过了。'}
            ]
        }
    },
    created(){
        if(this.$route.path == '/pro_details'){
            //console.log(this.$store.state.onoff);
            this.$store.commit('increment',this.onoff);
        };
    }
}
</script>

<style scoped>
    @import '../assets/css/pro_details.css'
</style>