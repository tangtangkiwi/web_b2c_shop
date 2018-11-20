<template>
    <!-- 注册页 -->
    <div class="wrap" style="background-image: url(static/img/register.png)">
        <header-nav :msg="'注册'"></header-nav>
    
        <div class="content">
            <span>
                <i class="iconfont icon-yonghu1"></i>
            </span>
        
            <form>
                <ul class="list">
                    <li>
                        <span>用户名:</span>
                        <input type="text">
                    </li>
                    <li>
                        <span>密码:</span>
                        <input type="password">
                    </li>
                    <li>
                        <span>再次输入</span>
                        <input type="password">
                    </li>
                </ul>
                <div class="verify">
                    <input type="text">
                    <span @click="verify">
                        <!-- <img :src="'../assets/img/register_'+num+'.png'" alt=""> -->
                        <img :src="str" alt="">
                    </span>
                </div>
                <div class="deal">
                    <span @click="deal">
                        <i class="iconfont icon-gou" v-if="onoff"></i>
                    </span>
                    <span>我已阅读并同意<em>相关协议</em></span>
                </div>
                <div class="login-register">注册</div>
                <div class="login-register" @click="login">登录</div>
            </form>
        </div>
    </div>
</template>

<script>
import HeaderNav from '../components/pulblic/header_nav';
export default {
    name:'register',
    components:{HeaderNav},
    data(){
        return{
            num:1,
            onoff:false,
            str:'static/img/register_1.png'
        }
    },
    methods:{
        verify(){
            this.str =  'static/img/register_'+ Math.floor(3*Math.random()+1) +'.png';
        },
        deal(){
            this.onoff =! this.onoff;
        },
        login(){
            this.$router.push('/login');
        }
    },
    created(){
        //console.log(this.$store.state.onoff);
        this.$store.commit('increment',false);//是否显示路由
    }
}
</script>

<style scoped>
    @import '../assets/css/register.css'
</style>