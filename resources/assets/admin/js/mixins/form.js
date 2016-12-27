/*
* Helpful components and props for form elements
*/

import FormDescription from '../components/form/FormDescription.vue'
import FormLabel from '../components/form/FormLabel.vue'

export var FormMixin = {
    components: {
        FormDescription,
        FormLabel
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