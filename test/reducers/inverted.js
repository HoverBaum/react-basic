const freeze = require('deep-freeze-node')
import invertedReducer from '../../src/js/reducers/inverted'
import { setInvertedTrue, setInvertedFalse } from '../../src/js/actions'

module.exports = function testInverted(test) {

	test('Inverted', function(t) {

		const store1 = invertedReducer(undefined, {})
		freeze(store1)
		t.equal(store1, false, 'Correct initial value')

		const store2 = invertedReducer(store1, setInvertedTrue())
		freeze(store2)
		t.equal(store2, true, 'Can be set to true')

		const store3 = invertedReducer(store2, setInvertedFalse())
		freeze(store3)
		t.equal(store3, false, 'Can be set to false')

		t.end()

	})

}
