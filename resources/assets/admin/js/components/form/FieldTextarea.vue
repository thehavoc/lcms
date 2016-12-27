<template>
	<div class="field-textarea form-group">
		<form-label>{{ label }}</form-label>

    	<textarea v-model="fieldValue" class="form-control"></textarea>

    	<form-description>{{ description }}</form-description>

    </div>
</template>

<script>

import { FormMixin } from '../../mixins/form.js';

    export default {
        mixins: [
            FormMixin
        ],
        created: function() {

        }   
    }
</script>
