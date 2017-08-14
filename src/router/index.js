import Vue from "vue";
import Router from "vue-router";
import index from "@/views/index";
// import test from "@/components/test";
// import manpower from "@/components/manpower";
import login from "@/views/login";
const manage = r => require.ensure([], () => r(require('@/components/manage')), 'manage');
const manpower = r => require.ensure([], () => r(require('@/components/manpower')), 'manpower');
const finance = r => require.ensure([], () => r(require('@/components/finance')), 'finance');
const statement = r => require.ensure([], () => r(require('@/components/statement')), 'statement');
const synergy = r => require.ensure([], () => r(require('@/components/synergy')), 'synergy');
const maintenance = r => require.ensure([], () => r(require('@/components/maintenance')), 'maintenance');
const m_1 = r => require.ensure([], () => r(require('@/components/manage_c/m_1')), 'm_1');
Vue.use(Router);
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
        path: "manage",
        name: "manage",
        component: manage,
      },{
        path: "manage/:a",
        name: "manage",
        component: m_1,
      },{
        path: "manpower",
        name: "manpower",
        component: manpower
      },{
        path: "finance",
        name: "finance",
        component: finance
      },{
        path: "statement",
        name: "statement",
        component: statement
      },{
        path: "synergy",
        name: "synergy",
        component: synergy
      },{
        path: "maintenance",
        name: "maintenance",
        component: maintenance
      }
    ]
  }];

export default new Router({
  routes
});
