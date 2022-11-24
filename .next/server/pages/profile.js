/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/profile";
exports.ids = ["pages/profile"];
exports.modules = {

/***/ "./styles/profile.module.css":
/*!***********************************!*\
  !*** ./styles/profile.module.css ***!
  \***********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"profileContainer\": \"profile_profileContainer__lQtP_\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvcHJvZmlsZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRlbXBsYXRlLy4vc3R5bGVzL3Byb2ZpbGUubW9kdWxlLmNzcz9kMWUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByb2ZpbGVDb250YWluZXJcIjogXCJwcm9maWxlX3Byb2ZpbGVDb250YWluZXJfX2xRdFBfXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/profile.module.css\n");

/***/ }),

/***/ "./components/Profile.js":
/*!*******************************!*\
  !*** ./components/Profile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Profile)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/profile.module.css */ \"./styles/profile.module.css\");\n/* harmony import */ var _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_profile_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction Profile({ setIsConnected  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { 0: tweet , 1: setTweet  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleClickTweet = ()=>{\n        // console.log(\"couille\");\n        fetch(\"http://localhost:3000/tweets\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                tweet: tweet\n            })\n        }).then((res)=>res.json()\n        ).then((data)=>{\n            setTweet(\"\");\n        });\n    };\n    const handleLogout = ()=>{\n        dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_3__.logout)());\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_profile_module_css__WEBPACK_IMPORTED_MODULE_5___default().profileContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"ICON//\"\n                    }, void 0, false, {\n                        fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/components/Profile.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"NOM + ICONE + @username\"\n                    }, void 0, false, {\n                        fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/components/Profile.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleLogout()\n                    }, void 0, false, {\n                        fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/components/Profile.js\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/components/Profile.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/components/Profile.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"What's on my mind...\",\n                        onChange: (e)=>setTweet(e.target.value)\n                        ,\n                        value: tweet\n                    }, void 0, false, {\n                        fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/components/Profile.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleClickTweet()\n                        ,\n                        children: \"Tweety\"\n                    }, void 0, false, {\n                        fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/components/Profile.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"COMPOSANTS tweets etc...\"\n                    }, void 0, false, {\n                        fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/components/Profile.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/components/Profile.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Trends\"\n                    }, void 0, false, {\n                        fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/components/Profile.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"COMPOSANTS hashtag\"\n                    }, void 0, false, {\n                        fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/components/Profile.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/components/Profile.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/components/Profile.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBa0Q7QUFDcEI7QUFDVTtBQUNDO0FBQ0Y7QUFFeEIsU0FBU0ssT0FBTyxDQUFDLEVBQUNDLGNBQWMsR0FBQyxFQUFHO0lBQy9DLE1BQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUMxQixNQUFNSSxRQUFRLEdBQUdOLHdEQUFXLEVBQUU7SUFDOUIsTUFBTSxFQVRWLEdBU1dPLEtBQUssR0FUaEIsR0FTa0JDLFFBQVEsTUFBSVQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFdEMsTUFBTVUsZ0JBQWdCLEdBQUcsSUFBTTtRQUMzQiwwQkFBMEI7UUFDMUJDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRTtZQUNsQ0MsTUFBTSxFQUFFLE1BQU07WUFDZEMsT0FBTyxFQUFFO2dCQUFFLGNBQWMsRUFBRSxrQkFBa0I7YUFBQztZQUM5Q0MsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFBRVIsS0FBSyxFQUFFQSxLQUFLO2FBQUUsQ0FBQztTQUN6QyxDQUFDLENBQUNTLElBQUksQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTtRQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQ0csQ0FBQUEsSUFBSSxHQUFJO1lBQ1ZYLFFBQVEsQ0FBQyxFQUFFLENBQUM7U0FDZixDQUFDO0tBRUw7SUFFRCxNQUFNWSxZQUFZLEdBQUcsSUFBTTtRQUN2QmQsUUFBUSxDQUFDTCxzREFBTSxFQUFFLENBQUM7UUFDbEJJLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQyxHQUFHLENBQUM7S0FDbkI7SUFDSCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUV6QixvRkFBdUI7OzBCQUNuQyw4REFBQ3dCLEtBQUc7O2tDQUNBLDhEQUFDRyxHQUFDO2tDQUFDLFFBQU07Ozs7OzRCQUFJO2tDQUNiLDhEQUFDQSxHQUFDO2tDQUFDLHlCQUF1Qjs7Ozs7NEJBQUk7a0NBQzlCLDhEQUFDQyxRQUFNO3dCQUFDQyxPQUFPLEVBQUUsSUFBTVAsWUFBWSxFQUFFOzs7Ozs0QkFBRzs7Ozs7O29CQUN0QzswQkFDTiw4REFBQ0UsS0FBRzs7a0NBQ0EsOERBQUNNLElBQUU7a0NBQUMsTUFBSTs7Ozs7NEJBQUs7a0NBQ2IsOERBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDQyxXQUFXLEVBQUMsc0JBQXNCO3dCQUFDQyxRQUFRLEVBQUUsQ0FBQ0MsQ0FBQyxHQUFLekIsUUFBUSxDQUFDeUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQzt3QkFBQTt3QkFBRUEsS0FBSyxFQUFFNUIsS0FBSzs7Ozs7NEJBQUc7a0NBQ2hILDhEQUFDbUIsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFLElBQU1sQixnQkFBZ0IsRUFBRTt3QkFBQTtrQ0FBRSxRQUFNOzs7Ozs0QkFBUztrQ0FDMUQsOERBQUNhLEtBQUc7a0NBQUMsMEJBRUw7Ozs7OzRCQUFNOzs7Ozs7b0JBQ0o7MEJBQ04sOERBQUNBLEtBQUc7O2tDQUNBLDhEQUFDTSxJQUFFO2tDQUFDLFFBQU07Ozs7OzRCQUFLO2tDQUNmLDhEQUFDTixLQUFHO2tDQUFDLG9CQUFrQjs7Ozs7NEJBQU07Ozs7OztvQkFDM0I7Ozs7OztZQUNKLENBQ047Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10ZW1wbGF0ZS8uL2NvbXBvbmVudHMvUHJvZmlsZS5qcz82NTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3Byb2ZpbGUubW9kdWxlLmNzcyc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSh7c2V0SXNDb25uZWN0ZWR9ICkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gICAgY29uc3QgW3R3ZWV0LCBzZXRUd2VldF0gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrVHdlZXQgPSAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY291aWxsZVwiKTtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdHdlZXRzXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdHdlZXQ6IHR3ZWV0IH0pXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgc2V0VHdlZXQoJycpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2gobG9nb3V0KCkpXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29udGFpbmVyfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPklDT04vLzwvcD5cbiAgICAgICAgICAgIDxwPk5PTSArIElDT05FICsgQHVzZXJuYW1lPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2dvdXQoKX0vPlxuICAgICAgICA8L2Rpdj4gICBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5Ib21lPC9oMj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiV2hhdCdzIG9uIG15IG1pbmQuLi5cIiBvbkNoYW5nZT17KGUpID0+IHNldFR3ZWV0KGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e3R3ZWV0fS8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrVHdlZXQoKX0+VHdlZXR5PC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIENPTVBPU0FOVFMgdHdlZXRzIGV0Yy4uLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgIFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPlRyZW5kczwvaDI+XG4gICAgICAgICAgICA8ZGl2PkNPTVBPU0FOVFMgaGFzaHRhZzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJsb2dvdXQiLCJ1c2VSb3V0ZXIiLCJQcm9maWxlIiwic2V0SXNDb25uZWN0ZWQiLCJyb3V0ZXIiLCJkaXNwYXRjaCIsInR3ZWV0Iiwic2V0VHdlZXQiLCJoYW5kbGVDbGlja1R3ZWV0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJoYW5kbGVMb2dvdXQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZmlsZUNvbnRhaW5lciIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Profile.js\n");

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Profile */ \"./components/Profile.js\");\n\n\nfunction profile() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/pages/profile.js\",\n        lineNumber: 4,\n        columnNumber: 12\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUE0QztBQUU1QyxTQUFTQyxPQUFPLEdBQUc7SUFDZixxQkFBTyw4REFBQ0QsMkRBQU87Ozs7WUFBRztDQUNyQjtBQUVELGlFQUFlQyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRlbXBsYXRlLy4vcGFnZXMvcHJvZmlsZS5qcz8wOGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGVcIjtcblxuZnVuY3Rpb24gcHJvZmlsZSgpIHtcbiAgICByZXR1cm4gPFByb2ZpbGUgLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZmlsZSJdLCJuYW1lcyI6WyJQcm9maWxlIiwicHJvZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    value: {\n        token: null,\n        username: null\n    }\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        login: (state, action)=>{\n            state.value.token = action.payload.token;\n            state.value.username = action.payload.username;\n        },\n        logout: (state)=>{\n            state.value.token = null;\n            state.value.username = null;\n        }\n    }\n});\nconst { login , logout  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxZQUFZLEdBQUc7SUFDbkJDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUsSUFBSTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtLQUFFO0NBQ3ZDO0FBRU0sTUFBTUMsU0FBUyxHQUFHTCw2REFBVyxDQUFDO0lBQ2pDTSxJQUFJLEVBQUUsTUFBTTtJQUNaTCxZQUFZO0lBQ1pNLFFBQVEsRUFBRTtRQUNSQyxLQUFLLEVBQUUsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDeEJELEtBQUssQ0FBQ1AsS0FBSyxDQUFDQyxLQUFLLEdBQUdPLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDUixLQUFLLENBQUM7WUFDekNNLEtBQUssQ0FBQ1AsS0FBSyxDQUFDRSxRQUFRLEdBQUdNLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDUCxRQUFRLENBQUM7U0FDaEQ7UUFDRFEsTUFBTSxFQUFFLENBQUNILEtBQUssR0FBSztZQUNqQkEsS0FBSyxDQUFDUCxLQUFLLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDekJNLEtBQUssQ0FBQ1AsS0FBSyxDQUFDRSxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSSxNQUFNLEVBQUVJLEtBQUssR0FBRUksTUFBTSxHQUFFLEdBQUdQLFNBQVMsQ0FBQ1EsT0FBTyxDQUFDO0FBQ25ELGlFQUFlUixTQUFTLENBQUNTLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10ZW1wbGF0ZS8uL3JlZHVjZXJzL3VzZXIuanM/MGRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHZhbHVlOiB7IHRva2VuOiBudWxsLCB1c2VybmFtZTogbnVsbCB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAndXNlcicsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICBsb2dpbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUudmFsdWUudG9rZW4gPSBhY3Rpb24ucGF5bG9hZC50b2tlbjtcbiAgICAgICAgc3RhdGUudmFsdWUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZC51c2VybmFtZTtcbiAgICAgIH0sXG4gICAgICBsb2dvdXQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS52YWx1ZS50b2tlbiA9IG51bGw7XG4gICAgICAgIHN0YXRlLnZhbHVlLnVzZXJuYW1lID0gbnVsbDtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4gIFxuICBleHBvcnQgY29uc3QgeyBsb2dpbiwgbG9nb3V0IH0gPSB1c2VyU2xpY2UuYWN0aW9ucztcbiAgZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJ0b2tlbiIsInVzZXJuYW1lIiwidXNlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwibG9naW4iLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJsb2dvdXQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/profile.js"));
module.exports = __webpack_exports__;

})();