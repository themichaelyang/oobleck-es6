'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Column = function () {
  // x, y coords of bottom left corner
  // design of this should be responsive, react to diff screen sizes
  // x, y, height values are floating pt
  function Column(x, y, width, maxHeight, minNormalizedHeight) {
    _classCallCheck(this, Column);

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

  _createClass(Column, [{
    key: 'getRandomDeltaHeight',
    value: function getRandomDeltaHeight() {
      return -0.002 * Math.random() - 0.001;
    }
  }, {
    key: 'drawTo',
    value: function drawTo(drawing) {
      var height = this._maxHeight * this._normalizedHeight;
      var context = drawing.getContext();

      // fillRect draws from top left corner
      context.fillRect(this._x, this._maxHeight - height - this._y, this._width, height);
    }
  }, {
    key: 'refillHeight',
    value: function refillHeight() {
      this._deltaHeight = 0.01;
      this._heightToAdd = 0.1;
    }
  }, {
    key: 'update',
    value: function update() {
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
  }, {
    key: 'addHeight',
    value: function addHeight(change) {
      this.setHeight(this._normalizedHeight + change);
    }
  }, {
    key: 'check',
    value: function check() {
      // check if game is lost
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this._normalizedHeight;
    }

    // consider renaming

  }, {
    key: 'setHeight',
    value: function setHeight(newHeight) {
      if (newHeight <= this._minNormalizedHeight) {
        // don't draw negative height
        newHeight = this._minNormalizedHeight;
      } else if (newHeight >= 1) {
        // don't let height get more than 1
        newHeight = 1;
      }
      this._normalizedHeight = newHeight;
    }
  }]);

  return Column;
}();

var Columns = function () {
  // takes in pixel values, converts to normalized widths for Column
  function Columns(numColumns, width, height, minNormalizedHeight) {
    _classCallCheck(this, Columns);

    this._columnsArray = new Array();
    // have separate canvas for processing
    this._drawing = new Drawing(width, height);
    this._fillColor = COLORS.COLUMN_COLOR;

    var columnWidth = width / numColumns;

    for (var i = 0; i < numColumns; i++) {
      var y = 0;
      var x = columnWidth * i;
      this._columnsArray.push(new Column(x, y, width / numColumns, height, minNormalizedHeight));
    }
    console.log(this._drawing);
  }

  _createClass(Columns, [{
    key: 'drawTo',
    value: function drawTo(display) {
      // clear internal canvas
      this._drawing.clear();
      this._drawing.getContext().fillStyle = this._fillColor; // setting fillStyle is very slow, so only set it once

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._columnsArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var column = _step.value;

          column.drawTo(this._drawing);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      display.drawFrom(this._drawing);
    }
  }, {
    key: 'update',
    value: function update() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._columnsArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var column = _step2.value;

          column.update();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'getColumn',
    value: function getColumn(index) {
      return this._columnsArray[index];
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this._columnsArray.length;
    }
  }]);

  return Columns;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2NvbHVtbnMuanMiXSwibmFtZXMiOlsiQ29sdW1uIiwieCIsInkiLCJ3aWR0aCIsIm1heEhlaWdodCIsIm1pbk5vcm1hbGl6ZWRIZWlnaHQiLCJfeCIsIl95IiwiX3dpZHRoIiwiX21heEhlaWdodCIsIl9ub3JtYWxpemVkSGVpZ2h0IiwiX2RlbHRhSGVpZ2h0IiwiZ2V0UmFuZG9tRGVsdGFIZWlnaHQiLCJfaW5jcmVhc2luZyIsIl9taW5Ob3JtYWxpemVkSGVpZ2h0IiwiX2ZpbGxDb2xvciIsIk1hdGgiLCJyYW5kb20iLCJkcmF3aW5nIiwiaGVpZ2h0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJmaWxsUmVjdCIsIl9oZWlnaHRUb0FkZCIsImFkZEhlaWdodCIsImNoYW5nZSIsInNldEhlaWdodCIsIm5ld0hlaWdodCIsIkNvbHVtbnMiLCJudW1Db2x1bW5zIiwiX2NvbHVtbnNBcnJheSIsIkFycmF5IiwiX2RyYXdpbmciLCJEcmF3aW5nIiwiQ09MT1JTIiwiQ09MVU1OX0NPTE9SIiwiY29sdW1uV2lkdGgiLCJpIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5IiwiY2xlYXIiLCJmaWxsU3R5bGUiLCJjb2x1bW4iLCJkcmF3VG8iLCJkcmF3RnJvbSIsInVwZGF0ZSIsImluZGV4IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsTTtBQUNKO0FBQ0E7QUFDQTtBQUNBLGtCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEtBQWxCLEVBQXlCQyxTQUF6QixFQUFvQ0MsbUJBQXBDLEVBQXlEO0FBQUE7O0FBQ3ZELFNBQUtDLEVBQUwsR0FBVUwsQ0FBVjtBQUNBLFNBQUtNLEVBQUwsR0FBVUwsQ0FBVjtBQUNBLFNBQUtNLE1BQUwsR0FBY0wsS0FBZDtBQUNBLFNBQUtNLFVBQUwsR0FBa0JMLFNBQWxCO0FBQ0EsU0FBS00saUJBQUwsR0FBeUIsR0FBekIsQ0FMdUQsQ0FLekI7QUFDOUIsU0FBS0MsWUFBTCxHQUFvQixLQUFLQyxv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S2IsUUFBbkI7QUFDRDtBQVBhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUWRTLGNBQVFLLFFBQVIsQ0FBaUIsS0FBS2QsUUFBdEI7QUFDRDs7OzZCQUVRO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ1AsOEJBQW1CLEtBQUtGLGFBQXhCLG1JQUF1QztBQUFBLGNBQTlCYyxNQUE4Qjs7QUFDckNBLGlCQUFPRyxNQUFQO0FBQ0Q7QUFITTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSVI7Ozs4QkFFU0MsSyxFQUFPO0FBQ2YsYUFBTyxLQUFLbEIsYUFBTCxDQUFtQmtCLEtBQW5CLENBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLbEIsYUFBTCxDQUFtQm1CLE1BQTFCO0FBQ0QiLCJmaWxlIjoianMvY29sdW1ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvbHVtbiB7XG4gIC8vIHgsIHkgY29vcmRzIG9mIGJvdHRvbSBsZWZ0IGNvcm5lclxuICAvLyBkZXNpZ24gb2YgdGhpcyBzaG91bGQgYmUgcmVzcG9uc2l2ZSwgcmVhY3QgdG8gZGlmZiBzY3JlZW4gc2l6ZXNcbiAgLy8geCwgeSwgaGVpZ2h0IHZhbHVlcyBhcmUgZmxvYXRpbmcgcHRcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIG1heEhlaWdodCwgbWluTm9ybWFsaXplZEhlaWdodCkge1xuICAgIHRoaXMuX3ggPSB4O1xuICAgIHRoaXMuX3kgPSB5O1xuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5fbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgIHRoaXMuX25vcm1hbGl6ZWRIZWlnaHQgPSAwLjg7IC8vIHZhbHVlIGZyb20gMCB0byAxLjBcbiAgICB0aGlzLl9kZWx0YUhlaWdodCA9IHRoaXMuZ2V0UmFuZG9tRGVsdGFIZWlnaHQoKTtcbiAgICB0aGlzLl9pbmNyZWFzaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fbWluTm9ybWFsaXplZEhlaWdodCA9IG1pbk5vcm1hbGl6ZWRIZWlnaHQ7XG4gICAgdGhpcy5fZmlsbENvbG9yID0gJ3JlZCc7XG4gIH1cblxuICBnZXRSYW5kb21EZWx0YUhlaWdodCgpIHtcbiAgICByZXR1cm4gLTAuMDAyICogTWF0aC5yYW5kb20oKSAtIDAuMDAxO1xuICB9XG5cbiAgZHJhd1RvKGRyYXdpbmcpIHtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5fbWF4SGVpZ2h0ICogdGhpcy5fbm9ybWFsaXplZEhlaWdodDtcbiAgICBsZXQgY29udGV4dCA9IGRyYXdpbmcuZ2V0Q29udGV4dCgpO1xuXG4gICAgLy8gZmlsbFJlY3QgZHJhd3MgZnJvbSB0b3AgbGVmdCBjb3JuZXJcbiAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMuX3gsIHRoaXMuX21heEhlaWdodCAtIGhlaWdodCAtIHRoaXMuX3ksIHRoaXMuX3dpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgcmVmaWxsSGVpZ2h0KCkge1xuICAgIHRoaXMuX2RlbHRhSGVpZ2h0ID0gMC4wMTtcbiAgICB0aGlzLl9oZWlnaHRUb0FkZCA9IDAuMTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBpZiAoIXRoaXMuX2luY3JlYXNpbmcpIHtcbiAgICB0aGlzLmFkZEhlaWdodCh0aGlzLl9kZWx0YUhlaWdodCk7XG4gICAgaWYgKHRoaXMuX2hlaWdodFRvQWRkID4gMCkge1xuICAgICAgdGhpcy5faGVpZ2h0VG9BZGQgLT0gdGhpcy5fZGVsdGFIZWlnaHQ7XG4gICAgICBpZiAodGhpcy5faGVpZ2h0VG9BZGQgPD0gMCkge1xuICAgICAgICB0aGlzLl9oZWlnaHRUb0FkZCA9IDA7XG4gICAgICAgIHRoaXMuX2RlbHRhSGVpZ2h0ID0gdGhpcy5nZXRSYW5kb21EZWx0YUhlaWdodCgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBhZGRIZWlnaHQoY2hhbmdlKSB7XG4gICAgdGhpcy5zZXRIZWlnaHQodGhpcy5fbm9ybWFsaXplZEhlaWdodCArIGNoYW5nZSk7XG4gIH1cblxuICBjaGVjaygpIHtcbiAgICAvLyBjaGVjayBpZiBnYW1lIGlzIGxvc3RcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZEhlaWdodDtcbiAgfVxuXG4gIC8vIGNvbnNpZGVyIHJlbmFtaW5nXG4gIHNldEhlaWdodChuZXdIZWlnaHQpIHtcbiAgICBpZiAobmV3SGVpZ2h0IDw9IHRoaXMuX21pbk5vcm1hbGl6ZWRIZWlnaHQpIHsgLy8gZG9uJ3QgZHJhdyBuZWdhdGl2ZSBoZWlnaHRcbiAgICAgIG5ld0hlaWdodCA9IHRoaXMuX21pbk5vcm1hbGl6ZWRIZWlnaHQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5ld0hlaWdodCA+PSAxKSB7IC8vIGRvbid0IGxldCBoZWlnaHQgZ2V0IG1vcmUgdGhhbiAxXG4gICAgICBuZXdIZWlnaHQgPSAxO1xuICAgIH1cbiAgICB0aGlzLl9ub3JtYWxpemVkSGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICB9XG59XG5cbmNsYXNzIENvbHVtbnMge1xuICAvLyB0YWtlcyBpbiBwaXhlbCB2YWx1ZXMsIGNvbnZlcnRzIHRvIG5vcm1hbGl6ZWQgd2lkdGhzIGZvciBDb2x1bW5cbiAgY29uc3RydWN0b3IobnVtQ29sdW1ucywgd2lkdGgsIGhlaWdodCwgbWluTm9ybWFsaXplZEhlaWdodCkge1xuICAgIHRoaXMuX2NvbHVtbnNBcnJheSA9IG5ldyBBcnJheSgpO1xuICAgIC8vIGhhdmUgc2VwYXJhdGUgY2FudmFzIGZvciBwcm9jZXNzaW5nXG4gICAgdGhpcy5fZHJhd2luZyA9IG5ldyBEcmF3aW5nKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuX2ZpbGxDb2xvciA9IENPTE9SUy5DT0xVTU5fQ09MT1I7XG5cbiAgICBsZXQgY29sdW1uV2lkdGggPSB3aWR0aCAvIG51bUNvbHVtbnM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbHVtbnM7IGkrKykge1xuICAgICAgbGV0IHkgPSAwO1xuICAgICAgbGV0IHggPSBjb2x1bW5XaWR0aCAqIGk7XG4gICAgICB0aGlzLl9jb2x1bW5zQXJyYXkucHVzaChuZXcgQ29sdW1uKHgsIHksIHdpZHRoIC8gbnVtQ29sdW1ucywgaGVpZ2h0LCBtaW5Ob3JtYWxpemVkSGVpZ2h0KSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuX2RyYXdpbmcpO1xuICB9XG5cbiAgZHJhd1RvKGRpc3BsYXkpIHtcbiAgICAvLyBjbGVhciBpbnRlcm5hbCBjYW52YXNcbiAgICB0aGlzLl9kcmF3aW5nLmNsZWFyKCk7XG4gICAgdGhpcy5fZHJhd2luZy5nZXRDb250ZXh0KCkuZmlsbFN0eWxlID0gdGhpcy5fZmlsbENvbG9yOyAvLyBzZXR0aW5nIGZpbGxTdHlsZSBpcyB2ZXJ5IHNsb3csIHNvIG9ubHkgc2V0IGl0IG9uY2VcblxuICAgIGZvciAobGV0IGNvbHVtbiBvZiB0aGlzLl9jb2x1bW5zQXJyYXkpIHtcbiAgICAgIGNvbHVtbi5kcmF3VG8odGhpcy5fZHJhd2luZyk7XG4gICAgfVxuICAgIGRpc3BsYXkuZHJhd0Zyb20odGhpcy5fZHJhd2luZyk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgZm9yIChsZXQgY29sdW1uIG9mIHRoaXMuX2NvbHVtbnNBcnJheSkge1xuICAgICAgY29sdW1uLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbHVtbihpbmRleCkge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zQXJyYXlbaW5kZXhdO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zQXJyYXkubGVuZ3RoO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
