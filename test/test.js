const test = require('tape')

require('./reducers/text')(test)

require('./reducers/inverted')(test)
