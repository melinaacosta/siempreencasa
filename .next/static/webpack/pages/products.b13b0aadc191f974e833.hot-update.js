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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0b3MuanMiXSwibmFtZXMiOlsiUHJvZHVjdG9zIiwicHJvcHMiLCJkaXNwbGF5Q2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0Iiwid2lkdGgiLCJ0ZXh0RGVjb3JhdGlvbiIsIm5hbWUiLCJ0b3RhbF9wcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDekIsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDckJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNEOztBQUVILHNCQUNJO0FBQUssYUFBUyxFQUFDLHFGQUFmO0FBQUEsY0FHQ0wsS0FBSyxDQUFDTSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQUMsT0FBTztBQUFBLDBCQUMzQjtBQUFLLGlCQUFTLEVBQUMsMERBQWY7QUFBMEUsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQWpGO0FBQUEsK0JBQ1E7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxrQ0FDSTtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFZLG1CQUFPLEVBQUVSLFlBQXJCO0FBQW1DLGlCQUFLLEVBQUU7QUFBRVMsNEJBQWMsRUFBRTtBQUFsQixhQUExQztBQUFBLG9DQUNBO0FBQUksdUJBQVMsRUFBQyxZQUFkO0FBQUEsd0JBQTRCRixPQUFPLENBQUNHO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFFQTtBQUFJLHVCQUFTLEVBQUMsK0JBQWQ7QUFBQSwrQkFBaURILE9BQU8sQ0FBQ0ksV0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQVFJO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFTLEVBQUMsNkJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKLGVBU0k7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IscUJBQVMsRUFBQyw0QkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUQyQjtBQUFBLEtBQTFCO0FBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcUNILENBM0NEOztLQUFNYixTO0FBNkNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy5iMTNiMGFhZGMxOTFmOTc0ZTgzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHNldFN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0b3MgPSAocHJvcHMpID0+IHtcclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDbGljayhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgbGluayB3YXMgY2xpY2tlZC4nKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbS0yIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGFsaWduLWNvbnRlbnQtY2VudGVyIGZsZXgtd3JhcFwiPlxyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAge3Byb3BzLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1hbGlnbi1jZW50ZXIgbS0yXCIgc3R5bGU9e3sgd2lkdGg6ICcxOHJlbSd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtkaXNwbGF5Q2xpY2t9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Byb2R1Y3QubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPiQge3Byb2R1Y3QudG90YWxfcHJpY2V9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgbS00XCI+QUREPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBtLTRcIj5SRU1PVkU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG5cclxuXHJcbiAgICAgICAgIHsvKiB7cHJvcHMucmVjb21tZW5kYXRpb25zLm1hcChyZWNvbW1lbmRhdGlvbiA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6ICcxOHJlbSd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cmVjb21tZW5kYXRpb24ubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPiQge3JlY29tbWVuZGF0aW9uLnRvdGFsX3ByaWNlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3JlY29tbWVuZGF0aW9uLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPkFERDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPlJFTU9WRTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvczsiXSwic291cmNlUm9vdCI6IiJ9