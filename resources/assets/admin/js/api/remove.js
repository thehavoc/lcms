/**
 * Make API calls to remove entries
 */

import Api from './api.js';

export default class extends Api {

    remove(data, url, callback) {
        super.execute(data, url, callback, 'delete');
    }
}