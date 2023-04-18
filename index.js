const express = require('express')
const app = express()
const port = process.env.PORT || 3200

var ip = require("ip");
console.dir ( ip.address() );

app.get('/',(req,res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})