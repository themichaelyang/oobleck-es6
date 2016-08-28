'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = main;

function main() {
  var game = new Game('#game-canvas');
}

var Game = function () {
  function Game(canvasElementId) {
    _classCallCheck(this, Game);

    this._fps = 60;

    this._canvas = document.getElementById(canvasElementId);
    this._canvas.width = 800;
    this._canvas.height = 600;

    this._context = this._canvas.getContext('2d');
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      window.requestAnimationFrame(this.run);
    }
  }, {
    key: 'run',
    value: function run() {
      setTimeout(function () {
        window.requestAnimationFrame(this.run);

        // update();
        // render();
      }, 1000 / this._fps);
    }
  }]);

  return Game;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21haW4uanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwibWFpbiIsImdhbWUiLCJHYW1lIiwiY2FudmFzRWxlbWVudElkIiwiX2ZwcyIsIl9jYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJfY29udGV4dCIsImdldENvbnRleHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJydW4iLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsT0FBT0MsTUFBUCxHQUFnQkMsSUFBaEI7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLE1BQUlDLE9BQU8sSUFBSUMsSUFBSixDQUFTLGNBQVQsQ0FBWDtBQUNEOztJQUVLQSxJO0FBQ0osZ0JBQVlDLGVBQVosRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0MsSUFBTCxHQUFZLEVBQVo7O0FBRUEsU0FBS0MsT0FBTCxHQUFlQyxTQUFTQyxjQUFULENBQXdCSixlQUF4QixDQUFmO0FBQ0EsU0FBS0UsT0FBTCxDQUFhRyxLQUFiLEdBQXFCLEdBQXJCO0FBQ0EsU0FBS0gsT0FBTCxDQUFhSSxNQUFiLEdBQXNCLEdBQXRCOztBQUVBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0wsT0FBTCxDQUFhTSxVQUFiLENBQXdCLElBQXhCLENBQWhCO0FBQ0Q7Ozs7NEJBRU87QUFDTmIsYUFBT2MscUJBQVAsQ0FBNkIsS0FBS0MsR0FBbEM7QUFDRDs7OzBCQUVLO0FBQ0pDLGlCQUFXLFlBQVc7QUFDcEJoQixlQUFPYyxxQkFBUCxDQUE2QixLQUFLQyxHQUFsQzs7QUFFQTtBQUNBO0FBRUQsT0FORCxFQU1HLE9BQU8sS0FBS1QsSUFOZjtBQU9EIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gbWFpbjtcblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgbGV0IGdhbWUgPSBuZXcgR2FtZSgnI2dhbWUtY2FudmFzJyk7XG59XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjYW52YXNFbGVtZW50SWQpIHtcbiAgICB0aGlzLl9mcHMgPSA2MDtcblxuICAgIHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0VsZW1lbnRJZCk7XG4gICAgdGhpcy5fY2FudmFzLndpZHRoID0gODAwO1xuICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSA2MDA7XG5cbiAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucnVuKTtcbiAgfVxuXG4gIHJ1bigpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJ1bik7XG5cbiAgICAgIC8vIHVwZGF0ZSgpO1xuICAgICAgLy8gcmVuZGVyKCk7XG5cbiAgICB9LCAxMDAwIC8gdGhpcy5fZnBzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
