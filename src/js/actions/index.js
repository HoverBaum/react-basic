
/**
 *   A redux action fired in the System.
 *   @typedef 	{Object} Action
 *   @property 	{String} type 		- The type of action.
 */

/**
 *   Set the inverted setting to true.
 *   @event		SET_INVERTED_TRUE
 *   @type		{Action}
 */

export const setInvertedTrue = () => {
	return {
		type: 'SET_INVERTED_TRUE'
	}
}

/**
 *   Set the inverted setting to false.
 *   @event		SET_INVERTED_FALSE
 *   @type		{Action}
 */

export const setInvertedFalse = () => {
	return {
		type: 'SET_INVERTED_FALSE'
	}
}

/**
 *   Set the currently displayed text.
 *   @event 	SET_TEXT
 *   @type		{Action}
 */

export const setText = (text) => {
	return {
		type: 'SET_TEXT',
		text
	}
}
