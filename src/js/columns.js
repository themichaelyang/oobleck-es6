class Column {
  // x, y coords of bottom left corner
  // design of this should be responsive, react to diff screen sizes
  // x, y, height values are floating pt
  constructor(x, y, width, maxHeight, minNormalizedHeight) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._maxHeight = maxHeight;
    this._normalizedHeight = 0.8; // value from 0 to 1.0
    this._deltaHeight = this.getRandomDeltaHeight();
    this._increasing = false;
    this._minNormalizedHeight = minNormalizedHeight;
    this._fillColor = 'red';
  }

  getRandomDeltaHeight() {
    return -0.002 * Math.random() - 0.001;
  }

  drawTo(drawing) {
    let height = this._maxHeight * this._normalizedHeight;
    let context = drawing.getContext();

    // fillRect draws from top left corner
    context.fillRect(this._x, this._maxHeight - height - this._y, this._width, height);
  }

  refillHeight() {
    this._deltaHeight = 0.01;
    this._heightToAdd = 0.1;
  }

  update() {
    // if (!this._increasing) {
    this.addHeight(this._deltaHeight);
    if (this._heightToAdd > 0) {
      this._heightToAdd -= this._deltaHeight;
      if (this._heightToAdd <= 0) {
        this._heightToAdd = 0;
        this._deltaHeight = this.getRandomDeltaHeight();
      }
    }
    // }
  }

  addHeight(change) {
    this.setHeight(this._normalizedHeight + change);
  }

  check() {
    // check if game is lost
  }

  getHeight() {
    return this._normalizedHeight;
  }

  // consider renaming
  setHeight(newHeight) {
    if (newHeight <= this._minNormalizedHeight) { // don't draw negative height
      newHeight = this._minNormalizedHeight;
    }
    else if (newHeight >= 1) { // don't let height get more than 1
      newHeight = 1;
    }
    this._normalizedHeight = newHeight;
  }
}

class Columns {
  // takes in pixel values, converts to normalized widths for Column
  constructor(numColumns, width, height, minNormalizedHeight) {
    this._columnsArray = new Array();
    // have separate canvas for processing
    this._drawing = new Drawing(width, height);
    this._fillColor = COLORS.COLUMN_COLOR;

    let columnWidth = width / numColumns;

    for (let i = 0; i < numColumns; i++) {
      let y = 0;
      let x = columnWidth * i;
      this._columnsArray.push(new Column(x, y, width / numColumns, height, minNormalizedHeight));
    }
    console.log(this._drawing);
  }

  drawTo(display) {
    // clear internal canvas
    this._drawing.clear();
    this._drawing.getContext().fillStyle = this._fillColor; // setting fillStyle is very slow, so only set it once

    for (let column of this._columnsArray) {
      column.drawTo(this._drawing);
    }
    display.drawFrom(this._drawing);
  }

  update() {
    for (let column of this._columnsArray) {
      column.update();
    }
  }

  getColumn(index) {
    return this._columnsArray[index];
  }

  getLength() {
    return this._columnsArray.length;
  }
}
