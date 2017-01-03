<template>

    <ul class="list-group">
        <li class="list-group-item list-unstyled admin-page" v-for="article in articles">
            
            <a :href="article.editUrl" class="admin-page-title">{{ article.title }}</a>

            <div class="admin-actions">
                <a class="btn btn-primary btn-xs" :href="article.editUrl">
                    Edit
                </a>

            </div>
        </li>

    </ul>
    
</template>

<script>
    /*
    * This component is responsible for model listing.
    */


    export default {
        data: function() {

            return {
            }
        },

        created: function() {
        },
        methods: {
        },
        props: {
            articles: Array
        }
    }
</script>