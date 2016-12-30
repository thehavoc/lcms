/**
 * Make API calls to save entries
 */

import Api from './api.js';

export default class extends Api {

	constructor() {
		this.apiUrls = {
		    page: 'http://lcms.int/admin/api/addpage'
		}		
	}

    page (data, callback) {
    	super.execute(data, this.apiUrls.page, callback, 'post');
	}
}