const express = require("express")
const app = express()

app.use(express.static("./client"))

app.listen(4300, function () {
  console.log('app listening on port 4300')
})