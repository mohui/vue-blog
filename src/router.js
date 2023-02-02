import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入学校组件

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            children: [
                {
                    path: 'school',
                    name: 'school',
                    component: () => import('./view/school/index')
                }
            ]
        }
    ]
})
export default router;