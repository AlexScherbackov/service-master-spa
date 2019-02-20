import Vue from 'vue';
import Vuex from 'vuex';

import {navigation} from './module/navigation.js';
import {customers} from './module/customers.js';
import {blogposts} from './module/blogpost.js';
import {footerMenu} from './module/footerMenu.js';
import {contactService} from './module/contactService.js';
import {servicemasterGoverment} from './module/servicemasterGoverment.js';

Vue.use(Vuex);

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		navigation: navigation,
		customers: customers,
		blogposts: blogposts,
		footerMenu: footerMenu,
		contactService: contactService,
		servicemasterGoverment: servicemasterGoverment
	},
	state: {
		
	},
	getters:{
		services: state => {
			return state.navigation.services.subNavs;
		},
		 
	}
})