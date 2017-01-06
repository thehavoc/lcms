<template>
	<nav aria-label="Page navigation" v-if="allPages > 1">
		<ul class="pagination">

			<li>
				<a @click.prevent="changePage(prevNumber)" :href="prevNumber">
					<span  aria-hidden="true">&laquo;</span>
				</a>				
			</li>
			<li v-for="number in allPages" v-bind:class="{ active: number === currentPage }">

				<a @click.prevent="changePage(number)" :href="number" >
					{{ number }}
				</a>

			</li>
			<li>
				<a @click.prevent="changePage(nextNumber)" :href="nextNumber">
					<span  aria-hidden="true">&raquo;</span>
				</a>				
			</li>
		</ul>
	</nav>
</template>

<script>

	import ApiListing from '../../api/listing.js';

	export default {
		components: {
			ApiListing
		},
        created: function() {
        	this.api = new ApiListing();
        	this.getArticles();
        },
        data: function() {
        	return {
        		allPages: 0,
				currentPage: 1,
				api: Object
        	}
        },
        methods: {
        	apiCallback: function(response) {

        		if(response.articles && response.pages) {
	        		GlobalEvents.$emit('articlesProvided', response.articles, this.articleType);

	        		this.allPages = response.pages;
        		}
        	},
        	getArticles() {
	        	if(this.apiMethod) {
	        		this.api[this.apiMethod](this.currentPage, this.apiCallback);

	        	}        		
        	},
        	changePage(number) {
        		if(number) {
	        		this.currentPage = number;
	        		this.getArticles();
        		}
        	}
        },
		computed: {
			prevNumber: function () {
				
				if(this.currentPage > 1) {
					return this.currentPage - 1;
				}

				return 0;
			},
			nextNumber: function () {
				
				if(this.currentPage < this.allPages) {
					return this.currentPage + 1;
				}

				return 0;
			}			
		},         
        props: {
        	apiMethod: String,
        	articleType: ''
        }
	}
</script>