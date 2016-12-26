/**
 * 
 */

var saveApiUrls = {
    page: 'admin/pages',
}

export default {
    savePage (page) {
        this.$http.post(saveApiUrls.page).then((response) => {

        }, (response) => {

        });
    }
}