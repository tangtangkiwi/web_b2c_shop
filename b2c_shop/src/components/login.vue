<template>
    <!-- 登录页 -->
    <div class="wrap" style="background-image: url(static/img/login.png)">
        <header-nav :msg="'登陆'"></header-nav>
        <div class="content">
            <span>
                <img src="../assets/img/login_user.png" alt="">
            </span>
        
            <form>
                <ul class="list">
                    <li>
                        <span><i class="iconfont icon-yonghu1"></i></span>
                        <input type="text">
                    </li>
                    <li>
                        <span><i class="iconfont icon-suo-copy"></i></span>
                        <input type="password">
                    </li>
                </ul>
                <div class="verify">
                    <input type="text">
                    <span @click="verify">
                        <!-- <img :src="'../assets/img/register_'+1+'.png'" alt=""> -->
                        <!-- <img src="../../static/img/register_1.png" alt=""> -->
                        <img :src="str" alt="">
                    </span>
                </div>
                <div class="deal">
                    <span @click="rember">
                        <span>
                            <i class="iconfont icon-gou" v-if="onoff"></i>
                        </span>
                        <span>记住密码</span>
                    </span>
                    <span @click="register">注册</span>
                    <span>找回密码</span>
                </div>
                <div class="login-register" @click="login">登录</div>
            </form>
        </div>
    </div>
</template>

<script>
import HeaderNav from '../components/pulblic/header_nav';
export default {
    name:'login',
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
        rember(){
            this.onoff = !this.onoff;
        },
        register(){
            this.$router.push('/register');
        },
        login(){
            this.$router.push('/home');
        }
    },
    created(){
        //console.log(this.$store.state.onoff);
        this.$store.commit('increment',false);//是否显示路由
    }
}
</script>

<style scoped>

    @import '../assets/css/login.css';
</style>