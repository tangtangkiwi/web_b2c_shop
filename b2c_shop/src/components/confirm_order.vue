<template>
    <!-- 确认订单页 -->
    <div class="wrap">
        <header-nav :msg="'确认订单'"></header-nav>
        <div class="address">
            <div>
                <i class="iconfont icon-location"></i>
                <span>收货信息</span>
            </div>
            <div>
                <div>
                    <span>{{address.name}}</span>
                    <span>{{address.tel}}</span>
                </div>
                <div>
                    <p v-html="address.info"></p>
                    <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
                </div>
            </div>
        </div>
        <ul class="list">
            <li v-for="(item,index) in list" :key="index">
                <div class="list-img">
                    <img :src="item.img" alt="">
                </div>
                <div class="list-content">
                    <h6 v-html="item.name"></h6>
                    <em>颜色分类:{{item.color}}</em>
                    <em>型号:{{item.type}}</em>
                    <span>优惠促销</span>
                </div>
                <div class="list-price">
                    <div>&#165;{{item.price}}.00</div>
                    <span><i class="iconfont icon-cheng1"></i>1</span>
                </div>
            </li>
        </ul>
        <ul class="pitch">
            <li>
                <span>购买数量</span>
                <span>
                    <span>
                        <i class="iconfont icon-jian" @click="sub"></i>
                    </span>
                    <span>{{list[0].total}}</span>
                    <span>
                        <i class="iconfont icon-jia" @click="add"></i>
                    </span>
                </span>
            </li>
            <li>
                <span>配送方式</span>
                <span>快递 面邮<i class="iconfont icon-arrow-right-copy-copy-copy"></i></span>
            </li>
            <li>
                <span>运险费</span>
                <span>请选择<i class="iconfont icon-arrow-right-copy-copy-copy"></i></span>
            </li>
        </ul>
        <div class="footer">
            <span>共<i>{{list[0].total}}</i>件</span>
            <span>
                <span>总金额:<i>&#165;&nbsp;{{totalPrice}}.00</i></span>
            </span>
            <span @click="gethash">确认付款</span>
        </div>
    </div>
</template>

<script>
import headerNav from '../components/pulblic/header_nav1';
export default {
    name:'confirm_order',
    components:{headerNav},
    data(){
        return{
            onoff:false,
            address:{name:'刘某某',tel:'137****2061',info:'广西南宁市青秀区民族大道38-2号泰安大厦<br/>金座1010多迪网络'},
            list:[{
                name:'鱼跃呼吸机家用YH-360正压<br>单水平半自动呼吸器睡眠止鼾机',
                color:'灰色',
                type:'YH-360',
                price:3180,
                img:'static/img/shop_cart_1.png',
                total:1,
                onoff:true},],
            
        }
    },
    methods:{
        sub(){
            if(this.list[0].total>1){
                this.list[0].total--;
            }
            },
        add(){this.list[0].total++;},
        gethash(){
            this.$router.push('/pay');
        }
    },
    computed:{
        totalPrice:function(){
            return this.list[0].total*this.list[0].price;
        }
    },
    created(){
        //console.log(this.$store.state.onoff);
        this.$store.commit('increment',this.onoff);//是否显示路由
    }
}
</script>

<style scoped>
    @import '../assets/css/confirm_order.css'
</style>