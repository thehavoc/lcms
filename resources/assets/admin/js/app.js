/**
 * Load all JavaScript dependencies.
 */

require('./bootstrap');

/**
 * Load all main components of the admin app.
 */

 Vue.component('SavePage', require('./components/SavePage.vue'));
 Vue.component('Alert', require('./components/Alert.vue'));

/**
 * Register the main app.
 */

new Vue({
	'el': '#admin-app',
    created: function () {

	},        	

});

