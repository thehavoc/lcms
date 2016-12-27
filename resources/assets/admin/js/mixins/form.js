/*
* Helpful components and props for form elements
*/

import FormLabel from '../components/form/FormLabel.vue';
import FormDescription from '../components/form/FormDescription.vue';

export var FormMixin = {
    components: { 
        FormLabel,
        FormDescription
    },
    props: {
        value: String,
        description: String,
        label: String
    },
    computed: {
        fieldValue: {
            get: function () {
                return this.value;
            },
            // setter
            set: function (newValue) {
                this.$emit('changeValue', newValue);
            }
        }
    }       
}