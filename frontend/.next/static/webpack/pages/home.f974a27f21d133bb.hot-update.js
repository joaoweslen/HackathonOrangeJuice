"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./src/app/ProjetosAdicionados.tsx":
/*!*****************************************!*\
  !*** ./src/app/ProjetosAdicionados.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projetos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Skeleton */ \"./node_modules/@mui/material/Skeleton/Skeleton.js\");\n\n\n\n\n\n\nconst data = [\n    {\n        src: \"https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ\",\n        title: \"Don Diablo @ Tomorrowland Main Stage 2019 | Official…\",\n        channel: \"Don Diablo\",\n        views: \"396k views\",\n        createdAt: \"a week ago\"\n    },\n    {\n        src: \"https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA\",\n        title: \"Queen - Greatest Hits\",\n        channel: \"Queen Official\",\n        views: \"40M views\",\n        createdAt: \"3 years ago\"\n    }\n];\nfunction Media(props) {\n    const { loading = false } = props;\n    // Garante que haja pelo menos 3 esqueletos\n    const skeletonData = Array.from({\n        length: Math.max(3, data.length)\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        container: true,\n        wrap: \"nowrap\",\n        children: skeletonData.map((_, index)=>{\n            const item = data[index];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sx: {\n                    width: 210,\n                    marginRight: 0.5,\n                    my: 5\n                },\n                children: [\n                    item ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        style: {\n                            width: 210,\n                            height: 118\n                        },\n                        alt: item.title,\n                        src: item.src\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 15\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"rectangular\",\n                        width: 210,\n                        height: 118\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 15\n                    }, this),\n                    item ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        sx: {\n                            pr: 2\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                gutterBottom: true,\n                                variant: \"body2\",\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                display: \"block\",\n                                variant: \"caption\",\n                                color: \"text.secondary\",\n                                children: item.channel\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                variant: \"caption\",\n                                color: \"text.secondary\",\n                                children: \"\".concat(item.views, \" • \").concat(item.createdAt)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 15\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        sx: {\n                            pt: 0.5\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                width: \"60%\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                lineNumber: 41,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c = Media;\nfunction Projetos() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            overflow: \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Media, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Projetos;\nvar _c, _c1;\n$RefreshReg$(_c, \"Media\");\n$RefreshReg$(_c1, \"Projetos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL1Byb2pldG9zQWRpY2lvbmFkb3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNPO0FBQ0Y7QUFDYztBQUNKO0FBRTlDLE1BQU1LLE9BQU87SUFDWDtRQUNFQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxPQUFPO1FBQ1BDLFdBQVc7SUFDYjtJQUNBO1FBQ0VKLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsV0FBVztJQUNiO0NBRUQ7QUFNRCxTQUFTQyxNQUFNQyxLQUFpQjtJQUM5QixNQUFNLEVBQUVDLFVBQVUsS0FBSyxFQUFFLEdBQUdEO0lBRTVCLDJDQUEyQztJQUMzQyxNQUFNRSxlQUFlQyxNQUFNQyxJQUFJLENBQUM7UUFBRUMsUUFBUUMsS0FBS0MsR0FBRyxDQUFDLEdBQUdkLEtBQUtZLE1BQU07SUFBRTtJQUVuRSxxQkFDRSw4REFBQ2hCLDBEQUFJQTtRQUFDbUIsU0FBUztRQUFDQyxNQUFLO2tCQUNsQlAsYUFBYVEsR0FBRyxDQUFDLENBQUNDLEdBQUdDO1lBQ3BCLE1BQU1DLE9BQU9wQixJQUFJLENBQUNtQixNQUFNO1lBRXhCLHFCQUNFLDhEQUFDdEIseURBQUdBO2dCQUFhd0IsSUFBSTtvQkFBRUMsT0FBTztvQkFBS0MsYUFBYTtvQkFBS0MsSUFBSTtnQkFBRTs7b0JBQ3hESixxQkFDQyw4REFBQ0s7d0JBQ0NDLE9BQU87NEJBQUVKLE9BQU87NEJBQUtLLFFBQVE7d0JBQUk7d0JBQ2pDQyxLQUFLUixLQUFLbEIsS0FBSzt3QkFDZkQsS0FBS21CLEtBQUtuQixHQUFHOzs7Ozs2Q0FHZiw4REFBQ0YsOERBQVFBO3dCQUFDOEIsU0FBUTt3QkFBY1AsT0FBTzt3QkFBS0ssUUFBUTs7Ozs7O29CQUVyRFAscUJBQ0MsOERBQUN2Qix5REFBR0E7d0JBQUN3QixJQUFJOzRCQUFFUyxJQUFJO3dCQUFFOzswQ0FDZiw4REFBQ2hDLGdFQUFVQTtnQ0FBQ2lDLFlBQVk7Z0NBQUNGLFNBQVE7MENBQzlCVCxLQUFLbEIsS0FBSzs7Ozs7OzBDQUViLDhEQUFDSixnRUFBVUE7Z0NBQUNrQyxTQUFRO2dDQUFRSCxTQUFRO2dDQUFVSSxPQUFNOzBDQUNqRGIsS0FBS2pCLE9BQU87Ozs7OzswQ0FFZiw4REFBQ0wsZ0VBQVVBO2dDQUFDK0IsU0FBUTtnQ0FBVUksT0FBTTswQ0FDakMsR0FBbUJiLE9BQWhCQSxLQUFLaEIsS0FBSyxFQUFDLE9BQW9CLE9BQWZnQixLQUFLZixTQUFTOzs7Ozs7Ozs7Ozs2Q0FJdEMsOERBQUNSLHlEQUFHQTt3QkFBQ3dCLElBQUk7NEJBQUVhLElBQUk7d0JBQUk7OzBDQUNqQiw4REFBQ25DLDhEQUFRQTs7Ozs7MENBQ1QsOERBQUNBLDhEQUFRQTtnQ0FBQ3VCLE9BQU07Ozs7Ozs7Ozs7Ozs7ZUF6QlpIOzs7OztRQThCZDs7Ozs7O0FBR047S0E3Q1NiO0FBK0NNLFNBQVM2QjtJQUN0QixxQkFDRSw4REFBQ3RDLHlEQUFHQTtRQUFDd0IsSUFBSTtZQUFFZSxVQUFVO1FBQVM7a0JBQzVCLDRFQUFDOUI7Ozs7Ozs7Ozs7QUFHUDtNQU53QjZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvUHJvamV0b3NBZGljaW9uYWRvcy50c3g/M2IzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ta2VsZXRvbic7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIHNyYzogJ2h0dHBzOi8vaS55dGltZy5jb20vdmkvcExxaXBKTkl0SW8vaHFkZWZhdWx0LmpwZz9zcXA9LW9heW13RVlDTklCRUhaSVZmS3JpcWtEQ3dnQkZRQUFpRUlZQVhBQiZycz1BT240Q0xCa2tsc3lhdzlGeERtTUthcHlCWUNuOXRiUE5RJyxcclxuICAgIHRpdGxlOiAnRG9uIERpYWJsbyBAIFRvbW9ycm93bGFuZCBNYWluIFN0YWdlIDIwMTkgfCBPZmZpY2lhbOKApicsXHJcbiAgICBjaGFubmVsOiAnRG9uIERpYWJsbycsXHJcbiAgICB2aWV3czogJzM5Nmsgdmlld3MnLFxyXG4gICAgY3JlYXRlZEF0OiAnYSB3ZWVrIGFnbycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcmM6ICdodHRwczovL2kueXRpbWcuY29tL3ZpL19VdTEyelkwMXRzL2hxZGVmYXVsdC5qcGc/c3FwPS1vYXltd0VaQ1BZQkVJb0JTRlh5cTRxcEF3c0lBUlVBQUloQ0dBRndBUT09JnJzPUFPbjRDTENwWDZKYW4ycnhyQ0FaeEpZRFhwcFRQNE1vUUEnLFxyXG4gICAgdGl0bGU6ICdRdWVlbiAtIEdyZWF0ZXN0IEhpdHMnLFxyXG4gICAgY2hhbm5lbDogJ1F1ZWVuIE9mZmljaWFsJyxcclxuICAgIHZpZXdzOiAnNDBNIHZpZXdzJyxcclxuICAgIGNyZWF0ZWRBdDogJzMgeWVhcnMgYWdvJyxcclxuICB9LFxyXG4gXHJcbl07XHJcblxyXG5pbnRlcmZhY2UgTWVkaWFQcm9wcyB7XHJcbiAgbG9hZGluZz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lZGlhKHByb3BzOiBNZWRpYVByb3BzKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nID0gZmFsc2UgfSA9IHByb3BzO1xyXG5cclxuICAvLyBHYXJhbnRlIHF1ZSBoYWphIHBlbG8gbWVub3MgMyBlc3F1ZWxldG9zXHJcbiAgY29uc3Qgc2tlbGV0b25EYXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogTWF0aC5tYXgoMywgZGF0YS5sZW5ndGgpIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIHdyYXA9XCJub3dyYXBcIj5cclxuICAgICAge3NrZWxldG9uRGF0YS5tYXAoKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRhdGFbaW5kZXhdO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEJveCBrZXk9e2luZGV4fSBzeD17eyB3aWR0aDogMjEwLCBtYXJnaW5SaWdodDogMC41LCBteTogNSB9fT5cclxuICAgICAgICAgICAge2l0ZW0gPyAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIxMCwgaGVpZ2h0OiAxMTggfX1cclxuICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5zcmN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cInJlY3Rhbmd1bGFyXCIgd2lkdGg9ezIxMH0gaGVpZ2h0PXsxMTh9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtpdGVtID8gKFxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3sgcHI6IDIgfX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZGlzcGxheT1cImJsb2NrXCIgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmNoYW5uZWx9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAge2Ake2l0ZW0udmlld3N9IOKAoiAke2l0ZW0uY3JlYXRlZEF0fWB9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEJveCBzeD17eyBwdDogMC41IH19PlxyXG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIC8+XHJcbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gd2lkdGg9XCI2MCVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamV0b3MoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICA8TWVkaWEgLz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkdyaWQiLCJCb3giLCJUeXBvZ3JhcGh5IiwiU2tlbGV0b24iLCJkYXRhIiwic3JjIiwidGl0bGUiLCJjaGFubmVsIiwidmlld3MiLCJjcmVhdGVkQXQiLCJNZWRpYSIsInByb3BzIiwibG9hZGluZyIsInNrZWxldG9uRGF0YSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIk1hdGgiLCJtYXgiLCJjb250YWluZXIiLCJ3cmFwIiwibWFwIiwiXyIsImluZGV4IiwiaXRlbSIsInN4Iiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIm15IiwiaW1nIiwic3R5bGUiLCJoZWlnaHQiLCJhbHQiLCJ2YXJpYW50IiwicHIiLCJndXR0ZXJCb3R0b20iLCJkaXNwbGF5IiwiY29sb3IiLCJwdCIsIlByb2pldG9zIiwib3ZlcmZsb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/ProjetosAdicionados.tsx\n"));

/***/ })

});