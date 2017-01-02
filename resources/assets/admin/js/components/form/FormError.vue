<template>
	<div class="alert alert-danger" role="alert" v-if="error">
		<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
		{{ error }}
	</div>
</template>

<script>
    export default {
    	data: function() {
    		return {
    			error: ''
    		}
    	},
    	created: function() {
    		var vm = this;
    		GlobalEvents.$on('errorApplied', function(errorValue, fieldName) {
    			if(vm.name === fieldName) {
    				vm.error = errorValue;
    			}
    		});

            GlobalEvents.$on('errorRemoved', function() {
                vm.error = '';
            });
            
    	},
    	props: {
    		name
    	}
    }
</script>

<style>

	.alert-danger { margin-top: 10px; padding: 5px; }

</style>