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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projetos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n\n\n\n\n\n\nfunction Media(props) {\n    const { loading = false } = props;\n    // Inicialize data com um array vazio de objetos do tipo ProjectItem\n    const data = loading ? Array.from({\n        length: 3\n    }, (_, index)=>({\n            thumbnail: null,\n            avatar: null,\n            title: \"Skeleton \".concat(index + 1),\n            links: \"Loading...\",\n            tags: [\n                \"Loading...\"\n            ]\n        })) : [\n        {\n            thumbnail: \"\",\n            avatar: \"\",\n            title: \"\",\n            links: \"\",\n            tags: []\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        container: true,\n        spacing: 2,\n        children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                item: true,\n                xs: 12,\n                sm: 6,\n                md: 4,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        mt: 1,\n                        ...data.length === 0 && index === 0 ? {\n                            flexGrow: 1,\n                            p: 2,\n                            backgroundColor: \"#E6E9F2\",\n                            borderRadius: 4\n                        } : {}\n                    },\n                    children: data.length === 0 && index === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"body2\",\n                        children: \"Adicione seu primeiro projeto\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 15\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                alt: \"Avatar\",\n                                src: item.avatar || undefined\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                sx: {\n                                    ml: 1\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        variant: \"body2\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        variant: \"caption\",\n                                        color: \"text.secondary\",\n                                        children: item.tags.map((tag, tagIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                                children: \"#\".concat(tag, \" \")\n                                            }, tagIndex, false, {\n                                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 23\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = Media;\nfunction Projetos() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            overflow: \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Media, {\n            loading: true\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Projetos;\nvar _c, _c1;\n$RefreshReg$(_c, \"Media\");\n$RefreshReg$(_c1, \"Projetos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL1Byb2pldG9zQWRpY2lvbmFkb3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNPO0FBQ0Y7QUFDYztBQUNSO0FBZ0IxQyxTQUFTSyxNQUFNQyxLQUFpQjtJQUM5QixNQUFNLEVBQUVDLFVBQVUsS0FBSyxFQUFFLEdBQUdEO0lBRTVCLG9FQUFvRTtJQUNwRSxNQUFNRSxPQUFzQkQsVUFDeEJFLE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRO0lBQUUsR0FBRyxDQUFDQyxHQUFHQyxRQUFXO1lBQ3ZDQyxXQUFXO1lBQ1hDLFFBQVE7WUFDUkMsT0FBTyxZQUFzQixPQUFWSCxRQUFRO1lBQzNCSSxPQUFPO1lBQ1BDLE1BQU07Z0JBQUM7YUFBYTtRQUN0QixNQUNBO1FBQ0U7WUFDRUosV0FBVztZQUNYQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsT0FBTztZQUNQQyxNQUFNLEVBQUU7UUFDVjtLQUVEO0lBRUwscUJBQ0UsOERBQUNqQiwwREFBSUE7UUFBQ2tCLFNBQVM7UUFBQ0MsU0FBUztrQkFDdEJaLEtBQUthLEdBQUcsQ0FBQyxDQUFDQyxNQUFNVCxzQkFDZiw4REFBQ1osMERBQUlBO2dCQUFhcUIsSUFBSTtnQkFBQ0MsSUFBSTtnQkFBSUMsSUFBSTtnQkFBR0MsSUFBSTswQkFDeEMsNEVBQUN2Qix5REFBR0E7b0JBQ0Z3QixJQUFJO3dCQUNGQyxTQUFTO3dCQUNUQyxZQUFZO3dCQUNaQyxJQUFJO3dCQUNKLEdBQUlyQixLQUFLRyxNQUFNLEtBQUssS0FBS0UsVUFBVSxJQUMvQjs0QkFDRWlCLFVBQVU7NEJBQ1ZDLEdBQUc7NEJBQ0hDLGlCQUFpQjs0QkFDakJDLGNBQWM7d0JBQ2hCLElBQ0EsQ0FBQyxDQUFDO29CQUNSOzhCQUVDekIsS0FBS0csTUFBTSxLQUFLLEtBQUtFLFVBQVUsa0JBQzlCLDhEQUFDVixnRUFBVUE7d0JBQUMrQixTQUFRO2tDQUFROzs7Ozs2Q0FJNUI7OzBDQUNFLDhEQUFDOUIsNERBQU1BO2dDQUFDK0IsS0FBSTtnQ0FBU0MsS0FBS2QsS0FBS1AsTUFBTSxJQUFJc0I7Ozs7OzswQ0FDekMsOERBQUNuQyx5REFBR0E7Z0NBQUN3QixJQUFJO29DQUFFWSxJQUFJO2dDQUFFOztrREFDZiw4REFBQ25DLGdFQUFVQTt3Q0FBQytCLFNBQVE7a0RBQVNaLEtBQUtOLEtBQUs7Ozs7OztrREFDdkMsOERBQUNiLGdFQUFVQTt3Q0FBQytCLFNBQVE7d0NBQVVLLE9BQU07a0RBQ2pDakIsS0FBS0osSUFBSSxDQUFDRyxHQUFHLENBQUMsQ0FBQ21CLEtBQUtDLHlCQUNuQiw4REFBQ3pDLDJDQUFjOzBEQUNaLElBQVEsT0FBSndDLEtBQUk7K0NBRFVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTNCeEI1Qjs7Ozs7Ozs7OztBQXdDbkI7S0FsRVNSO0FBb0VNLFNBQVNzQztJQUN0QixxQkFDRSw4REFBQ3pDLHlEQUFHQTtRQUFDd0IsSUFBSTtZQUFFa0IsVUFBVTtRQUFTO2tCQUM1Qiw0RUFBQ3ZDO1lBQU1FLE9BQU87Ozs7Ozs7Ozs7O0FBSXBCO01BUHdCb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Qcm9qZXRvc0FkaWNpb25hZG9zLnRzeD8zYjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL1NrZWxldG9uXCI7XHJcblxyXG4vLyBEZWZpbmUgdW0gdGlwbyBwYXJhIG9zIGl0ZW5zIGRvIGFycmF5XHJcbmludGVyZmFjZSBQcm9qZWN0SXRlbSB7XHJcbiAgdGh1bWJuYWlsOiBzdHJpbmcgfCBudWxsO1xyXG4gIGF2YXRhcjogc3RyaW5nIHwgbnVsbDtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGxpbmtzOiBzdHJpbmc7XHJcbiAgdGFnczogc3RyaW5nW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBNZWRpYVByb3BzIHtcclxuICBsb2FkaW5nPzogYm9vbGVhbjtcclxufVxyXG5cclxuZnVuY3Rpb24gTWVkaWEocHJvcHM6IE1lZGlhUHJvcHMpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgPSBmYWxzZSB9ID0gcHJvcHM7XHJcblxyXG4gIC8vIEluaWNpYWxpemUgZGF0YSBjb20gdW0gYXJyYXkgdmF6aW8gZGUgb2JqZXRvcyBkbyB0aXBvIFByb2plY3RJdGVtXHJcbiAgY29uc3QgZGF0YTogUHJvamVjdEl0ZW1bXSA9IGxvYWRpbmdcclxuICAgID8gQXJyYXkuZnJvbSh7IGxlbmd0aDogMyB9LCAoXywgaW5kZXgpID0+ICh7XHJcbiAgICAgICAgdGh1bWJuYWlsOiBudWxsLFxyXG4gICAgICAgIGF2YXRhcjogbnVsbCxcclxuICAgICAgICB0aXRsZTogYFNrZWxldG9uICR7aW5kZXggKyAxfWAsXHJcbiAgICAgICAgbGlua3M6IFwiTG9hZGluZy4uLlwiLFxyXG4gICAgICAgIHRhZ3M6IFtcIkxvYWRpbmcuLi5cIl0sXHJcbiAgICAgIH0pKVxyXG4gICAgOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGh1bWJuYWlsOiBcIlwiLFxyXG4gICAgICAgICAgYXZhdGFyOiBcIlwiLCAvLyBTdWJzdGl0dWEgcGVsYSBVUkwgcmVhbCBkbyBhdmF0YXJcclxuICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgbGlua3M6IFwiXCIsXHJcbiAgICAgICAgICB0YWdzOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIEFkaWNpb25lIG1haXMgb2JqZXRvcyBjb25mb3JtZSBuZWNlc3PDoXJpb1xyXG4gICAgICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPEdyaWQga2V5PXtpbmRleH0gaXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBtdDogMSxcclxuICAgICAgICAgICAgICAuLi4oZGF0YS5sZW5ndGggPT09IDAgJiYgaW5kZXggPT09IDBcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHA6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFNkU5RjJcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDoge30pLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGF0YS5sZW5ndGggPT09IDAgJiYgaW5kZXggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICBBZGljaW9uZSBzZXUgcHJpbWVpcm8gcHJvamV0b1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJBdmF0YXJcIiBzcmM9e2l0ZW0uYXZhdGFyIHx8IHVuZGVmaW5lZH0gLz5cclxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgbWw6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPntpdGVtLnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0udGFncy5tYXAoKHRhZywgdGFnSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3RhZ0luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2AjJHt0YWd9IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKSl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamV0b3MoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3sgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XHJcbiAgICAgIDxNZWRpYSBsb2FkaW5nIC8+XHJcbiAgICAgIHsvKiBBZGljaW9uZSBtYWlzIGluc3TDom5jaWFzIGRlIDxNZWRpYSAvPiBjb25mb3JtZSBuZWNlc3PDoXJpbyAqL31cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsIkJveCIsIlR5cG9ncmFwaHkiLCJBdmF0YXIiLCJNZWRpYSIsInByb3BzIiwibG9hZGluZyIsImRhdGEiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaW5kZXgiLCJ0aHVtYm5haWwiLCJhdmF0YXIiLCJ0aXRsZSIsImxpbmtzIiwidGFncyIsImNvbnRhaW5lciIsInNwYWNpbmciLCJtYXAiLCJpdGVtIiwieHMiLCJzbSIsIm1kIiwic3giLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm10IiwiZmxleEdyb3ciLCJwIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidmFyaWFudCIsImFsdCIsInNyYyIsInVuZGVmaW5lZCIsIm1sIiwiY29sb3IiLCJ0YWciLCJ0YWdJbmRleCIsIkZyYWdtZW50IiwiUHJvamV0b3MiLCJvdmVyZmxvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/ProjetosAdicionados.tsx\n"));

/***/ })

});