"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// draw buttons and game ui with html instead of canvas
var Interface = function () {
  // interface should potentially handle all the elements within this?
  // and define them itself instead of getting programmatically added within Game

  // interfaceElementSelector is required
  function Interface(width, height, interfaceElementSelector) {
    _classCallCheck(this, Interface);

    this._container = document.querySelector(interfaceElementSelector);
    this._container.style.width = width;
    this._container.style.height = height;

    this._elements = {};
  }

  // expects dom element


  _createClass(Interface, [{
    key: "addElement",
    value: function addElement(name, element) {
      this._container.appendChild(element);
      this._elements[name] = element;
    }
  }, {
    key: "getElement",
    value: function getElement(name) {
      return this._elements[name];
    }
  }, {
    key: "rewriteElement",
    value: function rewriteElement(name, content) {
      this.getElement(name).innerHTML = content;
    }
  }]);

  return Interface;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2ludGVyZmFjZS5qcyJdLCJuYW1lcyI6WyJJbnRlcmZhY2UiLCJ3aWR0aCIsImhlaWdodCIsImludGVyZmFjZUVsZW1lbnRTZWxlY3RvciIsIl9jb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsIl9lbGVtZW50cyIsIm5hbWUiLCJlbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50IiwiZ2V0RWxlbWVudCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUFDTUEsUztBQUNKO0FBQ0E7O0FBRUE7QUFDQSxxQkFBWUMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkJDLHdCQUEzQixFQUFxRDtBQUFBOztBQUNuRCxTQUFLQyxVQUFMLEdBQWtCQyxTQUFTQyxhQUFULENBQXVCSCx3QkFBdkIsQ0FBbEI7QUFDQSxTQUFLQyxVQUFMLENBQWdCRyxLQUFoQixDQUFzQk4sS0FBdEIsR0FBOEJBLEtBQTlCO0FBQ0EsU0FBS0csVUFBTCxDQUFnQkcsS0FBaEIsQ0FBc0JMLE1BQXRCLEdBQStCQSxNQUEvQjs7QUFFQSxTQUFLTSxTQUFMLEdBQWlCLEVBQWpCO0FBQ0Q7O0FBRUQ7Ozs7OytCQUNXQyxJLEVBQU1DLE8sRUFBUztBQUN4QixXQUFLTixVQUFMLENBQWdCTyxXQUFoQixDQUE0QkQsT0FBNUI7QUFDQSxXQUFLRixTQUFMLENBQWVDLElBQWYsSUFBdUJDLE9BQXZCO0FBQ0Q7OzsrQkFFVUQsSSxFQUFNO0FBQ2YsYUFBTyxLQUFLRCxTQUFMLENBQWVDLElBQWYsQ0FBUDtBQUNEOzs7bUNBRWNBLEksRUFBTUcsTyxFQUFTO0FBQzVCLFdBQUtDLFVBQUwsQ0FBZ0JKLElBQWhCLEVBQXNCSyxTQUF0QixHQUFrQ0YsT0FBbEM7QUFDRCIsImZpbGUiOiJqcy9pbnRlcmZhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkcmF3IGJ1dHRvbnMgYW5kIGdhbWUgdWkgd2l0aCBodG1sIGluc3RlYWQgb2YgY2FudmFzXG5jbGFzcyBJbnRlcmZhY2Uge1xuICAvLyBpbnRlcmZhY2Ugc2hvdWxkIHBvdGVudGlhbGx5IGhhbmRsZSBhbGwgdGhlIGVsZW1lbnRzIHdpdGhpbiB0aGlzP1xuICAvLyBhbmQgZGVmaW5lIHRoZW0gaXRzZWxmIGluc3RlYWQgb2YgZ2V0dGluZyBwcm9ncmFtbWF0aWNhbGx5IGFkZGVkIHdpdGhpbiBHYW1lXG5cbiAgLy8gaW50ZXJmYWNlRWxlbWVudFNlbGVjdG9yIGlzIHJlcXVpcmVkXG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGludGVyZmFjZUVsZW1lbnRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW50ZXJmYWNlRWxlbWVudFNlbGVjdG9yKTtcbiAgICB0aGlzLl9jb250YWluZXIuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLl9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgdGhpcy5fZWxlbWVudHMgPSB7fTtcbiAgfVxuXG4gIC8vIGV4cGVjdHMgZG9tIGVsZW1lbnRcbiAgYWRkRWxlbWVudChuYW1lLCBlbGVtZW50KSB7XG4gICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIHRoaXMuX2VsZW1lbnRzW25hbWVdID0gZWxlbWVudDtcbiAgfVxuXG4gIGdldEVsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50c1tuYW1lXTtcbiAgfVxuXG4gIHJld3JpdGVFbGVtZW50KG5hbWUsIGNvbnRlbnQpIHtcbiAgICB0aGlzLmdldEVsZW1lbnQobmFtZSkuaW5uZXJIVE1MID0gY29udGVudDtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
