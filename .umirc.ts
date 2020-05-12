import { defineConfig } from 'umi'
export default defineConfig({
  antd: {},
  dva: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: "/",
      component: "@/layouts/index.tsx",
      routes: [
        {
          path: "/",
          component: "./index.tsx",
          title:"首页",
          wrappers:[
            "@/router/privateRouter.tsx"
          ]
        },
        {
          path: "/login",
          title:"登录页",
          component: "@/pages/login.tsx"
        },
        {
          path: "/movielist",
          title:"登录页",
          component: "@/pages/movielist.tsx"
        },
        
      ]
    }
  ],
})