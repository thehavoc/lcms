<template>
	<div class="field-text form-group">

		<form-label>{{ label }}</form-label>

    	<input type="text" v-model="fieldValue" class="form-control" />

        <form-description>{{ description }}</form-description>
    	<form-error :name="fieldName"></form-error>

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
