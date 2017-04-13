
const http = require('http');
const o = require('os');
const express = require('express');
const app = express()

console.log(o.platform());

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})