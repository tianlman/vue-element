import Vue from 'vue'
import Vuex from 'vuex'

const state = {
}
// 调用 mutations 是唯一允许更新应用状态的地方。
const mutations = {

}
// Actions 即是定义提交触发更改信息的描述，常见的例子有从服务端获取数据，在数据获取完成后会调用store.commit()来调用更改 Store 中的状态。可以在组件中使用dispatch来发出 Actions。
const actions = {

}
// Getters 允许组件从 Store 中获取数据，譬如我们可以从 Store 中的 projectList 中筛选出已完成的项目列表
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}
