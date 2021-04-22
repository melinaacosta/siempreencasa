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
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Components_Categorias__WEBPACK_IMPORTED_MODULE_7__["default"], {
      categories: props.categories
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
} // Products.getInitialProps = async(ctx) => {
//     console.log("meli")
//     const res = await fetch("http://localhost:6000/categories");
//     const data = await res.json();
//     return {categories : data}
// }


_c = Products;

Products.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, data, res2, data2;
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
            _context.next = 8;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default()("http://localhost:6000/categories");

          case 8:
            res2 = _context.sent;
            _context.next = 11;
            return res2.json();

          case 11:
            data2 = _context.sent;
            return _context.abrupt("return", {
              products: data,
              categories: data2
            });

          case 13:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJwcm9wcyIsImNhdGVnb3JpZXMiLCJwcm9kdWN0cyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJyZXMyIiwiZGF0YTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFFckIsc0JBRUkscUVBQUMsNkRBQUQ7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsOERBQUQ7QUFBWSxnQkFBVSxFQUFFQSxLQUFLLENBQUNDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJLHFFQUFDLDZEQUFEO0FBQVcsY0FBUSxFQUFHRCxLQUFLLENBQUNFO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQVVILEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQW5CU0gsUTs7QUF3QlRBLFFBQVEsQ0FBQ0ksZUFBVDtBQUFBLHdTQUEyQixpQkFBTUMsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNMQyx1REFBSyxDQUFDLGdDQUFELENBREE7O0FBQUE7QUFDakJDLGVBRGlCO0FBQUE7QUFBQSxtQkFFSkEsR0FBRyxDQUFDQyxJQUFKLEVBRkk7O0FBQUE7QUFFakJDLGdCQUZpQjtBQUFBO0FBQUEsbUJBR0pILHVEQUFLLENBQUMsa0NBQUQsQ0FIRDs7QUFBQTtBQUdqQkksZ0JBSGlCO0FBQUE7QUFBQSxtQkFJSEEsSUFBSSxDQUFDRixJQUFMLEVBSkc7O0FBQUE7QUFJakJHLGlCQUppQjtBQUFBLDZDQUtoQjtBQUFDUixzQkFBUSxFQUFHTSxJQUFaO0FBQWtCUCx3QkFBVSxFQUFFUztBQUE5QixhQUxnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRZVgsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuNGQzOTExN2NjNDExZTE0YzBiZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCBQcm9kdWN0b3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdG9zXCI7XHJcbmltcG9ydCBDYXRlZ29yaWFzIGZyb20gXCIuLi9Db21wb25lbnRzL0NhdGVnb3JpYXNcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0cyhwcm9wcykge1xyXG4gICBcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxoMT5Qcm9kdWN0b3M8L2gxPlxyXG4gICAgICAgICAgICA8Q2F0ZWdvcmlhcyBjYXRlZ29yaWVzPXtwcm9wcy5jYXRlZ29yaWVzfSAvPlxyXG4gICAgICAgICAgICA8UHJvZHVjdG9zIHByb2R1Y3RzPSB7cHJvcHMucHJvZHVjdHN9IC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG5cclxuICAgIClcclxufVxyXG5cclxuLy8gUHJvZHVjdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoY3R4KSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIm1lbGlcIilcclxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo2MDAwL2NhdGVnb3JpZXNcIik7XHJcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuLy8gICAgIHJldHVybiB7Y2F0ZWdvcmllcyA6IGRhdGF9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblByb2R1Y3RzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjYwMDAvcHJvZHVjdHNcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NjAwMC9jYXRlZ29yaWVzXCIpO1xyXG4gICAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXMyLmpzb24oKTtcclxuICAgIHJldHVybiB7cHJvZHVjdHMgOiBkYXRhLCBjYXRlZ29yaWVzOiBkYXRhMn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==