const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req , res){
  res.sendFile(__dirname+"/index.html");

});



app.post("/", function(req, res){
  var n1 = Number(req.body.num1)
  var n2 = Number(req.body.num2)
  var result = (n1/(n2*n2))*10000


  if (result<18.5  ){
    res.send("Your BMI is = " + parseFloat(result).toFixed(1) + ". You're Underweight.");

  }
  else if (result>=18.5 && result<=24.9 ) {

    res.send("Your BMI is = " + parseFloat(result).toFixed(1) + ". You're Normal.");


  }
  else{
      res.send("Your BMI is = " + parseFloat(result).toFixed(1)+". You're Overweight");
  }


});





app.listen(7000, function(){
  console.log("server has started on the port 7000")
});
