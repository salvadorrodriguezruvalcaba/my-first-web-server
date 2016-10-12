const express = require('express');

const app = express();

app.get('/:message', function(request, response, next){
  // const message = request.params.message;
  // console.log(message);
  const {message} = request.params;

  return response.json(message);

});

// Set our port to server the application on
const port = 3000;

// Tell our instance of express to listen to request made on our port
app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
});
