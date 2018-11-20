import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//引入底部导航的组件
import home from '../components/home.vue';
import pro_categories from '../components/pro_categories.vue';
import pro_search from '../components/pro_search.vue';
import shop_cart from '../components/shop_cart.vue';
import user from '../components/user.vue'

import pro_details from '../components/pro_details.vue';

import pay from '../components/pay.vue';
import pay_failure from '../components/pay_failure.vue';
import pay_success from '../components/pay_success.vue';

import order from '../components/order.vue';
import confirm_order from '../components/confirm_order.vue';

import register from '../components/register.vue';
import login from '../components/login.vue';

import pro_list from '../components/pro_list.vue';

import categories1 from '../components/pro_categories/categories1.vue';
import categories2 from '../components/pro_categories/categories2.vue';
import categories3 from '../components/pro_categories/categories3.vue';
import categories4 from '../components/pro_categories/categories4.vue';
import categories5 from '../components/pro_categories/categories5.vue';

const router = new VueRouter({
    routes:[{
        path:'/home',
        component:home,
        children:[{
            path:':id',
            component:pro_categories
        }]
    },{
        path:'/pro_categories',
        component:pro_categories,
        children:[{
            path:'/categories1',
            component:categories1
        },{
            path:'/categories2',
            component:categories2
        },{
            path:'/categories3',
            component:categories3
        },{
            path:'/categories4',
            component:categories4
        },{
            path:'/categories5',
            component:categories5
        },{
            path:'/',
            redirect:'/categories1'
        }]
    },{
        path:'/pro_search',
        component:pro_search
    },{
        path:'/shop_cart',
        component:shop_cart
    },{
        path:'/user',
        component:user
    },{
        path:'*',
        redirect:'/home'
    },{
        path:'/pro_details',
        component:pro_details
    },{
        path:'/pay',
        component:pay
    },{
        path:'/pay_failure',
        component:pay_failure
    },{
        path:'/pay_success',
        component:pay_success
    },{
        path:'/order',
        component:order
    },{
        path:'/confirm_order',
        component:confirm_order
    },{
        path:'/register',
        component:register
    },{
        path:'/login',
        component:login
    },{
        path:'/pro_list',
        component:pro_list
    }]
});

export default router
