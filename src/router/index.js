import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		{
			path: '/',
			name: 'login',
			component: resolve => require(['../views/login.vue'],resolve)
		},
		{
			path: '/home',
			name: 'home',
			component: resolve => require(['../views/home.vue'],resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['../views/register.vue'],resolve)
    }
	]
})
