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

/***/ "./components/Profile.js":
/*!*******************************!*\
  !*** ./components/Profile.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/profile.module.css */ \"./styles/profile.module.css\");\n/* harmony import */ var _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_profile_module_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\nvar _s = $RefreshSig$();\nfunction Profile() {\n    _s();\n    var ref = _slicedToArray(useState(\"\"), 2), tweet = ref[0], setTweet = ref[1];\n    var handleClickTweet = function() {\n        // console.log(\"couille\");\n        fetch(\"http://localhost:3000/tweets\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                tweet: tweet\n            })\n        }).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            console.log(data);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_profile_module_css__WEBPACK_IMPORTED_MODULE_1___default().profileContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"ICON//\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\components\\\\Profile.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"NOM + ICONE + @username\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\components\\\\Profile.js\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\components\\\\Profile.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\components\\\\Profile.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"What's on my mind...\",\n                        onChange: function(e) {\n                            return setTweet(e.target.value);\n                        },\n                        value: tweet\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\components\\\\Profile.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return handleClickTweet();\n                        },\n                        children: \"Tweety\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\components\\\\Profile.js\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"COMPOSANTS tweets etc...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\components\\\\Profile.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\components\\\\Profile.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Trends\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\components\\\\Profile.js\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"COMPOSANTS hashtag\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\components\\\\Profile.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\components\\\\Profile.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\components\\\\Profile.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_s(Profile, \"9meX9sv+8TdUA4mXskFP4y21sD0=\");\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7O0FBRW5DLFNBQVNDLE9BQU8sR0FBRzs7SUFDOUIsSUFBMEJDLEdBQVksa0JBQVpBLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBL0JDLEtBQUssR0FBY0QsR0FBWSxHQUExQixFQUFFRSxRQUFRLEdBQUlGLEdBQVksR0FBaEI7SUFFdEIsSUFBTUcsZ0JBQWdCLEdBQUcsV0FBTTtRQUMzQiwwQkFBMEI7UUFDMUJDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRTtZQUNsQ0MsTUFBTSxFQUFFLE1BQU07WUFDZEMsT0FBTyxFQUFFO2dCQUFFLGNBQWMsRUFBRSxrQkFBa0I7YUFBQztZQUM5Q0MsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFBRVIsS0FBSyxFQUFMQSxLQUFLO2FBQUUsQ0FBQztTQUNsQyxDQUFDLENBQUNTLElBQUksQ0FBQ0MsU0FBQUEsR0FBRzttQkFBSUEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7U0FBQSxDQUFDLENBQ3pCRixJQUFJLENBQUNHLFNBQUFBLElBQUksRUFBSTtZQUNWQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7U0FDckIsQ0FBQztLQUVMO0lBRUgscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFFbkIsb0ZBQXVCOzswQkFDbkMsOERBQUNrQixLQUFHOztrQ0FDQSw4REFBQ0csR0FBQztrQ0FBQyxRQUFNOzs7Ozs0QkFBSTtrQ0FDYiw4REFBQ0EsR0FBQztrQ0FBQyx5QkFBdUI7Ozs7OzRCQUFJOzs7Ozs7b0JBQzVCOzBCQUNOLDhEQUFDSCxLQUFHOztrQ0FDQSw4REFBQ0ksSUFBRTtrQ0FBQyxNQUFJOzs7Ozs0QkFBSztrQ0FDYiw4REFBQ0MsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNDLFdBQVcsRUFBQyxzQkFBc0I7d0JBQUNDLFFBQVEsRUFBRSxTQUFDQyxDQUFDO21DQUFLdkIsUUFBUSxDQUFDdUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQzt5QkFBQTt3QkFBRUEsS0FBSyxFQUFFMUIsS0FBSzs7Ozs7NEJBQUc7a0NBQ2hILDhEQUFDMkIsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNMUIsZ0JBQWdCLEVBQUU7eUJBQUE7a0NBQUUsUUFBTTs7Ozs7NEJBQVM7a0NBQzFELDhEQUFDYSxLQUFHO2tDQUFDLDBCQUVMOzs7Ozs0QkFBTTs7Ozs7O29CQUNKOzBCQUNOLDhEQUFDQSxLQUFHOztrQ0FDQSw4REFBQ0ksSUFBRTtrQ0FBQyxRQUFNOzs7Ozs0QkFBSztrQ0FDZiw4REFBQ0osS0FBRztrQ0FBQyxvQkFBa0I7Ozs7OzRCQUFNOzs7Ozs7b0JBQzNCOzs7Ozs7WUFDSixDQUNOO0NBQ0g7R0FwQ3VCakIsT0FBTztBQUFQQSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZmlsZS5qcz82NTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3Byb2ZpbGUubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gICAgY29uc3QgW3R3ZWV0LCBzZXRUd2VldF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGlja1R3ZWV0ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY291aWxsZVwiKTtcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90d2VldHNcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0d2VldCB9KVxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPklDT04vLzwvcD5cclxuICAgICAgICAgICAgPHA+Tk9NICsgSUNPTkUgKyBAdXNlcm5hbWU8L3A+XHJcbiAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPkhvbWU8L2gyPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIldoYXQncyBvbiBteSBtaW5kLi4uXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRUd2VldChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXt0d2VldH0vPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrVHdlZXQoKX0+VHdlZXR5PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBDT01QT1NBTlRTIHR3ZWV0cyBldGMuLi5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlRyZW5kczwvaDI+XHJcbiAgICAgICAgICAgIDxkaXY+Q09NUE9TQU5UUyBoYXNodGFnPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiUHJvZmlsZSIsInVzZVN0YXRlIiwidHdlZXQiLCJzZXRUd2VldCIsImhhbmRsZUNsaWNrVHdlZXQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9maWxlQ29udGFpbmVyIiwicCIsImgyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Profile.js\n");

/***/ })

});