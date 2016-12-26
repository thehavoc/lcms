<template>
	<component 
		:is="component"
	>
		
	</component>
</template>

<script>

	import FieldText from './FieldText.vue';

    export default {
        components: { 
            FieldText
        },
		props: [
			'component'
		]        
    }
</script>
