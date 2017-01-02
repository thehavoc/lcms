/*
* Helpful components and props for form elements
*/

import FormDescription from '../components/form/FormDescription.vue'
import FormLabel from '../components/form/FormLabel.vue'
import FormError from '../components/form/FormError.vue'

export var FormMixin = {
    components: {
        FormDescription,
        FormLabel,
        FormError
    },
    props: {
        value: String,
        description: String,
        label: String,
        fieldName: String
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