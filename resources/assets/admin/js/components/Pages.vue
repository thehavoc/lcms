<template>

    <div>
        <div class="panel">
            <a href="http://lcms.int/admin/pages/create" class="btn btn-default">Add page</a>
        </div>
        <ul class="list-group admin-group">
            <li class="list-group-item list-unstyled admin-page" v-for="article in listing">
                
                <a :href="article.editUrl" class="admin-page-title">{{ article.title }}</a>

                <div class="admin-actions">
                    <a class="btn btn-primary btn-xs" :href="article.editUrl">Edit</a>
                    <remove type="page" :article="article"></remove>
                </div>
            </li>

        </ul>

        <pagination apiMethod="getPages" :articleType="this.type"></pagination>
    </div>

</template>

<script>
    /*
    * This component is responsible for showing pages.
    */

    import Remove from './includes/Remove.vue';
    import Pagination from './includes/Pagination.vue';

    import { ListingMixin } from '../mixins/listing.js';

    export default {
        mixins: [
            ListingMixin
        ],        
        components: {
            Remove,
            Pagination
        },
        data: function() {

            return {
                removeMessage: 'The page has been removed.',
                type: 'page'                
            }
        },

        created: function() {
                        
        },
        methods: {
        }
    }
</script>