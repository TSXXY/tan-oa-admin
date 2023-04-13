import {createRouter, createWebHashHistory} from "vue-router";
import Login from "@/views/Login.vue";


const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // 默认跳转到登录页面
        {
            path: "/",
            redirect: "/login",
        }, {
            path: "/login",
            name: "Login",
            component: Login,
        },
        {
            path: "/layout",
            name: "Layout",
            component: () => import("@/views/Layout.vue"),
            children: [
                {
                    path: "home",
                    name: "Home",
                    component: () => import("@/views/Home.vue"),
                },
                {
                    path: "/sysrole",
                    name: "SysRole",
                    component: () => import("@/views/system/sysRole/Index.vue"),
                    children:[
                        {
                            path: "list",
                            name: "list",
                            component: () => import("@/views/system/sysRole/List.vue"),
                        }
                    ]
                }
            ]
        }

    ],
});

export default Router;