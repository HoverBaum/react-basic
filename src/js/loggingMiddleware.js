/*
	Logging middleware for Redux as suggested by the official documentation.
	http://redux.js.org/docs/advanced/Middleware.html
 */

export const logger = store => next => action => {
    console.log('dispatching\n', action)
    let result = next(action)
    console.log('next state\n', store.getState())
    return result
}

export const crashReporter = store => next => action => {
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err)
        Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        })
        throw err
    }
}
