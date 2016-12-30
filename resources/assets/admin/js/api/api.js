/**
 * 
 */


export default class {

	constructor() {
		this.vm = new Vue();

	}

	execute(data, url, callback) {
		Vue.axios.get('/', {
			firstName: 'Fred',
			lastName: 'Flintstone'
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

}