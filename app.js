"use strict";

const express = require("express");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('LINEWORKS BOT');
});

// Botからメッセージに応答
app.post('/lineworks-bot', (req, res) => {
  console.log('>>>> LINE WORKS Bot', req.body);
  res.sendStatus(200);
});
app.listen(process.env.PORT || 3000);
