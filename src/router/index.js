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
			path: '/',
			name: 'home',
			component: resolve => require(['../views/home.vue'],resolve)
		}
	]
})
