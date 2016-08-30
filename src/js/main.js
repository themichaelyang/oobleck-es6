const GAME_STATES = {
  START: 'Game started',
  RUN: 'Game running',
  PAUSE: 'Game paused',
  END: 'Game ended'
}

// consider reverting to a factory pattern?
class Game { // reminder: classes aren't hoisted
  constructor(width, height, canvasElementSelector, interfaceElementSelector) {
    this._fps = 30;
    this._display = new Drawing(width, height, canvasElementSelector);
    this._width = width;
    this._height = height;

    this._interface = new Interface(width, height, interfaceElementSelector);
    this._state = GAME_STATES.START;

    this._columns;

    console.log(this);
  }

  init() {
    let label = document.createElement('div');
    this._interface.addElement('framerate', label);
    this._columns = new Columns(3, this._width, this._height);
  }

  start() {
    this.init(); // maybe separate call, or put into constructor?
    this._timing = performance.now();
    this._framesPassed = 0;

    // we use new => syntax to fix the lexical "this"
    window.requestAnimationFrame(() => {
      this._state = GAME_STATES.RUN;
      this.run();
    });
  }

  run() {
    setTimeout(() => { // improve game loop design, decouple render and update
      this.update();
      this.draw();

      window.requestAnimationFrame(() => {
        this.run();
      });

    }, 1000 / this._fps);
  }

  update() {
    // high level calls
    // doesn't execute perfectly, especially at higher fps
    if (this._timing && Math.abs(performance.now() - this._timing) > 100) {
      this._timing ? this._interface.rewriteElement('framerate', Math.round((this._framesPassed * 1000) / Math.abs(performance.now() - this._timing))) : console.log('starting');
      this._timing = performance.now();
      this._framesPassed = 0;
    }

    this._framesPassed += 1;
  }

  draw() { // draw specifically handles the game drawing
    // high level draw calls
    this._display.clear();
    this._columns.draw(this._display);
  }

  reset() {

  }

}

window.onload = main;

function main() {
  Object.freeze(GAME_STATES);

  let game = new Game(800, 600, '#game-canvas', '#game-ui');
  game.start();
}
