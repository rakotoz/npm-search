var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var https = require('https');

app.use('/build', express.static(__dirname + '/build'));
app.use('/modules', express.static(__dirname + '/node_modules'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/app', express.static(__dirname + '/app'));
app.use(bodyParser.json());

var sendRequest = (url, callback) => {
    var options = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    https.get(url, options, (res) => {
        res.on('data', (d) => {
            callback(d);
        });

    }).on('error', (e) => {
        console.error(e);
    });

}

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/detail/*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/package/:query', function (req, res) {
    var url = `https://registry.npmjs.org/-/v1/search?text=${req.params.query}&size=5`;
    sendRequest(url, (response) => {
        res.send(response)
        // if (!JSON.parse(body).length) {
        //     res.json(JSON.parse(body))
        // } else {
        // }
    })
});

app.listen(3030, function () {
    console.log('Example app listening on port 3000!');
});
