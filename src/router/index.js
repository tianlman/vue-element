import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/test'
import test2 from '@/components/test2'

Vue.use(Router)
const routes= [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/test',
    name: 'Hello',
    component: test
  },{
    path: '/test2',
    name: 'Hello',
    component: test2
  }

]

export default new Router({
  routes
})
