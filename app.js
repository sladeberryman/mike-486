const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', function (req, res) {
    res.send("Slade's first Render app - with port binding")
})

// app.listen(3000)

app.listen(port, () => {
  console.log(`MIKE app listening on port ${port}`)
})