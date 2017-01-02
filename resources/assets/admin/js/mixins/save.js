/*
 * Helpful components and props for Save components
 */

import FormButton from '../components/form/FormButton.vue';

export var SaveMixin = {
    components: {
		FormButton    	
    },
    data: function() {
        return {
            api: Object,
            button: 'Add'
        }
    },
    methods: {
        handleRequest: function(response) {

            if(response === parseInt(response)) {

                if(this.article.id === response) {
                    GlobalEvents.$emit('setAlertMessage', this.messages.update, 'info');
                    return;

                }

                this.article.id = response;
                this.button = 'Update';
                GlobalEvents.$emit('setAlertMessage', this.messages.add, 'info');
                return;
            }


            this.applyErrors(response.data);

        },
        applyErrors: function(data) {

            if(!data) {
                return;
            }
            
            for(let x in data) {
                GlobalEvents.$emit('errorApplied', data[x][0] , x);    
            }
        }
    }
}

