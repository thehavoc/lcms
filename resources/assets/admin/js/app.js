import Vue from 'vue/dist/vue.js'

import VueResource from 'vue-resource';

import SavePage from './components/SavePage.vue';
import store from './store';

Vue.use(VueResource);


Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('content');

new Vue({
	'el': '#wrapper',
	store,
	'components': { 
		SavePage
	},
    created: function () {
		console.log(store.state.count)
	},        	

});