'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GAME_STATES = {
  START: 'Game started',
  RUN: 'Game running',
  PAUSE: 'Game paused',
  END: 'Game ended'
};

// consider reverting to a factory pattern?

var Game = function () {
  // reminder: classes aren't hoisted
  function Game(width, height, canvasElementSelector, interfaceElementSelector) {
    _classCallCheck(this, Game);

    // this._fps = 30; // runs slightly slower than 60fps when using setTimeout
    this._display = new Drawing(width, height, canvasElementSelector);
    this._width = width;
    this._height = height;

    this._interface = new Interface(width, height, interfaceElementSelector);
    this._state = GAME_STATES.START;

    this._columns;

    console.log(this);
  }

  _createClass(Game, [{
    key: '_run',
    value: function _run() {
      var _this = this;

      // setTimeout causes a slowdown of the requestAnimationFrame
      // determine fps, instead of throttling, unless for testing purposes
      this._update();
      this._draw();

      // setTimeout(() => { // improve game loop design, decouple render and update
      window.requestAnimationFrame(function () {
        _this._run();
      });
      // }, 1000 / this._fps);
    }
  }, {
    key: '_update',
    value: function _update() {
      // high level calls
      // doesn't execute perfectly, especially at higher fps
      this._updateTiming();
      this._columns.update();
      // for ()
    }
  }, {
    key: '_updateTiming',
    value: function _updateTiming() {
      if (this._timing && Math.abs(performance.now() - this._timing) > 100) {
        this._timing ? this._interface.rewriteElement('framerate', Math.round(this._framesPassed * 1000 / Math.abs(performance.now() - this._timing))) : console.log('starting');
        this._timing = performance.now();
        this._framesPassed = 0;
      }

      this._framesPassed += 1;
    }
  }, {
    key: '_draw',
    value: function _draw() {
      // draw specifically handles the game drawing
      // high level draw calls
      this._display.clear();
      this._columns.drawTo(this._display);
    }
  }, {
    key: '_bindTouchEvents',
    value: function _bindTouchEvents() {
      var _this2 = this;

      this._display.getCanvas().addEventListener('touchstart', function (event) {
        // console.log('touchstart:');
        if (event.changedTouches.length <= 2) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = event.changedTouches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var touch = _step.value;

              var touchX = parseInt(touch.clientX);
              var touchY = parseInt(touch.clientY);
              // console.log(touchX, touchY);

              if (_this2._columns && _this2._columns.getLength() > 0) {
                var columnWidth = _this2._width / _this2._columns.getLength();
                var index = Math.floor(touchX / columnWidth);

                // console.log(index);

                var columnTouched = _this2._columns.getColumn(index);
                columnTouched.refillHeight();
              }
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
        }
      });
    }
  }, {
    key: 'reset',
    value: function reset() {}
  }, {
    key: 'init',
    value: function init(numColumns) {
      this._bindTouchEvents();

      var label = document.createElement('div');
      this._interface.addElement('framerate', label);

      // try to handle screen size changes in the future -- everything should be % based
      var blurValue = this._width / numColumns / 3.5;
      document.getElementById('oobleck-gaussian').setAttribute('stdDeviation', blurValue);
      this._columns = new Columns(numColumns, this._width, this._height, blurValue / this._width);
    }
  }, {
    key: 'start',
    value: function start() {
      var _this3 = this;

      // maybe separate call, or put into constructor?
      this._timing = performance.now();
      this._framesPassed = 0;

      // we use new => syntax to fix the lexical "this"
      window.requestAnimationFrame(function () {
        _this3._state = GAME_STATES.RUN;
        _this3._run();
      });
    }
  }]);

  return Game;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2dhbWUuanMiXSwibmFtZXMiOlsiR0FNRV9TVEFURVMiLCJTVEFSVCIsIlJVTiIsIlBBVVNFIiwiRU5EIiwiR2FtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzRWxlbWVudFNlbGVjdG9yIiwiaW50ZXJmYWNlRWxlbWVudFNlbGVjdG9yIiwiX2Rpc3BsYXkiLCJEcmF3aW5nIiwiX3dpZHRoIiwiX2hlaWdodCIsIl9pbnRlcmZhY2UiLCJJbnRlcmZhY2UiLCJfc3RhdGUiLCJfY29sdW1ucyIsImNvbnNvbGUiLCJsb2ciLCJfdXBkYXRlIiwiX2RyYXciLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfcnVuIiwiX3VwZGF0ZVRpbWluZyIsInVwZGF0ZSIsIl90aW1pbmciLCJNYXRoIiwiYWJzIiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXdyaXRlRWxlbWVudCIsInJvdW5kIiwiX2ZyYW1lc1Bhc3NlZCIsImNsZWFyIiwiZHJhd1RvIiwiZ2V0Q2FudmFzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2hhbmdlZFRvdWNoZXMiLCJsZW5ndGgiLCJ0b3VjaCIsInRvdWNoWCIsInBhcnNlSW50IiwiY2xpZW50WCIsInRvdWNoWSIsImNsaWVudFkiLCJnZXRMZW5ndGgiLCJjb2x1bW5XaWR0aCIsImluZGV4IiwiZmxvb3IiLCJjb2x1bW5Ub3VjaGVkIiwiZ2V0Q29sdW1uIiwicmVmaWxsSGVpZ2h0IiwibnVtQ29sdW1ucyIsIl9iaW5kVG91Y2hFdmVudHMiLCJsYWJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFkZEVsZW1lbnQiLCJibHVyVmFsdWUiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsIkNvbHVtbnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLGNBQWM7QUFDbEJDLFNBQU8sY0FEVztBQUVsQkMsT0FBSyxjQUZhO0FBR2xCQyxTQUFPLGFBSFc7QUFJbEJDLE9BQUs7QUFKYSxDQUFwQjs7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QUVPLENBRVA7Ozt5QkFFSUMsVSxFQUFZO0FBQ2YsV0FBS0MsZ0JBQUw7O0FBRUEsVUFBSUMsUUFBUUMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0EsV0FBSzdDLFVBQUwsQ0FBZ0I4QyxVQUFoQixDQUEyQixXQUEzQixFQUF3Q0gsS0FBeEM7O0FBRUE7QUFDQSxVQUFJSSxZQUFhLEtBQUtqRCxNQUFMLEdBQWMyQyxVQUFmLEdBQTZCLEdBQTdDO0FBQ0FHLGVBQVNJLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDQyxZQUE1QyxDQUF5RCxjQUF6RCxFQUF5RUYsU0FBekU7QUFDQSxXQUFLNUMsUUFBTCxHQUFnQixJQUFJK0MsT0FBSixDQUFZVCxVQUFaLEVBQXdCLEtBQUszQyxNQUE3QixFQUFxQyxLQUFLQyxPQUExQyxFQUFvRGdELFNBQUQsR0FBYyxLQUFLakQsTUFBdEUsQ0FBaEI7QUFDRDs7OzRCQUVPO0FBQUE7O0FBQ047QUFDQSxXQUFLZSxPQUFMLEdBQWVHLFlBQVlDLEdBQVosRUFBZjtBQUNBLFdBQUtHLGFBQUwsR0FBcUIsQ0FBckI7O0FBRUE7QUFDQVosYUFBT0MscUJBQVAsQ0FBNkIsWUFBTTtBQUNqQyxlQUFLUCxNQUFMLEdBQWNoQixZQUFZRSxHQUExQjtBQUNBLGVBQUtzQixJQUFMO0FBQ0QsT0FIRDtBQUlEIiwiZmlsZSI6ImpzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHQU1FX1NUQVRFUyA9IHtcbiAgU1RBUlQ6ICdHYW1lIHN0YXJ0ZWQnLFxuICBSVU46ICdHYW1lIHJ1bm5pbmcnLFxuICBQQVVTRTogJ0dhbWUgcGF1c2VkJyxcbiAgRU5EOiAnR2FtZSBlbmRlZCdcbn1cblxuLy8gY29uc2lkZXIgcmV2ZXJ0aW5nIHRvIGEgZmFjdG9yeSBwYXR0ZXJuP1xuY2xhc3MgR2FtZSB7IC8vIHJlbWluZGVyOiBjbGFzc2VzIGFyZW4ndCBob2lzdGVkXG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGNhbnZhc0VsZW1lbnRTZWxlY3RvciwgaW50ZXJmYWNlRWxlbWVudFNlbGVjdG9yKSB7XG4gICAgLy8gdGhpcy5fZnBzID0gMzA7IC8vIHJ1bnMgc2xpZ2h0bHkgc2xvd2VyIHRoYW4gNjBmcHMgd2hlbiB1c2luZyBzZXRUaW1lb3V0XG4gICAgdGhpcy5fZGlzcGxheSA9IG5ldyBEcmF3aW5nKHdpZHRoLCBoZWlnaHQsIGNhbnZhc0VsZW1lbnRTZWxlY3Rvcik7XG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICB0aGlzLl9pbnRlcmZhY2UgPSBuZXcgSW50ZXJmYWNlKHdpZHRoLCBoZWlnaHQsIGludGVyZmFjZUVsZW1lbnRTZWxlY3Rvcik7XG4gICAgdGhpcy5fc3RhdGUgPSBHQU1FX1NUQVRFUy5TVEFSVDtcblxuICAgIHRoaXMuX2NvbHVtbnM7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgfVxuXG4gIF9ydW4oKSB7XG4gICAgLy8gc2V0VGltZW91dCBjYXVzZXMgYSBzbG93ZG93biBvZiB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgLy8gZGV0ZXJtaW5lIGZwcywgaW5zdGVhZCBvZiB0aHJvdHRsaW5nLCB1bmxlc3MgZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgdGhpcy5fZHJhdygpO1xuXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7IC8vIGltcHJvdmUgZ2FtZSBsb29wIGRlc2lnbiwgZGVjb3VwbGUgcmVuZGVyIGFuZCB1cGRhdGVcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9ydW4oKTtcbiAgICAgIH0pO1xuICAgIC8vIH0sIDEwMDAgLyB0aGlzLl9mcHMpO1xuICB9XG5cbiAgX3VwZGF0ZSgpIHtcbiAgICAvLyBoaWdoIGxldmVsIGNhbGxzXG4gICAgLy8gZG9lc24ndCBleGVjdXRlIHBlcmZlY3RseSwgZXNwZWNpYWxseSBhdCBoaWdoZXIgZnBzXG4gICAgdGhpcy5fdXBkYXRlVGltaW5nKCk7XG4gICAgdGhpcy5fY29sdW1ucy51cGRhdGUoKTtcbiAgICAvLyBmb3IgKClcbiAgfVxuXG4gIF91cGRhdGVUaW1pbmcoKSB7XG4gICAgaWYgKHRoaXMuX3RpbWluZyAmJiBNYXRoLmFicyhwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuX3RpbWluZykgPiAxMDApIHtcbiAgICAgIHRoaXMuX3RpbWluZyA/IHRoaXMuX2ludGVyZmFjZS5yZXdyaXRlRWxlbWVudCgnZnJhbWVyYXRlJywgTWF0aC5yb3VuZCgodGhpcy5fZnJhbWVzUGFzc2VkICogMTAwMCkgLyBNYXRoLmFicyhwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuX3RpbWluZykpKSA6IGNvbnNvbGUubG9nKCdzdGFydGluZycpO1xuICAgICAgdGhpcy5fdGltaW5nID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICB0aGlzLl9mcmFtZXNQYXNzZWQgPSAwO1xuICAgIH1cblxuICAgIHRoaXMuX2ZyYW1lc1Bhc3NlZCArPSAxO1xuICB9XG5cbiAgX2RyYXcoKSB7IC8vIGRyYXcgc3BlY2lmaWNhbGx5IGhhbmRsZXMgdGhlIGdhbWUgZHJhd2luZ1xuICAgIC8vIGhpZ2ggbGV2ZWwgZHJhdyBjYWxsc1xuICAgIHRoaXMuX2Rpc3BsYXkuY2xlYXIoKTtcbiAgICB0aGlzLl9jb2x1bW5zLmRyYXdUbyh0aGlzLl9kaXNwbGF5KTtcbiAgfVxuXG4gIF9iaW5kVG91Y2hFdmVudHMoKSB7XG4gICAgdGhpcy5fZGlzcGxheS5nZXRDYW52YXMoKS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0b3VjaHN0YXJ0OicpO1xuICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgIGZvciAobGV0IHRvdWNoIG9mIGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgICAgbGV0IHRvdWNoWCA9IHBhcnNlSW50KHRvdWNoLmNsaWVudFgpO1xuICAgICAgICAgIGxldCB0b3VjaFkgPSBwYXJzZUludCh0b3VjaC5jbGllbnRZKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvdWNoWCwgdG91Y2hZKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9jb2x1bW5zICYmIHRoaXMuX2NvbHVtbnMuZ2V0TGVuZ3RoKCkgPiAwKSB7XG4gICAgICAgICAgICBsZXQgY29sdW1uV2lkdGggPSB0aGlzLl93aWR0aCAvIHRoaXMuX2NvbHVtbnMuZ2V0TGVuZ3RoKCk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKHRvdWNoWCAvIGNvbHVtbldpZHRoKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuXG4gICAgICAgICAgICBsZXQgY29sdW1uVG91Y2hlZCA9IHRoaXMuX2NvbHVtbnMuZ2V0Q29sdW1uKGluZGV4KTtcbiAgICAgICAgICAgIGNvbHVtblRvdWNoZWQucmVmaWxsSGVpZ2h0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXNldCgpIHtcblxuICB9XG5cbiAgaW5pdChudW1Db2x1bW5zKSB7XG4gICAgdGhpcy5fYmluZFRvdWNoRXZlbnRzKCk7XG5cbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLl9pbnRlcmZhY2UuYWRkRWxlbWVudCgnZnJhbWVyYXRlJywgbGFiZWwpO1xuXG4gICAgLy8gdHJ5IHRvIGhhbmRsZSBzY3JlZW4gc2l6ZSBjaGFuZ2VzIGluIHRoZSBmdXR1cmUgLS0gZXZlcnl0aGluZyBzaG91bGQgYmUgJSBiYXNlZFxuICAgIGxldCBibHVyVmFsdWUgPSAodGhpcy5fd2lkdGggLyBudW1Db2x1bW5zKSAvIDMuNTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb29ibGVjay1nYXVzc2lhbicpLnNldEF0dHJpYnV0ZSgnc3RkRGV2aWF0aW9uJywgYmx1clZhbHVlKTtcbiAgICB0aGlzLl9jb2x1bW5zID0gbmV3IENvbHVtbnMobnVtQ29sdW1ucywgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCwgKGJsdXJWYWx1ZSkgLyB0aGlzLl93aWR0aCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAvLyBtYXliZSBzZXBhcmF0ZSBjYWxsLCBvciBwdXQgaW50byBjb25zdHJ1Y3Rvcj9cbiAgICB0aGlzLl90aW1pbmcgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB0aGlzLl9mcmFtZXNQYXNzZWQgPSAwO1xuXG4gICAgLy8gd2UgdXNlIG5ldyA9PiBzeW50YXggdG8gZml4IHRoZSBsZXhpY2FsIFwidGhpc1wiXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IEdBTUVfU1RBVEVTLlJVTjtcbiAgICAgIHRoaXMuX3J1bigpO1xuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
