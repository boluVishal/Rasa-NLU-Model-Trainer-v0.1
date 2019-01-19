const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index', {
        Result: null,
        error: null
    });
})

app.post('/', function (req, res) {
    let jsonData = req.body.trainingData;
    request({
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        url: 'http://localhost:5000/train?project=apiTrained_Model',
        body: jsonData
    }, function (err, response, body) {
        if (err) {
            res.render('index', {
                Result: null,
                error: `Error, please try again : ${err}`
            });
        } else {
            let trainingData= JSON.parse(body);
            if (trainingData == undefined || trainingData.info == null) {
                res.render('index', {
                    Result: null,
                    error: `Error, please try again : ${JSON.stringify(trainingData)}`
                });
            } else {
                let message= `Model Trained Successfully  : ${JSON.stringify(trainingData)}`;
                res.render('index', {
                    Result: message,
                    error: null
                });
            }
        }
    })
    city = "";
})

app.listen(3000, function () {
    console.log('Rasa NLU Model Trainer is listening on port 3000!')
})