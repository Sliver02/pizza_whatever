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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scrollSmooth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollSmooth */ \"./src/js/scrollSmooth.js\");\n/* harmony import */ var _scrollSmooth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scrollSmooth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n// Global App Controller\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/scrollSmooth.js":
/*!********************************!*\
  !*** ./src/js/scrollSmooth.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//var currentSection = 0;\r\n// var start = document.getElementById('start');\r\n// var recipes = document.getElementById('recipes');\r\n\r\n// var btnNext = start.getElementsByClassName('btn--next')[0];\r\n// var btnPrev = recipes.getElementsByClassName('btn--prev')[0];\r\n\r\n// console.log(btnFrwd);\r\n// console.log(btnPrev);\r\n\r\n// btnFrwd.addEventListener('click', (e) => {\r\n//     console.log('sei un coglione');\r\n//     recipes.scrollIntoView({ \r\n//         behavior: 'smooth' \r\n//     });\r\n// });\r\n\r\n// btnPrev.addEventListener('click', (e) => {\r\n//     console.log('sei un coglione ma ALLINSU');\r\n//     start.scrollIntoView({ \r\n//         behavior: 'smooth' \r\n//     });\r\n// });\r\n\r\n\r\n// Array of all elements with section class\r\nvar sections = document.querySelectorAll('.section');\r\n\r\n// loop trhough each section to pass click events\r\nsections.forEach((section, index) => {\r\n\r\n    // Select dynamically the \r\n    var btnNext = section.querySelector('.btn--next');\r\n    var btnPrev = section.querySelector('.btn--prev');\r\n\r\n    if (index <= sections.length && btnNext != undefined) {\r\n\r\n        var nextSection = sections[index + 1];\r\n        \r\n        btnNext.addEventListener('click', (e) => {\r\n            history.pushState({\"id\":nextSection.id}, nextSection.id, `/#${nextSection.id}`);\r\n            nextSection.scrollIntoView({\r\n                behavior: 'smooth'\r\n            });\r\n        });\r\n\r\n        \r\n    } else if (index >= 0 && btnPrev != undefined) {\r\n        \r\n        var prevSection = sections[index - 1];\r\n\r\n        btnPrev.addEventListener('click', (e) => {\r\n            history.pushState({\"id\":prevSection.id}, prevSection.id, `/#${prevSection.id}`);\r\n            prevSection.scrollIntoView({\r\n                behavior: 'smooth'\r\n            });\r\n        });\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/js/scrollSmooth.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });