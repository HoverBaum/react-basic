import { connect } from 'react-redux'
import button from '../components/button'
import { setInvertedTrue, setInvertedFalse } from '../actions'

//Map things from the state onto properties of the component.
const mapStateToProps = (state, ownProperties) => {
	return {
		inverted: state.inverted
	}
}

//Add a function that calls a dispatch.
const mapDispatchToProps = (dispatch) => {
	return {
		click: (inverted) => {
			if(inverted) {
				dispatch(setInvertedFalse())
			} else {
				dispatch(setInvertedTrue())
			}
		}
	}
}

const visibleButtons = connect(
    mapStateToProps,
    mapDispatchToProps
)(button)

export default visibleButtons
