<template>
    <!-- 我的购物车 -->
    <div class="wrap">
        <header-nav :msg="'购物车'"></header-nav>
        <div class="content">
            <div class="header">
                <span class="check-all"></span>
                <span>全部</span>
                <span>领优惠劵</span>
            </div>
            <ul class="list">
                <li v-for="(item,index) in list" :key="index">
                    <span :class="item.onoff?'pitch pitch-in':'pitch'" @click="pitchIn(index)">
                         <i class="iconfont icon-gou" v-show="item.onoff"></i>
                    </span>
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
                        <div>
                            <i class="iconfont icon-jian" @click="sub(index)"></i>
                            <span><i class="iconfont icon-cheng1"></i>{{item.total}}</span>
                            <i class="iconfont icon-jia" @click="add(index)"></i>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="footer">
                <span :class="tatolOnoff?'pitch pitch-in':'pitch'" @click="pitchTotal">
                    <i class="iconfont icon-gou"></i>
                </span>
                <span>合计</span>
                <span>不含运费</span>
                <span>&#165;{{totalPrice}}</span>
                <span @click="gethash">结算({{toTotal}})</span>
            </div>
        </div>
    </div>
</template>

<script>
import headerNav from '../components/pulblic/header_nav1.vue';
export default {
    name:'shop_cart',
    data(){
        return{
            onoff:true,
            tatolOnoff:false,
            list:[{
                name:'鱼跃呼吸机家用YH-360正压<br>单水平半自动呼吸器睡眠止鼾机',
                color:'灰色',
                type:'YH-360',
                price:3180,
                img:'static/img/shop_cart_1.png',
                total:1,
                onoff:true},
            {name:'鱼跃呼吸机家用YH-360正压<br>单水平半自动呼吸器睡眠止鼾机',color:'灰色',type:'YH-360',price:3180,img:'static/img/shop_cart_2.png',
                total:1,onoff:false},
            {name:'鱼跃呼吸机家用YH-360正压<br>单水平半自动呼吸器睡眠止鼾机',color:'灰色',type:'YH-360',price:3180,img:'static/img/shop_cart_3.png',
                total:1,onoff:false},],
            newList:[]
        }
    },
    components:{
        headerNav
    },
    methods:{
        gethash(){
            this.$router.push('./confirm_order')
        },
        pitchIn(index){
            this.list[index].onoff = !this.list[index].onoff;
            this.newList = this.list.filter((item,num)=>{
                return item.onoff == true;
            });
            if(this.newList.length == this.list.length){
                this.tatolOnoff = true;
            }else{
                this.tatolOnoff = false;
            }
        },
        sub(index){
            if(this.list[index].total>1){
                this.list[index].total --;
            }
        },
        add(index){
            this.list[index].total ++;
        },
        pitchTotal(){
            if(this.tatolOnoff == true){
                this.tatolOnoff = false;
                this.newList = this.list.filter((item,index)=>{
                    return item.onoff = false;
                });
            }else{
                this.tatolOnoff = true;
                this.newList = this.list.filter((item,index)=>{
                    return item.onoff = true;
                });
            }
        }
    },
    computed:{
        totalPrice:function(){
            var total = 0;
             this.newList.filter((item,index)=>{
                total += item.price*item.total;
            });
             return total;
        },
        toTotal:function(){
            var total = 0;
            this.newList.filter((item,index)=>{
                total += item.total;
            });
            return total;
        }
    },
    created(){
        //console.log(this.$store.state.onoff);
        this.$store.commit('increment',this.onoff);//是否显示路由
        this.newList = this.list.filter((item,num)=>{
            return item.onoff == true;
        });
    }
}
</script>

<style scoped>
    @import '../assets/css/shop_cart.css'
</style>