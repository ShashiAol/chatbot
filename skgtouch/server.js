var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Hello',200);
	
});
app.listen(8080,function(){console.log('Running on port 8080')});