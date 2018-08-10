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

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! exports provided: on_test_new_text_layer, on_test_new_shape_group, on_test_set_resizing, on_test_new_artboard, on_test_new_layer_group, on_test_get_all_symbols, on_test_mark_symbol_name, on_test_generate_shapes, on_test_layout_shapes */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/max/Github/sketch-toolkit/src/test.js: Unexpected token (89:0)\n\n  87 |         shape2.removeCurvePointAtIndex(points[1]);\n  88 |     }\n> 89 | }\n     | ^\n  90 | \n  91 | function fourSquare(rect) {\n  92 |     const newRect = {\n    at _class.raise (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:3893:15)\n    at _class.unexpected (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:5222:16)\n    at _class.parseExprAtom (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:6298:20)\n    at _class.parseExprAtom (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:3594:52)\n    at _class.parseExprSubscripts (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:5898:21)\n    at _class.parseMaybeUnary (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:5877:21)\n    at _class.parseExprOps (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:5786:21)\n    at _class.parseMaybeConditional (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:5758:21)\n    at _class.parseMaybeAssign (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:5705:21)\n    at _class.parseExpression (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:5658:21)\n    at _class.parseStatementContent (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:7229:21)\n    at _class.parseStatement (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:7115:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:7666:23)\n    at _class.parseBlockBody (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:7653:10)\n    at _class.parseTopLevel (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:7080:10)\n    at _class.parse (/Users/max/Github/sketch-toolkit/node_modules/@babel/parser/lib/index.js:8466:17)");

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
that['on_test_new_shape_group'] = __skpm_run.bind(this, 'on_test_new_shape_group');
that['on_test_set_resizing'] = __skpm_run.bind(this, 'on_test_set_resizing');
that['on_test_new_artboard'] = __skpm_run.bind(this, 'on_test_new_artboard');
that['on_test_new_layer_group'] = __skpm_run.bind(this, 'on_test_new_layer_group');
that['on_test_mark_symbol_name'] = __skpm_run.bind(this, 'on_test_mark_symbol_name');
that['on_test_generate_shapes'] = __skpm_run.bind(this, 'on_test_generate_shapes');
that['on_test_layout_shapes'] = __skpm_run.bind(this, 'on_test_layout_shapes')

//# sourceMappingURL=test.js.map