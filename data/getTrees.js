const R = require('ramda')
const points = require('./points.json')
const write = require('./writeCollection')

const features = R.prop('features', points)
features.filter(d => d['properties'].natural != undefined)


write(
  'trees',
  features.filter(R.pathEq(['properties', 'natural'], 'tree'))
)
.catch(console.log)