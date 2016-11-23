var app = require('express')();

app.get('/',function(req,res){
	
	res.send('Hellooooooo');
});

app.listen(3000,function(){
	console.log("Running on port 3000");
})