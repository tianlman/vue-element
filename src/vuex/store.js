import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _threeLevel from './modules/module_threeLevel'
Vue.use(Vuex)

//状态，也就是保存数据的地方
// 定义了应用状态的数据结构，同样可以在这里设置默认的初始状态
const state = {
  name: "数据",
  test:"",
  newslist:[],
  Matelist:[],
  routeDate:{}

}
// 调用 mutations 是唯一允许更新应用状态的地方。
const mutations = {
  a(state){
    console.log(state.name)
  },

}
// Actions 即是定义提交触发更改信息的描述，常见的例子有从服务端获取数据，在数据获取完成后会调用store.commit()来调用更改 Store 中的状态。可以在组件中使用dispatch来发出 Actions。
const actions = {
      a: ({commit}) => commit('a'),
}
// Getters 允许组件从 Store 中获取数据，譬如我们可以从 Store 中的 projectList 中筛选出已完成的项目列表
const getters = {
  getTest(){
    return state.test
  }
}
// modules 对象允许将单一的 Store 拆分为多个 Store 的同时保存在单一的状态树中。随着应用复杂度的增加，这种拆分能够更好地组织代码
// const modules = {}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    _threeLevel
  }
})
