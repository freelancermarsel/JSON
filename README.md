MarselJSON

Req({
    
  method: "GET", - post or get method
  
  url: "http://localhost:3000/people", - url for what we are working with
  
  okFunction(data) { - function that will work if everything is ok},
  
  errFunction(error) { - a function that will work if everything is bad};

});
