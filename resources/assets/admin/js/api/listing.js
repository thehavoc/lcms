/**
 * Make API calls to get entries
 */

import Api from './api.js';

export default class extends Api {

	constructor() {
		this.apiUrls = {
		    pages: 'http://lcms.int/admin/api/getPages'
		}
	}

    getPages(offest = 0, callback) {

        super.execute('', this.apiUrls.pages + '?offset=' + offest, callback, 'get');
    }

}