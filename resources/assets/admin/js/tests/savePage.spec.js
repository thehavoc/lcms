// Test File "Editor.spec.js"

var Vue = require('vue')

import SavePage from '../components/SavePage.vue';

describe('SavePage.vue', function () {

	// asserting JavaScript options
	it('should have correct message', function () {
		expect(SavePage.props.button).toBe('Hello from Component A!')
	})

})