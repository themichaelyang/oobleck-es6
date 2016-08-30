class Column {
  // x, y coords of bottom left corner
  constructor(x, y, width, maxHeight) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._maxHeight = maxHeight;
    this._height = this._maxHeight / 2;
  }

  drawRectangle() {

  }

  draw(drawing) {
    drawing.getContext().fillStyle = 'red';
    // fillRect draws from top left corner
    drawing.getContext().fillRect(this._x, this._maxHeight - this._height - this._y, this._width, this._height);
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

  draw(display) {
    for (let column of this._columnsArray) {
      column.draw(this._drawing);
    }
    display.drawFrom(this._drawing);
  }
}
