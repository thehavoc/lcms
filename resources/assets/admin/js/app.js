window._ = require('lodash');

window.Vue = require('vue/dist/vue.js');

require('vue-resource');

// import store from './store';

Vue.component('SavePage', require('./components/SavePage.vue'));

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('content');

new Vue({
	'el': '#wrapper',
	// store,
    created: function () {
	},        	

});