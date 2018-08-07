var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/models.js":
/*!***********************!*\
  !*** ./src/models.js ***!
  \***********************/
/*! exports provided: newFont, newColorWithRGBA, getRGB_fromHEX, newMSColor_fromHEX, newTextStyle, newSharedStyle_fromLayer, newTextLayer, newShapeGroup, getAttribute_fromLayer, setAttribute_forLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newFont", function() { return newFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newColorWithRGBA", function() { return newColorWithRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRGB_fromHEX", function() { return getRGB_fromHEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newMSColor_fromHEX", function() { return newMSColor_fromHEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newTextStyle", function() { return newTextStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newSharedStyle_fromLayer", function() { return newSharedStyle_fromLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newTextLayer", function() { return newTextLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newShapeGroup", function() { return newShapeGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttribute_fromLayer", function() { return getAttribute_fromLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute_forLayer", function() { return setAttribute_forLayer; });
var Document = __webpack_require__(/*! sketch/dom */ "sketch/dom").Document;

var Page = __webpack_require__(/*! sketch/dom */ "sketch/dom").Page;

var Artboard = __webpack_require__(/*! sketch/dom */ "sketch/dom").Artboard;

var Style = __webpack_require__(/*! sketch/dom */ "sketch/dom").Style;

var Shape = __webpack_require__(/*! sketch/dom */ "sketch/dom").Shape;

var Group = __webpack_require__(/*! sketch/dom */ "sketch/dom").Group;

var Text = __webpack_require__(/*! sketch/dom */ "sketch/dom").Text;

var Rectangle = __webpack_require__(/*! sketch/dom */ "sketch/dom").Rectangle;

var sketch = __webpack_require__(/*! sketch */ "sketch");

var documentDom = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();

var document = context.document;
var data = document.documentData();
var currentPage = document.currentPage();
var page = document.selectedPage;
var selection = document.selectedLayers();
var textStylesContainer = data.layerTextStyles();
var stylesContainer = data.layerStyles();
/**
 * 生成一个 NSFont 对象
 *
 * @export
 * @param {String} fontName
 * @param {Number} fontSize
 * @returns NSFont Object
 */

function newFont(fontName, fontSize) {
  return NSFont.fontWithName_size_(fontName, fontSize);
}
/**
 * 根据 RGB 和 不透明度 来生成 MSColor 对象
 *
 * @export
 * @param {Number} red
 * @param {Number} green
 * @param {Number} blue
 * @param {Number} opacity
 * @returns MSColor
 */

function newColorWithRGBA(red, green, blue, opacity) {
  return MSColor.colorWithRed_green_blue_alpha(red / 255, green / 255, blue / 255, opacity);
}
/**
 *
 *
 * @export 将HEX转换为RGB数值
 * @param {String} hex - 颜色 HEX 数值
 * @returns
 */

function getRGB_fromHEX(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    red: parseInt(result[1], 16),
    green: parseInt(result[2], 16),
    blue: parseInt(result[3], 16)
  } : null;
}
/**
 *
 *
 * @export 以HEX数值生成MSColor
 * @param {*} hex
 * @returns
 */

function newMSColor_fromHEX(hex) {
  var color = getRGB_fromHEX(hex);
  return MSColor.colorWithRed_green_blue_alpha(color.red / 255, color.green / 255, color.blue / 255, 1);
}
/**
 *
 *
 * @export
 * @param {Object} NSColor
 * @param {Object} NSFont
 * @returns 文本样式
 */

function newTextStyle(NSColor, NSFont) {
  var textStyle = MSTextStyle.styleWithAttributes_({
    NSColor: NSColor,
    NSFont: NSFont
  });
  var style = MSStyle.alloc().init();
  style.setTextStyle_(textStyle);
  return style;
}
/**
 *
 *
 * @export 根据的图层样式添加SharedStyle
 * @param {Object} layer - MSLayer，如果是文本则会添加文本图层，如果是形状则是样式
 * @returns {Object} MSSharedObject
 */

function newSharedStyle_fromLayer(layer) {
  if (layer.style().type() != 2) {
    return document.showMessage("这都不是样式");
  }

  if (layer.style().hasTextStyle) {
    return MSSharedStyle.alloc().initWithName_firstInstance(layer.name(), layer.style());
  } else {
    return MSSharedStyle.alloc().initWithName_firstInstance(layer.name(), layer.style());
  }
}
/**
 * 生成新的文本图层
 *
 * @param {String} layerName 图层名称
 * @param {String} content 文本内容
 * @param {Number} fontSize 字号
 * @param {Number} lineHeight
 * @param {Object} color MSColor
 * @param {String} fontName PostscriptName
 * @param
 * @returns
 */

