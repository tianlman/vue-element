import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello";
import test from "@/components/test";
import test2 from "@/components/test2";
import login from "@/views/login";
import left from "@/views/left";

Vue.use(Router);
const routes = [{
    path: "/",
    name: "Hello",
    component: Hello
  },{
    path: "/test",
    name: "test",
    component: test
  },{
    path: "/test2",
    name: "test2",
    component: test2
  },{
    path: "/login",
    name: "login",
    component: login
  },{
    path: "/left",
    name: "left",
    component: left
  }];

export default new Router({
  routes
});
