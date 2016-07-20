import React from 'react'

const button = ({text, click, inverted}) => (
    <button onClick={() => {click(inverted)}} >
        {text}
    </button>
)

export default button
