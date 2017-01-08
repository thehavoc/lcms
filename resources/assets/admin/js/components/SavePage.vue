<template>
    <div class="form">
        <form @submit.prevent="save">
            <field-text 
                :value="article.title" 
                @changeValue="setTitle" 
                fieldName="title" 
                label="Title">
            </field-text>

            <field-text 
                v-if="article.id"
                :value="article.slug" 
                @changeValue="setSlug" 
                fieldName="slug" 
                label="Slug">
            </field-text>
            
            <field-textarea 
                :value="article.content" 
                @changeValue="setContent" 
                label="Content" 
                description="This is the content of the page">
            </field-textarea>

            <field-textarea 
                :value="article.description" 
                @changeValue="setDescription" 
                label="Description" 
                description="This is the description of the page">
            </field-textarea>
            
            <form-button>{{ button }}</form-button>
        </form>
    </div>
    
</template>

<script>

    import FieldTextarea from './form/FieldTextarea.vue';
    import FieldText from './form/FieldText.vue';

    import ApiSave from '../api/save.js';

    import { SaveMixin } from '../mixins/save.js';

    export default {
        mixins: [
            SaveMixin
        ],
        components: {
            FieldText,
            FieldTextarea
        },
        created: function() {
            this.api = new ApiSave();
        },        
        methods: {
            save: function(event) {
                this.api.page(this.article, this.saveCallback);

            },
            saveCallback: function(response) {
                this.handleRequest(response);
            },
            setSlug(value) {
                this.article.slug = value;
            },            
            setDescription(value) {
                this.article.description = value;
            },            
            setContent(value) {
                this.article.content = value;
            },
            setTitle(value) {
                this.article.title = value;
            }
        },
        props: {
            article: Object
        },
        data: function() {
            return {
                messages: {
                    update: 'The page has been updated successfully.',
                    add: 'The page has been added successfully.'
                }
            }
        }
    }
</script>
