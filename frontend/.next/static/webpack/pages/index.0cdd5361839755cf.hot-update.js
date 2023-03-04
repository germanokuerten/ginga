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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst MapContainer = ()=>{\n    _s();\n    const [selectedMarker, setSelectedMarker] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const onSelect = (marker)=>{\n        setSelectedMarker(marker);\n    };\n    const onClose = ()=>{\n        setSelectedMarker(null);\n    };\n    const mapStyles = {\n        height: \"100vh\",\n        width: \"100%\"\n    };\n    const defaultCenter = {\n        lat: 41.3851,\n        lng: 2.1734\n    };\n    const locations = [\n        {\n            name: \"Location 1\",\n            location: {\n                lat: 39.7813353,\n                lng: -104.9715600\n            }\n        },\n        {\n            name: \"Location 2\",\n            location: {\n                lat: 39.7855353,\n                lng: -104.9765600\n            }\n        },\n        {\n            name: \"Location 3\",\n            location: {\n                lat: 39.7855353,\n                lng: -104.9365600\n            }\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.LoadScript, {\n        googleMapsApiKey: \"YOUR_API_KEY=AIzaSyBYzVwD8aWVeJYHz70eZPtmHC8sxV7bDZ8 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n            mapContainerStyle: mapStyles,\n            zoom: 8,\n            center: defaultCenter,\n            children: [\n                locations.map((item)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                        position: item.location,\n                        onClick: ()=>onSelect(item)\n                    }, item.name, false, {\n                        fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined);\n                }),\n                selectedMarker && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.InfoWindow, {\n                    position: selectedMarker.location,\n                    onCloseClick: ()=>onClose(),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: selectedMarker.name\n                        }, void 0, false, {\n                            fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MapContainer, \"oar+iP7gTM7tKhZHtq+2gG1qrA4=\");\n_c = MapContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapContainer);\nvar _c;\n$RefreshReg$(_c, \"MapContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcENvbnRhaW5lci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQXdDO0FBQzJDO0FBRW5GLE1BQU1NLGVBQWUsSUFBTTs7SUFDekIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXpELE1BQU1RLFdBQVcsQ0FBQ0MsU0FBVztRQUMzQkYsa0JBQWtCRTtJQUNwQjtJQUVBLE1BQU1DLFVBQVUsSUFBTTtRQUNwQkgsa0JBQWtCLElBQUk7SUFDeEI7SUFFQSxNQUFNSSxZQUFZO1FBQ2hCQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUVBLE1BQU1DLGdCQUFnQjtRQUNwQkMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFFQSxNQUFNQyxZQUFZO1FBQ2hCO1lBQ0VDLE1BQU07WUFDTkMsVUFBVTtnQkFDUkosS0FBSztnQkFDTEMsS0FBSyxDQUFDO1lBQ1I7UUFDRjtRQUNBO1lBQ0VFLE1BQU07WUFDTkMsVUFBVTtnQkFDUkosS0FBSztnQkFDTEMsS0FBSyxDQUFDO1lBQ1I7UUFDRjtRQUNBO1lBQ0VFLE1BQU07WUFDTkMsVUFBVTtnQkFDUkosS0FBSztnQkFDTEMsS0FBSyxDQUFDO1lBQ1I7UUFDRjtLQUNEO0lBRUQscUJBQ0UsOERBQUNiLDhEQUFVQTtRQUFDaUIsa0JBQWlCO2tCQUUzQiw0RUFBQ25CLDZEQUFTQTtZQUNSb0IsbUJBQW1CVjtZQUNuQlcsTUFBTTtZQUNOQyxRQUFRVDs7Z0JBRVBHLFVBQVVPLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO29CQUN2QixxQkFDRSw4REFBQ3JCLDBEQUFNQTt3QkFFTHNCLFVBQVVELEtBQUtOLFFBQVE7d0JBQ3ZCUSxTQUFTLElBQU1uQixTQUFTaUI7dUJBRm5CQSxLQUFLUCxJQUFJOzs7OztnQkFLcEI7Z0JBQ0NaLGdDQUNDLDhEQUFDSiw4REFBVUE7b0JBQ1R3QixVQUFVcEIsZUFBZWEsUUFBUTtvQkFDakNTLGNBQWMsSUFBTWxCOzhCQUVwQiw0RUFBQ21CO2tDQUNDLDRFQUFDQztzQ0FBR3hCLGVBQWVZLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQztHQTNFTWI7S0FBQUE7QUE2RU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBDb250YWluZXIuanN4P2I1YzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHb29nbGVNYXAsIEluZm9XaW5kb3csIExvYWRTY3JpcHQsIE1hcmtlciB9IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI7XG5cbmNvbnN0IE1hcENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkTWFya2VyLCBzZXRTZWxlY3RlZE1hcmtlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBvblNlbGVjdCA9IChtYXJrZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZE1hcmtlcihtYXJrZXIpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRNYXJrZXIobnVsbCk7XG4gIH07XG5cbiAgY29uc3QgbWFwU3R5bGVzID0ge1xuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfTtcblxuICBjb25zdCBkZWZhdWx0Q2VudGVyID0ge1xuICAgIGxhdDogNDEuMzg1MSxcbiAgICBsbmc6IDIuMTczNCxcbiAgfTtcblxuICBjb25zdCBsb2NhdGlvbnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJMb2NhdGlvbiAxXCIsXG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBsYXQ6IDM5Ljc4MTMzNTMsXG4gICAgICAgIGxuZzogLTEwNC45NzE1NjAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTG9jYXRpb24gMlwiLFxuICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgbGF0OiAzOS43ODU1MzUzLFxuICAgICAgICBsbmc6IC0xMDQuOTc2NTYwMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkxvY2F0aW9uIDNcIixcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGxhdDogMzkuNzg1NTM1MyxcbiAgICAgICAgbG5nOiAtMTA0LjkzNjU2MDAsXG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8TG9hZFNjcmlwdCBnb29nbGVNYXBzQXBpS2V5PVwiWU9VUl9BUElfS0VZPUFJemFTeUJZelZ3RDhhV1ZlSllIejcwZVpQdG1IQzhzeFY3YkRaOFxuICAgIFwiPlxuICAgICAgPEdvb2dsZU1hcFxuICAgICAgICBtYXBDb250YWluZXJTdHlsZT17bWFwU3R5bGVzfVxuICAgICAgICB6b29tPXs4fVxuICAgICAgICBjZW50ZXI9e2RlZmF1bHRDZW50ZXJ9XG4gICAgICA+XG4gICAgICAgIHtsb2NhdGlvbnMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNYXJrZXJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtpdGVtLmxvY2F0aW9ufVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChpdGVtKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIHtzZWxlY3RlZE1hcmtlciAmJiAoXG4gICAgICAgICAgPEluZm9XaW5kb3dcbiAgICAgICAgICAgIHBvc2l0aW9uPXtzZWxlY3RlZE1hcmtlci5sb2NhdGlvbn1cbiAgICAgICAgICAgIG9uQ2xvc2VDbGljaz17KCkgPT4gb25DbG9zZSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPntzZWxlY3RlZE1hcmtlci5uYW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvSW5mb1dpbmRvdz5cbiAgICAgICAgKX1cbiAgICAgIDwvR29vZ2xlTWFwPlxuICAgIDwvTG9hZFNjcmlwdD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcENvbnRhaW5lcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdvb2dsZU1hcCIsIkluZm9XaW5kb3ciLCJMb2FkU2NyaXB0IiwiTWFya2VyIiwiTWFwQ29udGFpbmVyIiwic2VsZWN0ZWRNYXJrZXIiLCJzZXRTZWxlY3RlZE1hcmtlciIsIm9uU2VsZWN0IiwibWFya2VyIiwib25DbG9zZSIsIm1hcFN0eWxlcyIsImhlaWdodCIsIndpZHRoIiwiZGVmYXVsdENlbnRlciIsImxhdCIsImxuZyIsImxvY2F0aW9ucyIsIm5hbWUiLCJsb2NhdGlvbiIsImdvb2dsZU1hcHNBcGlLZXkiLCJtYXBDb250YWluZXJTdHlsZSIsInpvb20iLCJjZW50ZXIiLCJtYXAiLCJpdGVtIiwicG9zaXRpb24iLCJvbkNsaWNrIiwib25DbG9zZUNsaWNrIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MapContainer.jsx\n"));

/***/ })

});