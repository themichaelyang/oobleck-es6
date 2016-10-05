class Column {
  // x, y coords of bottom left corner
  // design of this should be responsive, react to diff screen sizes
  // x, y, height values are floating pt
  constructor(x, y, width, maxHeight) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._maxHeight = maxHeight;
    this._normalizedHeight = 0.5;
  }

  drawRectangle() {

  }

  drawTo(drawing) {
    let height = this._maxHeight * this._normalizedHeight;
    drawing.getContext().fillStyle = 'red';
    // fillRect draws from top left corner
    drawing.getContext().fillRect(this._x, this._maxHeight - height - this._y, this._width, height);
  }

  update() {
    // use to update height of column
  }

  check() {
    // check if game is lost
  }

  getHeight() {
    return this._height;
  }

  setHeight(value) {
    this._height = value;
  }
}

class Columns {
  constructor(numColumns, width, height) {
    this._columnsArray = new Array();
    // have separate canvas for processing
    this._drawing = new Drawing(width, height);

    let columnWidth = width / numColumns;
    for (let i = 0; i < numColumns; i++) {
      let y = 0;
      let x = columnWidth * i;
      this._columnsArray.push(new Column(x, y, width / numColumns, height));
    }
    console.log(this._drawing);
  }

  drawTo(display) {
    for (let column of this._columnsArray) {
      column.drawTo(this._drawing);
    }
    display.drawFrom(this._drawing);
  }
}
