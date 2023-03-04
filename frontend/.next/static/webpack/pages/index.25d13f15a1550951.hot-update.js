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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MapContainer() {\n    _s();\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const onSelect = (item)=>{\n        console.log(item);\n        setSelected(item);\n    };\n    const mapStyles = {\n        height: \"50vh\",\n        width: \"80vh\"\n    };\n    const defaultCenter = {\n        lat: 39.7813353,\n        lng: -104.9715600\n    };\n    const locations = [\n        {\n            name: \"Location 1\",\n            price: \"$45\",\n            imgUrl: \"https://imgur.com/a/dooBuGK\",\n            location: {\n                lat: 39.7813353,\n                lng: -104.9715600\n            }\n        },\n        {\n            name: \"Location 2\",\n            location: {\n                lat: 39.7855353,\n                lng: -104.9765600\n            }\n        },\n        {\n            name: \"Location 3\",\n            location: {\n                lat: 39.7855353,\n                lng: -104.9365600\n            }\n        },\n        {\n            name: \"Location 4\",\n            location: {\n                lat: 39.7855353,\n                lng: -104.9465600\n            }\n        },\n        {\n            name: \"Location 5\",\n            location: {\n                lat: 39.7875353,\n                lng: -104.9565600\n            }\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.LoadScript, {\n        googleMapsApiKey: \"AIzaSyBYzVwD8aWVeJYHz70eZPtmHC8sxV7bDZ8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n            mapContainerStyle: mapStyles,\n            zoom: 13,\n            center: defaultCenter,\n            children: [\n                locations.map((item)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                        position: item.location,\n                        onClick: ()=>onSelect(item)\n                    }, item.name, false, {\n                        fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 15\n                    }, this);\n                }),\n                selected.location && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.InfoWindow, {\n                        position: selected.location,\n                        clickable: true,\n                        onCloseClick: ()=>setSelected({}),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                color: \"black\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: selected.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: selected.price\n                                }, void 0, false, {\n                                    fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://imgur.com/a/dooBuGK\",\n                                    width: \"55px\",\n                                    height: \"55px\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n            lineNumber: 67,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/germanokuerten/Desktop/01_Coding/02_Courses/eth-denver/ginga/frontend/components/MapContainer.jsx\",\n        lineNumber: 65,\n        columnNumber: 6\n    }, this);\n}\n_s(MapContainer, \"Gk1ihxo6C0QmBTOHyMJ50k0sYrc=\");\n_c = MapContainer;\nvar _c;\n$RefreshReg$(_c, \"MapContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcENvbnRhaW5lci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ0s7QUFDb0Q7QUFFcEUsU0FBU00sZUFBZTs7SUFFbkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDLENBQUM7SUFFMUMsTUFBTVEsV0FBV0MsQ0FBQUEsT0FBUTtRQUNyQkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaRixZQUFZRTtJQUNoQjtJQUVGLE1BQU1HLFlBQVk7UUFDaEJDLFFBQVE7UUFDUkMsT0FBTztJQUNYO0lBRUUsTUFBTUMsZ0JBQWdCO1FBQ3BCQyxLQUFLO1FBQVlDLEtBQUssQ0FBQztJQUN6QjtJQUVBLE1BQU1DLFlBQVk7UUFDaEI7WUFDRUMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsVUFBVTtnQkFDUk4sS0FBSztnQkFDTEMsS0FBSyxDQUFDO1lBQ1I7UUFDRjtRQUNBO1lBQ0VFLE1BQU07WUFDTkcsVUFBVTtnQkFDUk4sS0FBSztnQkFDTEMsS0FBSyxDQUFDO1lBQ1I7UUFDRjtRQUNBO1lBQ0VFLE1BQU07WUFDTkcsVUFBVTtnQkFDUk4sS0FBSztnQkFDTEMsS0FBSyxDQUFDO1lBQ1I7UUFDRjtRQUNBO1lBQ0VFLE1BQU07WUFDTkcsVUFBVTtnQkFDUk4sS0FBSztnQkFDTEMsS0FBSyxDQUFDO1lBQ1I7UUFDRjtRQUNBO1lBQ0VFLE1BQU07WUFDTkcsVUFBVTtnQkFDUk4sS0FBSztnQkFDTEMsS0FBSyxDQUFDO1lBQ1I7UUFDRjtLQUNEO0lBRUQscUJBRUcsOERBQUNmLDhEQUFVQTtRQUNUcUIsa0JBQWlCO2tCQUNoQiw0RUFBQ3RCLDZEQUFTQTtZQUNSdUIsbUJBQW1CWjtZQUNuQmEsTUFBTTtZQUNOQyxRQUFRWDs7Z0JBR05HLFVBQVVTLEdBQUcsQ0FBQ2xCLENBQUFBLE9BQVE7b0JBQ3BCLHFCQUNBLDhEQUFDTiwwREFBTUE7d0JBRUx5QixVQUFVbkIsS0FBS2EsUUFBUTt3QkFDdkJPLFNBQVMsSUFBTXJCLFNBQVNDO3VCQUZuQkEsS0FBS1UsSUFBSTs7Ozs7Z0JBSWxCO2dCQUdBYixTQUFTZ0IsUUFBUSxrQkFFakIsOERBQUNROzhCQUNDLDRFQUFDMUIsOERBQVVBO3dCQUNYd0IsVUFBVXRCLFNBQVNnQixRQUFRO3dCQUMzQlMsV0FBVyxJQUFJO3dCQUNmQyxjQUFjLElBQU16QixZQUFZLENBQUM7a0NBRW5DLDRFQUFDdUI7NEJBQUlHLE9BQU87Z0NBQUVDLE9BQU87NEJBQVE7OzhDQUMzQiw4REFBQ0M7OENBQUk3QixTQUFTYSxJQUFJOzs7Ozs7OENBQ2xCLDhEQUFDZ0I7OENBQUk3QixTQUFTYyxLQUFLOzs7Ozs7OENBQ25CLDhEQUFDZ0I7b0NBQUlDLEtBQUk7b0NBQThCdkIsT0FBTTtvQ0FBT0QsUUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXpFLENBQUM7R0FuR3VCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcENvbnRhaW5lci5qc3g/YjVjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHb29nbGVNYXAsIExvYWRTY3JpcHQsIE1hcmtlciwgSW5mb1dpbmRvdyB9IGZyb20gJ0ByZWFjdC1nb29nbGUtbWFwcy9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXBDb250YWluZXIoKSB7XG5cbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKHt9KVxuXG4gICAgY29uc3Qgb25TZWxlY3QgPSBpdGVtID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgICAgc2V0U2VsZWN0ZWQoaXRlbSlcbiAgICB9XG4gIFxuICBjb25zdCBtYXBTdHlsZXMgPSB7ICAgICAgICBcbiAgICBoZWlnaHQ6IFwiNTB2aFwiLFxuICAgIHdpZHRoOiBcIjgwdmhcIlxufVxuICBcbiAgY29uc3QgZGVmYXVsdENlbnRlciA9IHtcbiAgICBsYXQ6IDM5Ljc4MTMzNTMsIGxuZzogLTEwNC45NzE1NjAwXG4gIH1cblxuICBjb25zdCBsb2NhdGlvbnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJMb2NhdGlvbiAxXCIsXG4gICAgICBwcmljZTogXCIkNDVcIixcbiAgICAgIGltZ1VybDogJ2h0dHBzOi8vaW1ndXIuY29tL2EvZG9vQnVHSycsXG4gICAgICBsb2NhdGlvbjogeyBcbiAgICAgICAgbGF0OiAzOS43ODEzMzUzLFxuICAgICAgICBsbmc6IC0xMDQuOTcxNTYwMFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTG9jYXRpb24gMlwiLFxuICAgICAgbG9jYXRpb246IHsgXG4gICAgICAgIGxhdDogMzkuNzg1NTM1MyxcbiAgICAgICAgbG5nOiAtMTA0Ljk3NjU2MDBcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkxvY2F0aW9uIDNcIixcbiAgICAgIGxvY2F0aW9uOiB7IFxuICAgICAgICBsYXQ6IDM5Ljc4NTUzNTMsXG4gICAgICAgIGxuZzogLTEwNC45MzY1NjAwXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJMb2NhdGlvbiA0XCIsXG4gICAgICBsb2NhdGlvbjogeyBcbiAgICAgICAgbGF0OiAzOS43ODU1MzUzLFxuICAgICAgICBsbmc6IC0xMDQuOTQ2NTYwMFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTG9jYXRpb24gNVwiLFxuICAgICAgbG9jYXRpb246IHsgXG4gICAgICAgIGxhdDogMzkuNzg3NTM1MyxcbiAgICAgICAgbG5nOiAtMTA0Ljk1NjU2MDBcbiAgICAgIH0sXG4gICAgfVxuICBdO1xuICBcbiAgcmV0dXJuIChcblxuICAgICA8TG9hZFNjcmlwdFxuICAgICAgIGdvb2dsZU1hcHNBcGlLZXk9J0FJemFTeUJZelZ3RDhhV1ZlSllIejcwZVpQdG1IQzhzeFY3YkRaOCc+XG4gICAgICAgIDxHb29nbGVNYXBcbiAgICAgICAgICBtYXBDb250YWluZXJTdHlsZT17bWFwU3R5bGVzfVxuICAgICAgICAgIHpvb209ezEzfVxuICAgICAgICAgIGNlbnRlcj17ZGVmYXVsdENlbnRlcn0+XG4gICAgICAgICBcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGxvY2F0aW9ucy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxNYXJrZXIgXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9IFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtpdGVtLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0KGl0ZW0pfS8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICB9XG4gICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RlZC5sb2NhdGlvbiAmJiBcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxJbmZvV2luZG93XG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtzZWxlY3RlZC5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgY2xpY2thYmxlPXt0cnVlfVxuICAgICAgICAgICAgICBvbkNsb3NlQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKHt9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cbiAgICAgICAgICAgICAgPGgxPntzZWxlY3RlZC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgIDxoMT57c2VsZWN0ZWQucHJpY2V9PC9oMT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZ3VyLmNvbS9hL2Rvb0J1R0tcIiB3aWR0aD0nNTVweCcgaGVpZ2h0PSc1NXB4Jy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvSW5mb1dpbmRvdz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgfVxuXG4gICAgIDwvR29vZ2xlTWFwPlxuICAgICA8L0xvYWRTY3JpcHQ+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdvb2dsZU1hcCIsIkxvYWRTY3JpcHQiLCJNYXJrZXIiLCJJbmZvV2luZG93IiwiTWFwQ29udGFpbmVyIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIm9uU2VsZWN0IiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJtYXBTdHlsZXMiLCJoZWlnaHQiLCJ3aWR0aCIsImRlZmF1bHRDZW50ZXIiLCJsYXQiLCJsbmciLCJsb2NhdGlvbnMiLCJuYW1lIiwicHJpY2UiLCJpbWdVcmwiLCJsb2NhdGlvbiIsImdvb2dsZU1hcHNBcGlLZXkiLCJtYXBDb250YWluZXJTdHlsZSIsInpvb20iLCJjZW50ZXIiLCJtYXAiLCJwb3NpdGlvbiIsIm9uQ2xpY2siLCJkaXYiLCJjbGlja2FibGUiLCJvbkNsb3NlQ2xpY2siLCJzdHlsZSIsImNvbG9yIiwiaDEiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MapContainer.jsx\n"));

/***/ })

});