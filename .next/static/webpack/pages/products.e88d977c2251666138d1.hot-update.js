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



var _jsxFileName = "C:\\Users\\Melina\\Desktop\\sec\\siempreencasa\\pages\\products.js";






function Products(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: "Productos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Components_Categorias__WEBPACK_IMPORTED_MODULE_7__["default"], {
      categories: props.categories
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Productos__WEBPACK_IMPORTED_MODULE_6__["default"], {
      products: props.products
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

_c = Products;

_Components_Categorias__WEBPACK_IMPORTED_MODULE_7__["default"].getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, data;
    return C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default()("http://localhost:6000/categories");

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", {
              categories: data
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

Products.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {
    var res, data;
    return C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default()("http://localhost:6000/products");

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", {
              products: data
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJwcm9wcyIsImNhdGVnb3JpZXMiLCJwcm9kdWN0cyIsIkNhdGVnb3JpYXMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3JCLHNCQUVJLHFFQUFDLDZEQUFEO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLDhEQUFEO0FBQVksZ0JBQVUsRUFBRUEsS0FBSyxDQUFDQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSxxRUFBQyw2REFBRDtBQUFXLGNBQVEsRUFBR0QsS0FBSyxDQUFDRTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFVSDs7S0FYUUgsUTs7QUFhVEksOERBQVUsQ0FBQ0MsZUFBWDtBQUFBLHdTQUE2QixpQkFBTUMsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNQQyx1REFBSyxDQUFDLGtDQUFELENBREU7O0FBQUE7QUFDbkJDLGVBRG1CO0FBQUE7QUFBQSxtQkFFTkEsR0FBRyxDQUFDQyxJQUFKLEVBRk07O0FBQUE7QUFFbkJDLGdCQUZtQjtBQUFBLDZDQUdsQjtBQUFDUix3QkFBVSxFQUFHUTtBQUFkLGFBSGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1BVixRQUFRLENBQUNLLGVBQVQ7QUFBQSx5U0FBMkIsa0JBQU1DLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTEMsdURBQUssQ0FBQyxnQ0FBRCxDQURBOztBQUFBO0FBQ2pCQyxlQURpQjtBQUFBO0FBQUEsbUJBRUpBLEdBQUcsQ0FBQ0MsSUFBSixFQUZJOztBQUFBO0FBRWpCQyxnQkFGaUI7QUFBQSw4Q0FHaEI7QUFBQ1Asc0JBQVEsRUFBR087QUFBWixhQUhnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZVYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuZTg4ZDk3N2MyMjUxNjY2MTM4ZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCBQcm9kdWN0b3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdG9zXCI7XHJcbmltcG9ydCBDYXRlZ29yaWFzIGZyb20gXCIuLi9Db21wb25lbnRzL0NhdGVnb3JpYXNcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0cyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGgxPlByb2R1Y3RvczwvaDE+XHJcbiAgICAgICAgICAgIDxDYXRlZ29yaWFzIGNhdGVnb3JpZXM9e3Byb3BzLmNhdGVnb3JpZXN9IC8+XHJcbiAgICAgICAgICAgIDxQcm9kdWN0b3MgcHJvZHVjdHM9IHtwcm9wcy5wcm9kdWN0c30gLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5DYXRlZ29yaWFzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjYwMDAvY2F0ZWdvcmllc1wiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHtjYXRlZ29yaWVzIDogZGF0YX1cclxufVxyXG5cclxuUHJvZHVjdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoY3R4KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NjAwMC9wcm9kdWN0c1wiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHtwcm9kdWN0cyA6IGRhdGF9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzOyJdLCJzb3VyY2VSb290IjoiIn0=