/**
 * Load Vue JS and Vue resource.
 */

window.Vue = require('vue/dist/vue.js');
require('vue-resource');

/**
 * This Vue instance will be used for communicating between components.
 */

window.GlobalEvents = new Vue();


/**
 * Register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);

    next();
});


/**
 * We'll load all main components of the admin app.
 */

 Vue.component('SavePage', require('./components/SavePage.vue'));

/**
 * Register the main app.
 */

new Vue({
	'el': '#admin-app',
    created: function () {

	},        	

});

