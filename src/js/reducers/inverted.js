const invertedReducer = (state = false, action) => {
	if(action.type === 'SET_INVERTED_TRUE') {
		return true
	} else if(action.type === 'SET_INVERTED_FALSE') {
		return false
	} else {
		return state
	}
}

export default invertedReducer
