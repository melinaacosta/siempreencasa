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
    className: "d-flex m-2 align-items-center align-content-center flex-wrap",
    children: props.products.map(function (product) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card d-flex justify-content-center text-align-center m-2",
        style: {
          width: '18rem'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-body",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0b3MuanMiXSwibmFtZXMiOlsiUHJvZHVjdG9zIiwicHJvcHMiLCJkaXNwbGF5Q2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0Iiwid2lkdGgiLCJ0ZXh0RGVjb3JhdGlvbiIsIm5hbWUiLCJ0b3RhbF9wcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDekIsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDckJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNEOztBQUVILHNCQUNJO0FBQUssYUFBUyxFQUFDLDhEQUFmO0FBQUEsY0FHQ0wsS0FBSyxDQUFDTSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQUMsT0FBTztBQUFBLDBCQUMzQjtBQUFLLGlCQUFTLEVBQUMsMERBQWY7QUFBMEUsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQWpGO0FBQUEsK0JBQ1E7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxrQ0FDSTtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFZLG1CQUFPLEVBQUVSLFlBQXJCO0FBQW1DLGlCQUFLLEVBQUU7QUFBRVMsNEJBQWMsRUFBRTtBQUFsQixhQUExQztBQUFBLG9DQUNBO0FBQUksdUJBQVMsRUFBQyxZQUFkO0FBQUEsd0JBQTRCRixPQUFPLENBQUNHO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFFQTtBQUFJLHVCQUFTLEVBQUMsK0JBQWQ7QUFBQSwrQkFBaURILE9BQU8sQ0FBQ0ksV0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQVFJO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFTLEVBQUMsNkJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKLGVBU0k7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IscUJBQVMsRUFBQyw0QkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUQyQjtBQUFBLEtBQTFCO0FBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcUNILENBM0NEOztLQUFNYixTO0FBNkNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy5iYWI0YWY5MjEzNzNhZjBmZWNmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHNldFN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0b3MgPSAocHJvcHMpID0+IHtcclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDbGljayhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgbGluayB3YXMgY2xpY2tlZC4nKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbS0yIGFsaWduLWl0ZW1zLWNlbnRlciBhbGlnbi1jb250ZW50LWNlbnRlciBmbGV4LXdyYXBcIj5cclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgIHtwcm9wcy5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtYWxpZ24tY2VudGVyIG0tMlwiIHN0eWxlPXt7IHdpZHRoOiAnMThyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17ZGlzcGxheUNsaWNrfSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntwcm9kdWN0Lm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj4kIHtwcm9kdWN0LnRvdGFsX3ByaWNlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIG0tNFwiPkFERDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgbS00XCI+UkVNT1ZFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuXHJcblxyXG4gICAgICAgICB7Lyoge3Byb3BzLnJlY29tbWVuZGF0aW9ucy5tYXAocmVjb21tZW5kYXRpb24gPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiAnMThyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3JlY29tbWVuZGF0aW9uLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj4kIHtyZWNvbW1lbmRhdGlvbi50b3RhbF9wcmljZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntyZWNvbW1lbmRhdGlvbi5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIj5BREQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIj5SRU1PVkU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0b3M7Il0sInNvdXJjZVJvb3QiOiIifQ==