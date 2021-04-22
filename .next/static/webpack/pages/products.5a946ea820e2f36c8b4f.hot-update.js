webpackHotUpdate_N_E("pages/products",{

/***/ "./components/Productos.js":
/*!*********************************!*\
  !*** ./components/Productos.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Melina\\Desktop\\sec\\siempreencasa\\components\\Productos.js",
    _this = undefined;



var Productos = function Productos(props) {
  function displayClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "d-flex m-2 align-items-center align-content-between flex-wrap",
    children: props.products.map(function (product) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card d-flex justify-content-between align-items-center",
        style: {
          width: '18rem'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-body p-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            onClick: displayClick,
            style: {
              textDecoration: "none"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "card-title",
              children: product.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "card-subtitle mb-2 text-muted",
              children: ["$ ", product.total_price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: product.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: product.product_id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            className: "btn btn-outline-success m-4",
            children: "ADD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            className: "btn btn-outline-danger m-4",
            children: "REMOVE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_c = Productos;
/* harmony default export */ __webpack_exports__["default"] = (Productos);

var _c;

$RefreshReg$(_c, "Productos");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0b3MuanMiXSwibmFtZXMiOlsiUHJvZHVjdG9zIiwicHJvcHMiLCJkaXNwbGF5Q2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0Iiwid2lkdGgiLCJ0ZXh0RGVjb3JhdGlvbiIsIm5hbWUiLCJ0b3RhbF9wcmljZSIsImRlc2NyaXB0aW9uIiwicHJvZHVjdF9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDekIsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDckJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNEOztBQUVILHNCQUNJO0FBQUssYUFBUyxFQUFDLCtEQUFmO0FBQUEsY0FHQ0wsS0FBSyxDQUFDTSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQUMsT0FBTztBQUFBLDBCQUMzQjtBQUFLLGlCQUFTLEVBQUMsd0RBQWY7QUFBd0UsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQS9FO0FBQUEsK0JBQ1E7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxrQ0FDSTtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFZLG1CQUFPLEVBQUVSLFlBQXJCO0FBQW1DLGlCQUFLLEVBQUU7QUFBRVMsNEJBQWMsRUFBRTtBQUFsQixhQUExQztBQUFBLG9DQUNBO0FBQUksdUJBQVMsRUFBQyxZQUFkO0FBQUEsd0JBQTRCRixPQUFPLENBQUNHO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFFQTtBQUFJLHVCQUFTLEVBQUMsK0JBQWQ7QUFBQSwrQkFBaURILE9BQU8sQ0FBQ0ksV0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZBLGVBR0E7QUFBRyx1QkFBUyxFQUFDLFdBQWI7QUFBQSx3QkFBMEJKLE9BQU8sQ0FBQ0s7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIQSxlQUlBO0FBQUcsdUJBQVMsRUFBQyxXQUFiO0FBQUEsd0JBQTBCTCxPQUFPLENBQUNNO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBUUk7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IscUJBQVMsRUFBQyw2QkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkosZUFTSTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixxQkFBUyxFQUFDLDRCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRDJCO0FBQUEsS0FBMUI7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQ0gsQ0EzQ0Q7O0tBQU1mLFM7QUE2Q1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzLjVhOTQ2ZWE4MjBlMmYzNmM4YjRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgc2V0U3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RvcyA9IChwcm9wcykgPT4ge1xyXG4gICAgZnVuY3Rpb24gZGlzcGxheUNsaWNrKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZSBsaW5rIHdhcyBjbGlja2VkLicpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBtLTIgYWxpZ24taXRlbXMtY2VudGVyIGFsaWduLWNvbnRlbnQtYmV0d2VlbiBmbGV4LXdyYXBcIj5cclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgIHtwcm9wcy5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogJzE4cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtkaXNwbGF5Q2xpY2t9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Byb2R1Y3QubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPiQge3Byb2R1Y3QudG90YWxfcHJpY2V9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3Byb2R1Y3QucHJvZHVjdF9pZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIG0tNFwiPkFERDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgbS00XCI+UkVNT1ZFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuXHJcblxyXG4gICAgICAgICB7Lyoge3Byb3BzLnJlY29tbWVuZGF0aW9ucy5tYXAocmVjb21tZW5kYXRpb24gPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiAnMThyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3JlY29tbWVuZGF0aW9uLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj4kIHtyZWNvbW1lbmRhdGlvbi50b3RhbF9wcmljZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntyZWNvbW1lbmRhdGlvbi5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIj5BREQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIj5SRU1PVkU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0b3M7Il0sInNvdXJjZVJvb3QiOiIifQ==