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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projetos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n\n\n\n\n\n\nfunction Media(props) {\n    const { loading = false } = props;\n    // Inicialize data com um array vazio de objetos do tipo ProjectItem\n    const data = loading ? Array.from({\n        length: 3\n    }, (_, index)=>({\n            thumbnail: null,\n            avatar: null,\n            title: \"Skeleton \".concat(index + 1),\n            links: \"Loading...\",\n            tags: [\n                \"Loading...\"\n            ]\n        })) : [\n        {\n            thumbnail: \"\",\n            avatar: \"\",\n            title: \"\",\n            links: \"\",\n            tags: []\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        container: true,\n        spacing: 2,\n        children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                item: true,\n                xs: 12,\n                sm: 6,\n                md: 4,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        mt: 1,\n                        ...data.length === 0 && index === 0 ? {\n                            flexGrow: 1,\n                            p: 2,\n                            backgroundColor: \"#E6E9F2\",\n                            borderRadius: 4\n                        } : {}\n                    },\n                    children: data.length === 0 && index === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"body2\",\n                        children: \"Adicione seu primeiro projeto\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 5\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                alt: \"Avatar\",\n                                src: item.avatar || undefined\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                sx: {\n                                    ml: 1\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        variant: \"body2\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        variant: \"caption\",\n                                        color: \"text.secondary\",\n                                        children: item.tags.map((tag, tagIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                                children: \"#\".concat(tag, \" \")\n                                            }, tagIndex, false, {\n                                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 13\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = Media;\nfunction Projetos() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            overflow: \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Media, {\n            loading: true\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Projetos;\nvar _c, _c1;\n$RefreshReg$(_c, \"Media\");\n$RefreshReg$(_c1, \"Projetos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL1Byb2pldG9zQWRpY2lvbmFkb3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNPO0FBQ0Y7QUFDYztBQUNSO0FBZ0IxQyxTQUFTSyxNQUFNQyxLQUFpQjtJQUM5QixNQUFNLEVBQUVDLFVBQVUsS0FBSyxFQUFFLEdBQUdEO0lBRTVCLG9FQUFvRTtJQUNwRSxNQUFNRSxPQUFzQkQsVUFDeEJFLE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRO0lBQUUsR0FBRyxDQUFDQyxHQUFHQyxRQUFXO1lBQ3ZDQyxXQUFXO1lBQ1hDLFFBQVE7WUFDUkMsT0FBTyxZQUFzQixPQUFWSCxRQUFRO1lBQzNCSSxPQUFPO1lBQ1BDLE1BQU07Z0JBQUM7YUFBYTtRQUN0QixNQUNBO1FBQ0U7WUFDRUosV0FBVztZQUNYQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsT0FBTztZQUNQQyxNQUFNLEVBQUU7UUFDVjtLQUVEO0lBRUwscUJBQ0UsOERBQUNqQiwwREFBSUE7UUFBQ2tCLFNBQVM7UUFBQ0MsU0FBUztrQkFDdEJaLEtBQUthLEdBQUcsQ0FBQyxDQUFDQyxNQUFNVCxzQkFDZiw4REFBQ1osMERBQUlBO2dCQUFhcUIsSUFBSTtnQkFBQ0MsSUFBSTtnQkFBSUMsSUFBSTtnQkFBR0MsSUFBSTswQkFDeEMsNEVBQUN2Qix5REFBR0E7b0JBQ1p3QixJQUFJO3dCQUNGQyxTQUFTO3dCQUNUQyxZQUFZO3dCQUNaQyxJQUFJO3dCQUNKLEdBQUlyQixLQUFLRyxNQUFNLEtBQUssS0FBS0UsVUFBVSxJQUMvQjs0QkFDRWlCLFVBQVU7NEJBQ1ZDLEdBQUc7NEJBQ0hDLGlCQUFpQjs0QkFDakJDLGNBQWM7d0JBQ2hCLElBQ0EsQ0FBQyxDQUFDO29CQUNSOzhCQUVDekIsS0FBS0csTUFBTSxLQUFLLEtBQUtFLFVBQVUsa0JBQzlCLDhEQUFDVixnRUFBVUE7d0JBQUMrQixTQUFRO2tDQUFROzs7Ozs2Q0FJNUI7OzBDQUNFLDhEQUFDOUIsNERBQU1BO2dDQUFDK0IsS0FBSTtnQ0FBU0MsS0FBS2QsS0FBS1AsTUFBTSxJQUFJc0I7Ozs7OzswQ0FDekMsOERBQUNuQyx5REFBR0E7Z0NBQUN3QixJQUFJO29DQUFFWSxJQUFJO2dDQUFFOztrREFDZiw4REFBQ25DLGdFQUFVQTt3Q0FBQytCLFNBQVE7a0RBQVNaLEtBQUtOLEtBQUs7Ozs7OztrREFDdkMsOERBQUNiLGdFQUFVQTt3Q0FBQytCLFNBQVE7d0NBQVVLLE9BQU07a0RBQ2pDakIsS0FBS0osSUFBSSxDQUFDRyxHQUFHLENBQUMsQ0FBQ21CLEtBQUtDLHlCQUNuQiw4REFBQ3pDLDJDQUFjOzBEQUNaLElBQVEsT0FBSndDLEtBQUk7K0NBRFVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTNCZDVCOzs7Ozs7Ozs7O0FBd0NuQjtLQWxFU1I7QUFvRU0sU0FBU3NDO0lBQ3RCLHFCQUNFLDhEQUFDekMseURBQUdBO1FBQUN3QixJQUFJO1lBQUVrQixVQUFVO1FBQVM7a0JBQzVCLDRFQUFDdkM7WUFBTUUsT0FBTzs7Ozs7Ozs7Ozs7QUFJcEI7TUFQd0JvQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1Byb2pldG9zQWRpY2lvbmFkb3MudHN4PzNiMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0F2YXRhclwiO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU2tlbGV0b25cIjtcclxuXHJcbi8vIERlZmluZSB1bSB0aXBvIHBhcmEgb3MgaXRlbnMgZG8gYXJyYXlcclxuaW50ZXJmYWNlIFByb2plY3RJdGVtIHtcclxuICB0aHVtYm5haWw6IHN0cmluZyB8IG51bGw7XHJcbiAgYXZhdGFyOiBzdHJpbmcgfCBudWxsO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgbGlua3M6IHN0cmluZztcclxuICB0YWdzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIE1lZGlhUHJvcHMge1xyXG4gIGxvYWRpbmc/OiBib29sZWFuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZWRpYShwcm9wczogTWVkaWFQcm9wcykge1xyXG4gIGNvbnN0IHsgbG9hZGluZyA9IGZhbHNlIH0gPSBwcm9wcztcclxuXHJcbiAgLy8gSW5pY2lhbGl6ZSBkYXRhIGNvbSB1bSBhcnJheSB2YXppbyBkZSBvYmpldG9zIGRvIHRpcG8gUHJvamVjdEl0ZW1cclxuICBjb25zdCBkYXRhOiBQcm9qZWN0SXRlbVtdID0gbG9hZGluZ1xyXG4gICAgPyBBcnJheS5mcm9tKHsgbGVuZ3RoOiAzIH0sIChfLCBpbmRleCkgPT4gKHtcclxuICAgICAgICB0aHVtYm5haWw6IG51bGwsXHJcbiAgICAgICAgYXZhdGFyOiBudWxsLFxyXG4gICAgICAgIHRpdGxlOiBgU2tlbGV0b24gJHtpbmRleCArIDF9YCxcclxuICAgICAgICBsaW5rczogJ0xvYWRpbmcuLi4nLFxyXG4gICAgICAgIHRhZ3M6IFsnTG9hZGluZy4uLiddLFxyXG4gICAgICB9KSlcclxuICAgIDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRodW1ibmFpbDogJycsXHJcbiAgICAgICAgICBhdmF0YXI6ICcnLCAvLyBTdWJzdGl0dWEgcGVsYSBVUkwgcmVhbCBkbyBhdmF0YXJcclxuICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgIGxpbmtzOiAnJyxcclxuICAgICAgICAgIHRhZ3M6IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gQWRpY2lvbmUgbWFpcyBvYmpldG9zIGNvbmZvcm1lIG5lY2Vzc8OhcmlvXHJcbiAgICAgIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICA8R3JpZCBrZXk9e2luZGV4fSBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fT5cclxuICAgICAgICAgIDxCb3hcclxuICBzeD17e1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtdDogMSxcclxuICAgIC4uLihkYXRhLmxlbmd0aCA9PT0gMCAmJiBpbmRleCA9PT0gMFxyXG4gICAgICA/IHtcclxuICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgcDogMixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFNkU5RjInLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgIH1cclxuICAgICAgOiB7fSksXHJcbiAgfX1cclxuPlxyXG4gIHtkYXRhLmxlbmd0aCA9PT0gMCAmJiBpbmRleCA9PT0gMCA/IChcclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICBBZGljaW9uZSBzZXUgcHJpbWVpcm8gcHJvamV0b1xyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICkgOiAoXHJcbiAgICA8PlxyXG4gICAgICA8QXZhdGFyIGFsdD1cIkF2YXRhclwiIHNyYz17aXRlbS5hdmF0YXIgfHwgdW5kZWZpbmVkfSAvPlxyXG4gICAgICA8Qm94IHN4PXt7IG1sOiAxIH19PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPntpdGVtLnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgIHtpdGVtLnRhZ3MubWFwKCh0YWcsIHRhZ0luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3RhZ0luZGV4fT5cclxuICAgICAgICAgICAgICB7YCMke3RhZ30gYH1cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApfVxyXG48L0JveD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICkpfVxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2pldG9zKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxyXG4gICAgICA8TWVkaWEgbG9hZGluZyAvPlxyXG4gICAgICB7LyogQWRpY2lvbmUgbWFpcyBpbnN0w6JuY2lhcyBkZSA8TWVkaWEgLz4gY29uZm9ybWUgbmVjZXNzw6FyaW8gKi99XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkdyaWQiLCJCb3giLCJUeXBvZ3JhcGh5IiwiQXZhdGFyIiwiTWVkaWEiLCJwcm9wcyIsImxvYWRpbmciLCJkYXRhIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwidGh1bWJuYWlsIiwiYXZhdGFyIiwidGl0bGUiLCJsaW5rcyIsInRhZ3MiLCJjb250YWluZXIiLCJzcGFjaW5nIiwibWFwIiwiaXRlbSIsInhzIiwic20iLCJtZCIsInN4IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtdCIsImZsZXhHcm93IiwicCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInZhcmlhbnQiLCJhbHQiLCJzcmMiLCJ1bmRlZmluZWQiLCJtbCIsImNvbG9yIiwidGFnIiwidGFnSW5kZXgiLCJGcmFnbWVudCIsIlByb2pldG9zIiwib3ZlcmZsb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/ProjetosAdicionados.tsx\n"));

/***/ })

});