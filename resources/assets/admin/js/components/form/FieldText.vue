<template>
	<div class="field-text form-group">
		<form-label>{{ label }}</form-label>

    	<input type="text" v-model="value" class="form-control" />

    	<form-description>{{ description }}</form-description>

    </div>
</template>

<script>

import { FormMixin } from '../../mixins/form.js';

    export default {
        mixins: [
            FormMixin
        ]
    }
</script>
