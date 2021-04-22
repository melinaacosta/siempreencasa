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
    className: "d-flex m-2 justify-content-center align-items-center align-content-center flex-wrap",
    children: props.products.filter() == [] ? props.products.map(function (product) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "card-subtitle mb-2 text-muted",
              children: ["$ ", product.total_price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "card-subtitle mb-2 text-muted",
              children: ["$ ", product.categories]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            className: "btn btn-outline-success m-4",
            children: "ADD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            className: "btn btn-outline-danger m-4",
            children: "REMOVE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this);
    }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
            lineNumber: 31,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            className: "card-subtitle mb-2 text-muted",
            children: ["$ ", product.total_price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            className: "card-subtitle mb-2 text-muted",
            children: ["$ ", product.categories]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: "btn btn-outline-success m-4",
          children: "ADD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: "btn btn-outline-danger m-4",
          children: "REMOVE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }, _this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0b3MuanMiXSwibmFtZXMiOlsiUHJvZHVjdG9zIiwicHJvcHMiLCJkaXNwbGF5Q2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHMiLCJmaWx0ZXIiLCJtYXAiLCJwcm9kdWN0IiwidGV4dERlY29yYXRpb24iLCJuYW1lIiwidG90YWxfcHJpY2UiLCJjYXRlZ29yaWVzIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCLFdBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQ3JCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDSDs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxxRkFBZjtBQUFBLGNBRU1MLEtBQUssQ0FBQ00sUUFBTixDQUFlQyxNQUFmLE1BQTJCLEVBQTNCLEdBQ0NQLEtBQUssQ0FBQ00sUUFBTixDQUFlRSxHQUFmLENBQW1CLFVBQUFDLE9BQU87QUFBQSwwQkFDekI7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNJO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQVksbUJBQU8sRUFBRVIsWUFBckI7QUFBbUMsaUJBQUssRUFBRTtBQUFFUyw0QkFBYyxFQUFFO0FBQWxCLGFBQTFDO0FBQUEsb0NBQ0k7QUFBSSx1QkFBUyxFQUFDLFlBQWQ7QUFBQSx3QkFBNEJELE9BQU8sQ0FBQ0U7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUksdUJBQVMsRUFBQywrQkFBZDtBQUFBLCtCQUFpREYsT0FBTyxDQUFDRyxXQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHSTtBQUFJLHVCQUFTLEVBQUMsK0JBQWQ7QUFBQSwrQkFBaURILE9BQU8sQ0FBQ0ksVUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU1JO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFTLEVBQUMsNkJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLGVBT0k7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IscUJBQVMsRUFBQyw0QkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR5QjtBQUFBLEtBQTFCLENBREQsZ0JBZ0JFO0FBQUssZUFBUyxFQUFDLDBEQUFmO0FBQTBFLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFqRjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0k7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFZLGlCQUFPLEVBQUViLFlBQXJCO0FBQW1DLGVBQUssRUFBRTtBQUFFUywwQkFBYyxFQUFFO0FBQWxCLFdBQTFDO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLFlBQWQ7QUFBQSxzQkFBNEJELE9BQU8sQ0FBQ0U7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUkscUJBQVMsRUFBQywrQkFBZDtBQUFBLDZCQUFpREYsT0FBTyxDQUFDRyxXQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFJLHFCQUFTLEVBQUMsK0JBQWQ7QUFBQSw2QkFBaURILE9BQU8sQ0FBQ0ksVUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQVMsRUFBQyw2QkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosZUFPSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMsNEJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0RILENBeEREOztLQUFNZCxTO0FBMERTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy4wYmQ0YTcxODRiMGZlNTBjOWQ2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHNldFN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0b3MgPSAocHJvcHMpID0+IHtcclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDbGljayhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgbGluayB3YXMgY2xpY2tlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG0tMiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBhbGlnbi1jb250ZW50LWNlbnRlciBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHByb3BzLnByb2R1Y3RzLmZpbHRlcigpID09IFtdID9cclxuICAgICAgICAgICAgICAgcHJvcHMucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e2Rpc3BsYXlDbGlja30gc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cHJvZHVjdC5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj4kIHtwcm9kdWN0LnRvdGFsX3ByaWNlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj4kIHtwcm9kdWN0LmNhdGVnb3JpZXN9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBtLTRcIj5BREQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBtLTRcIj5SRU1PVkU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWFsaWduLWNlbnRlciBtLTJcIiBzdHlsZT17eyB3aWR0aDogJzE4cmVtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e2Rpc3BsYXlDbGlja30gc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cHJvZHVjdC5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj4kIHtwcm9kdWN0LnRvdGFsX3ByaWNlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj4kIHtwcm9kdWN0LmNhdGVnb3JpZXN9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBtLTRcIj5BREQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBtLTRcIj5SRU1PVkU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB7Lyoge3Byb3BzLnJlY29tbWVuZGF0aW9ucy5tYXAocmVjb21tZW5kYXRpb24gPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiAnMThyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3JlY29tbWVuZGF0aW9uLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj4kIHtyZWNvbW1lbmRhdGlvbi50b3RhbF9wcmljZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntyZWNvbW1lbmRhdGlvbi5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIj5BREQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIj5SRU1PVkU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvczsiXSwic291cmNlUm9vdCI6IiJ9