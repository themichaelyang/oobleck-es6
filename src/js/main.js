'use strict';


window.onload = main;

function main() {
  let blurValue = 15;

  Object.freeze(GAME_STATES);

  let game = new Game(375, 667, '#game-canvas', '#game-ui');
  game.init(10);
  game.start();
}
