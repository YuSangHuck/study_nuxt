const express = require('express')
const app = express()

app.get('/*', (req, res) => {
  console.log(req.headers)
  console.log(req.header)

  res.send()
})

app.listen(9090, () => `server is running at 9090`)
