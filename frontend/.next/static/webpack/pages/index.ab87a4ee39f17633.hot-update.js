"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MapContainer.jsx":
/*!*************************************!*\
  !*** ./components/MapContainer.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst containerStyle = {\n    width: \"100%\",\n    height: \"400px\"\n};\nconst center = {\n    lat: 40.712776,\n    lng: -74.005974\n};\nconst locations = [\n    {\n        name: \"Location 1\",\n        position: {\n            lat: 40.712776,\n            lng: -74.005974\n        }\n    },\n    {\n        name: \"Location 2\",\n        position: {\n            lat: 40.730610,\n            lng: -73.935242\n        }\n    }\n];\nfunction Map() {\n    _s();\n    const [selectedLocation, setSelectedLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleMarkerClick = (location)=>{\n        setSelectedLocation(location);\n    };\n    const handleCloseClick = ()=>{\n        setSelectedLocation(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.LoadScript, {\n        googleMapsApiKey: \"AIzaSyBYzVwD8aWVeJYHz70eZPtmHC8sxV7bDZ8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n            mapContainerStyle: containerStyle,\n            center: center,\n            zoom: 10,\n            children: selectedLocation && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.InfoWindow, {\n                position: selectedLocation.position,\n                onCloseClick: handleCloseClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: selectedLocation.name\n                        }, void 0, false, {\n                            fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Lat: \",\n                                selectedLocation.position.lat\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Lng: \",\n                                selectedLocation.position.lng\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                lineNumber: 51,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Map, \"pGedlDpRVZiPTL4140bC/BFKe+Y=\");\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcENvbnRhaW5lci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQzJDO0FBRW5GLE1BQU1NLGlCQUFpQjtJQUNyQkMsT0FBTztJQUNQQyxRQUFRO0FBQ1Y7QUFFQSxNQUFNQyxTQUFTO0lBQ2JDLEtBQUs7SUFDTEMsS0FBSyxDQUFDO0FBQ1I7QUFFQSxNQUFNQyxZQUFZO0lBQ2hCO1FBQ0VDLE1BQU07UUFDTkMsVUFBVTtZQUNSSixLQUFLO1lBQ0xDLEtBQUssQ0FBQztRQUNSO0lBQ0Y7SUFDQTtRQUNFRSxNQUFNO1FBQ05DLFVBQVU7WUFDUkosS0FBSztZQUNMQyxLQUFLLENBQUM7UUFDUjtJQUNGO0NBQ0Q7QUFFYyxTQUFTSSxNQUFNOztJQUM1QixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdoQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTdELE1BQU1pQixvQkFBb0IsQ0FBQ0MsV0FBYTtRQUN0Q0Ysb0JBQW9CRTtJQUN0QjtJQUVBLE1BQU1DLG1CQUFtQixJQUFNO1FBQzdCSCxvQkFBb0IsSUFBSTtJQUMxQjtJQUVBLHFCQUNFLDhEQUFDZCw4REFBVUE7UUFBQ2tCLGtCQUFpQjtrQkFDM0IsNEVBQUNuQiw2REFBU0E7WUFDUm9CLG1CQUFtQmhCO1lBQ25CRyxRQUFRQTtZQUNSYyxNQUFNO3NCQUdMUCxrQ0FDQyw4REFBQ1gsOERBQVVBO2dCQUNUUyxVQUFVRSxpQkFBaUJGLFFBQVE7Z0JBQ25DVSxjQUFjSjswQkFFZCw0RUFBQ0s7O3NDQUNDLDhEQUFDQztzQ0FBSVYsaUJBQWlCSCxJQUFJOzs7Ozs7c0NBQzFCLDhEQUFDYzs7Z0NBQUU7Z0NBQU1YLGlCQUFpQkYsUUFBUSxDQUFDSixHQUFHOzs7Ozs7O3NDQUN0Qyw4REFBQ2lCOztnQ0FBRTtnQ0FBTVgsaUJBQWlCRixRQUFRLENBQUNILEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEQsQ0FBQztHQWxDdUJJO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwQ29udGFpbmVyLmpzeD9iNWMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdvb2dsZU1hcCwgTG9hZFNjcmlwdCwgTWFya2VyLCBJbmZvV2luZG93IH0gZnJvbSAnQHJlYWN0LWdvb2dsZS1tYXBzL2FwaSc7XG5cbmNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICc0MDBweCdcbn07XG5cbmNvbnN0IGNlbnRlciA9IHtcbiAgbGF0OiA0MC43MTI3NzYsXG4gIGxuZzogLTc0LjAwNTk3NFxufTtcblxuY29uc3QgbG9jYXRpb25zID0gW1xuICB7XG4gICAgbmFtZTogJ0xvY2F0aW9uIDEnLFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICBsYXQ6IDQwLjcxMjc3NixcbiAgICAgIGxuZzogLTc0LjAwNTk3NFxuICAgIH1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdMb2NhdGlvbiAyJyxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgbGF0OiA0MC43MzA2MTAsXG4gICAgICBsbmc6IC03My45MzUyNDJcbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcCgpIHtcbiAgY29uc3QgW3NlbGVjdGVkTG9jYXRpb24sIHNldFNlbGVjdGVkTG9jYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlTWFya2VyQ2xpY2sgPSAobG9jYXRpb24pID0+IHtcbiAgICBzZXRTZWxlY3RlZExvY2F0aW9uKGxvY2F0aW9uKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkTG9jYXRpb24obnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TG9hZFNjcmlwdCBnb29nbGVNYXBzQXBpS2V5PVwiQUl6YVN5Qll6VndEOGFXVmVKWUh6NzBlWlB0bUhDOHN4VjdiRFo4XCI+XG4gICAgICA8R29vZ2xlTWFwXG4gICAgICAgIG1hcENvbnRhaW5lclN0eWxlPXtjb250YWluZXJTdHlsZX1cbiAgICAgICAgY2VudGVyPXtjZW50ZXJ9XG4gICAgICAgIHpvb209ezEwfVxuICAgICAgPlxuICAgICAgICBcbiAgICAgICAge3NlbGVjdGVkTG9jYXRpb24gJiYgKFxuICAgICAgICAgIDxJbmZvV2luZG93XG4gICAgICAgICAgICBwb3NpdGlvbj17c2VsZWN0ZWRMb2NhdGlvbi5wb3NpdGlvbn1cbiAgICAgICAgICAgIG9uQ2xvc2VDbGljaz17aGFuZGxlQ2xvc2VDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDM+e3NlbGVjdGVkTG9jYXRpb24ubmFtZX08L2gzPlxuICAgICAgICAgICAgICA8cD5MYXQ6IHtzZWxlY3RlZExvY2F0aW9uLnBvc2l0aW9uLmxhdH08L3A+XG4gICAgICAgICAgICAgIDxwPkxuZzoge3NlbGVjdGVkTG9jYXRpb24ucG9zaXRpb24ubG5nfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvSW5mb1dpbmRvdz5cbiAgICAgICAgKX1cbiAgICAgIDwvR29vZ2xlTWFwPlxuICAgIDwvTG9hZFNjcmlwdD5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdvb2dsZU1hcCIsIkxvYWRTY3JpcHQiLCJNYXJrZXIiLCJJbmZvV2luZG93IiwiY29udGFpbmVyU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImNlbnRlciIsImxhdCIsImxuZyIsImxvY2F0aW9ucyIsIm5hbWUiLCJwb3NpdGlvbiIsIk1hcCIsInNlbGVjdGVkTG9jYXRpb24iLCJzZXRTZWxlY3RlZExvY2F0aW9uIiwiaGFuZGxlTWFya2VyQ2xpY2siLCJsb2NhdGlvbiIsImhhbmRsZUNsb3NlQ2xpY2siLCJnb29nbGVNYXBzQXBpS2V5IiwibWFwQ29udGFpbmVyU3R5bGUiLCJ6b29tIiwib25DbG9zZUNsaWNrIiwiZGl2IiwiaDMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MapContainer.jsx\n"));

/***/ })

});