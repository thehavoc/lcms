// Test File "Editor.spec.js"
window.Vue = require('vue/dist/vue.js');

Vue.component('Alert', require('../components/Alert.vue'));

// import Vue from 'vue'
// import SavePage from '../components/SavePage.vue'

describe('SavePage.vue', function () {
	var vm;
	var page = {
		title: 'Test title',
		content: 'Test content'
	};

	var button = 'Save';

	beforeEach(function() {
		// SavePage.page = page;
		// SavePage.button = button;

	});

	// it('page should be an object', function () {
	// 	expect(typeof SavePage.page).toBe('object');
	// })

	// it('button should be a string', function () {
	// 	expect(typeof SavePage.button).toBe('string');
	// })	

	it('setContent method should update page.content', function () {

	})		

	// it('setTitle method should update page.title', function () {
	// 	SavePage.setTitle('test');
	// 	expect(SavePage.page.title).toBe('test');
	// })		

})