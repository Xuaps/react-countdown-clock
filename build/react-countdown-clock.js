(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactCountdownClock"] = factory(require("react"));
	else
		root["ReactCountdownClock"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React, _canvas, _context, _fraction, _radius, _timer;
	
	React = __webpack_require__(1);
	
	_radius = null;
	
	_fraction = null;
	
	_context = null;
	
	_canvas = null;
	
	_timer = null;
	
	module.exports = React.createClass({
	  propTypes: {
	    seconds: React.PropTypes.number,
	    size: React.PropTypes.number,
	    color: React.PropTypes.string,
	    alpha: React.PropTypes.number,
	    onComplete: React.PropTypes.func
	  },
	  getDefaultProps: function() {
	    return {
	      seconds: 60,
	      size: 300,
	      color: '#000',
	      alpha: 1
	    };
	  },
	  getInitialState: function() {
	    return {
	      seconds: this.props.seconds
	    };
	  },
	  componentWillReceiveProps: function(props) {
	    this._setScale();
	    this._setupCanvas();
	    this._drawTimer();
	    this._startTimer();
	    return this.setState({
	      seconds: props.seconds
	    });
	  },
	  componentWillUnmount: function() {
	    return clearTimeout(_timer);
	  },
	  componentDidMount: function() {
	    this._setScale();
	    this._setupCanvas();
	    this._drawTimer();
	    return this._startTimer();
	  },
	  componentDidUpdate: function() {
	    this._setScale();
	    this._clearTimer();
	    this._drawTimer();
	    if (this.state.seconds <= 0) {
	      return this._handleComplete();
	    }
	  },
	  _setScale: function() {
	    _radius = this.props.size / 2;
	    return _fraction = 2 / this.props.seconds;
	  },
	  _setupCanvas: function() {
	    _canvas = this.getDOMNode();
	    _context = _canvas.getContext('2d');
	    _context.textAlign = 'center';
	    _context.textBaseline = 'middle';
	    return _context.font = "bold " + (_radius / 2) + "px Arial";
	  },
	  _startTimer: function() {
	    return _timer = setTimeout(((function(_this) {
	      return function() {
	        return _this._tick();
	      };
	    })(this)), 200);
	  },
	  _tick: function() {
	    var start;
	    start = Date.now();
	    return setTimeout(((function(_this) {
	      return function() {
	        var duration;
	        duration = Date.now() - start;
	        _this.setState({
	          seconds: Math.max(0, _this.state.seconds - duration / 1000)
	        });
	        if (!(_this.state.seconds <= 0)) {
	          return _this._tick();
	        }
	      };
	    })(this)), 30);
	  },
	  _handleComplete: function() {
	    if (this.props.onComplete) {
	      return this.props.onComplete();
	    }
	  },
	  _clearTimer: function() {
	    clearTimeout(_timer);
	    _context.clearRect(0, 0, _canvas.width, _canvas.height);
	    return this._drawBackground();
	  },
	  _drawBackground: function() {
	    _context.beginPath();
	    _context.globalAlpha = this.props.alpha / 3;
	    _context.arc(_radius, _radius, _radius, 0, Math.PI * 2, false);
	    _context.arc(_radius, _radius, _radius / 1.8, Math.PI * 2, 0, true);
	    return _context.fill();
	  },
	  _drawTimer: function() {
	    var decimals, percent, ref;
	    percent = _fraction * this.state.seconds + 1.5;
	    decimals = (ref = this.state.seconds <= 9.9) != null ? ref : {
	      1: 0
	    };
	    _context.globalAlpha = this.props.alpha;
	    _context.fillStyle = this.props.color;
	    _context.fillText(this.state.seconds.toFixed(decimals), _radius, _radius);
	    _context.beginPath();
	    _context.arc(_radius, _radius, _radius, Math.PI * 1.5, Math.PI * percent, false);
	    _context.arc(_radius, _radius, _radius / 1.8, Math.PI * percent, Math.PI * 1.5, true);
	    return _context.fill();
	  },
	  render: function() {
	    return React.createElement("canvas", {
	      "className": "react-countdown-clock",
	      "width": this.props.size,
	      "height": this.props.size
	    });
	  }
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-countdown-clock.js.map