'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// could benefit by switching to a factory function
var Drawing = function () {
  // optional canvasElementSelector
  function Drawing(width, height, canvasElementSelector) {
    _classCallCheck(this, Drawing);

    // instead of drawing directly on the context, could render  images on separate contexts, then draw it onto the main canvas to handle things like layers
    this._canvas = canvasElementSelector ? document.querySelector(canvasElementSelector) : document.createElement('canvas');
    this._canvas.width = width;
    this._canvas.height = height;

    this._context = this._canvas.getContext('2d');
  }

  _createClass(Drawing, [{
    key: 'drawFrom',
    value: function drawFrom(otherDrawing) {
      this.clear(); // always clear canvas before drawing from otherDrawing
      this._context.drawImage(otherDrawing.getCanvas(), 0, 0);
    }
  }, {
    key: 'getCanvas',
    value: function getCanvas() {
      return this._canvas;
    }
  }, {
    key: 'getContext',
    value: function getContext() {
      return this._context;
    }
    // drawRectangle(x, y, width, height, color) {
    //   this._context.fillStyle = color;
    //   this._context.fillRect(x, y, width, height);
    // }

  }, {
    key: 'clear',
    value: function clear() {
      this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
  }]);

  return Drawing;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2RyYXdpbmcuanMiXSwibmFtZXMiOlsiRHJhd2luZyIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzRWxlbWVudFNlbGVjdG9yIiwiX2NhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJfY29udGV4dCIsImdldENvbnRleHQiLCJvdGhlckRyYXdpbmciLCJjbGVhciIsImRyYXdJbWFnZSIsImdldENhbnZhcyIsImNsZWFyUmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUFDTUEsTztBQUNKO0FBQ0EsbUJBQVlDLEtBQVosRUFBbUJDLE1BQW5CLEVBQTJCQyxxQkFBM0IsRUFBa0Q7QUFBQTs7QUFDaEQ7QUFDQSxTQUFLQyxPQUFMLEdBQWVELHdCQUF3QkUsU0FBU0MsYUFBVCxDQUF1QkgscUJBQXZCLENBQXhCLEdBQXdFRSxTQUFTRSxhQUFULENBQXVCLFFBQXZCLENBQXZGO0FBQ0EsU0FBS0gsT0FBTCxDQUFhSCxLQUFiLEdBQXFCQSxLQUFyQjtBQUNBLFNBQUtHLE9BQUwsQ0FBYUYsTUFBYixHQUFzQkEsTUFBdEI7O0FBRUEsU0FBS00sUUFBTCxHQUFnQixLQUFLSixPQUFMLENBQWFLLFVBQWIsQ0FBd0IsSUFBeEIsQ0FBaEI7QUFDRDs7Ozs2QkFFUUMsWSxFQUFjO0FBQ3JCLFdBQUtDLEtBQUwsR0FEcUIsQ0FDUDtBQUNkLFdBQUtILFFBQUwsQ0FBY0ksU0FBZCxDQUF3QkYsYUFBYUcsU0FBYixFQUF4QixFQUFrRCxDQUFsRCxFQUFxRCxDQUFyRDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtULE9BQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLSSxRQUFaO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7Ozs0QkFFUTtBQUNOLFdBQUtBLFFBQUwsQ0FBY00sU0FBZCxDQUF3QixDQUF4QixFQUEyQixDQUEzQixFQUE4QixLQUFLVixPQUFMLENBQWFILEtBQTNDLEVBQWtELEtBQUtHLE9BQUwsQ0FBYUYsTUFBL0Q7QUFDRCIsImZpbGUiOiJqcy9kcmF3aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY291bGQgYmVuZWZpdCBieSBzd2l0Y2hpbmcgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uXG5jbGFzcyBEcmF3aW5nIHtcbiAgLy8gb3B0aW9uYWwgY2FudmFzRWxlbWVudFNlbGVjdG9yXG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGNhbnZhc0VsZW1lbnRTZWxlY3Rvcikge1xuICAgIC8vIGluc3RlYWQgb2YgZHJhd2luZyBkaXJlY3RseSBvbiB0aGUgY29udGV4dCwgY291bGQgcmVuZGVyICBpbWFnZXMgb24gc2VwYXJhdGUgY29udGV4dHMsIHRoZW4gZHJhdyBpdCBvbnRvIHRoZSBtYWluIGNhbnZhcyB0byBoYW5kbGUgdGhpbmdzIGxpa2UgbGF5ZXJzXG4gICAgdGhpcy5fY2FudmFzID0gY2FudmFzRWxlbWVudFNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYW52YXNFbGVtZW50U2VsZWN0b3IpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5fY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfVxuXG4gIGRyYXdGcm9tKG90aGVyRHJhd2luZykge1xuICAgIHRoaXMuY2xlYXIoKTsgLy8gYWx3YXlzIGNsZWFyIGNhbnZhcyBiZWZvcmUgZHJhd2luZyBmcm9tIG90aGVyRHJhd2luZ1xuICAgIHRoaXMuX2NvbnRleHQuZHJhd0ltYWdlKG90aGVyRHJhd2luZy5nZXRDYW52YXMoKSwgMCwgMCk7XG4gIH1cbiAgXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FudmFzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgfVxuICAvLyBkcmF3UmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKSB7XG4gIC8vICAgdGhpcy5fY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgLy8gICB0aGlzLl9jb250ZXh0LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAvLyB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5fY2FudmFzLndpZHRoLCB0aGlzLl9jYW52YXMuaGVpZ2h0KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
