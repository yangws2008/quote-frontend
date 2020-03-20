const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Vincent from Appsody!");
});
 
module.exports.app = app;
