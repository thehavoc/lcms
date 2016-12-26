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
	data : function () {
		return {
			'value': '',
			'label': '',
			'description': ''
		};
	}
}