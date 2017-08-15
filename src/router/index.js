import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const index = r => require.ensure([], () => r(require('@/views/index')), 'index');
const login = r => require.ensure([], () => r(require('@/views/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/components/manage')), 'manage');
const manpower = r => require.ensure([], () => r(require('@/components/manpower')), 'manpower');
const finance = r => require.ensure([], () => r(require('@/components/finance')), 'finance');
const statement = r => require.ensure([], () => r(require('@/components/statement')), 'statement');
const synergy = r => require.ensure([], () => r(require('@/components/synergy')), 'synergy');
const maintenance = r => require.ensure([], () => r(require('@/components/maintenance')), 'maintenance');
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
        path: "manage/:id",
        name: "manage",
        component: m_1,
      }
      // {
      //   path: "/:id",
      //   name: "manpower",
      //   component: manage,
      //   meta:"人力资源"
      // },{
      //   path: "/:id",
      //   name: "finance",
      //   component: manage,
      //   meta:"财务管理"
      // },{
      //   path: "/:id",
      //   name: "statement",
      //   component: manage,
      //   meta:"报表中心"
      // },{
      //   path: "/:id",
      //   name: "synergy",
      //   component: manage,
      //   meta:"协同办公"
      // },{
      //   path: "/:id",
      //   name: "maintenance",
      //   component: manage,
      //   meta:"系统维护"
      // }
    ]
  }];

export default new Router({
  routes
});
