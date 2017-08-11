import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/test'
import test2 from '@/components/test2'
import login from '@/views/login'

Vue.use(Router)
const routes= [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },{
    path: '/test2',
    name: 'test2',
    component: test2
  }
  ,{
    path: '/login',
    name: 'login',
    component: login
  }

]

export default new Router({
  routes
});
