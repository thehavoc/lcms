/*
 * Helpful components and props for Listing components
 */

export var ListingMixin = {
    data: function() {

        return {
            listing: Array
        }
    },
    created: function() {
        var vm = this;
        
        this.listing = this.articles;

        GlobalEvents.$on('articleRemoved', function(article, type) {
            if(type === vm.type) {

                vm.listing.splice(vm.listing.indexOf(article), 1);

                GlobalEvents.$emit('setAlertMessage', vm.removeMessage, 'info');
            }
        });


        GlobalEvents.$on('articlesProvided', function(articles, type) {
            if(type === vm.type && articles) {
                vm.listing = articles;
            }
        });        
    }
}

