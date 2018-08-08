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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/generator/typography_scale.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: getLayer_byName, getLayers_byName, getTextSharedStyle_byName, getTextSharedStyle_byID, getSharedStyle_byID, getObjectBy, getSharedStyle_byName, addTextLayer, getHex_fromMSColor, getHex_fromLayer, luminance, contrast, colorTone, getColor_fromLayer, addSharedStyle_fromStyle, updateSharedStyle_fromLayer, isLayerExist, isSharedTextStyleExist, hasSharedStyle, getAllShapeLayers, autoTextColor, selectLayer */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllShapeLayers", function() { return getAllShapeLayers; });
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
  return currentPage.children().filteredArrayUsingPredicate(predicate);
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

/***/ "./src/generator/typography_scale.js":
/*!*******************************************!*\
  !*** ./src/generator/typography_scale.js ***!
  \*******************************************/
/*! exports provided: on_typography_scale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on_typography_scale", function() { return on_typography_scale; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./src/functions.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./src/models.js");



var Text = __webpack_require__(/*! sketch/dom */ "sketch/dom").Text;

var Style = __webpack_require__(/*! sketch/dom */ "sketch/dom").Style;

var Shape = __webpack_require__(/*! sketch/dom */ "sketch/dom").Shape;

var text_styles = {
  "dark": {
    "default": "#2B2F33",
    "primary": "#1A1E21",
    "warning": "#FAA000",
    "danger": "#F44434",
    "success": "#42A046",
    "link": "#2380C2"
  },
  "light": {
    "default": "#FFFFFF",
    "primary": "#ECF1F5",
    "warning": "#FCCE26",
    "danger": "#FE6752",
    "success": "#65BB68",
    "link": "#299AE6"
  }
};
var text_sizes = {
  "caption": 11,
  "body": 13,
  "subtitle": 14,
  "title": 16,
  "h6": 18,
  "h5": 24,
  "h4": 32,
  "h3": 44,
  "h2": 60,
  "h1": 96
};
var text_aligns = [Text.Alignment.left, Text.Alignment.center, Text.Alignment.right];

function background(page, lastLayer) {
  new Shape({
    name: 'background',
    parent: page,
    style: {
      fills: [{
        color: '#9E9E9E',
        fillType: Style.FillType.Color
      }],
      borders: []
    }
  });
  var shape = page.lastLayer();
  shape.frame().setX(-100);
  shape.frame().setY(-100);
  shape.frame().setWidth(lastLayer.frame().x() + lastLayer.frame().width() + 200);
  shape.frame().setHeight(lastLayer.frame().y() + lastLayer.frame().height() + 200);
  page.moveLayerIndex_toIndex(page.layers().length - 1, 0);
  shape.setIsLocked(1);
}

var positionX = 0;
var positionY = 0;
function on_typography_scale(context) {
  var document = context.document;
  var page = document.currentPage();
  document.showMessage("正在生成...");

  for (var text_theme in text_styles) {
    for (var text_size in text_sizes) {
      for (var text_style in text_styles[text_theme]) {
        for (var text_align in text_aligns) {
          var colorValue = text_styles[text_theme][text_style];
          var color = Object(_models__WEBPACK_IMPORTED_MODULE_1__["newMSColor_fromHEX"])(colorValue);
          var newText = {
            'name': text_theme + "-" + text_style + "/" + text_size + "/" + text_aligns[text_align],
            'alignment': text_aligns[text_align],
            'color': color,
            'fontFamily': 'PingFangSC-Regular',
            'positionX': positionX,
            'positionY': positionY,
            'lineHeight': text_sizes[text_size] * 1.5,
            'fontSize': text_sizes[text_size],
            'textValue': '文本标签'
          };
          var layer;

          if (Object(_functions__WEBPACK_IMPORTED_MODULE_0__["isLayerExist"])(newText.name)) {
            layer = Object(_functions__WEBPACK_IMPORTED_MODULE_0__["getLayer_byName"])(newText.name);

            if (Object(_functions__WEBPACK_IMPORTED_MODULE_0__["hasSharedStyle"])(layer) && Object(_functions__WEBPACK_IMPORTED_MODULE_0__["isSharedTextStyleExist"])(newText.name)) {
              Object(_functions__WEBPACK_IMPORTED_MODULE_0__["updateSharedStyle_fromLayer"])(layer);
            }
          } else {
            layer = Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addTextLayer"])(page, newText);
            var newStyle = Object(_models__WEBPACK_IMPORTED_MODULE_1__["newSharedStyle_fromLayer"])(layer);
            Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addSharedStyle_fromStyle"])(newStyle);
          }

          positionX = layer.frame().x() + layer.frame().width() + 40;
        }
      }

      positionX = 0;
      positionY = layer.frame().y() + layer.frame().height() + 40;
    }
  }

  background(page, layer);
}

/***/ }),

/***/ "./src/models.js":
/*!***********************!*\
  !*** ./src/models.js ***!
  \***********************/
/*! exports provided: newFont, newColorWithRGBA, getRGB_fromHEX, newMSColor_fromHEX, newMSColorFromString, newTextStyle, newSharedStyle_fromLayer, newTextLayer, newShapeGroup, getAttribute_fromLayer, setAttribute_forLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newFont", function() { return newFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newColorWithRGBA", function() { return newColorWithRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRGB_fromHEX", function() { return getRGB_fromHEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newMSColor_fromHEX", function() { return newMSColor_fromHEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newMSColorFromString", function() { return newMSColorFromString; });
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
 * @export 以HEX数值生成MSColor
 * @param {*} hex
 * @returns
 */

function newMSColor_fromHEX(hex) {
  var color = getRGB_fromHEX(hex);
  return MSColor.colorWithRed_green_blue_alpha(color.red / 255, color.green / 255, color.blue / 255, 1);
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

function newMSColorFromString(color) {
  return MSImmutableColor.colorWithSVGString(color).newMutableCounterpart();
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
/**
 *
 * 初始化一个新的图形图层，
 * @export
 * @param {Object} rect var rect = {x: 0, y: 0, width: 100, heigth: 100}
 * @returns
 */

function newShapeGroup(rect, color) {
  var rectangle = MSRectangleShape.alloc().initWithFrame(CGRectMake(0, 0, rect.width, rect.height));
  var shapeGroup = MSShapeGroup.shapeWithPath(rectangle);
  var fill = shapeGroup.style().addStylePartOfType(0);
  fill.color = color;
  return shapeGroup;
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
that['on_typography_scale'] = __skpm_run.bind(this, 'on_typography_scale');
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=typography_scale.js.map