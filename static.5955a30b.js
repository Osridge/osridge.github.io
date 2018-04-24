(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _heroLobaughCut = __webpack_require__(24);

var _heroLobaughCut2 = _interopRequireDefault(_heroLobaughCut);

var _reactParallax = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var backgroundStyle = {
  width: "100%",
  backgroundImage: 'url(${headerImg})'
};

exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      { id: 'header' },
      _react2.default.createElement('img', { src: _heroLobaughCut2.default }),
      _react2.default.createElement(
        'div',
        { 'class': 'container' },
        _react2.default.createElement(
          'div',
          { 'class': 'row' },
          _react2.default.createElement(
            'div',
            { 'class': 'col-xs-9 col-xs-push-1 col-sm-8 col-sm-push-2 text-center' },
            _react2.default.createElement(
              'h2',
              null,
              'If You\'re hurt and'
            ),
            _react2.default.createElement(
              'h2',
              { 'class': 'large' },
              'Need Help'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'We Will Fight For Your Rights'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                { href: '/contact', 'class': 'btn btn-primary' },
                'Free Consultation'
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { id: 'about' },
      _react2.default.createElement(
        'div',
        { 'class': 'container' },
        _react2.default.createElement(
          'div',
          { 'class': 'row' },
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-6' },
            _react2.default.createElement(
              'div',
              { 'class': 'embed-container' },
              _react2.default.createElement('iframe', { src: 'https://player.vimeo.com/video/219154341', width: '300', height: '150', frameborder: '0', allowfullscreen: 'allowfullscreen' })
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-6' },
            _react2.default.createElement(
              'h2',
              null,
              'We Don\u2019t Get Paid ',
              _react2.default.createElement(
                'strong',
                null,
                'Unless You Win!'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'The Ponca City based law firm of Lobaugh Law has been representing the rights of Oklahomans for over 30 years. Our team is always uniquely positioned to offer strong representation and we\u2019re an easy conversation away from forthright legal advice for your situation.Many clients have remarked that the way we treat our clients is not the same as many attorneys. We say putting people first is simply the way it should be.If you or someone you love has been involved in an auto accident, don\u2019t waste another moment. Enlistthe advocacy of Lobaugh Law Firm.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                { 'class': 'btn btn-primary', href: '/contact' },
                'Free Consultation'
              ),
              ' ',
              _react2.default.createElement(
                'a',
                { 'class': 'btn btn-hollow', href: '/about-the-firm' },
                'Learn More'
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { id: 'experience', 'class': 'jarallax' },
      _react2.default.createElement('img', { src: 'http://lobaughlaw.com/wp-content/uploads/2017/08/hero-lobaugh2.jpg', 'class': 'jarallax-img' }),
      _react2.default.createElement(
        'div',
        { 'class': 'container' },
        _react2.default.createElement(
          'div',
          { 'class': 'row' },
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-8 col-sm-push-2' },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('img', { 'class': 'alignnone size-full wp-image-522', src: 'http://lobaughlaw.com/wp-content/uploads/2017/08/logo-lobaugh-white.png', alt: '', width: '252', height: '27' })
            ),
            _react2.default.createElement('ul', { id: 'expCarousel', 'class': 'carousel owl-carousel owl-theme owl-loaded' })
          )
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { id: 'areas' },
      _react2.default.createElement(
        'div',
        { 'class': 'container' },
        _react2.default.createElement(
          'div',
          { 'class': 'row' },
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-12' },
            _react2.default.createElement(
              'h2',
              null,
              'Specializing in Handling Our CLient\'s Needs'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { 'class': 'row' },
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-3' },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                { href: 'http://lobaughlaw.com/services/oklahoma-personal-injury/' },
                _react2.default.createElement('img', { 'class': 'alignnone size-full wp-image-524', src: 'http://lobaughlaw.com/wp-content/uploads/2017/08/icon-injury.png', alt: '', width: '178', height: '178' }),
                _react2.default.createElement(
                  'strong',
                  null,
                  'Personal Injury'
                ),
                ' Have you been hurt in a car, truck, or motorcycle accident? We can help you get the treatment you need and pursue the maximum compensation from your accident.'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-3' },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                { href: 'http://lobaughlaw.com/services/oklahoma-workers-compensation/' },
                _react2.default.createElement('img', { 'class': 'alignnone size-full wp-image-525', src: 'http://lobaughlaw.com/wp-content/uploads/2017/08/icon-workers.png', alt: '', width: '178', height: '178' }),
                _react2.default.createElement(
                  'strong',
                  null,
                  'Workers Comp'
                ),
                ' Have you been hurt at work? We help Oklahomans all across the state when no-one else is there. If you\'re hurt and need help.'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-3' },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                { href: 'http://lobaughlaw.com/services/estate-planning/' },
                _react2.default.createElement('img', { 'class': 'alignnone size-full wp-image-526', src: 'http://lobaughlaw.com/wp-content/uploads/2017/08/icon-estate.png', alt: '', width: '178', height: '178' }),
                _react2.default.createElement(
                  'strong',
                  null,
                  'Estate Planning'
                ),
                ' While no one wants to face their own mortality, estate planning is necessary to protect your assets and turn your wishes and goals into enforceable legal arrangements.'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-3' },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                { href: '/services/oklahoma-social-security/' },
                _react2.default.createElement('img', { 'class': 'alignnone size-full wp-image-528', src: 'http://lobaughlaw.com/wp-content/uploads/2017/08/icon-social.png', alt: '', width: '178', height: '178' }),
                _react2.default.createElement(
                  'strong',
                  null,
                  'Social Security'
                ),
                ' Getting your social security disability income started is a serious matter. We have helped thousands of people nationwide get their SSD benefits started.'
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { id: 'action', 'class': 'parallax-window', 'data-parallax': 'scroll', 'data-image-src': '', 'data-position-y': 'top', 'data-speed': '0.5' },
      _react2.default.createElement(
        'div',
        { 'class': 'container' },
        _react2.default.createElement(
          'div',
          { 'class': 'row' },
          _react2.default.createElement(
            'div',
            { 'class': 'col-xs-12 text-center' },
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement(
                'div',
                { 'class': 'col-sm-5' },
                _react2.default.createElement('img', { 'class': 'wp-image-611', src: 'http://lobaughlaw.com/wp-content/uploads/2017/09/HardHat.png' })
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'col-sm-7' },
                _react2.default.createElement(
                  'h2',
                  null,
                  'We will fight for your rights when no one else will'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'a',
                    { 'class': 'btn btn-white', href: '/contact' },
                    'Free Consultation'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'a',
                    { href: 'tel:(800) 375-3333' },
                    '(800) 375-3333'
                  )
                )
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { id: 'videos' },
      _react2.default.createElement(
        'div',
        { 'class': 'container' },
        _react2.default.createElement(
          'div',
          { 'class': 'row' },
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-12 text-center' },
            _react2.default.createElement(
              'h2',
              null,
              'OUR CLIENT\u2019S SPEAK FOR THEMSELVES'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { 'class': 'row' },
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-4' },
            _react2.default.createElement(
              'div',
              { 'class': 'embed-container' },
              _react2.default.createElement('iframe', { src: 'https://player.vimeo.com/video/219154843', frameborder: '0', webkitallowfullscreen: '', mozallowfullscreen: '', allowfullscreen: '' })
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-4' },
            _react2.default.createElement(
              'div',
              { 'class': 'embed-container' },
              _react2.default.createElement('iframe', { src: 'https://player.vimeo.com/video/219155028', frameborder: '0', webkitallowfullscreen: '', mozallowfullscreen: '', allowfullscreen: '' })
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-4' },
            _react2.default.createElement(
              'div',
              { 'class': 'embed-container' },
              _react2.default.createElement('iframe', { src: 'https://player.vimeo.com/video/219155230', frameborder: '0', webkitallowfullscreen: '', mozallowfullscreen: '', allowfullscreen: '' })
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { id: 'contact' },
      _react2.default.createElement(
        'div',
        { 'class': 'row' },
        _react2.default.createElement(
          'div',
          { 'class': 'col-md-6' },
          _react2.default.createElement(
            'form',
            { name: 'contact', method: 'POST', netlify: true },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'label',
                null,
                'Your Name: ',
                _react2.default.createElement('input', { type: 'text', name: 'name' })
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'label',
                null,
                'Your Email: ',
                _react2.default.createElement('input', { type: 'email', name: 'email' })
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'label',
                null,
                'Message: ',
                _react2.default.createElement('textarea', { name: 'message' })
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'button',
                { type: 'submit' },
                'Send'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { 'class': 'col-md-6' },
          _react2.default.createElement('iframe', { src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.5742852883527!2d-95.9190044840304!3d36.10386431428322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b692b9a7e9d38d%3A0xca15df971ef62c58!2sLobaugh+Stacey!5e0!3m2!1sen!2sus!4v1524512041903', width: '100%', height: '450', frameborder: '0', allowfullscreen: true })
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { id: 'blogs' },
      _react2.default.createElement(
        'div',
        { 'class': 'container' },
        _react2.default.createElement(
          'div',
          { 'class': 'row' },
          _react2.default.createElement(
            'div',
            { 'class': 'col-xs-12 text-center' },
            _react2.default.createElement(
              'h2',
              null,
              'Recent News & Updates'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { 'class': 'row' },
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-4' },
            _react2.default.createElement('a', { href: '/depression-fatigue-workplace-injuries/' }),
            _react2.default.createElement(
              'div',
              { 'class': 'post-single' },
              _react2.default.createElement(
                'a',
                { href: '/depression-fatigue-workplace-injuries/' },
                _react2.default.createElement('div', { 'class': 'thumb1' }),
                _react2.default.createElement(
                  'div',
                  { 'class': 'title' },
                  _react2.default.createElement(
                    'h4',
                    null,
                    'Study Addresses Role of Depression and Fatigue in Workplace Injuries'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'excerpt' },
                _react2.default.createElement(
                  'a',
                  { href: '/depression-fatigue-workplace-injuries/' },
                  'How often do depression and fatigue play a role in workplace injuries that occur in Tulsa? While we often assume that workplace injuries and workers\u2019 compensation claims are tied entirely to unsafe working conditions, it turns out that mental health can also affect a workers\u2019 ability to perform her job at the highest level. According\u2026 '
                ),
                _react2.default.createElement(
                  'a',
                  { 'class': 'read-more', href: '/depression-fatigue-workplace-injuries/' },
                  'Read More'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'meta' },
                _react2.default.createElement('i', { 'class': 'fa fa-newspaper-o', 'aria-hidden': 'true' }),
                ' April 2, 2018',
                _react2.default.createElement(
                  'span',
                  { 'class': 'pull-right' },
                  _react2.default.createElement(
                    'a',
                    { target: 'new', href: 'http://www.facebook.com/sharer.php?u=/depression-fatigue-workplace-injuries/' },
                    _react2.default.createElement('i', { 'class': 'fa fa-thumbs-o-up', 'aria-hidden': 'true' })
                  ),
                  '   ',
                  _react2.default.createElement(
                    'a',
                    { target: 'new', href: 'http://twitter.com/share?text=&url=/depression-fatigue-workplace-injuries/' },
                    _react2.default.createElement('i', { 'class': 'fa fa-twitter', 'aria-hidden': 'true' })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-4' },
            _react2.default.createElement('a', { href: '/can-obtain-compensation-auto-accident-oklahoma/' }),
            _react2.default.createElement(
              'div',
              { 'class': 'post-single' },
              _react2.default.createElement(
                'a',
                { href: '/can-obtain-compensation-auto-accident-oklahoma/' },
                _react2.default.createElement('div', { 'class': 'thumb2' }),
                _react2.default.createElement(
                  'div',
                  { 'class': 'title' },
                  _react2.default.createElement(
                    'h4',
                    null,
                    'How Can I Obtain Compensation for an Auto Accident in Oklahoma?'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'excerpt' },
                _react2.default.createElement(
                  'a',
                  { href: '/can-obtain-compensation-auto-accident-oklahoma/' },
                  'When you are involved in a severe auto accident in Oklahoma, it can be difficult to think about anything except the pain and suffering from the injury. However, it is important to think about filing an auto accident claim. Under Oklahoma law, our state is an at-fault state when it comes to filing a claim\u2026 '
                ),
                _react2.default.createElement(
                  'a',
                  { 'class': 'read-more', href: '/can-obtain-compensation-auto-accident-oklahoma/' },
                  'Read More'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'meta' },
                _react2.default.createElement('i', { 'class': 'fa fa-newspaper-o', 'aria-hidden': 'true' }),
                ' March 1, 2018',
                _react2.default.createElement(
                  'span',
                  { 'class': 'pull-right' },
                  _react2.default.createElement(
                    'a',
                    { target: 'new', href: 'http://www.facebook.com/sharer.php?u=/can-obtain-compensation-auto-accident-oklahoma/' },
                    _react2.default.createElement('i', { 'class': 'fa fa-thumbs-o-up', 'aria-hidden': 'true' })
                  ),
                  '   ',
                  _react2.default.createElement(
                    'a',
                    { target: 'new', href: 'http://twitter.com/share?text=&url=/can-obtain-compensation-auto-accident-oklahoma/' },
                    _react2.default.createElement('i', { 'class': 'fa fa-twitter', 'aria-hidden': 'true' })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'col-sm-4' },
            _react2.default.createElement('a', { href: '/drowsy-driving-crashes-need-know/' }),
            _react2.default.createElement(
              'div',
              { 'class': 'post-single' },
              _react2.default.createElement(
                'a',
                { href: '/drowsy-driving-crashes-need-know/' },
                _react2.default.createElement('div', { 'class': 'thumb3' }),
                _react2.default.createElement(
                  'div',
                  { 'class': 'title' },
                  _react2.default.createElement(
                    'h4',
                    null,
                    'Drowsy Driving Crashes: What Do You Need to Know?'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'excerpt' },
                _react2.default.createElement(
                  'a',
                  { href: '/drowsy-driving-crashes-need-know/' },
                  'While drowsy driving may not seem as dangerous as other behaviors behind the wheel, such as drunk driving or distracted driving, an article from the National Sleep Foundation emphasizes that \u201Cdrowsy driving is dangerous because sleep deprivation can have similar effects on your body as drinking alcohol.\u201D Indeed, when a person is awake for 18\u2026 '
                ),
                _react2.default.createElement(
                  'a',
                  { 'class': 'read-more', href: '/drowsy-driving-crashes-need-know/' },
                  'Read More'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'meta' },
                _react2.default.createElement('i', { 'class': 'fa fa-newspaper-o', 'aria-hidden': 'true' }),
                ' February 3, 2018',
                _react2.default.createElement(
                  'span',
                  { 'class': 'pull-right' },
                  _react2.default.createElement(
                    'a',
                    { target: 'new', href: 'http://www.facebook.com/sharer.php?u=/drowsy-driving-crashes-need-know/' },
                    _react2.default.createElement('i', { 'class': 'fa fa-thumbs-o-up', 'aria-hidden': 'true' })
                  ),
                  '   ',
                  _react2.default.createElement(
                    'a',
                    { target: 'new', href: 'http://twitter.com/share?text=&url=/drowsy-driving-crashes-need-know/' },
                    _react2.default.createElement('i', { 'class': 'fa fa-twitter', 'aria-hidden': 'true' })
                  )
                )
              )
            )
          )
        )
      )
    )
  );
});

// setTimeout(function(){
//   jarallax(document.querySelectorAll('.jarallax'), {
//     speed: 0.4
//   });
// }, 0);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'This is what we\'re all about.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Marketing, design, and web development.'
    )
  );
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/blog/' },
      '<',
      ' Back'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      null,
      post.title
    ),
    _react2.default.createElement(
      'p',
      null,
      post.body
    )
  );
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'It\'s blog time.'
    ),
    _react2.default.createElement('br', null),
    'All Posts:',
    _react2.default.createElement(
      'ul',
      null,
      posts.map(function (post) {
        return _react2.default.createElement(
          'li',
          { key: post.id },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/blog/post/' + post.id + '/' },
            post.title
          )
        );
      })
    )
  );
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  body {\n    font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\', Helvetica, Arial,\n      \'Lucida Grande\', sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n'], ['\n  body {\n    font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\', Helvetica, Arial,\n      \'Lucida Grande\', sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _styledComponents = __webpack_require__(13);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactHotLoader = __webpack_require__(14);

var _reactStaticRoutes = __webpack_require__(15);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _bootstrapMin = __webpack_require__(26);

var _bootstrapMin2 = _interopRequireDefault(_bootstrapMin);

var _bootstrapThemeMin = __webpack_require__(27);

var _bootstrapThemeMin2 = _interopRequireDefault(_bootstrapThemeMin);

__webpack_require__(28);

var _logoLobaugh = __webpack_require__(29);

var _logoLobaugh2 = _interopRequireDefault(_logoLobaugh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//

// import jarallax from './assets/Jarallax.js'


(0, _styledComponents.injectGlobal)(_templateObject);

var AppStyles = _styledComponents2.default.div.withConfig({
  displayName: 'App__AppStyles'
})(['']);

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      AppStyles,
      null,
      _react2.default.createElement(
        'header',
        { 'class': 'header' },
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'div',
            { 'class': 'navLogo' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/' },
              _react2.default.createElement('img', { src: _logoLobaugh2.default })
            )
          ),
          _react2.default.createElement(
            'ul',
            { 'class': 'menu' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/' },
                'Home'
              ),
              _react2.default.createElement(
                'ul',
                { 'class': 'submenu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactStatic.Link,
                    { to: '/' },
                    'Home'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactStatic.Link,
                    { to: '/about' },
                    'About'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '/blog' },
                    'Blog'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/about' },
                'About'
              ),
              _react2.default.createElement(
                'ul',
                { 'class': 'submenu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactStatic.Link,
                    { to: '/' },
                    'Home'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  ' ',
                  _react2.default.createElement(
                    _reactStatic.Link,
                    { to: '/about' },
                    'About'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { 'class': 'submenu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/' },
                        'Home'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/about' },
                        'About'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/blog' },
                        'Blog'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactStatic.Link,
                    { to: '/blog' },
                    'Blog'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/blog' },
                'Blog'
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);

// setTimeout(function(){
//   jarallax(document.querySelectorAll('.jarallax'), {
//     speed: 0.4
//   });
// }, 1)
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(16);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(17);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(18);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(19);

var _reactUniversalComponent = __webpack_require__(20);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/Users/developer/Desktop/static-react/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 5)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(5);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/Users/developer/Desktop/static-react/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(6);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post',
  file: '/Users/developer/Desktop/static-react/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 7)), (0, _importCss3.default)('src/containers/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Blog',
  file: '/Users/developer/Desktop/static-react/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/Blog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/Blog';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/Users/developer/Desktop/static-react/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 4

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(21);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(22);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(23);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(3);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/hero-lobaugh-cut.f76a4663.jpg";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-parallax");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAAbCAYAAABY6uJdAAAFfElEQVR42u2c243sIAyGt4VpIe/7lBbSQlpIC7RAC7SQFmghLdACLewZpEXJWji/gRzmRiRrNUpCwPZnwLB8/fz8fHXp0uUzpLqA0uv7+3u8i7rLepefhGy/9+evfvWrX6mrCvgAoYvAAbEs8Bj0KbxPykPiIvikrEVaBggqY0E7bnfxVC/wPbmOTUl7wbfD++qkDjrcPzxvSbtgPZA+Mmy/0Hcr7T9dCVrQE/hGTv2WAh2ZA/C0PlRcO+CxkkyEmcCkEkCZGuCBaFR/4beHZwOe6FIiPtqqA59lR/NSwN8lwrYyveFEnq+B3TNGoOBvCMwQMBIO7chj9HmX62RCoyjwKtLxKHzfHMG6y5B6jqnnCoIsAy7QO9IjDv4OgonrgYN4PezTSaC80ecZW6sC39/AkJ6OPG34jebwXIOW0jl8cMZEeXPFu5MAQFdQ7pZTJ8bJXKbTYFBw/RfgMNlBFgGP9Y4v0EOCq6Ie9cAban9ki1TQFXxHU/sB4Om3xv1eW+BtVmNxhLRFBsfvkAZBQ2gmek+PBp6p15iRn3AdeHIReBkbWmH9vOBbW8qGAPg5lh9+NwUe9+7yIRuYK7cG3kflM3UzzYHHZZvcYWsH/nQqsp5AOQinMDMKLAnRAHgdddkOeNzQW0lUJaKqgQdzJBB8NhIAwFyuKfCrxAkl+unAszqZT/xbMcvQHLyYm102ALyL9XsU8OYKQ4CMff0cHgNHYVJkiA/Kagq8FwcyHNxUKL8D/wdaDzojJ8zsbwI/8yfDesrteOxwHgW8vcL5QCIJGxxn6VUmZDcAr20JPOhJTK2zd+D/dF6a+TZKLGvBaJdm2hd+BEGB36cb4fejgHcCEIoCB7gvFbUrXT5/E67LDq2AB/kO1Q54ubwS8ATCUbDeboS5qPnkOQc6O8LtPvp8R+DdxY6nd/BhWxbhnEu3Ah4439KBz78YqB0IBqT3hs/ps1UgkAej3Pp475mAd416eIfmp8w69QgA3RNyOCfgXwn4WCaSTxzSH8pXYLiPkncr8hE6kgh/GZummN3C73cAnsK5XpClv7H14w1lMtdN5ycAXnXgiy8K3JCxdLwJR4JjKjEIOFoJ8DraujXw8X0F1rprs/S62OA4kTKfbbbIXEpZWwAPytW5Dp6aN4ZvvmvS7td2E/ARi3yUgRkFVZXwIX3mpzQTf7DX+AjgTWwIA9R4wTr8XGNw2CNikOUinwKoQuCn4m2c8uC1vGuW/qBLD0AuES0crdJ7k2AdfybbaV343RJ4Wun5iqxxLINGt4bAu3xD4/ZWAj+d9CI2pa8OPN5MBfyjRLxwj/wOrjzwGLKdVjcBHgx/qzP1oWHAMS4HngFrAMWBuRyO9AVAemEdlkyd6w8CXoP/0UB1w3kc3FuPB1/UQpt4shw3PwL4hQJCoUJzYaAcXz2XxNnVmdxHQUo+l8NThSHz/7GNFADSy8Nk5gcBv+sSTJu4C+dxcE7qAO6UkfeZQlkR/hbAUwV5ZjfamnDAQQC7ozBWGBzVN4jndjyV9o4gajvgHMiphoy2bVjn+//QfwLwxFaa0bMrzjdRFngetghuVmeyt3vFwOMDMDDw/KkqXuBI/rDTjUYyDUYF+AAMPJR3oHfX6NsZkdgz2y1HBkzFtHMFEKKAGUQlkkIDOBlngXrfRT38AAxs/zHh54rRnb1gM9KKp1046DFcBJnrzrSrFwcNLZdgmOHqhAoDO9ADOoADCwObzTyCai4ecWDZEkFrefEjriSyCMq0IMAjsWAkwNgVBorbo4G3lQcqmr33/68GN6RHag08dRzFJH6CaAAC7FUB/I6AvX0Y8FMT4PkEny/MEdnIMJKnOCu7S5cuL3IufZcuXV5HnqISXbp0aSP/AMP/UDgUYAJWAAAAAElFTkSuQmCC"

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.5955a30b.js.map