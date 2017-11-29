'use strict';

let currentPlayer = 1;
let X = 'X';
let O = 'O';

function switchPlayer() {
  currentPlayer === 1 ? currentPlayer = 0 : currentPlayer = 1;
}

function checkWhoWon() {
  if ($('#1').find('h1').text() === X && $('#2').find('h1').text() === X && $('#3').find('h1').text() === X) {
    declareWinner(X);
  }
  if ($('#4').find('h1').text() === X && $('#5').find('h1').text() === X && $('#6').find('h1').text() === X) {
    declareWinner(X);
  }
  if ($('#7').find('h1').text() === X && $('#8').find('h1').text() === X && $('#9').find('h1').text() === X) {
    declareWinner(X);
  }
  if ($('#1').find('h1').text() === X && $('#4').find('h1').text() === X && $('#7').find('h1').text() === X) {
    declareWinner(X);
  }
  if ($('#2').find('h1').text() === X && $('#5').find('h1').text() === X && $('#8').find('h1').text() === X) {
    declareWinner(X);
  }
  if ($('#3').find('h1').text() === X && $('#6').find('h1').text() === X && $('#9').find('h1').text() === X) {
    declareWinner(X);
  }
  if ($('#1').find('h1').text() === X && $('#5').find('h1').text() === X && $('#9').find('h1').text() === X) {
    declareWinner(X);
  }
  if ($('#3').find('h1').text() === X && $('#5').find('h1').text() === X && $('#7').find('h1').text() === X) {
    declareWinner(X);
  }
  if ($('#1').find('h1').text() === O && $('#2').find('h1').text() === O && $('#3').find('h1').text() === O) {
    declareWinner(O);
  }
  if ($('#4').find('h1').text() === O && $('#5').find('h1').text() === O && $('#6').find('h1').text() === O) {
    declareWinner(O);
  }
  if ($('#7').find('h1').text() === O && $('#8').find('h1').text() === O && $('#9').find('h1').text() === O) {
    declareWinner(O);
  }
  if ($('#1').find('h1').text() === O && $('#4').find('h1').text() === O && $('#7').find('h1').text() === O) {
    declareWinner(O);
  }
  if ($('#2').find('h1').text() === O && $('#5').find('h1').text() === O && $('#8').find('h1').text() === O) {
    declareWinner(O);
  }
  if ($('#3').find('h1').text() === O && $('#6').find('h1').text() === O && $('#9').find('h1').text() === O) {
    declareWinner(O);
  }
  if ($('#1').find('h1').text() === O && $('#5').find('h1').text() === O && $('#9').find('h1').text() === O) {
    declareWinner(O);
  }
  if ($('#3').find('h1').text() === O && $('#5').find('h1').text() === O && $('#7').find('h1').text() === O) {
    declareWinner(O);
  }
  else if ($('#1').find('h1').text() !== '' && $('#2').find('h1').text() !== '' && $('#3').find('h1').text() !== ''
  && $('#4').find('h1').text() !== '' && $('#5').find('h1').text() !== '' && $('#6').find('h1').text() !== ''
  && $('#7').find('h1').text() !== '' && $('#8').find('h1').text() !== '' && $('#9').find('h1').text() !== '') {
    declareTieGame();
  }
}

function declareWinner(letter) {
  $('#who-won').append(`${letter} Wins!`);
}

function declareTieGame() {
  if ($('#who-won').text() === '') {
    $('#who-won').append('Cat\'s game! (Tie)');
  }
}

function resetBoard() {
  currentPlayer = 1;
  $('#1').find('h1').text('');
  $('#2').find('h1').text('');
  $('#3').find('h1').text('');
  $('#4').find('h1').text('');
  $('#5').find('h1').text('');
  $('#6').find('h1').text('');
  $('#7').find('h1').text('');
  $('#8').find('h1').text('');
  $('#9').find('h1').text('');
  $('#who-won').text('');
}

$(document).ready(function(){  
  $('#grid').on('click', '.grid-element', function(){
    if (currentPlayer === 1) {
      $(this).append('<h1>X</h1>');        
    } else {
      $(this).append('<h1>O</h1>');
    }
    checkWhoWon();
    switchPlayer();
  });
  $('.new-game').click(function(){
    resetBoard();
  });  
});