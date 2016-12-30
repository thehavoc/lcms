/**
 * Load Vue JS and Vue resource.
 */

window.Vue = require('vue/dist/vue.js');

/**
 * This Vue instance will be used for communicating between components.
 */

window.GlobalEvents = new Vue();


/**
 *  Register Axios that will handle the Ajax request.
 */

var axios = require('axios');
var VueAxios = require('vue-axios');

Vue.use(VueAxios, axios);

/**
 * We'll load all main components of the admin app.
 */

 Vue.component('SavePage', require('./components/SavePage.vue'));