$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
}

function submitGuesses(){
  $.ajax({
    method: 'POST',
    url: '/submit',
    data: {
      guessSet:{
        playerOne: $('#playerOneIn').val(),
        playerTwo: $('#playerTwoIn').val(),
        playerThree: $('#playerThreeIn').val(),
        playerFour: $('#playerFourIn').val() 
      }
    }
  })
  .then(function(response){
    // we may want to add the print to DOM function in here?
    // as for my tasks, I don't think there's anything for me to do here -JI
  })
  .catch(function(error){
    alert('request failed');
  });
}