<template>
    <div class="form">
        <form v-on:submit="save">
            <field-text :value.sync="page.title" label="Title"></field-text>
        	<field-text :value.sync="page.content" label="Content"></field-text>

            <form-button>{{ button }}</form-button>
        </form>
    </div>
    
</template>

<script>

    import FieldText from './form/FieldText.vue';
    import { SaveMixin } from '../mixins/save.js';

    export default {
        mixins: [
            SaveMixin
        ], 
        components: { 
            FieldText
        },
        created: function () {

		},
        methods: {
            save: function(event) {
                event.preventDefault();
                console.log(this.page);
            }
        },
        props: {
            button: String,
            page: Array
        }
    }
</script>
