$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submitButton').on("click", submitGuesses());
  $('#submitButton').on("click", clearInputs());
}

function clearInputs(){
  $('#playerOneIn').val('');
  $('#playerTwoIn').val('');
  $('#playerThreeIn').val('');
  $('#playerFourIn').val('');
}

function submitGuesses(){
  $.ajax({
    method: 'POST',
    url: '/submit',
    data: {
      guessSet: {[
        {name: 'playerOne', number: $('#playerOneIn').val()},
        {name: 'playerTwo', number: $('#playerTwoIn').val()},
        {name: 'playerThree', number: $('#playerThreeIn').val()},
        {name: 'playerFour', number: $('#playerFourIn').val()} 
      ]}
    } 
  })
  .then(function(response){
   console.log('The guess responses are', response)
   //append the guesses to the DOM
   renderGuesses(response);
  })
  .catch(function(error){
    alert('request failed');
  });
}
//wondering the best way to break this down for each player
function renderGuesses(guessSet){
  //turn into an array
  console.log(guessSet);

  for (player in playerAnswers){
    let playOneHistory =[];
    let playerTwoHistory =[];
    let playerThreeHistory =[];
    let playerFourHistory = [];
    if(player.name = playerOne){
      playerOneHistory.push(player.number, playerAnswer)
    }else if(player.name = playerTwo){
      playerTwoHistory.push(player.number)
    }else if(player.name = playerThree){
      playerThreeHistory.push(player.name, playerAnswer)
    }else if(player.name = playerFour){
      playerFourHistory.push(player.name, playerAnswer)
    }else console.log('error')

    
  }
  return $('div').append(`
  <div>playerOneHistory</div>
  <div>playerTwoHistory</div>
  <div>playerThreeHistory</div>
  <div>playerFourHistory</div>`);
};
 