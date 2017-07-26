'use strict';

var radioButtons = document.querySelectorAll('input');
var panelButton = document.querySelector('.panel__button');
var panel = document.querySelector('.panel');
var gameContainer = document.querySelector('.game__container');
var resetButton = document.querySelector('.new_game_reset');
var squares = document.querySelectorAll('.square');

radioButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        choose(this.value);
        panelButton.disabled = false;
    });
});

//play button
panelButton.addEventListener('click', function () {
    panel.classList.remove('do_display');
    panel.classList.add('dont_display');
    gameContainer.classList.remove('dont_display');
    gameContainer.classList.add('do_display');

    panelButton.disabled = true;
    //reset radio button
    radioButtons.forEach(function (button) {
        button.checked = false;
    });

});

resetButton.addEventListener('click', function () {
    panel.classList.remove('dont_display');
    panel.classList.add('do_display');
    gameContainer.classList.remove('do_display');
    gameContainer.classList.add('dont_display');
});

squares.forEach(function (square) {
    square.addEventListener('click', function () {

    });
})