'use strict';

window.onload = main;

function main() {
  Object.freeze(GAME_STATES);

  let game = new Game(375, 667, '#game-canvas', '#game-ui');
  game.start();
}
