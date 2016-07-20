import React from 'react'

const display = ({text, inverted}) => {
	return (
		<div style={inverted ? {backgroundColor: 'black', color: 'white'} : {}}>
			{text}
		</div>
	)
}

export default display
