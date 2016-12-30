/**
 * Make API calls to save entries
 */

import Api from './api.js';

export default class extends Api {

	constructor() {
		this.apiUrls = {
		    page: 'admin/pages'
		}		
	}

    page (data) {
    	super.execute(data);
    	alert('fix resource');

	}
}