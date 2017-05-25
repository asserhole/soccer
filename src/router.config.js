import Vue from 'vue'
import Router from 'vue-router'


import Home from './components/Home.vue'
import Find from './components/Find.vue'
import Mine from './components/Mine.vue'

Vue.use(Router);

export default new Router({
	routes: [
		{path: '/home', component: Home},
		{path: '/find', component: Find},
		{path: '/mine', component: Mine},
		{path: '/*', redirect: '/home'}
	]
})