var express = require('express');
var path = require('path');
const app = express();

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

module.exports = app;
