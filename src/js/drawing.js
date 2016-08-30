// could benefit by switching to a factory function
class Drawing {
  // optional canvasElementSelector
  constructor(width, height, canvasElementSelector) {
    // instead of drawing directly on the context, could render  images on separate contexts, then draw it onto the main canvas to handle things like layers
    this._canvas = canvasElementSelector ? document.querySelector(canvasElementSelector) : document.createElement('canvas');
    this._canvas.width = width;
    this._canvas.height = height;

    this._context = this._canvas.getContext('2d');
  }

  drawFrom(otherDrawing) {
    this._context.drawImage(otherDrawing.getCanvas(), 0, 0);
  }

  getCanvas() {
    return this._canvas;
  }

  getContext() {
    return this._context;
  }
  // drawRectangle(x, y, width, height, color) {
  //   this._context.fillStyle = color;
  //   this._context.fillRect(x, y, width, height);
  // }

  clear() {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
}

// class Display extends Drawing {
//   constructor(width, height, canvasElementSelector) {
//     super(width, height, canvasElementSelector);
//   }
//
//   draw() {
//     // draw code here
//   }
// }
