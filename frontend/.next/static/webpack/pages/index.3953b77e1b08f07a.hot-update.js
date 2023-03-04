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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MapContainer() {\n    _s();\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const onSelect = (item)=>{\n        console.log(item);\n        setSelected(item);\n    };\n    const mapStyles = {\n        height: \"50vh\",\n        width: \"80vh\"\n    };\n    const defaultCenter = {\n        lat: 39.7813353,\n        lng: -104.9715600\n    };\n    const locations = [\n        {\n            name: \"Location 1\",\n            price: \"$45\",\n            imgUrl: \"https://imgur.com/a/dooBuGK\",\n            location: {\n                lat: 39.7813353,\n                lng: -104.9715600\n            }\n        },\n        {\n            name: \"Location 2\",\n            location: {\n                lat: 39.7855353,\n                lng: -104.9765600\n            }\n        },\n        {\n            name: \"Location 3\",\n            location: {\n                lat: 39.7855353,\n                lng: -104.9365600\n            }\n        },\n        {\n            name: \"Location 4\",\n            location: {\n                lat: 39.7855353,\n                lng: -104.9465600\n            }\n        },\n        {\n            name: \"Location 5\",\n            location: {\n                lat: 39.7875353,\n                lng: -104.9565600\n            }\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.LoadScript, {\n        googleMapsApiKey: \"AIzaSyBYzVwD8aWVeJYHz70eZPtmHC8sxV7bDZ8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n            mapContainerStyle: mapStyles,\n            zoom: 13,\n            center: defaultCenter,\n            children: [\n                locations.map((item)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                        position: item.location,\n                        onClick: ()=>onSelect(item)\n                    }, item.name, false, {\n                        fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 15\n                    }, this);\n                }),\n                selected.location && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.InfoWindow, {\n                        position: selected.location,\n                        clickable: true,\n                        onCloseClick: ()=>setSelected({}),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                color: \"black\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: selected.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: selected.price\n                                }, void 0, false, {\n                                    fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./\",\n                                    width: \"55px\",\n                                    height: \"55px\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n            lineNumber: 67,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n        lineNumber: 65,\n        columnNumber: 6\n    }, this);\n}\n_s(MapContainer, \"Gk1ihxo6C0QmBTOHyMJ50k0sYrc=\");\n_c = MapContainer;\nvar _c;\n$RefreshReg$(_c, \"MapContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcENvbnRhaW5lci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ0s7QUFDb0Q7QUFFcEUsU0FBU00sZUFBZTs7SUFFbkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDLENBQUM7SUFFMUMsTUFBTVEsV0FBV0MsQ0FBQUEsT0FBUTtRQUNyQkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaRixZQUFZRTtJQUNoQjtJQUVGLE1BQU1HLFlBQVk7UUFDaEJDLFFBQVE7UUFDUkMsT0FBTztJQUNYO0lBRUUsTUFBTUMsZ0JBQWdCO1FBQ3BCQyxLQUFLO1FBQVlDLEtBQUssQ0FBQztJQUN6QjtJQUVBLE1BQU1DLFlBQVk7UUFDaEI7WUFDRUMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsVUFBVTtnQkFDUk4sS0FBSztnQkFDTEMsS0FBSyxDQUFDO1lBQ1I7UUFDRjtRQUNBO1lBQ0VFLE1BQU07WUFDTkcsVUFBVTtnQkFDUk4sS0FBSztnQkFDTEMsS0FBSyxDQUFDO1lBQ1I7UUFDRjtRQUNBO1lBQ0VFLE1BQU07WUFDTkcsVUFBVTtnQkFDUk4sS0FBSztnQkFDTEMsS0FBSyxDQUFDO1lBQ1I7UUFDRjtRQUNBO1lBQ0VFLE1BQU07WUFDTkcsVUFBVTtnQkFDUk4sS0FBSztnQkFDTEMsS0FBSyxDQUFDO1lBQ1I7UUFDRjtRQUNBO1lBQ0VFLE1BQU07WUFDTkcsVUFBVTtnQkFDUk4sS0FBSztnQkFDTEMsS0FBSyxDQUFDO1lBQ1I7UUFDRjtLQUNEO0lBRUQscUJBRUcsOERBQUNmLDhEQUFVQTtRQUNUcUIsa0JBQWlCO2tCQUNoQiw0RUFBQ3RCLDZEQUFTQTtZQUNSdUIsbUJBQW1CWjtZQUNuQmEsTUFBTTtZQUNOQyxRQUFRWDs7Z0JBR05HLFVBQVVTLEdBQUcsQ0FBQ2xCLENBQUFBLE9BQVE7b0JBQ3BCLHFCQUNBLDhEQUFDTiwwREFBTUE7d0JBRUx5QixVQUFVbkIsS0FBS2EsUUFBUTt3QkFDdkJPLFNBQVMsSUFBTXJCLFNBQVNDO3VCQUZuQkEsS0FBS1UsSUFBSTs7Ozs7Z0JBSWxCO2dCQUdBYixTQUFTZ0IsUUFBUSxrQkFFakIsOERBQUNROzhCQUNDLDRFQUFDMUIsOERBQVVBO3dCQUNYd0IsVUFBVXRCLFNBQVNnQixRQUFRO3dCQUMzQlMsV0FBVyxJQUFJO3dCQUNmQyxjQUFjLElBQU16QixZQUFZLENBQUM7a0NBRW5DLDRFQUFDdUI7NEJBQUlHLE9BQU87Z0NBQUVDLE9BQU87NEJBQVE7OzhDQUMzQiw4REFBQ0M7OENBQUk3QixTQUFTYSxJQUFJOzs7Ozs7OENBQ2xCLDhEQUFDZ0I7OENBQUk3QixTQUFTYyxLQUFLOzs7Ozs7OENBQ25CLDhEQUFDZ0I7b0NBQUlDLEtBQUk7b0NBQUt2QixPQUFNO29DQUFPRCxRQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVaEQsQ0FBQztHQW5HdUJSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwQ29udGFpbmVyLmpzeD9iNWMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdvb2dsZU1hcCwgTG9hZFNjcmlwdCwgTWFya2VyLCBJbmZvV2luZG93IH0gZnJvbSAnQHJlYWN0LWdvb2dsZS1tYXBzL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcENvbnRhaW5lcigpIHtcblxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoe30pXG5cbiAgICBjb25zdCBvblNlbGVjdCA9IGl0ZW0gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgICBzZXRTZWxlY3RlZChpdGVtKVxuICAgIH1cbiAgXG4gIGNvbnN0IG1hcFN0eWxlcyA9IHsgICAgICAgIFxuICAgIGhlaWdodDogXCI1MHZoXCIsXG4gICAgd2lkdGg6IFwiODB2aFwiXG59XG4gIFxuICBjb25zdCBkZWZhdWx0Q2VudGVyID0ge1xuICAgIGxhdDogMzkuNzgxMzM1MywgbG5nOiAtMTA0Ljk3MTU2MDBcbiAgfVxuXG4gIGNvbnN0IGxvY2F0aW9ucyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkxvY2F0aW9uIDFcIixcbiAgICAgIHByaWNlOiBcIiQ0NVwiLFxuICAgICAgaW1nVXJsOiAnaHR0cHM6Ly9pbWd1ci5jb20vYS9kb29CdUdLJyxcbiAgICAgIGxvY2F0aW9uOiB7IFxuICAgICAgICBsYXQ6IDM5Ljc4MTMzNTMsXG4gICAgICAgIGxuZzogLTEwNC45NzE1NjAwXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJMb2NhdGlvbiAyXCIsXG4gICAgICBsb2NhdGlvbjogeyBcbiAgICAgICAgbGF0OiAzOS43ODU1MzUzLFxuICAgICAgICBsbmc6IC0xMDQuOTc2NTYwMFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTG9jYXRpb24gM1wiLFxuICAgICAgbG9jYXRpb246IHsgXG4gICAgICAgIGxhdDogMzkuNzg1NTM1MyxcbiAgICAgICAgbG5nOiAtMTA0LjkzNjU2MDBcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkxvY2F0aW9uIDRcIixcbiAgICAgIGxvY2F0aW9uOiB7IFxuICAgICAgICBsYXQ6IDM5Ljc4NTUzNTMsXG4gICAgICAgIGxuZzogLTEwNC45NDY1NjAwXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJMb2NhdGlvbiA1XCIsXG4gICAgICBsb2NhdGlvbjogeyBcbiAgICAgICAgbGF0OiAzOS43ODc1MzUzLFxuICAgICAgICBsbmc6IC0xMDQuOTU2NTYwMFxuICAgICAgfSxcbiAgICB9XG4gIF07XG4gIFxuICByZXR1cm4gKFxuXG4gICAgIDxMb2FkU2NyaXB0XG4gICAgICAgZ29vZ2xlTWFwc0FwaUtleT0nQUl6YVN5Qll6VndEOGFXVmVKWUh6NzBlWlB0bUhDOHN4VjdiRFo4Jz5cbiAgICAgICAgPEdvb2dsZU1hcFxuICAgICAgICAgIG1hcENvbnRhaW5lclN0eWxlPXttYXBTdHlsZXN9XG4gICAgICAgICAgem9vbT17MTN9XG4gICAgICAgICAgY2VudGVyPXtkZWZhdWx0Q2VudGVyfT5cbiAgICAgICAgIFxuICAgICAgICAge1xuICAgICAgICAgICAgbG9jYXRpb25zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPE1hcmtlciBcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX0gXG4gICAgICAgICAgICAgICAgcG9zaXRpb249e2l0ZW0ubG9jYXRpb259XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3QoaXRlbSl9Lz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgIH1cbiAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdGVkLmxvY2F0aW9uICYmIFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEluZm9XaW5kb3dcbiAgICAgICAgICAgICAgcG9zaXRpb249e3NlbGVjdGVkLmxvY2F0aW9ufVxuICAgICAgICAgICAgICBjbGlja2FibGU9e3RydWV9XG4gICAgICAgICAgICAgIG9uQ2xvc2VDbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQoe30pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxuICAgICAgICAgICAgICA8aDE+e3NlbGVjdGVkLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgPGgxPntzZWxlY3RlZC5wcmljZX08L2gxPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vXCIgd2lkdGg9JzU1cHgnIGhlaWdodD0nNTVweCcvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0luZm9XaW5kb3c+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgIH1cblxuICAgICA8L0dvb2dsZU1hcD5cbiAgICAgPC9Mb2FkU2NyaXB0PlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJHb29nbGVNYXAiLCJMb2FkU2NyaXB0IiwiTWFya2VyIiwiSW5mb1dpbmRvdyIsIk1hcENvbnRhaW5lciIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJvblNlbGVjdCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFwU3R5bGVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJkZWZhdWx0Q2VudGVyIiwibGF0IiwibG5nIiwibG9jYXRpb25zIiwibmFtZSIsInByaWNlIiwiaW1nVXJsIiwibG9jYXRpb24iLCJnb29nbGVNYXBzQXBpS2V5IiwibWFwQ29udGFpbmVyU3R5bGUiLCJ6b29tIiwiY2VudGVyIiwibWFwIiwicG9zaXRpb24iLCJvbkNsaWNrIiwiZGl2IiwiY2xpY2thYmxlIiwib25DbG9zZUNsaWNrIiwic3R5bGUiLCJjb2xvciIsImgxIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MapContainer.jsx\n"));

/***/ })

});