import Vue from 'vue'
import Vuex from 'vuex'

const state = {
  Carname: "123",
}
// 调用 mutations 是唯一允许更新应用状态的地方。
const mutations = {
  b(state,msg){//更新Carname
    state.Carname = msg ? msg : state.Carname;
  },

}
// Actions 即是定义提交触发更改信息的描述，常见的例子有从服务端获取数据，在数据获取完成后会调用store.commit()来调用更改 Store 中的状态。可以在组件中使用dispatch来发出 Actions。
const actions = {
  b: ({commit,state},msg) => commit('b',msg)
}
// Getters 允许组件从 Store 中获取数据，譬如我们可以从 Store 中的 projectList 中筛选出已完成的项目列表
const getters = {
  getCarname(){
    return state.Carname
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}