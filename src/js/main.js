class Display {
  constructor(canvasElementId, width, height) {
    this._canvas = document.getElementById(canvasElementId);
    this._context = this._canvas.getContext('2d');
  }

  drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  clear() {
    ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
}

class Game { // reminder: classes aren't hoisted
  constructor(canvasElementId) {
    this._fps = 30;
    this._display = new Display(canvasElementId, 800, 600);
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

    setTimeout(() => { // improve game loop design
      window.requestAnimationFrame(() => {
        this.run();
      });

      update();
      render();

    }, 1000 / this._fps);
  }

  update() {

  }

  render() {

    // draw
  }

  reset() {

  }

}

window.onload = main;

function main() {
  let game = new Game('game-canvas');
  game.start();
}