function newTextLayer(text) {
  var newText = MSTextLayer.new();
  newText.setName(text.layerName);
  newText.setStringValue(text.content);
  newText.setFontSize(text.fontSize);
  newText.setLineHeight(text.lineHeight);
  newText.setTextColor(text.color);
  newText.setFontPostscriptName(text.fontName);
  return newText;
}
function newShapeGroup() {
  var newShape = MSShapeGroup.new();
  setAttribute_forLayer("x", 0, newShape);
  setAttribute_forLayer("y", 0, newShape);
  setAttribute_forLayer("width", 100, newShape);
  setAttribute_forLayer("height", 100, newShape);
  return newShape;
}
/**
 * 获取图层的某个属性
 * 通用的属性：id, name, locked, visiable, opacity, x, y, width, height, index
 *
 * @export
 * @param {Object} layer MSLayer 对象
 * @param {String} attr 属性名称
 * @returns
 */

function getAttribute_fromLayer(attribute, layer) {
  switch (attribute) {
    case "id":
      return layer.objectID();

    case "name":
      return layer.name();

    case "locked":
      return layer.isLocked();

    case "visiable":
      return layer.isVisiable();

    case "opacity":
      return Math.round(layer.style().contextSettings().opacity() * 100).toString(10) + "%";

    case "x":
      return layer.frame().x();

    case "y":
      return layer.frame().y();

    case "width":
      return layer.frame().width();

    case "height":
      return layer.frame().height();

    case "index":
      return layer.parentForInsertingLayers().indexOfLayer(layer);

    default:
      break;
  }

  if (layer instanceof MSShapeGroup) {
    switch (attribute) {
      default:
        break;
    }
  }

  if (layer instanceof MSTextLayer) {
    switch (attribute) {
      default:
        break;
    }
  }

  if (layer instanceof MSSymbolInstance) {
    switch (attribute) {
      case "master":
        return layer.symbolMaster();

      default:
        break;
    }
  }
}
function setAttribute_forLayer(attribute, value, layer) {
  switch (attribute) {
    case "name":
      return layer.setName(value);

    case "x":
      return layer.frame().setX(value);

    case "y":
      return layer.frame().setY(value);

    case "width":
      return layer.frame().setWidth(value);

    case "height":
      return layer.frame().setHeight(value);

    case "resize":
      switch (value) {
        case "top":
          if (layer.hasFixedEdge('canFixedTop')) {
            return layer.setFixed_forEdge(true, 32);
          }

          return false;

        case "bottom":
          if (layer.hasFixedEdge('canFixedBottom')) {
            return layer.setFixed_forEdge(true, 8);
          }

          return false;

        case "left":
          if (layer.hasFixedEdge('canFixedLeft')) {
            return layer.setFixed_forEdge(true, 4);
          }

          return false;

        case "right":
          if (layer.hasFixedEdge('canFixedRight')) {
            return layer.setFixed_forEdge(true, 1);
          }

          return false;

        case "width":
          if (layer.hasFixedEdge('canFixedWidth')) {
            return layer.setFixed_forEdge(true, 2);
          }

          return false;

        case "height":
          if (layer.hasFixedEdge('canFixedHeight')) {
            return layer.setFixed_forEdge(true, 16);
          }

          return false;

        case "clear":
          return layer.setFixed_forEdge(false, 63);
      }

      break;

    default:
      break;
  }

  if (layer instanceof MSShapeGroup) {
    switch (attribute) {
      case "backgroundColor":
        return layer;

      default:
        break;
    }
  }

  if (layer instanceof MSTextLayer) {
    switch (attribute) {
      default:
        break;
    }
  }

  if (layer instanceof MSSymbolInstance) {
    switch (attribute) {
      default:
        break;
    }
  }
}

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! exports provided: on_test_new_text_layer, on_test_new_shape_group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on_test_new_text_layer", function() { return on_test_new_text_layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on_test_new_shape_group", function() { return on_test_new_shape_group; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/models.js");

function on_test_new_text_layer(context) {
  var document = context.document;
  var text = {
    "layerName": "name",
    "content": "content",
    "fontSize": 14,
    "lineHeight": 20,
    "color": Object(_models__WEBPACK_IMPORTED_MODULE_0__["newMSColor_fromHEX"])("#000000"),
    "fontName": "Menlo-Regular"
  };
  var newText = Object(_models__WEBPACK_IMPORTED_MODULE_0__["newTextLayer"])(text);
  document.currentPage().addLayer(newText);
  console.log(newText);
}
function on_test_new_shape_group(context) {
  console.log("STARTING...");
  var document = context.document;
  var newShape = Object(_models__WEBPACK_IMPORTED_MODULE_0__["newShapeGroup"])();
  document.currentPage().addLayer(newShape);
  console.log(newShape);
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['on_test_new_text_layer'] = __skpm_run.bind(this, 'on_test_new_text_layer');
that['onRun'] = __skpm_run.bind(this, 'default');
that['on_test_new_shape_group'] = __skpm_run.bind(this, 'on_test_new_shape_group')

//# sourceMappingURL=test.js.map