webpackHotUpdate_N_E("pages/products",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Productos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Productos */ "./components/Productos.js");
/* harmony import */ var _Components_Categorias__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Categorias */ "./Components/Categorias.js");




var _jsxFileName = "C:\\Users\\Melina\\Desktop\\sec\\siempreencasa\\pages\\products.js",
    _s = $RefreshSig$();







function Products(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      count = _useState[0],
      setCount = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: "Productos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Components_Categorias__WEBPACK_IMPORTED_MODULE_7__["default"], {
      categories: props.products
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Productos__WEBPACK_IMPORTED_MODULE_6__["default"], {
      products: props.products
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

_s(Products, "oDgYfYHkD9Wkv4hrAPCkI/ev3YU=");

_c = Products;

Products.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, data;
    return C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default()("http://localhost:6000/products");

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", {
              products: data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Products);

var _c;

$RefreshReg$(_c, "Products");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJwcm9wcyIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCIsInByb2R1Y3RzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLENBQUQsQ0FEYjtBQUFBLE1BQ2RDLEtBRGM7QUFBQSxNQUNQQyxRQURPOztBQUVyQixzQkFFSSxxRUFBQyw2REFBRDtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyw4REFBRDtBQUFZLGdCQUFVLEVBQUVILEtBQUssQ0FBQ0k7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0kscUVBQUMsNkRBQUQ7QUFBVyxjQUFRLEVBQUdKLEtBQUssQ0FBQ0k7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBVUg7O0dBWlFMLFE7O0tBQUFBLFE7O0FBZVRBLFFBQVEsQ0FBQ00sZUFBVDtBQUFBLHdTQUEyQixpQkFBTUMsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNMQyx1REFBSyxDQUFDLGdDQUFELENBREE7O0FBQUE7QUFDakJDLGVBRGlCO0FBQUE7QUFBQSxtQkFFSkEsR0FBRyxDQUFDQyxJQUFKLEVBRkk7O0FBQUE7QUFFakJDLGdCQUZpQjtBQUFBLDZDQUdoQjtBQUFDTixzQkFBUSxFQUFHTTtBQUFaLGFBSGdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTNCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lWCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy5mY2RmY2MxOGY2MWIxMGJmNmM1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IFByb2R1Y3RvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0b3NcIjtcclxuaW1wb3J0IENhdGVnb3JpYXMgZnJvbSBcIi4uL0NvbXBvbmVudHMvQ2F0ZWdvcmlhc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RzKHByb3BzKSB7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGgxPlByb2R1Y3RvczwvaDE+XHJcbiAgICAgICAgICAgIDxDYXRlZ29yaWFzIGNhdGVnb3JpZXM9e3Byb3BzLnByb2R1Y3RzIH0gLz5cclxuICAgICAgICAgICAgPFByb2R1Y3RvcyBwcm9kdWN0cz0ge3Byb3BzLnByb2R1Y3RzfSAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5Qcm9kdWN0cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyhjdHgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo2MDAwL3Byb2R1Y3RzXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ge3Byb2R1Y3RzIDogZGF0YX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==