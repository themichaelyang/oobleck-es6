class Column {
  // x, y coords of bottom left corner
  constructor(x, y, width) {
    this._x = x; // consider using Symbols for private vars
    this._y = y;
    this._width = width;
    this.height = 0;
  }

  draw(display) {
    display.drawRectangle(this._x, this._y, this._width, this.height);
  }

  update() {
    // use to check if game is still running
  }

  set height(value) {
    this.height = value;
  }

  get height() {
    return this.height;
  }
}

class Columns {
  constructor(number, width) {
    this._columns = new Array(number);
    let columnWidth = width / number;
    for (let i = 0; i < number; i++) {
      let x = columnWidth * i;
      this._columns.push(new Column(x, y));
    }
  }
}
