<template>
    <div class="title">
        <i class="iconfont icon-mjiantou-copy" @click="goback"></i>
        <span>{{msg}}</span>
        <i class="iconfont icon-shuaxin"></i>
    </div>    
</template>

<script>
export default {
    name:'header_nav',
    methods:{
        goback(){
            this.$router.go(-1);
        }
    },
    props:['msg']
}
</script>

<style scoped>
.title{
    position: relative;
    display: flex;
    align-items: center;
    width: 720px;
    height: 96px;
    font-size: 35px;
    background: #ade0cf;
}
.title span{
    display: inline-block;
    margin: 0 auto;
}
.title .icon-mjiantou-copy{
    position: absolute;
    left: 30px;
    font-size: 40px;
    color: #00ab72;
}
.title .icon-shuaxin{
    position: absolute;
    right: 30px;
    font-size: 40px;
    color: #00ab72;
}
</style>


