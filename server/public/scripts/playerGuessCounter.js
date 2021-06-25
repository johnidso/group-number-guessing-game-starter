let count = 0;

function playerGuessCount() {
    count += 1;
    $('#totalGuesses').append('${count}');
}
