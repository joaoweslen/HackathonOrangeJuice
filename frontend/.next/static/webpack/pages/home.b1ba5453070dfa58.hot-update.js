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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projetos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Skeleton */ \"./node_modules/@mui/material/Skeleton/Skeleton.js\");\n\n\n\n\n\n\nconst data = [\n    {\n        src: \"https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ\",\n        title: \"Don Diablo @ Tomorrowland Main Stage 2019 | Official…\",\n        thumbnail: \"Don Diablo\",\n        descicao: \"descri\\xe7\\xe3o do projeto\",\n        tags: [\n            \"ux\",\n            \"web\"\n        ],\n        nome: \"camila\",\n        avatar: \"/Circle.svg\",\n        data: \"12/23\"\n    },\n    {\n        src: \"https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ\",\n        title: \"Don Diablo @ Tomorrowland Main Stage 2019 | Official…\",\n        thumbnail: \"Don Diablo\",\n        descicao: \"descri\\xe7\\xe3o do projeto\",\n        tags: [\n            \"ux\",\n            \"web\"\n        ]\n    }\n];\nfunction Media(props) {\n    const { loading = false } = props;\n    // Garante que haja pelo menos 3 esqueletos\n    const skeletonData = Array.from({\n        length: Math.max(3, data.length)\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        container: true,\n        wrap: \"nowrap\",\n        children: skeletonData.map((_, index)=>{\n            const item = data[index];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sx: {\n                    width: 210,\n                    marginRight: 0.5,\n                    my: 5\n                },\n                children: [\n                    item ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        style: {\n                            width: 210,\n                            height: 118\n                        },\n                        alt: item.title,\n                        src: item.src\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 15\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"rectangular\",\n                        width: 210,\n                        height: 118\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 15\n                    }, this),\n                    item ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        sx: {\n                            pr: 2,\n                            display: \"flex\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            variant: \"caption\",\n                            color: \"text.secondary\",\n                            children: \"\".concat(item.nome, \" • \").concat(item.data)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 15\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        sx: {\n                            pt: 0.5\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                width: \"60%\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                lineNumber: 45,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_c = Media;\nfunction Projetos() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            overflow: \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Media, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Projetos;\nvar _c, _c1;\n$RefreshReg$(_c, \"Media\");\n$RefreshReg$(_c1, \"Projetos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL1Byb2pldG9zQWRpY2lvbmFkb3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNPO0FBQ0Y7QUFDYztBQUNKO0FBRzlDLE1BQU1LLE9BQU87SUFDWDtRQUNFQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsV0FBVztRQUNYQyxVQUFVO1FBQ1ZDLE1BQU07WUFBQztZQUFNO1NBQU07UUFDbkJDLE1BQU07UUFDTkMsUUFBTztRQUNQUCxNQUFNO0lBQ1I7SUFDQTtRQUNFQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsV0FBVztRQUNYQyxVQUFVO1FBQ1ZDLE1BQU07WUFBQztZQUFNO1NBQU07SUFDckI7Q0FFRDtBQU1ELFNBQVNHLE1BQU1DLEtBQWlCO0lBQzlCLE1BQU0sRUFBRUMsVUFBVSxLQUFLLEVBQUUsR0FBR0Q7SUFFNUIsMkNBQTJDO0lBQzNDLE1BQU1FLGVBQWVDLE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRQyxLQUFLQyxHQUFHLENBQUMsR0FBR2hCLEtBQUtjLE1BQU07SUFBRTtJQUVuRSxxQkFDRSw4REFBQ2xCLDBEQUFJQTtRQUFDcUIsU0FBUztRQUFDQyxNQUFLO2tCQUNsQlAsYUFBYVEsR0FBRyxDQUFDLENBQUNDLEdBQUdDO1lBQ3BCLE1BQU1DLE9BQU90QixJQUFJLENBQUNxQixNQUFNO1lBRXhCLHFCQUNFLDhEQUFDeEIseURBQUdBO2dCQUFhMEIsSUFBSTtvQkFBRUMsT0FBTztvQkFBS0MsYUFBYTtvQkFBS0MsSUFBSTtnQkFBRTs7b0JBQ3hESixxQkFDQyw4REFBQ0s7d0JBQ0NDLE9BQU87NEJBQUVKLE9BQU87NEJBQUtLLFFBQVE7d0JBQUk7d0JBQ2pDQyxLQUFLUixLQUFLcEIsS0FBSzt3QkFDZkQsS0FBS3FCLEtBQUtyQixHQUFHOzs7Ozs2Q0FHZiw4REFBQ0YsOERBQVFBO3dCQUFDZ0MsU0FBUTt3QkFBY1AsT0FBTzt3QkFBS0ssUUFBUTs7Ozs7O29CQUVyRFAscUJBQ0MsOERBQUN6Qix5REFBR0E7d0JBQUMwQixJQUFJOzRCQUFFUyxJQUFJOzRCQUFHQyxTQUFRO3dCQUFNO2tDQUU5Qiw0RUFBQ25DLGdFQUFVQTs0QkFBQ2lDLFNBQVE7NEJBQVVHLE9BQU07c0NBQ2pDLEdBQWtCWixPQUFmQSxLQUFLaEIsSUFBSSxFQUFDLE9BQWUsT0FBVmdCLEtBQUt0QixJQUFJOzs7Ozs7Ozs7OzZDQUloQyw4REFBQ0gseURBQUdBO3dCQUFDMEIsSUFBSTs0QkFBRVksSUFBSTt3QkFBSTs7MENBQ2pCLDhEQUFDcEMsOERBQVFBOzs7OzswQ0FDVCw4REFBQ0EsOERBQVFBO2dDQUFDeUIsT0FBTTs7Ozs7Ozs7Ozs7OztlQXBCWkg7Ozs7O1FBeUJkOzs7Ozs7QUFHTjtLQXhDU2I7QUEwQ00sU0FBUzRCO0lBQ3RCLHFCQUNFLDhEQUFDdkMseURBQUdBO1FBQUMwQixJQUFJO1lBQUVjLFVBQVU7UUFBUztrQkFDNUIsNEVBQUM3Qjs7Ozs7Ozs7OztBQUdQO01BTndCNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Qcm9qZXRvc0FkaWNpb25hZG9zLnRzeD8zYjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbXVpL21hdGVyaWFsL1NrZWxldG9uJztcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgc3JjOiAnaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9wTHFpcEpOSXRJby9ocWRlZmF1bHQuanBnP3NxcD0tb2F5bXdFWUNOSUJFSFpJVmZLcmlxa0RDd2dCRlFBQWlFSVlBWEFCJnJzPUFPbjRDTEJra2xzeWF3OUZ4RG1NS2FweUJZQ245dGJQTlEnLFxyXG4gICAgdGl0bGU6ICdEb24gRGlhYmxvIEAgVG9tb3Jyb3dsYW5kIE1haW4gU3RhZ2UgMjAxOSB8IE9mZmljaWFs4oCmJyxcclxuICAgIHRodW1ibmFpbDogJ0RvbiBEaWFibG8nLFxyXG4gICAgZGVzY2ljYW86ICdkZXNjcmnDp8OjbyBkbyBwcm9qZXRvJyxcclxuICAgIHRhZ3M6IFsndXgnLCAnd2ViJ10sXHJcbiAgICBub21lOiAnY2FtaWxhJyxcclxuICAgIGF2YXRhcjonL0NpcmNsZS5zdmcnLFxyXG4gICAgZGF0YTogJzEyLzIzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOiAnaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9wTHFpcEpOSXRJby9ocWRlZmF1bHQuanBnP3NxcD0tb2F5bXdFWUNOSUJFSFpJVmZLcmlxa0RDd2dCRlFBQWlFSVlBWEFCJnJzPUFPbjRDTEJra2xzeWF3OUZ4RG1NS2FweUJZQ245dGJQTlEnLFxyXG4gICAgdGl0bGU6ICdEb24gRGlhYmxvIEAgVG9tb3Jyb3dsYW5kIE1haW4gU3RhZ2UgMjAxOSB8IE9mZmljaWFs4oCmJyxcclxuICAgIHRodW1ibmFpbDogJ0RvbiBEaWFibG8nLFxyXG4gICAgZGVzY2ljYW86ICdkZXNjcmnDp8OjbyBkbyBwcm9qZXRvJyxcclxuICAgIHRhZ3M6IFsndXgnLCAnd2ViJ11cclxuICB9LFxyXG4gXHJcbl07XHJcblxyXG5pbnRlcmZhY2UgTWVkaWFQcm9wcyB7XHJcbiAgbG9hZGluZz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lZGlhKHByb3BzOiBNZWRpYVByb3BzKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nID0gZmFsc2UgfSA9IHByb3BzO1xyXG5cclxuICAvLyBHYXJhbnRlIHF1ZSBoYWphIHBlbG8gbWVub3MgMyBlc3F1ZWxldG9zXHJcbiAgY29uc3Qgc2tlbGV0b25EYXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogTWF0aC5tYXgoMywgZGF0YS5sZW5ndGgpIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIHdyYXA9XCJub3dyYXBcIj5cclxuICAgICAge3NrZWxldG9uRGF0YS5tYXAoKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRhdGFbaW5kZXhdO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEJveCBrZXk9e2luZGV4fSBzeD17eyB3aWR0aDogMjEwLCBtYXJnaW5SaWdodDogMC41LCBteTogNSB9fT5cclxuICAgICAgICAgICAge2l0ZW0gPyAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIxMCwgaGVpZ2h0OiAxMTggfX1cclxuICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5zcmN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cInJlY3Rhbmd1bGFyXCIgd2lkdGg9ezIxMH0gaGVpZ2h0PXsxMTh9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtpdGVtID8gKFxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3sgcHI6IDIsIGRpc3BsYXk6J2ZsZXgnfX0+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICB7YCR7aXRlbS5ub21lfSDigKIgJHtpdGVtLmRhdGF9YH1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8Qm94IHN4PXt7IHB0OiAwLjUgfX0+XHJcbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gLz5cclxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB3aWR0aD1cIjYwJVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZXRvcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17eyBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgIDxNZWRpYSAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsIkJveCIsIlR5cG9ncmFwaHkiLCJTa2VsZXRvbiIsImRhdGEiLCJzcmMiLCJ0aXRsZSIsInRodW1ibmFpbCIsImRlc2NpY2FvIiwidGFncyIsIm5vbWUiLCJhdmF0YXIiLCJNZWRpYSIsInByb3BzIiwibG9hZGluZyIsInNrZWxldG9uRGF0YSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIk1hdGgiLCJtYXgiLCJjb250YWluZXIiLCJ3cmFwIiwibWFwIiwiXyIsImluZGV4IiwiaXRlbSIsInN4Iiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIm15IiwiaW1nIiwic3R5bGUiLCJoZWlnaHQiLCJhbHQiLCJ2YXJpYW50IiwicHIiLCJkaXNwbGF5IiwiY29sb3IiLCJwdCIsIlByb2pldG9zIiwib3ZlcmZsb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/ProjetosAdicionados.tsx\n"));

/***/ })

});