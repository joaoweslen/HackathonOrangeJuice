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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YouTube; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Skeleton */ \"./node_modules/@mui/material/Skeleton/Skeleton.js\");\n\n\n\n\n\n\n\nfunction Media(props) {\n    const { loading = false } = props;\n    const generateSkeletonData = ()=>{\n        return Array.from({\n            length: 3\n        }, (_, index)=>({\n                thumbnail: null,\n                avatar: null,\n                title: \"Skeleton \".concat(index + 1),\n                channel: \"Loading...\",\n                createdAt: \"Loading...\",\n                tags: [\n                    \"Loading...\"\n                ]\n            }));\n    };\n    const data = loading ? generateSkeletonData() : [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        container: true,\n        spacing: 2,\n        children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                item: true,\n                xs: 12,\n                sm: 6,\n                md: 4,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        flexDirection: \"column\",\n                        width: \"100%\"\n                    },\n                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"rectangular\",\n                        width: \"100%\",\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 15\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            item.thumbnail && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                style: {\n                                    width: \"100%\",\n                                    height: 200,\n                                    objectFit: \"cover\"\n                                },\n                                alt: item.title,\n                                src: item.thumbnail\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                sx: {\n                                    display: \"flex\",\n                                    alignItems: \"center\",\n                                    mt: 1\n                                },\n                                children: data.length === 0 && index === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    sx: {\n                                        flexGrow: 1,\n                                        p: 2,\n                                        backgroundColor: \"#E6E9F2\",\n                                        borderRadius: 4\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        variant: \"body2\",\n                                        children: \"Adicione seu primeiro projeto\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 23\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 21\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            alt: \"Avatar\",\n                                            src: item.avatar || undefined\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            sx: {\n                                                ml: 1\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                    variant: \"body2\",\n                                                    children: item.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                    variant: \"caption\",\n                                                    color: \"text.secondary\",\n                                                    children: item.tags.map((tag, tagIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                                            children: \"#\".concat(tag, \" \")\n                                                        }, tagIndex, false, {\n                                                            fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                                            lineNumber: 80,\n                                                            columnNumber: 29\n                                                        }, this))\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 23\n                                        }, this)\n                                    ]\n                                }, void 0, true)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_c = Media;\nfunction YouTube() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            overflow: \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Media, {\n            loading: true\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n            lineNumber: 101,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, this);\n}\n_c1 = YouTube;\nvar _c, _c1;\n$RefreshReg$(_c, \"Media\");\n$RefreshReg$(_c1, \"YouTube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL1Byb2pldG9zQWRpY2lvbmFkb3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTztBQUNGO0FBQ2M7QUFDUjtBQUNJO0FBTTlDLFNBQVNNLE1BQU1DLEtBQWlCO0lBQzlCLE1BQU0sRUFBRUMsVUFBVSxLQUFLLEVBQUUsR0FBR0Q7SUFFNUIsTUFBTUUsdUJBQXVCO1FBQzNCLE9BQU9DLE1BQU1DLElBQUksQ0FBQztZQUFFQyxRQUFRO1FBQUUsR0FBRyxDQUFDQyxHQUFHQyxRQUFXO2dCQUM5Q0MsV0FBVztnQkFDWEMsUUFBUTtnQkFDUkMsT0FBTyxZQUFzQixPQUFWSCxRQUFRO2dCQUMzQkksU0FBUztnQkFDVEMsV0FBVztnQkFDWEMsTUFBTTtvQkFBQztpQkFBYTtZQUN0QjtJQUNGO0lBRUEsTUFBTUMsT0FBT2IsVUFBVUMseUJBQXlCLEVBUy9DO0lBRUQscUJBQ0UsOERBQUNSLDBEQUFJQTtRQUFDcUIsU0FBUztRQUFDQyxTQUFTO2tCQUN0QkYsS0FBS0csR0FBRyxDQUFDLENBQUNDLE1BQU1YLHNCQUNmLDhEQUFDYiwwREFBSUE7Z0JBQWF3QixJQUFJO2dCQUFDQyxJQUFJO2dCQUFJQyxJQUFJO2dCQUFHQyxJQUFJOzBCQUN4Qyw0RUFBQzFCLHlEQUFHQTtvQkFDRjJCLElBQUk7d0JBQ0ZDLFNBQVM7d0JBQ1RDLGVBQWU7d0JBQ2ZDLE9BQU87b0JBQ1Q7OEJBRUN4Qix3QkFDQyw4REFBQ0gsOERBQVFBO3dCQUFDNEIsU0FBUTt3QkFBY0QsT0FBTTt3QkFBT0UsUUFBUTs7Ozs7NkNBRXJEOzs0QkFDR1QsS0FBS1YsU0FBUyxrQkFDYiw4REFBQ29CO2dDQUNDQyxPQUFPO29DQUFFSixPQUFPO29DQUFRRSxRQUFRO29DQUFLRyxXQUFXO2dDQUFRO2dDQUN4REMsS0FBS2IsS0FBS1IsS0FBSztnQ0FDZnNCLEtBQUtkLEtBQUtWLFNBQVM7Ozs7OzswQ0FHdkIsOERBQUNiLHlEQUFHQTtnQ0FBQzJCLElBQUk7b0NBQUVDLFNBQVM7b0NBQVFVLFlBQVk7b0NBQVVDLElBQUk7Z0NBQUU7MENBQ3JEcEIsS0FBS1QsTUFBTSxLQUFLLEtBQUtFLFVBQVUsa0JBQzlCLDhEQUFDWix5REFBR0E7b0NBQ0YyQixJQUFJO3dDQUNGYSxVQUFVO3dDQUNWQyxHQUFHO3dDQUNIQyxpQkFBaUI7d0NBQ2pCQyxjQUFjO29DQUNoQjs4Q0FFQSw0RUFBQzFDLGdFQUFVQTt3Q0FBQzhCLFNBQVE7a0RBQVE7Ozs7Ozs7Ozs7eURBSzlCOztzREFDRSw4REFBQzdCLDREQUFNQTs0Q0FBQ2tDLEtBQUk7NENBQVNDLEtBQUtkLEtBQUtULE1BQU0sSUFBSThCOzs7Ozs7c0RBQ3pDLDhEQUFDNUMseURBQUdBOzRDQUFDMkIsSUFBSTtnREFBRWtCLElBQUk7NENBQUU7OzhEQUNmLDhEQUFDNUMsZ0VBQVVBO29EQUFDOEIsU0FBUTs4REFBU1IsS0FBS1IsS0FBSzs7Ozs7OzhEQUN2Qyw4REFBQ2QsZ0VBQVVBO29EQUFDOEIsU0FBUTtvREFBVWUsT0FBTTs4REFDakN2QixLQUFLTCxJQUFJLENBQUNJLEdBQUcsQ0FBQyxDQUFDeUIsS0FBS0MseUJBQ25CLDhEQUFDbEQsMkNBQWM7c0VBQ1osSUFBUSxPQUFKaUQsS0FBSTsyREFEVUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXhDOUJwQzs7Ozs7Ozs7OztBQXdETztLQXBGakJSO0FBc0ZNLFNBQVM4QztJQUN0QixxQkFDRSw4REFBQ2xELHlEQUFHQTtRQUFDMkIsSUFBSTtZQUFFd0IsVUFBVTtRQUFTO2tCQUM1Qiw0RUFBQy9DO1lBQU1FLE9BQU87Ozs7Ozs7Ozs7O0FBSXBCO01BUHdCNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Qcm9qZXRvc0FkaWNpb25hZG9zLnRzeD8zYjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL1NrZWxldG9uXCI7XHJcblxyXG5pbnRlcmZhY2UgTWVkaWFQcm9wcyB7XHJcbiAgbG9hZGluZz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lZGlhKHByb3BzOiBNZWRpYVByb3BzKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nID0gZmFsc2UgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBnZW5lcmF0ZVNrZWxldG9uRGF0YSA9ICgpID0+IHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiAzIH0sIChfLCBpbmRleCkgPT4gKHtcclxuICAgICAgdGh1bWJuYWlsOiBudWxsLFxyXG4gICAgICBhdmF0YXI6IG51bGwsXHJcbiAgICAgIHRpdGxlOiBgU2tlbGV0b24gJHtpbmRleCArIDF9YCxcclxuICAgICAgY2hhbm5lbDogJ0xvYWRpbmcuLi4nLFxyXG4gICAgICBjcmVhdGVkQXQ6ICdMb2FkaW5nLi4uJyxcclxuICAgICAgdGFnczogWydMb2FkaW5nLi4uJ10sXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGxvYWRpbmcgPyBnZW5lcmF0ZVNrZWxldG9uRGF0YSgpIDogW1xyXG4gICAgLy8ge1xyXG4gICAgLy8gICB0aHVtYm5haWw6ICcnLFxyXG4gICAgLy8gICBhdmF0YXI6ICcnLCAvLyBTdWJzdGl0dWEgcGVsYSBVUkwgcmVhbCBkbyBhdmF0YXJcclxuICAgIC8vICAgdGl0bGU6ICcnLFxyXG4gICAgLy8gICBsaW5rczogJycsXHJcbiAgICAvLyAgIHRhZ3M6IFtdLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIEFkaWNpb25lIG1haXMgb2JqZXRvcyBhbyBhcnJheSBjb25mb3JtZSBuZWNlc3PDoXJpb1xyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICA8R3JpZCBrZXk9e2luZGV4fSBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fT5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJyZWN0YW5ndWxhclwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD17MjAwfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50aHVtYm5haWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAyMDAsIG9iamVjdEZpdDogJ2NvdmVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0udGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbXQ6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLmxlbmd0aCA9PT0gMCAmJiBpbmRleCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0U2RTlGMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkaWNpb25lIHNldSBwcmltZWlybyBwcm9qZXRvXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwiQXZhdGFyXCIgc3JjPXtpdGVtLmF2YXRhciB8fCB1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IG1sOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj57aXRlbS50aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRhZ3MubWFwKCh0YWcsIHRhZ0luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt0YWdJbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgIyR7dGFnfSBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKSl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBZb3VUdWJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxyXG4gICAgICA8TWVkaWEgbG9hZGluZyAvPlxyXG4gICAgICB7LyogQWRpY2lvbmUgbWFpcyBpbnN0w6JuY2lhcyBkZSA8TWVkaWEgLz4gY29uZm9ybWUgbmVjZXNzw6FyaW8gKi99XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkdyaWQiLCJCb3giLCJUeXBvZ3JhcGh5IiwiQXZhdGFyIiwiU2tlbGV0b24iLCJNZWRpYSIsInByb3BzIiwibG9hZGluZyIsImdlbmVyYXRlU2tlbGV0b25EYXRhIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwidGh1bWJuYWlsIiwiYXZhdGFyIiwidGl0bGUiLCJjaGFubmVsIiwiY3JlYXRlZEF0IiwidGFncyIsImRhdGEiLCJjb250YWluZXIiLCJzcGFjaW5nIiwibWFwIiwiaXRlbSIsInhzIiwic20iLCJtZCIsInN4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsInZhcmlhbnQiLCJoZWlnaHQiLCJpbWciLCJzdHlsZSIsIm9iamVjdEZpdCIsImFsdCIsInNyYyIsImFsaWduSXRlbXMiLCJtdCIsImZsZXhHcm93IiwicCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInVuZGVmaW5lZCIsIm1sIiwiY29sb3IiLCJ0YWciLCJ0YWdJbmRleCIsIkZyYWdtZW50IiwiWW91VHViZSIsIm92ZXJmbG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/ProjetosAdicionados.tsx\n"));

/***/ })

});