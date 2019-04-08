import Vue from "vue";
import Router from "vue-router";
import PageIndex from '@/components/page/index.vue';
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: PageIndex
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import("@/components/page/about.vue")
        },
        {
            path: '/ranking',
            name: 'ranking',
            component: () =>
                import("@/components/page/ranking.vue")
        },
        {
            path: '/privacy-policy',
            name: 'privacy-policy',
            component: () =>
                import("@/components/page/privacy-policy.vue")
        },
        {
            path: '/terms',
            name: 'terms',
            component: () =>
                import("@/components/page/terms.vue")
        },
        {
            path: '/category-list',
            name: 'category-list',
            component: () =>
                import("@/components/page/category-list.vue")
        },
        {
            path: '/category-detail',
            name: 'category-detail',
            component: () =>
                import("@/components/page/category-detail.vue")
        },
        {
            path: '/article/:id',
            name: 'article',
            component: () =>
                import("@/components/page/article.vue")
        },
        {
          path: '*',
          redirect: '/'
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})