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
      listado: listado
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

Products.getInitialProps = /*#__PURE__*/function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJwcm9wcyIsImxpc3RhZG8iLCJwcm9kdWN0cyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDckIsc0JBRUkscUVBQUMsNkRBQUQ7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsOERBQUQ7QUFBWSxhQUFPLEVBQUVDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJLHFFQUFDLDZEQUFEO0FBQVcsY0FBUSxFQUFHRCxLQUFLLENBQUNFO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQVVIOztLQVhRSCxROztBQWFUQSxRQUFRLENBQUNJLGVBQVQ7QUFBQSx3U0FBMkIsaUJBQU1DLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTEMsdURBQUssQ0FBQyxrQ0FBRCxDQURBOztBQUFBO0FBQ2pCQyxlQURpQjtBQUFBO0FBQUEsbUJBRUpBLEdBQUcsQ0FBQ0MsSUFBSixFQUZJOztBQUFBO0FBRWpCQyxnQkFGaUI7QUFBQSw2Q0FHaEI7QUFBQ04sc0JBQVEsRUFBR007QUFBWixhQUhnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNQVQsUUFBUSxDQUFDSSxlQUFUO0FBQUEseVNBQTJCLGtCQUFNQyxHQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0xDLHVEQUFLLENBQUMsZ0NBQUQsQ0FEQTs7QUFBQTtBQUNqQkMsZUFEaUI7QUFBQTtBQUFBLG1CQUVKQSxHQUFHLENBQUNDLElBQUosRUFGSTs7QUFBQTtBQUVqQkMsZ0JBRmlCO0FBQUEsOENBR2hCO0FBQUNOLHNCQUFRLEVBQUdNO0FBQVosYUFIZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVULHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzLjExYmMyN2NkMWEwODY2MTk0YjM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5pbXBvcnQgUHJvZHVjdG9zIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3Rvc1wiO1xyXG5pbXBvcnQgQ2F0ZWdvcmlhcyBmcm9tIFwiLi4vQ29tcG9uZW50cy9DYXRlZ29yaWFzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gUHJvZHVjdHMocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxoMT5Qcm9kdWN0b3M8L2gxPlxyXG4gICAgICAgICAgICA8Q2F0ZWdvcmlhcyBsaXN0YWRvPXtsaXN0YWRvfSAvPlxyXG4gICAgICAgICAgICA8UHJvZHVjdG9zIHByb2R1Y3RzPSB7cHJvcHMucHJvZHVjdHN9IC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG5cclxuICAgIClcclxufVxyXG5cclxuUHJvZHVjdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoY3R4KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NjAwMC9jYXRlZ29yaWVzXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ge3Byb2R1Y3RzIDogZGF0YX1cclxufVxyXG5cclxuUHJvZHVjdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoY3R4KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NjAwMC9wcm9kdWN0c1wiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHtwcm9kdWN0cyA6IGRhdGF9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzOyJdLCJzb3VyY2VSb290IjoiIn0=