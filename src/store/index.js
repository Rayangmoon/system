import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import login from './login'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
    },

    actions: {
    },

    modules:{
        tab,login
    }
})
