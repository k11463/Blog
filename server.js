var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.post('/test', (req, res) => {
    console.log(req);
})

app.listen(8080, () => {
    console.log("port:8080");
})