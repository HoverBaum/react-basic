/*
	Entry point for our application.
 */

import React from 'react'
import { render } from 'react-dom'
import Button from './containers/visibleButton'
import Display from './containers/visibleDisplay'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { logger, crashReporter } from './loggingMiddleware'

const store = createStore(reducers, applyMiddleware(logger, crashReporter))

render (
	<Provider store={store}>
		<div>
			<Display />
			<Button text="Invert" />
		</div>
	</Provider>,
	document.querySelector('#app')
)
