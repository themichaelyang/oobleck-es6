const GAME_STATES = {
  START: 'Game started',
  RUN: 'Game running',
  PAUSE: 'Game paused',
  END: 'Game ended'
}

// consider reverting to a factory pattern?
class Game { // reminder: classes aren't hoisted
  constructor(canvasElementSelector) {
    this._fps = 30;
    this._display = new Display(800, 600, canvasElementSelector);
    this._state = GAME_STATES.START;
  }

  init() {
    this._columns = new Columns();
  }

  start() {
    // error where "this" becomes improperly bound
    // when passed into requestAnimationFrame(this.run())
    // so we use new => syntax to fix the lexical "this"
    // window.requestAnimationFrame(this.run);
    this.init();

    window.requestAnimationFrame(() => {
      this._state = GAME_STATES.RUN;
      this.run();
    });
  }

  run() {
    // doesn't execute perfect ti, especially at higher fps
    // this._timing ? console.log(1000 / (performance.now() - this.timing)) : console.log('starting');
    this._timing = performance.now();

    


    // setTimeout(() => { // improve game loop design, decouple render and update
    //   this.update();
    //   this.draw();
    //
    //   window.requestAnimationFrame(() => {
    //     this.run();
    //   });
    //
    // }, 1000 / this._fps);
  }

  update() {
    // high level calls
  }

  draw() {
    // high level draw calls
    this._display.draw();
    this._display.clear();
  }

  reset() {

  }

}

window.onload = main;

function main() {
  let game = new Game('#game-canvas');
  game.start();
  Object.freeze(GAME_STATES);
}
