const GAME_STATES = {
  START: 'Game started',
  RUN: 'Game running',
  PAUSE: 'Game paused',
  END: 'Game ended'
}

// consider reverting to a factory pattern?
class Game { // reminder: classes aren't hoisted
  constructor(width, height, canvasElementSelector, interfaceElementSelector) {
    // this._fps = 60; // runs slightly slower than 60fps when using setTimeout
    this._display = new Drawing(width, height, canvasElementSelector);
    this._width = width;
    this._height = height;

    this._interface = new Interface(width, height, interfaceElementSelector);
    this._state = GAME_STATES.START;

    this._columns;

    console.log(this);
  }

  _run() {
    // setTimeout causes a slowdown of the requestAnimationFrame
    // determine fps, instead of throttling, unless for testing purposes
      this._update();
      this._draw();

    // setTimeout(() => { // improve game loop design, decouple render and update
      window.requestAnimationFrame(() => {
        this._run();
      });
    // }, 1000 / this._fps);
  }

  _update() {
    // high level calls
    // doesn't execute perfectly, especially at higher fps
    this._updateTiming();
    this._columns.update();
    // for ()
  }

  _updateTiming() {
    if (this._timing && Math.abs(performance.now() - this._timing) > 100) {
      this._timing ? this._interface.rewriteElement('framerate', Math.round((this._framesPassed * 1000) / Math.abs(performance.now() - this._timing))) : console.log('starting');
      this._timing = performance.now();
      this._framesPassed = 0;
    }

    this._framesPassed += 1;
  }

  _draw() { // draw specifically handles the game drawing
    // high level draw calls
    this._display.clear();
    this._columns.drawTo(this._display);
  }

  reset() {

  }

  init(numColumns) {
    let label = document.createElement('div');
    this._interface.addElement('framerate', label);

    let blurValue = (this._width / numColumns) / 3;
    document.getElementById('oobleck-gaussian').setAttribute('stdDeviation', blurValue);
    this._columns = new Columns(numColumns, this._width, this._height);
  }

  start() {
    // maybe separate call, or put into constructor?
    this._timing = performance.now();
    this._framesPassed = 0;

    // we use new => syntax to fix the lexical "this"
    window.requestAnimationFrame(() => {
      this._state = GAME_STATES.RUN;
      this._run();
    });
  }
}
