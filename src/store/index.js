import Vue from 'vue'
import Vuex from 'vuex'
import banner from './banner'
import about from './about'
import project from './project'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        banner,
        about,
        project,
    },
    strict: true, // 开启严格模式后，只允许通过mutation改变状态
})

export default store;