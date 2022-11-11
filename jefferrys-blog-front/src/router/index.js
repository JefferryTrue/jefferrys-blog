import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'home',
    name:'MainPage',
    component:MainView,
    children:[
      {
        path:'/home',
        name:'home',
        component:Home
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/cmsmanager',
    name:'cmsmanager',
    redirect:'/cmsmanager/index',
    component:()=>import('../views/CMS/components/index.vue'),
    children:[
      {
        path:'/cmsmanager/index',
        name:'cmshome',
        component:()=>{
          return import('../views/CMS/components/Cms_Home.vue');
        }
      },
      {
        path:'/cmsmanager/blogmanager',
        name:'blogManager',
        component:()=>{
          return import('../views/CMS/components/Blog_Manager.vue');
        }
      },
      {
        path:'/cmsmanager/addblog',
        name:'addBlog',
        component:()=>{
          return import('../views/CMS/components/Add_Blog.vue');
        }
      },
      {
        path:'/cmsmanager/editblog',
        name:'editBlog',
        component:()=>{
          return import('../views/CMS/components/Edit_Blog.vue');
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
