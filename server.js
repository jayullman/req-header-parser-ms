var express = require('express');
var app = express();

function matchSoftware(str) {
  let subString = str.match(/\(([^)]+)\)/);
  return subString;
}

// port to be compatible with heroku
var port = process.env.PORT || 8080;

app.get('*', (req, res) => {
  var software = matchSoftware(req.headers['user-agent']);
  // remove first and last parentheses
  software = software[0].slice(1, software[0].length-1);

  // get ipaddress of client request
  var ipaddress = req.ip;

  // get language of client request
  var language = req.headers['accept-language'].slice(0, 5);

  // create object to send as response
  const responseObj = {
    ipaddress,
    language,
    software
  }

  //send response
  res.send(responseObj);

});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
