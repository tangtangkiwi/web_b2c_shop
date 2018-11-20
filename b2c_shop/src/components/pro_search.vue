<template>
    <!-- 产品搜索页 -->
    <div class="wrap">
        <div class="title">
            <i class="iconfont icon-mjiantou-copy"></i>
            <div>
                <input type="text" placeholder="输入关键字">
                <i class="iconfont icon-sousuo1"></i>
            </div>
        </div>
        <div class="content">
            <h4>
                <span v-if="dels">以下为历史记录:</span>   
                <i class="iconfont icon-shanchu" @click="del" v-if="dels"></i>
            </h4>
            <ul class="list-history" v-if="dels">
                <li v-for="(item,index) in history" :key="index">{{item.msg}}</li>
            </ul>
            <span>热门</span>
            <ul class="list">
                <li v-for="(item,index) in arr" :key="index" @click="gethash">
                    <div>
                        <span class="iconfont icon-qipao" v-if="index==0?true:false">
                            <span>新</span>
                        </span>
                        <i>{{item.name}}</i>
                        <i>{{item.type}}</i>
                    </div>
                    <div><img :src="item.img" alt=""></div>
                </li>
            </ul>
        </div>
        <div class="search">
            <div>
                <input type="text" placeholder="请说出您要说的话">
                <i class="iconfont icon-yuyin"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'pro_details',
    data(){
        return{
            onoff:true,
            history:[{msg:'最新便捷式呼吸机'},
                {msg:'便捷复苏机'},
                {msg:'便捷心电仪'},
                {msg:'便捷诊断器'},
                {msg:'便捷式呼吸机'},
                {msg:'呼吸机'}],
            arr:[{name:'鱼跃呼吸机',type:'型号: YH-360',img:'static/img/pro_search_1.png'},
                {name:'鱼跃呼吸机',type:'型号: YH-360',img:'static/img/pro_search_2.png'},
                {name:'鱼跃呼吸机',type:'型号: YH-360',img:'static/img/pro_search_3.png'},
                {name:'鱼跃呼吸机',type:'型号: YH-360',img:'static/img/pro_search_4.png'},
                {name:'鱼跃呼吸机',type:'型号: YH-360',img:'static/img/pro_search_5.png'},
                {name:'鱼跃呼吸机',type:'型号: YH-360',img:'static/img/pro_search_6.png'},],
            dels:true
        }
    },
    methods:{
        del(){
            this.dels = false;
        },
        gethash(){
            console.log(1);
            this.$router.push({path:'/pro_details'});
        }
    },
    created(){
        //console.log(this.$store.state.onoff);
        this.$store.commit('increment',this.onoff);//是否显示路由
    }
}
</script>

<style scoped>
    @import '../assets/css/pro_search.css'
</style>