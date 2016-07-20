const textReducer = (state = 'Hello React', action) => {
	if(action.type === 'SET_TEXT') {
		return action.text
	} else {
		return state
	}
}

export default textReducer
