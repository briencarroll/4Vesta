/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./assets/1.png */ "./src/assets/1.png"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ./assets/2.png */ "./src/assets/2.png"));
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ./assets/3.png */ "./src/assets/3.png"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ./assets/4.png */ "./src/assets/4.png"));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ./assets/5.png */ "./src/assets/5.png"));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ./assets/6.png */ "./src/assets/6.png"));
// Module
exports.push([module.i, "html {\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: purple;\n    --background-one-blend-mode: darken;\n    --background-two-blend-mode: difference;\n    overflow: hidden;\n    border: 0;\n    margin: 0;\n    font-family: 'Gayathri', sans-serif;\n  }\n\n  .background-one {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100vw;\n    height: 100vh;\n    background: url(" + ___CSS_LOADER_URL___0___ + "),\n      url(" + ___CSS_LOADER_URL___1___ + "),\n      url(" + ___CSS_LOADER_URL___2___ + ");\n    background-color: purple;\n    background-blend-mode: var(--background-one-blend-mode);\n    animation: infinite-fade 20s infinite alternate-reverse, color-change-1 20s infinite alternate, wobbleScale 40s infinite alternate;\n  }\n\n  .background-two {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100vw;\n    height: 100vh;\n    background: url(" + ___CSS_LOADER_URL___3___ + "),\n      url(" + ___CSS_LOADER_URL___4___ + "),\n      url(" + ___CSS_LOADER_URL___5___ + ");\n    background-color: red;\n    background-blend-mode: var(--background-two-blend-mode);\n    animation: infinite-fade 20s infinite alternate, color-change-1 20s infinite alternate-reverse, wobbleScale 30s infinite alternate-reverse;\n  }\n  \n  .container {\n    padding: 20px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n  \n  .title {\n    margin: 0;\n    position: relative;\n    font-size: 76px;\n    color: white;\n  }\n  \n  .title::before, .title::after {\n    content: attr(data-text);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n  \n  .title::before {\n    text-shadow: -1px 0 blue;\n    left: 2px;\n    clip-path: inset(20% 4%);\n    animation: noise-anim 2s infinite linear alternate-reverse;\n  }\n  \n  .title::after {\n    text-shadow: -1px 0 red;\n    left: -2px;\n    clip-path: inset(24% 0%);\n    animation: noise-anim-2 2s infinite linear alternate-reverse;\n  }\n  \n  .navigation {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n  }\n\n  a {\n    text-decoration: none;\n    position: relative;\n    padding: 10px;\n    color: white;\n    transition: color 220ms ease;\n    display: block;\n  }\n\n  \n  a:hover {\n    color: #d9dad9ac;\n    transition: color 200ms ease;\n  }\n\n  @keyframes noise-anim {\n    0% {\n      clip-path: inset(40% 0 61% 0);\n    }\n    20% {\n      clip-path: inset(92% 0 1% 0);\n    }\n    40% {\n      clip-path: inset(43% 0 1% 0);\n    }\n    60% {\n      clip-path: inset(25% 0 58% 0);\n    }\n    80% {\n      clip-path: inset(54% 0 7% 0);\n    }\n    100% {\n      clip-path: inset(58% 0 43% 0);\n    }\n  }\n  \n  @keyframes noise-anim-2 {\n    0% {\n      clip-path: inset(10% 0 11% 0);\n    }\n    20% {\n      clip-path: inset(12% 0 91% 0);\n    }\n    40% {\n      clip-path: inset(43% 0 1% 0);\n    }\n    60% {\n      clip-path: inset(52% 0 86% 0);\n    }\n    80% {\n      clip-path: inset(7% 0 54% 0);\n    }\n    100% {\n      clip-path: inset(43% 0 4% 0);\n    }\n  }\n\n  @keyframes infinite-spinning {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes infinite-fade {\n    from {\n      opacity: 1;\n    }\n    to {\n      opacity: 0;\n    }\n  }\n\n  @keyframes color-change-1 {\n    0% { background-color: #000519; }\n    10% { background-color: #000a32; }\n    20% { background-color: #00507d; }\n    30% { background-color: #0096c8; }\n    40% { background-color: #7bccc4; }\n    50% { background-color: #4eb3d3; }\n    60% { background-color: #2b8cbe; }\n    70% { background-color: #0868ac; }\n    80% { background-color: #084081; }\n    90% { background-color: #9163b6; }\n    100% { background-color: #5698c4; }\n  }\n  @keyframes color-change-2 {\n    0% { background-color: #4d004b; }\n    10% { background-color: #810f7c; }\n    20% { background-color: #88419d; }\n    30% { background-color: #fa9fb5; }\n    40% { background-color: #f768a1; }\n    50% { background-color: #dd3497; }\n    60% { background-color: #ae017e; }\n    70% { background-color: #7a0177; }\n    80% { background-color: #49006a; }\n    90% { background-color: #e0598b; }\n    100% { background-color: #5698c4; }\n  }\n  @keyframes color-change-3 {\n    0% { background-color: #61219b; }\n    10% { background-color: #9226c7; }\n    20% { background-color: #ac92eb; }\n    30% { background-color: #5d9cec; }\n    40% { background-color: #97ead8; }\n    50% { background-color: #dd3497; }\n    60% { background-color: #ae017e; }\n    70% { background-color: #7a0177; }\n    80% { background-color: #49006a; }\n    90% { background-color: #e0598b; }\n    100% { background-color: #5698c4; }\n  }\n\n  @keyframes wobbleScale {\n    from {\n      transform: scale(1.0);\n    }\n    to {\n      transform: scale(1.9);\n    }\n  }\n\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/assets/1.png":
/*!**************************!*\
  !*** ./src/assets/1.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "447fc040299b927e7e77aa77e3af785f.png";

/***/ }),

