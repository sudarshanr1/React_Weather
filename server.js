var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;
app.use(function(request, response, next){
  if(request.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    response.redirect('http://' + request.hostname + request.url);
  }
});
app.use(express.static('public'));
app.listen(PORT,function(){
  console.log('Express server '+PORT+' is up');
})
