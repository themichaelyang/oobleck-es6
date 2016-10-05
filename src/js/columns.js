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
    this._deltaHeight = -0.002 * Math.random() - 0.0015;
    this._increasing = false;
    this._minNormalizedHeight = minNormalizedHeight;
    this._fillColor = 'red';
  }

  drawTo(drawing) {
    let height = this._maxHeight * this._normalizedHeight;
    let context = drawing.getContext();

    context.fillStyle = this._fillColor;
    // fillRect draws from top left corner
    context.fillRect(this._x, this._maxHeight - height - this._y, this._width, height);
  }

  update() {
    if (!this._increasing) {
      this.setHeight(this._normalizedHeight + this._deltaHeight);
    }
  }

  check() {
    // check if game is lost
  }

  getHeight() {
    return this._normalizedHeight;
  }

  // consider renaming
  setHeight(value) {
    if (value <= this._minNormalizedHeight) { // don't draw negative height
      value = this._minNormalizedHeight;
    }
    this._normalizedHeight = value;
  }
}

class Columns {
  // takes in pixel values, converts to normalized widths for Column
  constructor(numColumns, width, height, minNormalizedHeight) {
    this._columnsArray = new Array();
    // have separate canvas for processing
    this._drawing = new Drawing(width, height);

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
