/**
 * Make API calls to save entries
 */

import Api from './api.js';

export default class extends Api {

	constructor() {
		this.apiUrls = {
		    page: 'http://lcms.int/admin/pages'
		}		

        this.url = '';
        this.method = '';

	}

    page(data, callback) {

        this.beforeExecute(data, this.apiUrls.page);

    	super.execute(data, this.url, callback, this.method);
	}

    beforeExecute(data, articleBaseUrl) {

        GlobalEvents.$emit('errorRemoved');
        
        this.method = 'post';
        this.url = articleBaseUrl;

        if(data.hasOwnProperty('id') && data.id) {
            this.method = 'patch';
            this.url = this.url + '/' + data.id;
        }        

    }

}