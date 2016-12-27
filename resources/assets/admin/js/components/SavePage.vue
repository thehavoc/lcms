<template>
    <div class="form">
        <form v-on:submit="save">
            <field-text :value="page.title" @changeValue="setTitle" label="Title"></field-text>
            
            <field-textarea :value= "page.content" @changeValue="setContent" label="Content" description="This is the content of the page"></field-textarea>
            <form-button>{{ button }}</form-button>
        </form>
    </div>
    
</template>

<script>

    import FieldTextarea from './form/FieldTextarea.vue';
    import FieldText from './form/FieldText.vue';

    import { SaveMixin } from '../mixins/save.js';

    export default {
        mixins: [
            SaveMixin
        ],
        components: {
            FieldText,
            FieldTextarea
        },
        methods: {
            save: function(event) {
                event.preventDefault();

                console.log(this.page);
            },
            setContent(value) {
                this.page.content = value;
            },
            setTitle(value) {
                this.page.title = value;
            }
        },
        props: {
            button: String,
            page: Object
        }
    }
</script>
