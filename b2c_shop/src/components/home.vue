<template>
    <!-- 首页 -->
    <div class="wrap">
        <div class="title">
            <i class="iconfont icon-saoyisao"></i>
            <div>
                <i class="iconfont icon-sousuo1"></i>
                <input type="text" placeholder="输入关键字">
            </div>
            <i class="iconfont icon-liuyan"></i>
        </div>
        <swiper :options="swiperOption">
            <swiper-slide><img src="../assets/img/banner-1.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/banner-2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/banner-3.jpg" alt=""></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div class="content">
            <ul class="home-nav">
                <router-link :to="'/pro_categories'+'?id='+1" tag="li">
                    <img src="../assets/img/home_list_1.png" alt="">
                    <div>呼吸机系列</div> 
                </router-link>
                <router-link :to="'/pro_categories'+'?id='+2" tag="li">
                    <img src="../assets/img/home_list_2.png" alt="">
                    <div>心电仪系列</div> 
                </router-link>
                <router-link :to="'/pro_categories'+'?id='+3" tag="li">
                    <img src="../assets/img/home_list_3.png" alt="">
                    <div>复苏机系列</div> 
                </router-link>
                <router-link :to="'/pro_categories'+'?id='+4" tag="li">
                    <img src="../assets/img/home_list_4.png" alt="">
                    <div>诊断器系列</div> 
                </router-link>
            </ul>

            <div class="total quality">
                <h2>促销精品</h2>
                <img src="../assets/img/home_promotion_show.png" alt="">
                <ul>
                    <li v-for="(item,index) in quality" @click="getpush(item.id)" :key="index">
                        <img :src="item.img" alt="">
                    </li>
                </ul>
            </div>
            <div class="total new">
                <h2>最新产品</h2>
                <ul>
                    <li v-for="(item,index) in news" @click="getpush(item.id)" :key="index">
                        <img :src="item.img" alt="">
                        <i v-if="item.id!=5?true:false"><em>&#165;</em>{{item.price}}.00</i>
                        <span v-if="item.id!=5?true:false">点击查看</span> 
                    </li>
                </ul>
            </div>
            <div class="total many"> 
                <h2>销量最多</h2>
                <img src="../assets/img/home_many_show.png" alt="">
                <ul>
                    <li v-for="(item,index) in many" :key="index" @click="getpush(item.id)">
                        <img :src="item.img" alt="">
                        <i v-if="item.id!=5?true:false"><em>&#165;</em>{{item.price}}.00</i>
                        <span v-if="item.id!=5?true:false">点击查看</span> 
                    </li>
                </ul>
            </div>
            <div class="total experience"> 
                <h2>顾客体验</h2>
                <img src="../assets/img/home_experience_show.png" alt="">
                <ul>
                    <li v-for="(item,index) in experience" :key="index" @click="getpush(item.id)">
                        <img :src="item.img" alt="">
                        <i v-if="item.id!=5?true:false"><em>&#165;</em>{{item.price}}.00</i>
                        <span v-if="item.id!=5?true:false">点击查看</span> 
                    </li>
                </ul>
            </div>

        </div>
        
    </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
    name:'home',
    components: {  
        swiper,  
        swiperSlide
    },
    data () {
        return {  
            quality:[
                {img:'static/img/home_promotion_1.png',id:1},
                {img:'static/img/home_promotion_2.png',id:2},
                {img:'static/img/home_promotion_3.png',id:3},
                {img:'static/img/home_promotion_4.png',id:4}
            ],
            news:[{
                img:'static/img/home_new_1.png',price:'665',id:1
            },{
                img:'static/img/home_new_2.png',price:'665',id:2
            },{
                img:'static/img/home_new_3.png',price:'665',id:3
            },{
                img:'static/img/home_new_4.png',price:'665',id:4
            },{
                img:'static/img/home_new_5.png',price:'665',id:5
            },{
                img:'static/img/home_new_6.png',price:'665',id:6
            },{
                img:'static/img/home_new_7.png',price:'665',id:7
            },{
                img:'static/img/home_new_8.png',price:'665',id:8
            }],
            many:[{
                img:'static/img/home_many_1.png',price:'665',id:9
            },{
                img:'static/img/home_many_2.png',price:'665',id:10
            },{
                img:'static/img/home_many_3.png',price:'665',id:11
            },{
                img:'static/img/home_many_4.png',price:'665',id:12
            },{
                img:'static/img/home_many_5.png',price:'665',id:13
            },{
                img:'static/img/home_many_6.png',price:'665',id:14
            }],
            experience:[{
                img:'static/img/home_experience_1.png',price:'665',id:15
            },{
                img:'static/img/home_experience_2.png',price:'665',id:16
            },{
                img:'static/img/home_experience_3.png',price:'665',id:17
            },{
                img:'static/img/home_experience_4.png',price:'665',id:18
            },{
                img:'static/img/home_experience_5.png',price:'665',id:19
            },{
                img:'static/img/home_experience_6.png',price:'665',id:20
            }],
            swiperOption:{
                direction:'horizontal',
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                },
                loop:true,
                autoplay:true
            },
            onoff:true
        }
    },
    created(){
        //console.log(this.$store.state.onoff);
        this.$store.commit('increment',this.onoff);//是否显示路由
    },
    methods:{
        getpush(num){
            if(num!=5){
                this.$router.push({
                    path:'/pro_details'+'?id='+num
                });
            }
        },
    }
}

</script>

<style scoped>
    @import '../assets/css/home.css';
</style>
