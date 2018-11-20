import Vue from 'vue';
import Vuxe from 'vuex';

Vue.use(Vuxe);

var store = new Vuxe.Store({
    state:{
        onoff:true,//控制底部导航
    },
    mutations:{
        increment (state,obj){
            state.onoff = obj;
        }
    }
});

export default store;