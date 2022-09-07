/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/static/assets/js/src/auth/Cart.js":
/*!***********************************************!*\
  !*** ./src/static/assets/js/src/auth/Cart.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class CartAuth {
  constructor() {
    if (!CartAuth.instance) {
      CartAuth.instance = this;
    }

    return CartAuth.instance;
  }

  async addProduct(productId) {
    const formData = new FormData();
    [['csrfmiddlewaretoken', document.getElementsByName('csrfmiddlewaretoken')[0].value], ['productId', productId]].forEach(field => {
      formData.append(field[0], field[1]);
    });
    $.ajax({
      url: '/cart/add',
      data: formData,
      method: 'POST',
      processData: false,
      contentType: false,
      success: response => {
        if (response.successful) location.href = location.href;
      }
    });
  }

  async removeProduct(productId) {
    const formData = new FormData();
    [['csrfmiddlewaretoken', document.getElementsByName('csrfmiddlewaretoken')[0].value], ['productId', productId]].forEach(field => {
      formData.append(field[0], field[1]);
    });
    $.ajax({
      url: '/cart/remove',
      data: formData,
      method: 'POST',
      processData: false,
      contentType: false,
      success: response => {
        if (response.successful) location.href = location.href;
      }
    });
  }

}());

/***/ }),

/***/ "./src/static/assets/js/src/events/index.js":
/*!**************************************************!*\
  !*** ./src/static/assets/js/src/events/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _auth_Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/Cart */ "./src/static/assets/js/src/auth/Cart.js");
// import administration from "./administration"; 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  console.log('Hellow there'); // administration();

  $('.add-to-cart').on('click', e => {
    _auth_Cart__WEBPACK_IMPORTED_MODULE_0__["default"].addProduct(e.currentTarget.dataset.cartproduct);
  });
  $('.remove-from-cart').on('click', e => {
    _auth_Cart__WEBPACK_IMPORTED_MODULE_0__["default"].removeProduct(e.currentTarget.dataset.cartproduct);
  });
});

/***/ }),

/***/ "./src/static/assets/js/src/helpers/index.js":
/*!***************************************************!*\
  !*** ./src/static/assets/js/src/helpers/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/static/assets/js/src/helpers/modal.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./src/static/assets/js/src/helpers/modal.js":
/*!***************************************************!*\
  !*** ./src/static/assets/js/src/helpers/modal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  $('.open-modal').on('click', e => {
    $(`#${e.currentTarget.dataset.modal}-modal`).removeClass('modal--closed');
  });
  $('.close-modal').on('click', e => {
    const modal = $(`#${e.currentTarget.dataset.modal}-modal`);
    modal.addClass('modal--closed');
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./src/static/assets/js/src/app.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/static/assets/js/src/helpers/index.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/static/assets/js/src/events/index.js");


(0,_events__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;