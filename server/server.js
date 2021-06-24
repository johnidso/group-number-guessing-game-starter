const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here

let playerOneArray=[];
let playerTwoArray=[];
let playerThreeArray=[];
let playerFourArray=[];

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

app.post('/submit', function(req, res){
  let guessSet = req.body.guessSet;
  playerOneArray.push(guessSet.playerOne); 
  playerTwoArray.push(guessSet.playerTwo); 
  playerThreeArray.push(guessSet.playerThree); 
  playerFourArray.push(guessSet.playerFour);  
}); // keep in mind that these will be ending up as strings