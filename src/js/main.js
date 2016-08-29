class Display {
  constructor(canvasElementId, width, height) {
    this._canvas = document.getElementById(canvasElementId);
    this._context = this._canvas.getContext('2d');
  }

  drawRectangle(x, y, width, height, color) {
    this._context.fillStyle = color;
    this._context.fillRect(x, y, width, height);
  }

  clear() {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
}

const GAME_STATES = {
  START: 'Game started',
  RUN: 'Game running',
  PAUSE: 'Game paused',
  END: 'Game ended'
}

// consider reverting to a factory pattern?
class Game { // reminder: classes aren't hoisted
  constructor(canvasElementId) {
    this._fps = 30;
    this._display = new Display(canvasElementId, 800, 600);
    this.state = GAME_STATES.START;
  }

  start() {
    // error where "this" becomes improperly bound
    // when passed into requestAnimationFrame(this.run())
    // so we use new => syntax to fix the lexical "this"
    // window.requestAnimationFrame(this.run);
    window.requestAnimationFrame(() => {
      this.run();
    });
  }

  run() {
    // doesn't execute perfect ti, especially at higher fps
    // this.timing ? console.log(1000 / (performance.now() - this.timing)) : console.log('starting');
    // this.timing = performance.now();

    setTimeout(() => { // improve game loop design, decouple render and update
      window.requestAnimationFrame(() => {
        this.run();
      });

      this.update();
      this.render();

    }, 1000 / this._fps);
  }

  update() {
    // high level calls
  }

  render() {
    // high level draw calls
    this._display.clear();
  }

  reset() {

  }

}

window.onload = main;

function main() {
  let game = new Game('game-canvas');
  game.start();
  Object.freeze(GAME_STATES);
}
