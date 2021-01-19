var INITIAL = 1;
var GAME_PLAYING = 2;
var GAME_OVER = 3;

function FlappyMonster(canvas) {
 // Base
  var game = this;

  //Global Attributes
  game.canvas = canvas;
  game.context = game.canvas.getContext('2d');

  // Game State
  game.currentState = INITIAL;


}
