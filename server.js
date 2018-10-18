/* 'use strict';

var app = require('express')();
var bodyParser = require('body-parser')();
var cors = require('cors');
app.use(cors());
app.use(bodyParser);

app.post('/api/Auth',function(req, res){
  if(req.body.username === "" || req.body.pasword === ""){
    res.send({data:"username or password cannot be empty"});
  }
  else if(req.body.username !== 'Monika' || req.body.password !== 'monika23'){
    res.send({data:"invalid username or password"});
  }
  else{
    res.send({data:"Success"})
  }
});

app.listen(3000, function(){
  console.log('Server started!!!');
});
 */
 
 
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Khatri'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/Khatri/index.html'));
});

console.log('port===='+process.env.PORT);
console.log('dirname===='+__dirname);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);