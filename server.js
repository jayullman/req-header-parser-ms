var express = require('express');


var app = express();

// port to be compatible with heroku
var port = process.env.PORT || 8080;

app.get('*', (req, res) => {
  res.send('hello');
});


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});