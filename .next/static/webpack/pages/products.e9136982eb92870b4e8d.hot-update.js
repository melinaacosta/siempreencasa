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
/* harmony import */ var C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\Melina\\Desktop\\sec\\siempreencasa\\components\\Productos.js",
    _this = undefined,
    _s = $RefreshSig$();



var Productos = function Productos(props) {
  _s();

  var _useState = useState(),
      _useState2 = Object(C_Users_Melina_Desktop_sec_siempreencasa_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

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
              children: product.categories
            }, void 0, false, {
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
    }) //  : (
    //     <div className="card d-flex justify-content-center text-align-center m-2" style={{ width: '18rem' }}>
    //         <div className="card-body">
    //             <a href="#" onClick={displayClick} style={{ textDecoration: "none" }}>
    //                 <h5 className="card-title">{product.name}</h5>
    //                 <h6 className="card-subtitle mb-2 text-muted">$ {product.total_price}</h6>
    //                 <h6 className="card-subtitle mb-2 text-muted">$ {product.categories}</h6>
    //             </a>
    //             <button type="button" className="btn btn-outline-success m-4">ADD</button>
    //             <button type="button" className="btn btn-outline-danger m-4">REMOVE</button>
    //         </div>
    //     </div>
    // )

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_s(Productos, "z5G39S7WAjUoj2NXuwkP3jD6e08=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0b3MuanMiXSwibmFtZXMiOlsiUHJvZHVjdG9zIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImRpc3BsYXlDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJ3aWR0aCIsInRleHREZWNvcmF0aW9uIiwibmFtZSIsInRvdGFsX3ByaWNlIiwiY2F0ZWdvcmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDR0MsUUFBUSxFQURYO0FBQUE7QUFBQSxNQUNsQkMsTUFEa0I7QUFBQSxNQUNWQyxTQURVOztBQUV6QixXQUFTQyxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUNyQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUMscUZBQWY7QUFBQSxjQUVPUixLQUFLLENBQUNTLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixVQUFBQyxPQUFPO0FBQUEsMEJBQ3pCO0FBQUssaUJBQVMsRUFBQywwREFBZjtBQUEwRSxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FBakY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNJO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQVksbUJBQU8sRUFBRVIsWUFBckI7QUFBbUMsaUJBQUssRUFBRTtBQUFFUyw0QkFBYyxFQUFFO0FBQWxCLGFBQTFDO0FBQUEsb0NBQ0k7QUFBSSx1QkFBUyxFQUFDLFlBQWQ7QUFBQSx3QkFBNEJGLE9BQU8sQ0FBQ0c7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUksdUJBQVMsRUFBQywrQkFBZDtBQUFBLCtCQUFpREgsT0FBTyxDQUFDSSxXQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHSTtBQUFJLHVCQUFTLEVBQUMsK0JBQWQ7QUFBQSx3QkFBK0NKLE9BQU8sQ0FBQ0s7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFNSTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixxQkFBUyxFQUFDLDZCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixlQU9JO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFTLEVBQUMsNEJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEeUI7QUFBQSxLQUExQixDQUZQLENBaUJJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrREgsQ0F6REQ7O0dBQU1qQixTOztLQUFBQSxTO0FBMkRTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy5lOTEzNjk4MmViOTI4NzBiNGU4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHNldFN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0b3MgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgZnVuY3Rpb24gZGlzcGxheUNsaWNrKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZSBsaW5rIHdhcyBjbGlja2VkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbS0yIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGFsaWduLWNvbnRlbnQtY2VudGVyIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIHByb3BzLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWFsaWduLWNlbnRlciBtLTJcIiBzdHlsZT17eyB3aWR0aDogJzE4cmVtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e2Rpc3BsYXlDbGlja30gc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cHJvZHVjdC5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj4kIHtwcm9kdWN0LnRvdGFsX3ByaWNlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj57cHJvZHVjdC5jYXRlZ29yaWVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgbS00XCI+QUREPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgbS00XCI+UkVNT1ZFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgLy8gIDogKFxyXG4gICAgICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtYWxpZ24tY2VudGVyIG0tMlwiIHN0eWxlPXt7IHdpZHRoOiAnMThyZW0nIH19PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17ZGlzcGxheUNsaWNrfSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntwcm9kdWN0Lm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPiQge3Byb2R1Y3QudG90YWxfcHJpY2V9PC9oNj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPiQge3Byb2R1Y3QuY2F0ZWdvcmllc308L2g2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIG0tNFwiPkFERDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIG0tNFwiPlJFTU9WRTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIC8vIClcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHsvKiB7cHJvcHMucmVjb21tZW5kYXRpb25zLm1hcChyZWNvbW1lbmRhdGlvbiA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6ICcxOHJlbSd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cmVjb21tZW5kYXRpb24ubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPiQge3JlY29tbWVuZGF0aW9uLnRvdGFsX3ByaWNlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3JlY29tbWVuZGF0aW9uLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPkFERDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPlJFTU9WRTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdG9zOyJdLCJzb3VyY2VSb290IjoiIn0=