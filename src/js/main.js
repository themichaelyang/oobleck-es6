window.onload = main;

function main() {
  let game = new Game('#game-canvas');
}

class Game {
  constructor(canvasElementId) {
    this._fps = 60;

    this._canvas = document.getElementById(canvasElementId);
    this._canvas.width = 800;
    this._canvas.height = 600;

    this._context = this._canvas.getContext('2d');
  }

  start() {
    window.requestAnimationFrame(this.run);
  }

  run() {
    setTimeout(function() {
      window.requestAnimationFrame(this.run);

      // update();
      // render();

    }, 1000 / this._fps);
  }
}
