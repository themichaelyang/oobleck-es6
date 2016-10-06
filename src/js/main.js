'use strict';

// const COLORS = {
//   COLUMN_COLOR: 'rgb(188, 233, 217)',
//   BACKGROUND_COLOR: 'rgb(236, 242, 240)'
// }
const COLORS = {
  COLUMN_COLOR: 'rgb(188, 240, 227)',
  BACKGROUND_COLOR: 'rgb(245, 245, 245)'
}
// const COLORS = {
//   COLUMN_COLOR: 'rgb(139, 226, 249)',
//   BACKGROUND_COLOR: 'rgb(239, 250, 246)'
// }

window.onload = main;

function main() {
  Object.freeze(GAME_STATES);

  document.body.style.backgroundColor = COLORS.BACKGROUND_COLOR;

  let game = new Game(375, 667, '#game-canvas', '#game-ui');
  game._display.getCanvas().style = '-webkit-filter: url("#oobleck-filter");filter: url("#oobleck-filter")';

  game.init(10);
  game.start();
}