/***/ "./src/assets/2.png":
/*!**************************!*\
  !*** ./src/assets/2.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eb309b822e8d0dd16dfc9663c4312abf.png";

/***/ }),

/***/ "./src/assets/3.png":
/*!**************************!*\
  !*** ./src/assets/3.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "106eea59254bcddb3e1a8d255478a878.png";

/***/ }),

/***/ "./src/assets/4.png":
/*!**************************!*\
  !*** ./src/assets/4.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ea570e29f3340683d343ba8ef918a73e.png";

/***/ }),

/***/ "./src/assets/5.png":
/*!**************************!*\
  !*** ./src/assets/5.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d2dff7b52f61479147292763e3bfb64e.png";

/***/ }),

/***/ "./src/assets/6.png":
/*!**************************!*\
  !*** ./src/assets/6.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ee78bfd234dcb77353cb7b78e1932b2b.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
 // import bg1 from './assets/1.png'
// import bg2 from './assets/2.png'
// import bg3 from './assets/3.png'
// const creativeHarmony = [
//   '#61219b',
//   '#9226c7',
//   '#ac92eb',
//   '#5d9cec',
//   '#97ead8',
// ]

window.addEventListener('DOMContentLoaded', function () {
  var nodes = {
    body: document.querySelectorAll('body'),
    bgOne: document.querySelectorAll('.background-one'),
    bgTwo: document.querySelectorAll('.background-two'),
    title: document.querySelectorAll('.title'),
    links: document.querySelectorAll('.link'),
    spotify: document.querySelectorAll('.spotify'),
    bandcamp: document.querySelectorAll('.bandcamp'),
    contact: document.querySelectorAll('.contact')
  };
  nodes.title[0].addEventListener('mouseenter', function () {
    nodes.bgOne[0].style.setProperty('--background-one-blend-mode', 'darken');
    nodes.bgTwo[0].style.setProperty('--background-two-blend-mode', 'difference');
  });
  nodes.bandcamp[0].addEventListener('mouseenter', function () {
    nodes.bgOne[0].style.setProperty('--background-one-blend-mode', 'overlay');
    nodes.bgTwo[0].style.setProperty('--background-two-blend-mode', 'hue');
  });
  nodes.spotify[0].addEventListener('mouseenter', function () {
    nodes.bgOne[0].style.setProperty('--background-one-blend-mode', 'color-burn');
    nodes.bgTwo[0].style.setProperty('--background-two-blend-mode', 'saturation');
  });
  nodes.contact[0].addEventListener('mouseenter', function () {
    nodes.bgOne[0].style.setProperty('--background-one-blend-mode', 'difference');
    nodes.bgTwo[0].style.setProperty('--background-two-blend-mode', 'hue');
  });
});

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy8yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzLzMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy81LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzLzYucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzk4MTkiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5vZGVzIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImJnT25lIiwiYmdUd28iLCJ0aXRsZSIsImxpbmtzIiwic3BvdGlmeSIsImJhbmRjYW1wIiwiY29udGFjdCIsInN0eWxlIiwic2V0UHJvcGVydHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFD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TixDQUFZLENBQVosRUFBZU0sS0FBZixDQUFxQkMsV0FBckIsQ0FBaUMsNkJBQWpDLEVBQWdFLEtBQWhFO0FBQ0QsR0FIRDtBQUlBWixPQUFLLENBQUNRLE9BQU4sQ0FBYyxDQUFkLEVBQWlCVCxnQkFBakIsQ0FBa0MsWUFBbEMsRUFBZ0QsWUFBTTtBQUNwREMsU0FBSyxDQUFDSSxLQUFOLENBQVksQ0FBWixFQUFlTyxLQUFmLENBQXFCQyxXQUFyQixDQUFpQyw2QkFBakMsRUFBZ0UsWUFBaEU7QUFDQVosU0FBSyxDQUFDSyxLQUFOLENBQVksQ0FBWixFQUFlTSxLQUFmLENBQXFCQyxXQUFyQixDQUFpQyw2QkFBakMsRUFBZ0UsWUFBaEU7QUFDRCxHQUhEO0FBSUFaLE9BQUssQ0FBQ1UsT0FBTixDQUFjLENBQWQsRUFBaUJYLGdCQUFqQixDQUFrQyxZQUFsQyxFQUFnRCxZQUFNO0FBQ3BEQyxTQUFLLENBQUNJLEtBQU4sQ0FBWSxDQUFaLEVBQWVPLEtBQWYsQ0FBcUJDLFdBQXJCLENBQWlDLDZCQUFqQyxFQUFnRSxZQUFoRTtBQUNBWixTQUFLLENBQUNLLEtBQU4sQ0FBWSxDQUFaLEVBQWVNLEtBQWYsQ0FBcUJDLFdBQXJCLENBQWlDLDZCQUFqQyxFQUFnRSxLQUFoRTtBQUNELEdBSEQ7QUFJRCxDQTVCRCxFOzs7Ozs7Ozs7OztBQ2JBLGNBQWMsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRTVFO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1KQUF3RTs7QUFFN0Y7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIGdldFVybCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9hc3NldHMvMS5wbmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9hc3NldHMvMi5wbmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9hc3NldHMvMy5wbmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyA9IGdldFVybChyZXF1aXJlKFwiLi9hc3NldHMvNC5wbmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9hc3NldHMvNS5wbmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9hc3NldHMvNi5wbmdcIikpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICAtLWJhY2tncm91bmQtb25lLWJsZW5kLW1vZGU6IGRhcmtlbjtcXG4gICAgLS1iYWNrZ3JvdW5kLXR3by1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdHYXlhdGhyaScsIHNhbnMtc2VyaWY7XFxuICB9XFxuXFxuICAuYmFja2dyb3VuZC1vbmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIiksXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fICsgXCIpLFxcbiAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHZhcigtLWJhY2tncm91bmQtb25lLWJsZW5kLW1vZGUpO1xcbiAgICBhbmltYXRpb246IGluZmluaXRlLWZhZGUgMjBzIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlLCBjb2xvci1jaGFuZ2UtMSAyMHMgaW5maW5pdGUgYWx0ZXJuYXRlLCB3b2JibGVTY2FsZSA0MHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgfVxcblxcbiAgLmJhY2tncm91bmQtdHdvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fICsgXCIpLFxcbiAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyArIFwiKSxcXG4gICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiB2YXIoLS1iYWNrZ3JvdW5kLXR3by1ibGVuZC1tb2RlKTtcXG4gICAgYW5pbWF0aW9uOiBpbmZpbml0ZS1mYWRlIDIwcyBpbmZpbml0ZSBhbHRlcm5hdGUsIGNvbG9yLWNoYW5nZS0xIDIwcyBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZSwgd29iYmxlU2NhbGUgMzBzIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xcbiAgfVxcbiAgXFxuICAuY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuICBcXG4gIC50aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDc2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG4gIFxcbiAgLnRpdGxlOjpiZWZvcmUsIC50aXRsZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgXFxuICAudGl0bGU6OmJlZm9yZSB7XFxuICAgIHRleHQtc2hhZG93OiAtMXB4IDAgYmx1ZTtcXG4gICAgbGVmdDogMnB4O1xcbiAgICBjbGlwLXBhdGg6IGluc2V0KDIwJSA0JSk7XFxuICAgIGFuaW1hdGlvbjogbm9pc2UtYW5pbSAycyBpbmZpbml0ZSBsaW5lYXIgYWx0ZXJuYXRlLXJldmVyc2U7XFxuICB9XFxuICBcXG4gIC50aXRsZTo6YWZ0ZXIge1xcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAwIHJlZDtcXG4gICAgbGVmdDogLTJweDtcXG4gICAgY2xpcC1wYXRoOiBpbnNldCgyNCUgMCUpO1xcbiAgICBhbmltYXRpb246IG5vaXNlLWFuaW0tMiAycyBpbmZpbml0ZSBsaW5lYXIgYWx0ZXJuYXRlLXJldmVyc2U7XFxuICB9XFxuICBcXG4gIC5uYXZpZ2F0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMjBtcyBlYXNlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIFxcbiAgYTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZDlkYWQ5YWM7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2U7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIG5vaXNlLWFuaW0ge1xcbiAgICAwJSB7XFxuICAgICAgY2xpcC1wYXRoOiBpbnNldCg0MCUgMCA2MSUgMCk7XFxuICAgIH1cXG4gICAgMjAlIHtcXG4gICAgICBjbGlwLXBhdGg6IGluc2V0KDkyJSAwIDElIDApO1xcbiAgICB9XFxuICAgIDQwJSB7XFxuICAgICAgY2xpcC1wYXRoOiBpbnNldCg0MyUgMCAxJSAwKTtcXG4gICAgfVxcbiAgICA2MCUge1xcbiAgICAgIGNsaXAtcGF0aDogaW5zZXQoMjUlIDAgNTglIDApO1xcbiAgICB9XFxuICAgIDgwJSB7XFxuICAgICAgY2xpcC1wYXRoOiBpbnNldCg1NCUgMCA3JSAwKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICBjbGlwLXBhdGg6IGluc2V0KDU4JSAwIDQzJSAwKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIG5vaXNlLWFuaW0tMiB7XFxuICAgIDAlIHtcXG4gICAgICBjbGlwLXBhdGg6IGluc2V0KDEwJSAwIDExJSAwKTtcXG4gICAgfVxcbiAgICAyMCUge1xcbiAgICAgIGNsaXAtcGF0aDogaW5zZXQoMTIlIDAgOTElIDApO1xcbiAgICB9XFxuICAgIDQwJSB7XFxuICAgICAgY2xpcC1wYXRoOiBpbnNldCg0MyUgMCAxJSAwKTtcXG4gICAgfVxcbiAgICA2MCUge1xcbiAgICAgIGNsaXAtcGF0aDogaW5zZXQoNTIlIDAgODYlIDApO1xcbiAgICB9XFxuICAgIDgwJSB7XFxuICAgICAgY2xpcC1wYXRoOiBpbnNldCg3JSAwIDU0JSAwKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICBjbGlwLXBhdGg6IGluc2V0KDQzJSAwIDQlIDApO1xcbiAgICB9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGluZmluaXRlLXNwaW5uaW5nIHtcXG4gICAgZnJvbSB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgaW5maW5pdGUtZmFkZSB7XFxuICAgIGZyb20ge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgY29sb3ItY2hhbmdlLTEge1xcbiAgICAwJSB7IGJhY2tncm91bmQtY29sb3I6ICMwMDA1MTk7IH1cXG4gICAgMTAlIHsgYmFja2dyb3VuZC1jb2xvcjogIzAwMGEzMjsgfVxcbiAgICAyMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MDdkOyB9XFxuICAgIDMwJSB7IGJhY2tncm91bmQtY29sb3I6ICMwMDk2Yzg7IH1cXG4gICAgNDAlIHsgYmFja2dyb3VuZC1jb2xvcjogIzdiY2NjNDsgfVxcbiAgICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNGViM2QzOyB9XFxuICAgIDYwJSB7IGJhY2tncm91bmQtY29sb3I6ICMyYjhjYmU7IH1cXG4gICAgNzAlIHsgYmFja2dyb3VuZC1jb2xvcjogIzA4NjhhYzsgfVxcbiAgICA4MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg0MDgxOyB9XFxuICAgIDkwJSB7IGJhY2tncm91bmQtY29sb3I6ICM5MTYzYjY7IH1cXG4gICAgMTAwJSB7IGJhY2tncm91bmQtY29sb3I6ICM1Njk4YzQ7IH1cXG4gIH1cXG4gIEBrZXlmcmFtZXMgY29sb3ItY2hhbmdlLTIge1xcbiAgICAwJSB7IGJhY2tncm91bmQtY29sb3I6ICM0ZDAwNGI7IH1cXG4gICAgMTAlIHsgYmFja2dyb3VuZC1jb2xvcjogIzgxMGY3YzsgfVxcbiAgICAyMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjODg0MTlkOyB9XFxuICAgIDMwJSB7IGJhY2tncm91bmQtY29sb3I6ICNmYTlmYjU7IH1cXG4gICAgNDAlIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y3NjhhMTsgfVxcbiAgICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQzNDk3OyB9XFxuICAgIDYwJSB7IGJhY2tncm91bmQtY29sb3I6ICNhZTAxN2U7IH1cXG4gICAgNzAlIHsgYmFja2dyb3VuZC1jb2xvcjogIzdhMDE3NzsgfVxcbiAgICA4MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNDkwMDZhOyB9XFxuICAgIDkwJSB7IGJhY2tncm91bmQtY29sb3I6ICNlMDU5OGI7IH1cXG4gICAgMTAwJSB7IGJhY2tncm91bmQtY29sb3I6ICM1Njk4YzQ7IH1cXG4gIH1cXG4gIEBrZXlmcmFtZXMgY29sb3ItY2hhbmdlLTMge1xcbiAgICAwJSB7IGJhY2tncm91bmQtY29sb3I6ICM2MTIxOWI7IH1cXG4gICAgMTAlIHsgYmFja2dyb3VuZC1jb2xvcjogIzkyMjZjNzsgfVxcbiAgICAyMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5MmViOyB9XFxuICAgIDMwJSB7IGJhY2tncm91bmQtY29sb3I6ICM1ZDljZWM7IH1cXG4gICAgNDAlIHsgYmFja2dyb3VuZC1jb2xvcjogIzk3ZWFkODsgfVxcbiAgICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQzNDk3OyB9XFxuICAgIDYwJSB7IGJhY2tncm91bmQtY29sb3I6ICNhZTAxN2U7IH1cXG4gICAgNzAlIHsgYmFja2dyb3VuZC1jb2xvcjogIzdhMDE3NzsgfVxcbiAgICA4MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNDkwMDZhOyB9XFxuICAgIDkwJSB7IGJhY2tncm91bmQtY29sb3I6ICNlMDU5OGI7IH1cXG4gICAgMTAwJSB7IGJhY2tncm91bmQtY29sb3I6ICM1Njk4YzQ7IH1cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgd29iYmxlU2NhbGUge1xcbiAgICBmcm9tIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS45KTtcXG4gICAgfVxcbiAgfVxcblxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuICB1cmwgPSB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDQ3ZmMwNDAyOTliOTI3ZTdlNzdhYTc3ZTNhZjc4NWYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWIzMDliODIyZThkMGRkMTZkZmM5NjYzYzQzMTJhYmYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTA2ZWVhNTkyNTRiY2RkYjNlMWE4ZDI1NTQ3OGE4NzgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWE1NzBlMjlmMzM0MDY4M2QzNDNiYThlZjkxOGE3M2UucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDJkZmY3YjUyZjYxNDc5MTQ3MjkyNzYzZTNiZmI2NGUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWU3OGJmZDIzNGRjYjc3MzUzY2I3Yjc4ZTE5MzJiMmIucG5nXCI7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbi8vIGltcG9ydCBiZzEgZnJvbSAnLi9hc3NldHMvMS5wbmcnXG4vLyBpbXBvcnQgYmcyIGZyb20gJy4vYXNzZXRzLzIucG5nJ1xuLy8gaW1wb3J0IGJnMyBmcm9tICcuL2Fzc2V0cy8zLnBuZydcblxuLy8gY29uc3QgY3JlYXRpdmVIYXJtb255ID0gW1xuLy8gICAnIzYxMjE5YicsXG4vLyAgICcjOTIyNmM3Jyxcbi8vICAgJyNhYzkyZWInLFxuLy8gICAnIzVkOWNlYycsXG4vLyAgICcjOTdlYWQ4Jyxcbi8vIF1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IG5vZGVzID0ge1xuICAgIGJvZHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2JvZHknKSxcbiAgICBiZ09uZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhY2tncm91bmQtb25lJyksXG4gICAgYmdUd286IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYWNrZ3JvdW5kLXR3bycpLFxuICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGl0bGUnKSxcbiAgICBsaW5rczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmsnKSxcbiAgICBzcG90aWZ5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BvdGlmeScpLFxuICAgIGJhbmRjYW1wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFuZGNhbXAnKSxcbiAgICBjb250YWN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFjdCcpLFxuICB9XG5cbiAgbm9kZXMudGl0bGVbMF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICBub2Rlcy5iZ09uZVswXS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1iYWNrZ3JvdW5kLW9uZS1ibGVuZC1tb2RlJywgJ2RhcmtlbicpXG4gICAgbm9kZXMuYmdUd29bMF0uc3R5bGUuc2V0UHJvcGVydHkoJy0tYmFja2dyb3VuZC10d28tYmxlbmQtbW9kZScsICdkaWZmZXJlbmNlJylcbiAgfSlcbiAgbm9kZXMuYmFuZGNhbXBbMF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICBub2Rlcy5iZ09uZVswXS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1iYWNrZ3JvdW5kLW9uZS1ibGVuZC1tb2RlJywgJ292ZXJsYXknKVxuICAgIG5vZGVzLmJnVHdvWzBdLnN0eWxlLnNldFByb3BlcnR5KCctLWJhY2tncm91bmQtdHdvLWJsZW5kLW1vZGUnLCAnaHVlJylcbiAgfSlcbiAgbm9kZXMuc3BvdGlmeVswXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgIG5vZGVzLmJnT25lWzBdLnN0eWxlLnNldFByb3BlcnR5KCctLWJhY2tncm91bmQtb25lLWJsZW5kLW1vZGUnLCAnY29sb3ItYnVybicpXG4gICAgbm9kZXMuYmdUd29bMF0uc3R5bGUuc2V0UHJvcGVydHkoJy0tYmFja2dyb3VuZC10d28tYmxlbmQtbW9kZScsICdzYXR1cmF0aW9uJylcbiAgfSlcbiAgbm9kZXMuY29udGFjdFswXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgIG5vZGVzLmJnT25lWzBdLnN0eWxlLnNldFByb3BlcnR5KCctLWJhY2tncm91bmQtb25lLWJsZW5kLW1vZGUnLCAnZGlmZmVyZW5jZScpXG4gICAgbm9kZXMuYmdUd29bMF0uc3R5bGUuc2V0UHJvcGVydHkoJy0tYmFja2dyb3VuZC10d28tYmxlbmQtbW9kZScsICdodWUnKVxuICB9KVxufSlcbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==