<template>
    <ul class="list-group admin-group">
        <li class="list-group-item list-unstyled admin-page" v-for="article in listing">
            
            <a :href="article.editUrl" class="admin-page-title">{{ article.title }}</a>

            <div class="admin-actions">
                <a class="btn btn-primary btn-xs" :href="article.editUrl">Edit</a>
                <remove type="page" :article="article"></remove>
            </div>
        </li>

    </ul>
</template>

<script>
    /*
    * This component is responsible for showing pages.
    */

    import Remove from './includes/Remove.vue';

    import { ListingMixin } from '../mixins/listing.js';

    export default {
        mixins: [
            ListingMixin
        ],        
        components: {
            Remove
        },
        data: function() {

            return {
                removeMessage: 'The page has been removed.',
                type: 'page',
                listing: Array
            }
        },

        created: function() {
        },
        methods: {
        },
        props: {
            articles: Array
        },
        created: function() {
            
        }
    }
</script>