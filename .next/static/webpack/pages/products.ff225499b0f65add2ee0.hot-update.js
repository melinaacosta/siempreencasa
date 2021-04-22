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
    children: props.product.categories == [] ? props.products.map(function (product) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0b3MuanMiXSwibmFtZXMiOlsiUHJvZHVjdG9zIiwicHJvcHMiLCJkaXNwbGF5Q2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdCIsImNhdGVnb3JpZXMiLCJwcm9kdWN0cyIsIm1hcCIsInRleHREZWNvcmF0aW9uIiwibmFtZSIsInRvdGFsX3ByaWNlIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCLFdBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQ3JCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDSDs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxxRkFBZjtBQUFBLGNBRU1MLEtBQUssQ0FBQ00sT0FBTixDQUFjQyxVQUFkLElBQTRCLEVBQTVCLEdBQ0NQLEtBQUssQ0FBQ1EsUUFBTixDQUFlQyxHQUFmLENBQW1CLFVBQUFILE9BQU87QUFBQSwwQkFDekI7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNJO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQVksbUJBQU8sRUFBRUwsWUFBckI7QUFBbUMsaUJBQUssRUFBRTtBQUFFUyw0QkFBYyxFQUFFO0FBQWxCLGFBQTFDO0FBQUEsb0NBQ0k7QUFBSSx1QkFBUyxFQUFDLFlBQWQ7QUFBQSx3QkFBNEJKLE9BQU8sQ0FBQ0s7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUksdUJBQVMsRUFBQywrQkFBZDtBQUFBLCtCQUFpREwsT0FBTyxDQUFDTSxXQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHSTtBQUFJLHVCQUFTLEVBQUMsK0JBQWQ7QUFBQSwrQkFBaUROLE9BQU8sQ0FBQ0MsVUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU1JO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFTLEVBQUMsNkJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLGVBT0k7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IscUJBQVMsRUFBQyw0QkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR5QjtBQUFBLEtBQTFCLENBREQsZ0JBZ0JFO0FBQUssZUFBUyxFQUFDLDBEQUFmO0FBQTBFLFdBQUssRUFBRTtBQUFFTSxhQUFLLEVBQUU7QUFBVCxPQUFqRjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0k7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFZLGlCQUFPLEVBQUVaLFlBQXJCO0FBQW1DLGVBQUssRUFBRTtBQUFFUywwQkFBYyxFQUFFO0FBQWxCLFdBQTFDO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLFlBQWQ7QUFBQSxzQkFBNEJKLE9BQU8sQ0FBQ0s7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUkscUJBQVMsRUFBQywrQkFBZDtBQUFBLDZCQUFpREwsT0FBTyxDQUFDTSxXQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFJLHFCQUFTLEVBQUMsK0JBQWQ7QUFBQSw2QkFBaUROLE9BQU8sQ0FBQ0MsVUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQVMsRUFBQyw2QkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosZUFPSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMsNEJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0RILENBeEREOztLQUFNUixTO0FBMERTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy5mZjIyNTQ5OWIwZjY1YWRkMmVlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHNldFN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0b3MgPSAocHJvcHMpID0+IHtcclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDbGljayhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgbGluayB3YXMgY2xpY2tlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG0tMiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBhbGlnbi1jb250ZW50LWNlbnRlciBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHByb3BzLnByb2R1Y3QuY2F0ZWdvcmllcyA9PSBbXSA/XHJcbiAgICAgICAgICAgICAgIHByb3BzLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtkaXNwbGF5Q2xpY2t9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Byb2R1Y3QubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgbWItMiB0ZXh0LW11dGVkXCI+JCB7cHJvZHVjdC50b3RhbF9wcmljZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgbWItMiB0ZXh0LW11dGVkXCI+JCB7cHJvZHVjdC5jYXRlZ29yaWVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgbS00XCI+QUREPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgbS00XCI+UkVNT1ZFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgKSkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1hbGlnbi1jZW50ZXIgbS0yXCIgc3R5bGU9e3sgd2lkdGg6ICcxOHJlbScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtkaXNwbGF5Q2xpY2t9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Byb2R1Y3QubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgbWItMiB0ZXh0LW11dGVkXCI+JCB7cHJvZHVjdC50b3RhbF9wcmljZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgbWItMiB0ZXh0LW11dGVkXCI+JCB7cHJvZHVjdC5jYXRlZ29yaWVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgbS00XCI+QUREPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgbS00XCI+UkVNT1ZFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgey8qIHtwcm9wcy5yZWNvbW1lbmRhdGlvbnMubWFwKHJlY29tbWVuZGF0aW9uID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyB3aWR0aDogJzE4cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntyZWNvbW1lbmRhdGlvbi5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgbWItMiB0ZXh0LW11dGVkXCI+JCB7cmVjb21tZW5kYXRpb24udG90YWxfcHJpY2V9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cmVjb21tZW5kYXRpb24uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCI+QUREPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCI+UkVNT1ZFPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0b3M7Il0sInNvdXJjZVJvb3QiOiIifQ==