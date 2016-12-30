/**
 * This is a class that will handle the Ajax requests related to the admin panel.
 */


export default class {

	/**
	 * Send a request to a given URL. 
	 * 
	 * If the request is successfull, a callback function will be execuded. 
	 * Otherwise an error will be thrown.
	 */
	execute(data, url, callback, method = 'get') {

		Vue.axios({
			method: method,
			url: url,
			data: data,
		})
		.then(function (respond) {
			callback(respond);
		})
		.catch(function (error) {
			console.log(error);
			alert('Something went wrong!');
		});	

		
	}

}