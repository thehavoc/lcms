/**
 * Make API calls to save entries
 */

import Api from './api.js';

export default class extends Api {

	constructor() {
		this.apiUrls = {
		    page: 'http://lcms.int/admin/pages'
		}		
	}

    page (data, callback) {

    	GlobalEvents.$emit('errorRemoved');
    	
    	var method = 'post';
    	var url = this.apiUrls.page;

    	if(data.hasOwnProperty('id') && data.id) {
    		method = 'patch';
    		url = url + '/' + data.id;
    	}

    	super.execute(data, url, callback, method);
	}

}