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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mark/mark_layer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: getLayer_byName, getLayers_byName, getTextSharedStyle_byName, getTextSharedStyle_byID, getSharedStyle_byID, getObjectBy, getSharedStyle_byName, addTextLayer, getHex_fromMSColor, getHex_fromLayer, luminance, contrast, colorTone, getColor_fromLayer, addSharedStyle_fromStyle, updateSharedStyle_fromLayer, isLayerExist, isSharedTextStyleExist, hasSharedStyle, getAllLayers, getAllShapeLayers, getAllTextLayers, getAllSameTypeLayers, autoTextColor, selectLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayer_byName", function() { return getLayer_byName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayers_byName", function() { return getLayers_byName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextSharedStyle_byName", function() { return getTextSharedStyle_byName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextSharedStyle_byID", function() { return getTextSharedStyle_byID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharedStyle_byID", function() { return getSharedStyle_byID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectBy", function() { return getObjectBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharedStyle_byName", function() { return getSharedStyle_byName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTextLayer", function() { return addTextLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHex_fromMSColor", function() { return getHex_fromMSColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHex_fromLayer", function() { return getHex_fromLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "luminance", function() { return luminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contrast", function() { return contrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorTone", function() { return colorTone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColor_fromLayer", function() { return getColor_fromLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSharedStyle_fromStyle", function() { return addSharedStyle_fromStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSharedStyle_fromLayer", function() { return updateSharedStyle_fromLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLayerExist", function() { return isLayerExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSharedTextStyleExist", function() { return isSharedTextStyleExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSharedStyle", function() { return hasSharedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLayers", function() { return getAllLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllShapeLayers", function() { return getAllShapeLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTextLayers", function() { return getAllTextLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSameTypeLayers", function() { return getAllSameTypeLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoTextColor", function() { return autoTextColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLayer", function() { return selectLayer; });
var Document = __webpack_require__(/*! sketch/dom */ "sketch/dom").Document;

var Page = __webpack_require__(/*! sketch/dom */ "sketch/dom").Page;

var Artboard = __webpack_require__(/*! sketch/dom */ "sketch/dom").Artboard;

var Style = __webpack_require__(/*! sketch/dom */ "sketch/dom").Style;

var Shape = __webpack_require__(/*! sketch/dom */ "sketch/dom").Shape;

var Group = __webpack_require__(/*! sketch/dom */ "sketch/dom").Group;

var Text = __webpack_require__(/*! sketch/dom */ "sketch/dom").Text;

var Rectangle = __webpack_require__(/*! sketch/dom */ "sketch/dom").Rectangle;

var documentDom = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();

var document = context.document;
var data = document.documentData();
var currentPage = document.currentPage();
var page = document.selectedPage;
var selectedLayers = document.selectedLayers();
var selection = context.selection;
var textStylesContainer = data.layerTextStyles();
var stylesContainer = data.layerStyles();
/**
 * @export 根据图层名称获取第一个匹配到的图层
 * @param {String} name - 图层的名称
 * @returns 第一个匹配的图层
 */

function getLayer_byName(name) {
  var predicate = NSPredicate.predicateWithFormat("name == %@", name);
  return currentPage.children().filteredArrayUsingPredicate(predicate).firstObject();
}
/**
 * @export 根据图层名称获取所有匹配的图层
 * @param {String} name - 图层的名称
 * @returns {Array} __NSSingleObjectArrayI
 */

function getLayers_byName(name) {
  var predicate = NSPredicate.predicateWithFormat("name == %@", name);
  var layerArray = getAllShapeLayers(currentPage);
  layerArray.forEach(function (layer) {
    selectLayer(layer);
  });
  return selection.filteredArrayUsingPredicate(predicate);
}
/**
 *
 *
 * @export 根据名称找到共享的文本样式
 * @param {String} name
 * @returns
 */

function getTextSharedStyle_byName(name) {
  var predicate = NSPredicate.predicateWithFormat("name == %@", name);
  return textStylesContainer.objects().filteredArrayUsingPredicate(predicate).firstObject();
}
function getTextSharedStyle_byID(id) {
  return textStylesContainer.sharedObjectWithID(id);
}
function getSharedStyle_byID(id) {
  return stylesContainer.sharedObjectWithID(id);
}
/**
 *
 *
 * @export 根据某个属性之找到某个对象
 * @param {String} object - layer, textSharedStyle, sharedStyle, layerList
 * @param {String} property - id, name
 * @param {String} value
 * @returns
 */

function getObjectBy(object, property, value) {
  var predicate;

  switch (property) {
    case 'id':
      predicate = NSPredicate.predicateWithFormat("objectID == %@", value);
      break;

    case 'name':
      predicate = NSPredicate.predicateWithFormat("name == %@", name);
      break;

    default:
      break;
  }

  switch (object) {
    case 'layer':
      return currentPage.children().filteredArrayUsingPredicate(predicate).firstObject();

    case 'layerList':
      return currentPage.children().filteredArrayUsingPredicate(predicate);

    case 'textSharedStyle':
      return textStylesContainer.objects().filteredArrayUsingPredicate(predicate).firstObject();

    case 'sharedStyle':
      return stylesContainer.objects().filteredArrayUsingPredicate(predicate).firstObject();

    default:
      break;
  }
}
/**
 *
 *
 * @export 根据名称找到共享的样式
 * @param {String} name
 * @returns
 */

function getSharedStyle_byName(name) {
  var predicate = NSPredicate.predicateWithFormat("name == %@", name);
  return stylesContainer.objects().filteredArrayUsingPredicate(predicate).firstObject();
}
/**
 * @export 添加一个新的文本图层
 * @param {Object} layerGroup - 是包含 TextLayer 的容器 MSLayerGroup，可以是 Group, Artboard, Page
 * @param {Object} text - 是文本对象
 * @param {string} text.name - 图层名称
 * @param {string} text.textValue - 文本内容设置
 * @param {string} text.alignment - 对齐方式，可以使用 Text.Alignment.left 来获得，或者直接使用字符串。可用的数值包括 left, right, center, justified, natural
 * @param {Object} text.color - MSColor
 * @param {string} text.fontFamily - 字体设置，使用 PostscriptName
 * @param {number} text.positionX - 图层的 x 坐标
 * @param {number} text.positionY - 图层的 y 坐标
 * @param {number} text.lineHeight - 文本的行高设置
 * @param {number} text.fontSize - 字号设置
 * @returns {Object} 该文本图层
 */

function addTextLayer(layerGroup, text) {
  new Text({
    parent: layerGroup,
    text: text.textValue,
    alignment: text.alignment
  });
  var layer = layerGroup.lastLayer();
  layer.name = text.name;
  layer.setTextColor(text.color);
  layer.setFontSize(text.fontSize);
  layer.setLineHeight(text.lineHeight);
  layer.setFontPostscriptName(text.fontFamily);
  layer.frame().setX(text.positionX);
  layer.frame().setY(text.positionY);
  return layer;
}
/**
 * @export MSColor_转换为_HEX
 * @param {Object} color - MSColor
 * @returns {String} colorValue
 */

function getHex_fromMSColor(color) {
  return color.immutableModelObject().hexValue();
}
/**
 * @export 获取图层的背景色HEX值
 * @param {Object} layer - MSLayer 对象
 * @returns {String} HEX数值
 */

function getHex_fromLayer(layer) {
  return layer.style().fills()[0].color().immutableModelObject().hexValue();
} // 计算颜色的明亮程度，公式来自 Material Design Web Components
// 参考：https://github.com/material-components/material-components-web/blob/master/packages/mdc-theme/_functions.scss

/**
 *
 * @export 计算亮度
 * @param {Object} color - MSColor 对象
 * @returns {Number}
 */

function luminance(color) {
  return 0.2126 * (color.red() * color.alpha() + 1) + 0.7152 * (color.green() * color.alpha() + 1) + 0.0722 * (color.blue() * color.alpha() + 1);
}
/**
 *
 *
 * @export 计算对比度
 * @param {Object} back - MSColor 对象，作为背景色
 * @param {Object} front - MSColor 对象，作为前景色
 * @returns {Number}
 */

function contrast(back, front) {
  var backLum = luminance(back) + 0.5;
  var foreLum = luminance(front) + 0.5;
  return Math.max(backLum, foreLum) / Math.min(backLum, foreLum);
}
/**
 *
 *
 * @export 获得亮色还是暗色
 * @param {Object} color - MSColor 对象
 * @returns
 */

function colorTone(color) {
  var minimumContrast = 4.5;
  var lightContrast = contrast(color, MSColor.whiteColor());
  var darkContrast = contrast(color, MSColor.blackColor());

  if (lightContrast < minimumContrast && darkContrast > lightContrast) {
    return "light";
  } else {
    return "dark";
  }
}
/**
 *
 *
 * @export 获取图层背景色
 * @param {Object} layer - MSLayer
 * @returns {Object} MSColor
 */

function getColor_fromLayer(layer) {
  return layer.style().fills()[0].color();
}
/**
 * 将一个 Style 样式添加到 SharedStyle 当中
 *
 * @export 
 * @param {Object} style - 图层样式，可以是文字样式或图形样式
 * @returns 一个共享样式
 */

function addSharedStyle_fromStyle(style) {
  if (style.type() != 3) {
    return document.showMessage("需要的是 MSSharedStyle");
  }

  if (style.value().hasTextStyle) {
    textStylesContainer.addSharedObject(style);
  } else {
    stylesContainer.addSharedObject(style);
  }
}
/**
 *
 *
 * @export 根据当前图层，同步同层的共享样式
 * @param {object} layer - 需要更新的图层
 * @returns
 */

function updateSharedStyle_fromLayer(layer) {
  var sharedID = layer.style().sharedObjectID();

  if (layer instanceof MSTextLayer) {
    var textSharedObject = getTextSharedStyle_byID(sharedID);

    if (textSharedObject.isOutOfSyncWithInstance(layer)) {
      return textSharedObject.updateToMatch(layer.style());
    }
  } else if (layer instanceof MSShapeGroup) {
    var sharedObject = getSharedStyle_byID(sharedID);

    if (sharedObject.isOutOfSyncWithInstance(layer)) {
      sharedObject.updateToMatch(layer.style());
    }
  } else {
    return document.showMessage("Wrong Layer.");
  }
}
/**
 *
 *
 * @export 判断改名称的图层是否存在
 * @param {String} name - 图层名称
 * @returns
 */

function isLayerExist(name) {
  if (getLayer_byName(name)) {
    return true;
  } else {
    return false;
  }
}
/**
 *
 *
 * @export 该名称的共享文本样式是否存在
 * @param {String} name
 * @returns
 */

function isSharedTextStyleExist(name) {
  if (getTextSharedStyle_byName(name)) {
    return true;
  } else {
    return false;
  }
}
/**
 *
 *
 * @export 判断该图层是否有共享样式
 * @param {Object} layer
 * @returns
 */

function hasSharedStyle(layer) {
  if (layer.style().sharedObjectID()) {
    return true;
  } else {
    return false;
  }
}
/**
 * 
 *
 * @export 获取所有的非文件夹图层， 也就是文本和图形。
 * @param {*} layerGroup
 */

function getAllLayers(layerGroup) {
  var layerList = [];
  var layers = layerGroup.layers();
  layers.forEach(function (layer) {
    if (layer instanceof MSShapeGroup || layer instanceof MSTextLayer) {
      layerList.push(layer);
    } else if (layer.containsMultipleLayers()) {
      layerList = layerList.concat(getAllLayers(layer));
    }
  });
  return layerList;
}
/**
 *
 *
 * @export 获取图层组中所有图形图层
 * @param {Object} layerGroup - 图层组
 * @returns {Array} 包含图层组中所有图形图层的列表
 */

function getAllShapeLayers(layerGroup) {
  var layerList = [];
  var layers = layerGroup.layers();
  layers.forEach(function (layer) {
    if (layer instanceof MSShapeGroup) {
      layerList.push(layer);
    } else if (layer.containsMultipleLayers()) {
      layerList = layerList.concat(getAllShapeLayers(layer));
    }
  });
  return layerList;
}
/**
 *
 *
 * @export 获取图层组中所有文本图层
 * @param {Object} layerGroup - 图层组
 * @returns {Array} 包含图层组中所有图形图层的列表
 */

function getAllTextLayers(layerGroup) {
  var layerList = [];
  var layers = layerGroup.layers();
  layers.forEach(function (layer) {
    if (layer instanceof MSTextLayer) {
      layerList.push(layer);
    } else if (layer.containsMultipleLayers()) {
      layerList = layerList.concat(getAllShapeLayers(layer));
    }
  });
  return layerList;
}
/**
 *
 *
 * @export 获取图层组中所有同类型图层
 * @param {Object} layerGroup - 图层组
 * @returns {Array} 包含图层组中所有图形图层的列表
 */

function getAllSameTypeLayers(layerGroup, layerType) {
  var layerList = [];
  var layers = layerGroup.layers();
  layers.forEach(function (layer) {
    if (layer instanceof layerType) {
      layerList.push(layer);
    } else if (layer.containsMultipleLayers()) {
      layerList = layerList.concat(getAllSameTypeLayers(layer, layerType));
    }
  });
  return layerList;
}
/**
 * 根据图层颜色自动设定文本的颜色，只有白色和黑色
 *
 * @export
 * @param {Object} layer
 * @returns MSColor
 */

function autoTextColor(layer) {
  var textColor = MSColor.blackColor();

  if (colorTone(getColor_fromLayer(layer)) == 'dark') {
    textColor = MSColor.whiteColor();
  }

  return textColor;
}
/**
 * 选中给定的图层
 *
 * @export
 * @param {*} layer
 */

function selectLayer(layer) {
  layer.select_byExpandingSelection(true, true);
}

/***/ }),

/***/ "./src/mark/mark_layer.js":
/*!********************************!*\
  !*** ./src/mark/mark_layer.js ***!
  \********************************/
/*! exports provided: mark_layer_name, mark_layer_opacity, mark_layer_color_value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mark_layer_name", function() { return mark_layer_name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mark_layer_opacity", function() { return mark_layer_opacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mark_layer_color_value", function() { return mark_layer_color_value; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ "./src/models.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./src/functions.js");



function newText(layerName, textContent, layer) {
  return {
    "layerName": layerName,
    "content": textContent,
    "fontSize": 14,
    "lineHeight": 20,
    "color": Object(_functions__WEBPACK_IMPORTED_MODULE_1__["autoTextColor"])(layer),
    "fontName": "Menlo-Regular"
  };
}

function mark_layer_name(context) {
  var document = context.document;
  var selection = context.selection;

  if (selection.length < 1) {
    document.showMessage("至少选一个图层");
    return false;
  }

  selection.forEach(function (layer) {
    var textLayer = Object(_models__WEBPACK_IMPORTED_MODULE_0__["initTextLayer"])(newText("name", layer.name(), layer));
    layer.parentForInsertingLayers().addLayer(textLayer);
    textLayer.frame().setX(Object(_models__WEBPACK_IMPORTED_MODULE_0__["getAttribute_fromLayer"])("x", layer) + 20);
    textLayer.frame().setY(Object(_models__WEBPACK_IMPORTED_MODULE_0__["getAttribute_fromLayer"])("y", layer) + 20);
  });
}
function mark_layer_opacity(context) {
  var document = context.document;
  var selection = context.selection;

  if (selection.length < 1) {
    document.showMessage("至少选一个图层");
    return false;
  }

  selection.forEach(function (layer) {
    if (!(layer instanceof MSShapeGroup)) {
      return false;
    }

    var textLayer = Object(_models__WEBPACK_IMPORTED_MODULE_0__["newTextLayer"])(newText("name", Object(_models__WEBPACK_IMPORTED_MODULE_0__["getAttribute_fromLayer"])("opacity", layer).toString(10), layer));
    layer.parentForInsertingLayers().addLayer(textLayer);
    textLayer.setTextAlignment(1);
    textLayer.frame().setX(Object(_models__WEBPACK_IMPORTED_MODULE_0__["getAttribute_fromLayer"])("x", layer) + Object(_models__WEBPACK_IMPORTED_MODULE_0__["getAttribute_fromLayer"])("width", layer) - Object(_models__WEBPACK_IMPORTED_MODULE_0__["getAttribute_fromLayer"])("width", textLayer) - 10);
    textLayer.frame().setY(Object(_models__WEBPACK_IMPORTED_MODULE_0__["getAttribute_fromLayer"])("y", layer) + (Object(_models__WEBPACK_IMPORTED_MODULE_0__["getAttribute_fromLayer"])("height", layer) - 20) / 2);
  });
}
function mark_layer_color_value(context) {
  var document = context.document;
  var selection = context.selection;

  if (selection.length < 1) {
    document.showMessage("至少选一个图层");
    return false;
  }

  selection.forEach(function (layer) {
    if (!(layer instanceof MSShapeGroup)) {
      return false;
    }

    var textLayer = Object(_models__WEBPACK_IMPORTED_MODULE_0__["newTextLayer"])(newText("color_value", '#' + Object(_functions__WEBPACK_IMPORTED_MODULE_1__["getHex_fromLayer"])(layer), layer));
    layer.parentForInsertingLayers().addLayer(textLayer);
    textLayer.setTextAlignment(1);
    textLayer.frame().setX(Object(_models__WEBPACK_IMPORTED_MODULE_0__["getAttribute_fromLayer"])("x", layer) + Object(_models__WEBPACK_IMPORTED_MODULE_0__["getAttribute_fromLayer"])("width", layer) - Object(_models__WEBPACK_IMPORTED_MODULE_0__["getAttribute_fromLayer"])("width", textLayer) - 10);
    textLayer.frame().setY(Object(_models__WEBPACK_IMPORTED_MODULE_0__["getAttribute_fromLayer"])("y", layer) + (Object(_models__WEBPACK_IMPORTED_MODULE_0__["getAttribute_fromLayer"])("height", layer) - 20) / 2);
  });
}

/***/ }),

/***/ "./src/models.js":
/*!***********************!*\
  !*** ./src/models.js ***!
  \***********************/
/*! exports provided: newArtboard, newColorFromString, newFont, newLayerGroup, newShape, newShapeGroup, newSharedStyle_fromLayer, initTextLayer, newTextLayer, newTextStyle, getAttribute_fromLayer, setAttribute_forLayer, getRGB_fromHEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newArtboard", function() { return newArtboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newColorFromString", function() { return newColorFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newFont", function() { return newFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newLayerGroup", function() { return newLayerGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newShape", function() { return newShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newShapeGroup", function() { return newShapeGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newSharedStyle_fromLayer", function() { return newSharedStyle_fromLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTextLayer", function() { return initTextLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newTextLayer", function() { return newTextLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newTextStyle", function() { return newTextStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttribute_fromLayer", function() { return getAttribute_fromLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute_forLayer", function() { return setAttribute_forLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRGB_fromHEX", function() { return getRGB_fromHEX; });
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
function newArtboard(rect) {
  var artboard = MSArtboardGroup.alloc().init();
  artboard.frame().setX(rect.x);
  artboard.frame().setY(rect.y);
  artboard.frame().setWidth(rect.width);
  artboard.frame().setHeight(rect.height);
  return artboard;
}
/**
 * // Hex
 * MSColorFromString("#33AE15")
 * MSColorFromString("#333")
 * MSColorFromString("#145515FF")
 *
 * // rgb/rgba
 * MSColorFromString("rgb(255,0,0)")
 * MSColorFromString("rgba(255,0,0,0.5)")
 *
 * // Color keywords
 * MSColorFromString("red")
 * MSColorFromString("blue")
 * MSColorFromString("magenta")
 * MSColorFromString("darkviolet")
 *
 * // hls
 * MSColorFromString("hsl(270, 60%, 50%, .15)")
 * MSColorFromString("hsl(270deg, 60%, 70%)")
 * MSColorFromString("hsl(4.71239rad, 60%, 70%)")
 * MSColorFromString("hsla(240, 100%, 50%, .4)")
 * @export
 * @param {*} color
 * @returns
 */

function newColorFromString(color) {
  return MSImmutableColor.colorWithSVGString(color).newMutableCounterpart();
}
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
function newLayerGroup() {
  var rect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    x: 0,
    y: 0,
    width: 100,
    height: 100
  };
  var layerGroup = MSLayerGroup.alloc().initWithFrame(CGRectMake(rect.x, rect.y, rect.width, rect.height));
  return layerGroup;
}
function newShape(shapeType, rect) {
  var shape;

  switch (shapeType) {
    case "rectangle":
      shape = MSRectangleShape.alloc().initWithFrame(CGRectMake(rect.x, rect.y, rect.width, rect.height));
      break;

    case "oval":
      shape = MSOvalShape.alloc().initWithFrame(CGRectMake(rect.x, rect.y, rect.width, rect.height));
      break;

    default:
      break;
  }

  return shape;
}
/**
 *
 * 初始化一个新的图形图层，
 * @export
 * @param {Object} rect var rect = {x: 0, y: 0, width: 100, height: 100}
 * @returns
 */

function newShapeGroup(shape) {
  var shapeGroup = MSShapeGroup.shapeWithPath(shape);
  shapeGroup.style().addStylePartOfType(0).color = newColorFromString("#000000");
  return shapeGroup;
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

function initTextLayer(text) {
  var newText = MSTextLayer.new();
  newText.setName(text.layerName);
  newText.setStringValue(text.content);
  newText.setFontSize(text.fontSize);
  newText.setLineHeight(text.lineHeight);
  newText.setTextColor(text.color);
  newText.setFontPostscriptName(text.fontName);
  return newText;
}
function newTextLayer(textStyle) {
  var textLayer = MSTextLayer.alloc().init();
  textLayer.setStringValue("New Text");
  textLayer.setStyle(textStyle);
  return textLayer;
}
/**
 *
 *
 * @export
 * @param {Object} font
 * @param {Object} color
 * @returns 文本样式
 */

function newTextStyle(font) {
  var textStyle = MSTextStyle.styleWithAttributes_({
    NSFont: font
  });
  var style = MSStyle.alloc().init();
  style.setTextStyle_(textStyle);
  return style;
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

  if (layer instanceof MSArtboardGroup) {
    switch (attribute) {
      default:
        break;
    }
  }

  if (layer instanceof MSPage) {
    switch (attribute) {
      default:
        break;
    }
  }

  if (layer instanceof MSLayerGroup) {
    switch (attribute) {
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

    case "resizing":
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
  }

  if (layer instanceof MSShapeGroup) {
    switch (attribute) {
      case "color":
        layer.style().removeAllStyleFills();
        layer.style().addStylePartOfType(0).color = value;
        return true;

      default:
        break;
    }
  }

  if (layer instanceof MSTextLayer) {
    switch (attribute) {
      case "color":
        return layer.setTextColor(value);

      case "lineHeight":
        return layer.setLineHeight(value);

      case "content":
        return layer.setStringValue(value);

      case "fontFamily":
        return layer.setFontPostscriptName(value);

      case "fontSize":
        return layer.setFontSize(value);

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

  if (layer instanceof MSArtboardGroup) {
    switch (attribute) {
      default:
        break;
    }
  }

  if (layer instanceof MSPage) {
    switch (attribute) {
      default:
        break;
    }
  }

  if (layer instanceof MSLayerGroup) {
    switch (attribute) {
      default:
        break;
    }
  }
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
that['mark_layer_color_value'] = __skpm_run.bind(this, 'mark_layer_color_value');
that['onRun'] = __skpm_run.bind(this, 'default');
that['mark_layer_name'] = __skpm_run.bind(this, 'mark_layer_name');
that['mark_layer_opacity'] = __skpm_run.bind(this, 'mark_layer_opacity')

//# sourceMappingURL=mark_layer.js.map