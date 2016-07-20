import { connect } from 'react-redux'
import display from '../components/textDisplay'

const mapStateToProps = (state, ownProperties) => {
	return {
		inverted: state.inverted,
		text: state.text
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

const visibleDisplay = connect(
    mapStateToProps,
    mapDispatchToProps
)(display)

export default visibleDisplay
