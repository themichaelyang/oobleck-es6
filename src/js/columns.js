class Column {
  // x, y coords of bottom left corner
  constructor(x, y, width) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = 50;
  }

  drawRectangle() {

  }

  drawTo(drawing) {
    // context.drawRectangle(this._x, this._y, this._width, this._height);
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
  constructor(number, width, height) {
    this._columnsArray = new Array(number);
    // have separate canvas for processing
    this._drawing = new Drawing(width, height);

    let columnWidth = width / number;
    for (let i = 0; i < number; i++) {
      let x = columnWidth * i;
      this._columnsArray.push(new Column(x, y));
    }
  }

  draw(display) {
    for (column of this._columnsArray) {
      column.draw();
    }
  }
}
