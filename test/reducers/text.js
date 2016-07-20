const freeze = require('deep-freeze-node')

//Import the Reducer and ActionCreator.
import textReducer from '../../src/js/reducers/text'
import { setText } from '../../src/js/actions'

module.exports = function testText(test) {

	test('Text', function(t) {

		//Test the initial value.
		const store1 = textReducer(undefined, {})
		freeze(store1)
		t.equal(store1, 'Hello React', 'Initial Value correct')

		//Test the setting of a new value.
		const secondText = 'Hello World'
		const store2 = textReducer(store1, setText(secondText))

		//Allways freeze new stores.
		freeze(store2)
		t.equal(store2, secondText, 'Can set the text')

		//All tests are done.
		t.end()

	})

}
