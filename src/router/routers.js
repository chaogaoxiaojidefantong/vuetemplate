let routes=[
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/login/login.vue')
    },
    {
        path:'/clientMain',
        name:'clientMain',
        component:()=>import('@/views/client/clientMain.vue'),
        children:[
            
        ]
    },
    {
        path:'/regist',
        name:'regist',
        component:()=>import('@/views/regist/regist.vue')
    },
    {
        path:"/findPwd",
        name:"findpwd",
        component:()=>import('@/views/login/findpwd.vue'),           
    },

];
export default routes;