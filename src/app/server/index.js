let mockSelic = require('./mockselic.json')

module.exports = () => ({
  "historicotaxasjuros": mockSelic
})

//npx json-server --watch src/app/server/index.js --port 3000
