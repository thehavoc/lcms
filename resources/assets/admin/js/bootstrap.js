/**
 * Load Vue JS and Vue resource.
 */

window.Vue = require('vue/dist/vue.js');

/**
 * This Vue instance will be used for communicating between components.
 */

window.GlobalEvents = new Vue();


/**
 *  Register Axios that will take care of the Ajax requests.
 */

var axios = require('axios');
var VueAxios = require('vue-axios');

Vue.use(VueAxios, axios);

let axiosDefaults = require('axios/lib/defaults');
axiosDefaults.headers.common['X-CSRF-Token'] = document.querySelector('#csrf-token').getAttribute('content');

/**
 * We'll load all main components of the admin app.
 */

 Vue.component('SavePage', require('./components/SavePage.vue'));