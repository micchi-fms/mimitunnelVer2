var express = require('express');
var app=express();
var http = require('http').Server(app);
//buildディレクトリにサーバーを立てた
app.use(express.static('build'));
http.listen(process.env.PORT || 8000, function(){
 console.log('listening on *:8000');
});