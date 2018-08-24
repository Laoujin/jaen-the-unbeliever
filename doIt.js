const shell = require('shelljs');
const express = require('express');
const app = express();

app.get('/', function(request, response) {
  const ipToHack = request.query.ip;
  response.send('Start hacking ' + ipToHack);
  shell.exec('./path_to_hax0r_tools/hackem.sh');
});

app.listen(3000);
