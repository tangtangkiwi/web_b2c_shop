<template>
    <div>
        <ul class="list">
            <li v-for="(item,index) in arr" :key="index" @click="gethash">
                <div>
                    <h6>{{item.name}}</h6>
                    <em>{{item.type}}</em>
                </div>
                <div>
                    <img :src="item.img" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import router from '../../router/nav_bottom.js';
export default {
    name:'categories1',
    router,
    data(){
        return{
            arr:[{
                img:'static/img/pro_categories_1.png',
                name:'鱼跃呼吸机',
                type:'型号：YH-360'
            },{
                img:'static/img/pro_categories_2.png',
                name:'鱼跃呼吸机',
                type:'型号：YH-360'
            },{
                img:'static/img/pro_categories_3.png',
                name:'鱼跃呼吸机',
                type:'型号：YH-360'
            },{
                img:'static/img/pro_categories_4.png',
                name:'鱼跃呼吸机',
                type:'型号：YH-360'
            },{
                img:'static/img/pro_categories_5.png',
                name:'鱼跃呼吸机',
                type:'型号：YH-360'
            },{
                img:'static/img/pro_categories_6.png',
                name:'鱼跃呼吸机',
                type:'型号：YH-360'
            }]
        }
    },
    methods:{
        gethash(){
            this.$router.push({path:'/pro_details'});
        }
    },
}
</script>

<style scoped>
    .list{
        width: 660px;
        padding: 86px 0 700px;
        overflow: hidden;
    }
    .list li{
        float: left;
        width: 325px;
        height: 201px;
        margin-right: 10px;
        margin-bottom: 10px;
        background: #e1f7f0;
    }
    .list li:nth-of-type(2),.list li:nth-of-type(4),.list li:nth-of-type(6){
        margin-right: 0!important;
    }
    .list li div:nth-of-type(1){
        position: relative;
        float: left;
        width: 124px;
        height: 201px;
        background: #f8b449;
        text-align: center;
        color: #fff;
    }
    .list li div:nth-of-type(1):before{
        position: absolute;
        top: 18px;
        left: 40px;
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background: #e0e0e0;
    }
    .list li div h6{
        margin-top: 70px;
        font-size: 23px;
    }
    .list li div em{
        display: inline-block;
        margin-top: 20px;
        font-size: 17px;
    }
    .list li div:nth-of-type(2){
        float: left;
        height: 201px;
        width: 201px;
        text-align: center;
        line-height: 201px;
    }
    .list li div:nth-of-type(2) img{
        vertical-align: middle;
    }
</style>

