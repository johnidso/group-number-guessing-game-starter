const express = require('express');
// const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));
app.use(express.json());


// GET & POST Routes go here
// listen for POST requests to /submit, these are the player guesses
app.post('/submit', (req, res) => {
  console.log('The player guesses have been submitted', req.body);
    // put req.body object into an array
    let guessSubmission = req.body.guessSet;
    // loop through guessSubmission object, check answers, push to playerAnswers array
    checkAnswers(guessSubmission);

app.post('/new', (req,res) => {
  // function to create a new random number, assign this to the response
});

  // send a response
  res.sendStatus(201);
});

// Listen for GET requests to /answers, these are the answers to the player query
app.get('/answers', (req, res) => {
  res.send(playerAnswersPackage);
  console.log('sending answers (GET)');
});


// variable to generate and store random number
let randomNumber = getRandomNum(1, 25);

// array to store playerAnswers, checked for correctness
const playerAnswers= [];

const playerAnswersPackage = { contents: []};

// Function to loop through an object, check player answers, and push to playerAnswers array
function checkAnswers(guessObject) {
    let arrayOfObjects = guessObject.contents;
    for (let player of arrayOfObjects) {
      let playerAnswer = isNumberCorrect(player.number);
      playerAnswers.push({
            name: player.name,
            number: player.number,
            answer: playerAnswer
        });
    }
    playerAnswersPackage.contents = playerAnswers;
}

// Function to generate a random number between 1 and 25
// code courtesy of Mozilla documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// Function checks if guess matches number (return: true), or does not match (return: false)
function isNumberCorrect(number) {
    if (number == randomNumber) {
      return 'correct!';
    }
    else if (number < randomNumber) {
      return 'Too low!';
    }
    else if (number > randomNumber) {
      return 'Too high!';
    }
    else {
      console.log('unable to evaluate answers');
    }
}

let playerOneArray=[];
let playerTwoArray=[];
let playerThreeArray=[];
let playerFourArray=[];

// start the server
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})


app.post('/submit', function(req, res){
  let guessSet = req.body.guessSet;
  playerOneArray.push(guessSet.playerOne.number); 
  playerTwoArray.push(guessSet.playerTwo.number); 
  playerThreeArray.push(guessSet.playerThree.number); 
  playerFourArray.push(guessSet.playerFour.number);  
}); // keep in mind that these will be ending up as strings

