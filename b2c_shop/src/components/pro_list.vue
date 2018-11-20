<template>
    <!-- 产品列表页 -->
    <div class="wrap">
        <header-nav :msg="'商品列表'"></header-nav>
        <div class="content">
            <div class="header">
                <div>
                    <input type="text" placeholder="输入关键字">
                </div>
                <i class="iconfont icon-fangdajing"></i>
            </div>
            <ul class="list">
                <li v-for="(item,index) in list" :key="index" @click="change(index)" :class="(index==listnum)?'list-lis-active':''">{{item.content}}<i class="iconfont icon-iconfont-sort-big"></i></li>
            </ul>
            <ul class="list-show">
                <li v-for="(item,index) in listShow" :key="index" :class="index%2==0?'list-show-li':''" @click="gethash">
                    <div>
                        <img :src="item.img" alt="">
                    </div>
                    <div>
                        <em>&#165;{{item.price}}.00</em>
                        <i class="iconfont icon-gouwuche"></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import headerNav from '../components/pulblic/header_nav';
export default {
    name:'pro_list',
    components:{
        headerNav
    },
    data(){
        return{
            onoff:false,
            list:[{content:'按时间'},
            {content:'按价格'},
            {content:'按销量'},
            {content:'按便捷'},],
            listnum:0,
            listShow:[{img:'static/img/pro_list_1.png',price:799},
                {img:'static/img/pro_list_2.png',price:799},
                {img:'static/img/pro_list_3.png',price:799},
                {img:'static/img/pro_list_4.png',price:799},
                {img:'static/img/pro_list_5.png',price:799},
                {img:'static/img/pro_list_6.png',price:799},]
        }
    },
    methods:{
        change(num){
            this.listnum = num;
        },
        gethash(){
            this.$router.push('/pro_details');
        }
    },
    created(){
        //console.log(this.$store.state.onoff);
        this.$store.commit('increment',this.onoff);//是否显示路由
    }
}
</script>

<style scoped>
    @import '../assets/css/pro_list.css';

    
      #mycon
{
	font-weight: bold;
	font-size: 50px;
	
	
	-webkit-transform: rotateY(180deg); /* Safari and Chrome */
}
 

</style>