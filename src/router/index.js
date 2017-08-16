import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const index = r => require.ensure([], () => r(require('@/views/index')), 'index');
const login = r => require.ensure([], () => r(require('@/views/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/components/manage')), 'manage');
const m_1 = r => require.ensure([], () => r(require('@/components/manage_c/m_1')), 'm_1');
const routes= [
  {
    path: "/login",
    name: "login",
    component: login,
  },{
    name: "index",
    path: "/",
    component: index,
    children:[
      {
        path: "/:route",
        name: "manage",
        component: manage,
        meta:"进销存储管理"
      },{
        path: "*/:id",
        name: "manage",
        component: m_1,
      }
    ]
  }];

export default new Router({
  routes
});
