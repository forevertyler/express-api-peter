var express = require('express');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/posts',function(req,res){
  console.log(req.body);

})
app.listen(3000,function(){
  console.log('running on 3000...');
})
