import indexPage from '../components/pages/indexPage.vue';
import aboutUs from '../components/pages/aboutUs.vue';

export const routes = [
	{
		path: '/',
		name: 'home',
		component: indexPage	
	},
	{
		path: '/about-us',
		name: 'aboutUs',
		component: aboutUs	
	}
]

