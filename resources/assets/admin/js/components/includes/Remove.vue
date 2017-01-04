<template>

	<a class="btn btn-xs btn-remove" :href="article.destroyUrl" @click.prevent="remove">Remove</a>

</template>

<script>

	/*
	* This component allows deleting a record from a model. It requreis a property called article. The article should include destoryURL argument.
	*/

	import ApiRemove from '../../api/remove.js';

	export default {
		created: function() {
			this.api = new ApiRemove();
		},		
		methods: {
			remove: function(e) {
				var result = confirm("Are you sure?");

				if(result) {
					this.api.remove(this.article, this.article.destroyUrl, this.removeCallback);
				}

			},
			removeCallback: function(result) {
				if(result) {
					GlobalEvents.$emit('articleRemoved', this.article, this.type);
				}
			}
		},
		props: {
			article: Object,
			type: String
		}
	}
</script>