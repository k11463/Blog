var Vue = require('vue');
var express = require('express');
var axios = require('axios');

var app = express();

Vue.use(axios);

axios.post('/test', (req, res) => {
    console.log(req);
}).catch((err) => {
    console.log(err);
})

app.listen(8080, () => {
    console.log("port:8080");
})