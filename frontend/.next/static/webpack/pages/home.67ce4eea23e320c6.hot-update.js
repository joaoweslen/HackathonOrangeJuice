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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YouTube; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Skeleton */ \"./node_modules/@mui/material/Skeleton/Skeleton.js\");\n\n\n\n\n\n\n\nfunction Media(props) {\n    const { loading = false } = props;\n    const generateSkeletonData = ()=>{\n        return Array.from({\n            length: 3\n        }, (_, index)=>({\n                thumbnail: null,\n                avatar: null,\n                title: \"Skeleton \".concat(index + 1),\n                channel: \"Loading...\",\n                createdAt: \"Loading...\",\n                tags: [\n                    \"Loading...\"\n                ]\n            }));\n    };\n    const data = loading ? generateSkeletonData() : [\n        {\n            thumbnail: \"https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVf...\",\n            avatar: \"https://example.com/avatar.jpg\",\n            title: \"Don Diablo @ Tomorrowland Main Stage 2019 | Official…\",\n            channel: \"Don Diablo\",\n            views: \"396k views\",\n            createdAt: \"a week ago\",\n            tags: [\n                \"m\\xfasica\",\n                \"festival\",\n                \"EDM\"\n            ]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        container: true,\n        spacing: 2,\n        children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                item: true,\n                xs: 12,\n                sm: 6,\n                md: 4,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        flexDirection: \"column\",\n                        width: \"100%\"\n                    },\n                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"rectangular\",\n                        width: \"100%\",\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 15\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            item.thumbnail && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                style: {\n                                    width: \"100%\",\n                                    height: 200,\n                                    objectFit: \"cover\"\n                                },\n                                alt: item.title,\n                                src: item.thumbnail\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                sx: {\n                                    display: \"flex\",\n                                    alignItems: \"center\",\n                                    mt: 1\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        alt: \"Avatar\",\n                                        src: item.avatar || undefined\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 19\n                                    }, this),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        sx: {\n                                            ml: 1\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                variant: \"body2\",\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                variant: \"caption\",\n                                                color: \"text.secondary\",\n                                                children: \"\".concat(item.channel, \" • \").concat(item.createdAt)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                variant: \"caption\",\n                                                color: \"text.secondary\",\n                                                children: item.tags.map((tag, tagIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                                        children: \"#\".concat(tag, \" \")\n                                                    }, tagIndex, false, {\n                                                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 25\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_c = Media;\nfunction YouTube() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            overflow: \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Media, {\n            loading: true\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\VICTOR CALLEGARI\\\\Desktop\\\\projeto-OrangePortfolio\\\\HackathonOrangeJuice\\\\frontend\\\\src\\\\app\\\\ProjetosAdicionados.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_c1 = YouTube;\nvar _c, _c1;\n$RefreshReg$(_c, \"Media\");\n$RefreshReg$(_c1, \"YouTube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL1Byb2pldG9zQWRpY2lvbmFkb3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTztBQUNGO0FBQ2M7QUFDUjtBQUNJO0FBTTlDLFNBQVNNLE1BQU1DLEtBQWlCO0lBQzlCLE1BQU0sRUFBRUMsVUFBVSxLQUFLLEVBQUUsR0FBR0Q7SUFFNUIsTUFBTUUsdUJBQXVCO1FBQzNCLE9BQU9DLE1BQU1DLElBQUksQ0FBQztZQUFFQyxRQUFRO1FBQUUsR0FBRyxDQUFDQyxHQUFHQyxRQUFXO2dCQUM5Q0MsV0FBVztnQkFDWEMsUUFBUTtnQkFDUkMsT0FBTyxZQUFzQixPQUFWSCxRQUFRO2dCQUMzQkksU0FBUztnQkFDVEMsV0FBVztnQkFDWEMsTUFBTTtvQkFBQztpQkFBYTtZQUN0QjtJQUNGO0lBRUEsTUFBTUMsT0FBT2IsVUFBVUMseUJBQXlCO1FBQzlDO1lBQ0VNLFdBQVc7WUFDWEMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEksT0FBTztZQUNQSCxXQUFXO1lBQ1hDLE1BQU07Z0JBQUM7Z0JBQVU7Z0JBQVk7YUFBTTtRQUNyQztLQUVEO0lBRUQscUJBQ0UsOERBQUNuQiwwREFBSUE7UUFBQ3NCLFNBQVM7UUFBQ0MsU0FBUztrQkFDdEJILEtBQUtJLEdBQUcsQ0FBQyxDQUFDQyxNQUFNWixzQkFDZiw4REFBQ2IsMERBQUlBO2dCQUFheUIsSUFBSTtnQkFBQ0MsSUFBSTtnQkFBSUMsSUFBSTtnQkFBR0MsSUFBSTswQkFDeEMsNEVBQUMzQix5REFBR0E7b0JBQ0Y0QixJQUFJO3dCQUNGQyxTQUFTO3dCQUNUQyxlQUFlO3dCQUNmQyxPQUFPO29CQUNUOzhCQUVDekIsd0JBQ0MsOERBQUNILDhEQUFRQTt3QkFBQzZCLFNBQVE7d0JBQWNELE9BQU07d0JBQU9FLFFBQVE7Ozs7OzZDQUVyRDs7NEJBQ0dULEtBQUtYLFNBQVMsa0JBQ2IsOERBQUNxQjtnQ0FDQ0MsT0FBTztvQ0FBRUosT0FBTztvQ0FBUUUsUUFBUTtvQ0FBS0csV0FBVztnQ0FBUTtnQ0FDeERDLEtBQUtiLEtBQUtULEtBQUs7Z0NBQ2Z1QixLQUFLZCxLQUFLWCxTQUFTOzs7Ozs7MENBR3ZCLDhEQUFDYix5REFBR0E7Z0NBQUM0QixJQUFJO29DQUFFQyxTQUFTO29DQUFRVSxZQUFZO29DQUFVQyxJQUFJO2dDQUFFOztrREFDdEQsOERBQUN0Qyw0REFBTUE7d0NBQUNtQyxLQUFJO3dDQUFTQyxLQUFLZCxLQUFLVixNQUFNLElBQUkyQjs7Ozs7O29DQUFhO2tEQUN0RCw4REFBQ3pDLHlEQUFHQTt3Q0FBQzRCLElBQUk7NENBQUVjLElBQUk7d0NBQUU7OzBEQUNmLDhEQUFDekMsZ0VBQVVBO2dEQUFDK0IsU0FBUTswREFBU1IsS0FBS1QsS0FBSzs7Ozs7OzBEQUN2Qyw4REFBQ2QsZ0VBQVVBO2dEQUFDK0IsU0FBUTtnREFBVVcsT0FBTTswREFDakMsR0FBcUJuQixPQUFsQkEsS0FBS1IsT0FBTyxFQUFDLE9BQW9CLE9BQWZRLEtBQUtQLFNBQVM7Ozs7OzswREFFdEMsOERBQUNoQixnRUFBVUE7Z0RBQUMrQixTQUFRO2dEQUFVVyxPQUFNOzBEQUNqQ25CLEtBQUtOLElBQUksQ0FBQ0ssR0FBRyxDQUFDLENBQUNxQixLQUFLQyx5QkFDbkIsOERBQUMvQywyQ0FBYztrRUFDWixJQUFRLE9BQUo4QyxLQUFJO3VEQURVQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUE1QjFCakM7Ozs7Ozs7Ozs7QUEwQ25CO0tBeEVTUjtBQTBFTSxTQUFTMkM7SUFDdEIscUJBQ0UsOERBQUMvQyx5REFBR0E7UUFBQzRCLElBQUk7WUFBRW9CLFVBQVU7UUFBUztrQkFDNUIsNEVBQUM1QztZQUFNRSxPQUFPOzs7Ozs7Ozs7OztBQUlwQjtNQVB3QnlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvUHJvamV0b3NBZGljaW9uYWRvcy50c3g/M2IzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXZhdGFyJztcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU2tlbGV0b24nO1xyXG5cclxuaW50ZXJmYWNlIE1lZGlhUHJvcHMge1xyXG4gIGxvYWRpbmc/OiBib29sZWFuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZWRpYShwcm9wczogTWVkaWFQcm9wcykge1xyXG4gIGNvbnN0IHsgbG9hZGluZyA9IGZhbHNlIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVTa2VsZXRvbkRhdGEgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogMyB9LCAoXywgaW5kZXgpID0+ICh7XHJcbiAgICAgIHRodW1ibmFpbDogbnVsbCxcclxuICAgICAgYXZhdGFyOiBudWxsLFxyXG4gICAgICB0aXRsZTogYFNrZWxldG9uICR7aW5kZXggKyAxfWAsXHJcbiAgICAgIGNoYW5uZWw6ICdMb2FkaW5nLi4uJyxcclxuICAgICAgY3JlYXRlZEF0OiAnTG9hZGluZy4uLicsXHJcbiAgICAgIHRhZ3M6IFsnTG9hZGluZy4uLiddLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBsb2FkaW5nID8gZ2VuZXJhdGVTa2VsZXRvbkRhdGEoKSA6IFtcclxuICAgIHtcclxuICAgICAgdGh1bWJuYWlsOiAnaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9wTHFpcEpOSXRJby9ocWRlZmF1bHQuanBnP3NxcD0tb2F5bXdFWUNOSUJFSFpJVmYuLi4nLFxyXG4gICAgICBhdmF0YXI6ICdodHRwczovL2V4YW1wbGUuY29tL2F2YXRhci5qcGcnLCAvLyBTdWJzdGl0dWEgcGVsYSBVUkwgcmVhbCBkbyBhdmF0YXJcclxuICAgICAgdGl0bGU6ICdEb24gRGlhYmxvIEAgVG9tb3Jyb3dsYW5kIE1haW4gU3RhZ2UgMjAxOSB8IE9mZmljaWFs4oCmJyxcclxuICAgICAgY2hhbm5lbDogJ0RvbiBEaWFibG8nLFxyXG4gICAgICB2aWV3czogJzM5Nmsgdmlld3MnLFxyXG4gICAgICBjcmVhdGVkQXQ6ICdhIHdlZWsgYWdvJyxcclxuICAgICAgdGFnczogWydtw7pzaWNhJywgJ2Zlc3RpdmFsJywgJ0VETSddLFxyXG4gICAgfSxcclxuICAgIC8vIEFkaWNpb25lIG1haXMgb2JqZXRvcyBhbyBhcnJheSBjb25mb3JtZSBuZWNlc3PDoXJpb1xyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICA8R3JpZCBrZXk9e2luZGV4fSBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fT5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJyZWN0YW5ndWxhclwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD17MjAwfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50aHVtYm5haWwgJiYgKCAvLyBWZXJpZmljYcOnw6NvIHBhcmEgZ2FyYW50aXIgcXVlIGEgbWluaWF0dXJhIG7Do28gc2VqYSBudWxhXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDIwMCwgb2JqZWN0Rml0OiAnY292ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS50aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtdDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJBdmF0YXJcIiBzcmM9e2l0ZW0uYXZhdGFyIHx8IHVuZGVmaW5lZH0gLz4gey8qIEFqdXN0ZSBhcXVpICovfVxyXG4gICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IG1sOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPntpdGVtLnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtgJHtpdGVtLmNoYW5uZWx9IOKAoiAke2l0ZW0uY3JlYXRlZEF0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGFncy5tYXAoKHRhZywgdGFnSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17dGFnSW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtgIyR7dGFnfSBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApKX1cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBZb3VUdWJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgPE1lZGlhIGxvYWRpbmcgLz5cclxuICAgICAgey8qIEFkaWNpb25lIG1haXMgaW5zdMOibmNpYXMgZGUgPE1lZGlhIC8+IGNvbmZvcm1lIG5lY2Vzc8OhcmlvICovfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkdyaWQiLCJCb3giLCJUeXBvZ3JhcGh5IiwiQXZhdGFyIiwiU2tlbGV0b24iLCJNZWRpYSIsInByb3BzIiwibG9hZGluZyIsImdlbmVyYXRlU2tlbGV0b25EYXRhIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwidGh1bWJuYWlsIiwiYXZhdGFyIiwidGl0bGUiLCJjaGFubmVsIiwiY3JlYXRlZEF0IiwidGFncyIsImRhdGEiLCJ2aWV3cyIsImNvbnRhaW5lciIsInNwYWNpbmciLCJtYXAiLCJpdGVtIiwieHMiLCJzbSIsIm1kIiwic3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwidmFyaWFudCIsImhlaWdodCIsImltZyIsInN0eWxlIiwib2JqZWN0Rml0IiwiYWx0Iiwic3JjIiwiYWxpZ25JdGVtcyIsIm10IiwidW5kZWZpbmVkIiwibWwiLCJjb2xvciIsInRhZyIsInRhZ0luZGV4IiwiRnJhZ21lbnQiLCJZb3VUdWJlIiwib3ZlcmZsb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/ProjetosAdicionados.tsx\n"));

/***/ })

});