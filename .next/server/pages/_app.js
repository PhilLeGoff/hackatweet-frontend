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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var _reducers_tweet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/tweet */ \"./reducers/tweet.js\");\n/* harmony import */ var _reducers_trend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/trend */ \"./reducers/trend.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nconst reducers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__.combineReducers)({\n    user: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    tweet: _reducers_tweet__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    trend: _reducers_trend__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n});\nconst persistConfig = {\n    key: \"morningnews\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_10___default())\n};\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__.configureStore)({\n    reducer: (0,redux_persist__WEBPACK_IMPORTED_MODULE_8__.persistReducer)(persistConfig, reducers),\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: false\n        })\n});\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_8__.persistStore)(store);\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9__.PersistGate, {\n            persistor: persistor,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"HackaTweet\"\n                    }, void 0, false, {\n                        fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/pages/_app.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/pages/_app.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/pages/_app.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/pages/_app.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/pgoff/hackatweet/hackatweet-frontend/pages/_app.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDRjtBQUVVO0FBQ0g7QUFDQztBQUNBO0FBQzhCO0FBQ047QUFDQztBQUNkO0FBRWhELE1BQU1XLFFBQVEsR0FBR04saUVBQWUsQ0FBQztJQUFFSCxJQUFJO0lBQUVDLEtBQUs7SUFBRUMsS0FBSztDQUFFLENBQUM7QUFDeEQsTUFBTVEsYUFBYSxHQUFHO0lBQUVDLEdBQUcsRUFBRSxhQUFhO0lBQUVILE9BQU87Q0FBRTtBQUVyRCxNQUFNSSxLQUFLLEdBQUdSLGdFQUFjLENBQUM7SUFDM0JTLE9BQU8sRUFBRVAsNkRBQWMsQ0FBQ0ksYUFBYSxFQUFFRCxRQUFRLENBQUM7SUFDaERLLFVBQVUsRUFBRSxDQUFDQyxvQkFBb0IsR0FBS0Esb0JBQW9CLENBQUM7WUFBRUMsaUJBQWlCLEVBQUUsS0FBSztTQUFFLENBQUM7Q0FDeEYsQ0FBQztBQUVGLE1BQU1DLFNBQVMsR0FBR1osMkRBQVksQ0FBQ08sS0FBSyxDQUFDO0FBRXRDLFNBQVNNLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDckIsaURBQVE7UUFBQ2EsS0FBSyxFQUFFQSxLQUFLO2tCQUNwQiw0RUFBQ0wsd0VBQVc7WUFBQ1UsU0FBUyxFQUFFQSxTQUFTOzs4QkFDL0IsOERBQUNuQixrREFBSTs4QkFDSCw0RUFBQ3VCLE9BQUs7a0NBQUMsWUFBVTs7Ozs7NEJBQVE7Ozs7O3dCQUNwQjs4QkFDUCw4REFBQ0YsU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs7Ozs7O2dCQUNoQjs7Ozs7WUFDTCxDQUNYO0NBQ0g7QUFFRCxpRUFBZUYsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRlbXBsYXRlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHVzZXIgZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XG5pbXBvcnQgdHdlZXQgZnJvbSAnLi4vcmVkdWNlcnMvdHdlZXQnXG5pbXBvcnQgdHJlbmQgZnJvbSAnLi4vcmVkdWNlcnMvdHJlbmQnXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3QnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XG5cbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHsgdXNlciwgdHdlZXQsIHRyZW5kIH0pO1xuY29uc3QgcGVyc2lzdENvbmZpZyA9IHsga2V5OiAnbW9ybmluZ25ld3MnLCBzdG9yYWdlIH07XG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VycyksXG4gIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT4gZ2V0RGVmYXVsdE1pZGRsZXdhcmUoeyBzZXJpYWxpemFibGVDaGVjazogZmFsc2UgfSksXG4gfSk7XG5cbiBjb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8UGVyc2lzdEdhdGUgcGVyc2lzdG9yPXtwZXJzaXN0b3J9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+SGFja2FUd2VldDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9QZXJzaXN0R2F0ZT5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiSGVhZCIsIlByb3ZpZGVyIiwidXNlciIsInR3ZWV0IiwidHJlbmQiLCJjb21iaW5lUmVkdWNlcnMiLCJjb25maWd1cmVTdG9yZSIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwiUGVyc2lzdEdhdGUiLCJzdG9yYWdlIiwicmVkdWNlcnMiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwic3RvcmUiLCJyZWR1Y2VyIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwic2VyaWFsaXphYmxlQ2hlY2siLCJwZXJzaXN0b3IiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/trend.js":
/*!***************************!*\
  !*** ./reducers/trend.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTrend\": () => (/* binding */ addTrend),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"trendSlice\": () => (/* binding */ trendSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    value: []\n};\nconst trendSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"trend\",\n    initialState,\n    reducers: {\n        addTrend: (state, action)=>{\n            console.log(action.payload);\n            if (action.payload) {\n                const arr = action.payload.split(\" \");\n                arr.map((data, i)=>{\n                    console.log(\"strs\", data);\n                    if (data[0] === \"#\") {\n                        console.log(\"found trend\", data);\n                        const hashIndex = state.value.findIndex((trendd)=>trendd.trend === data\n                        );\n                        console.log(hashIndex);\n                        if (hashIndex !== -1) state.value[hashIndex].number = state.value[hashIndex].number + 1;\n                        else state.value.push({\n                            trend: data,\n                            number: 0\n                        });\n                    }\n                });\n            }\n        }\n    }\n});\nconst { addTrend  } = trendSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trendSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy90cmVuZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxZQUFZLEdBQUc7SUFDakJDLEtBQUssRUFBRSxFQUFFO0NBQ1o7QUFFTSxNQUFNQyxVQUFVLEdBQUdILDZEQUFXLENBQUM7SUFDbENJLElBQUksRUFBRSxPQUFPO0lBQ2JILFlBQVk7SUFDWkksUUFBUSxFQUFFO1FBQ05DLFFBQVEsRUFBRSxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDO1lBQzNCLElBQUlILE1BQU0sQ0FBQ0csT0FBTyxFQUFFO2dCQUNwQixNQUFNQyxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0csT0FBTyxDQUFDRSxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUVyQ0QsR0FBRyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEdBQUs7b0JBQ2pCUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVLLElBQUksQ0FBQztvQkFDekIsSUFBSUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTt3QkFDakJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRUssSUFBSSxDQUFDO3dCQUNoQyxNQUFNRSxTQUFTLEdBQUdWLEtBQUssQ0FBQ0wsS0FBSyxDQUFDZ0IsU0FBUyxDQUFDQyxDQUFBQSxNQUFNLEdBQUlBLE1BQU0sQ0FBQ0MsS0FBSyxLQUFLTCxJQUFJO3dCQUFBLENBQUM7d0JBQ3hFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ08sU0FBUyxDQUFDO3dCQUNsQixJQUFJQSxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQ2hCVixLQUFLLENBQUNMLEtBQUssQ0FBQ2UsU0FBUyxDQUFDLENBQUNJLE1BQU0sR0FBR2QsS0FBSyxDQUFDTCxLQUFLLENBQUNlLFNBQVMsQ0FBQyxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxDQUFDOzZCQUVsRWQsS0FBSyxDQUFDTCxLQUFLLENBQUNvQixJQUFJLENBQUM7NEJBQUNGLEtBQUssRUFBRUwsSUFBSTs0QkFBRU0sTUFBTSxFQUFFLENBQUM7eUJBQUMsQ0FBQztxQkFDckQ7aUJBQ0osQ0FBQzthQUNMO1NBQ0E7S0FDSjtDQUNKLENBQUM7QUFFSyxNQUFNLEVBQUVmLFFBQVEsR0FBRSxHQUFHSCxVQUFVLENBQUNvQixPQUFPLENBQUM7QUFDL0MsaUVBQWVwQixVQUFVLENBQUNxQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRlbXBsYXRlLy4vcmVkdWNlcnMvdHJlbmQuanM/YmYzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB2YWx1ZTogW11cbn1cblxuZXhwb3J0IGNvbnN0IHRyZW5kU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ3RyZW5kJyxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgYWRkVHJlbmQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xuICAgICAgICAgICAgY29uc3QgYXJyID0gYWN0aW9uLnBheWxvYWQuc3BsaXQoJyAnKVxuXG4gICAgICAgICAgICBhcnIubWFwKChkYXRhLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0cnMnLCBkYXRhKVxuICAgICAgICAgICAgICAgIGlmIChkYXRhWzBdID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZvdW5kIHRyZW5kJywgZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzaEluZGV4ID0gc3RhdGUudmFsdWUuZmluZEluZGV4KHRyZW5kZCA9PiB0cmVuZGQudHJlbmQgPT09IGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhc2hJbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNoSW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnZhbHVlW2hhc2hJbmRleF0ubnVtYmVyID0gc3RhdGUudmFsdWVbaGFzaEluZGV4XS5udW1iZXIgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS52YWx1ZS5wdXNoKHt0cmVuZDogZGF0YSwgbnVtYmVyOiAwfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgeyBhZGRUcmVuZCB9ID0gdHJlbmRTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgdHJlbmRTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJ0cmVuZFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVHJlbmQiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiYXJyIiwic3BsaXQiLCJtYXAiLCJkYXRhIiwiaSIsImhhc2hJbmRleCIsImZpbmRJbmRleCIsInRyZW5kZCIsInRyZW5kIiwibnVtYmVyIiwicHVzaCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/trend.js\n");

/***/ }),

/***/ "./reducers/tweet.js":
/*!***************************!*\
  !*** ./reducers/tweet.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addAllTweets\": () => (/* binding */ addAllTweets),\n/* harmony export */   \"addTweet\": () => (/* binding */ addTweet),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"incrementLikes\": () => (/* binding */ incrementLikes),\n/* harmony export */   \"removeTweet\": () => (/* binding */ removeTweet),\n/* harmony export */   \"tweetSlice\": () => (/* binding */ tweetSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    value: []\n};\nconst tweetSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tweet\",\n    initialState,\n    reducers: {\n        addTweet: (state, action)=>{\n            console.log(action.payload);\n            state.value.push(action.payload);\n        // state.value.likes.state.push({username: state.value.username, liked: false})\n        },\n        addAllTweets: (state, action)=>{\n            state.value = action.payload;\n        },\n        incrementLikes: (state, action)=>{\n            const likeIndex = state.value.findIndex((e)=>e.tweet === action.payload.tweet\n            );\n            if (likeIndex !== -1) {\n                state.value[likeIndex].likes++;\n            }\n        },\n        removeTweet: (state, action)=>{\n            const tweetIndex = state.value.findIndex((e)=>e.tweet === action.payload\n            );\n            if (tweetIndex !== -1) state.value.splice(tweetIndex, 1);\n        }\n    }\n});\nconst { addTweet , addAllTweets , incrementLikes , removeTweet  } = tweetSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tweetSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy90d2VldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxZQUFZLEdBQUc7SUFDbkJDLEtBQUssRUFBRSxFQUFFO0NBQ1Y7QUFFTSxNQUFNQyxVQUFVLEdBQUdILDZEQUFXLENBQUM7SUFDbENJLElBQUksRUFBRSxPQUFPO0lBQ2JILFlBQVk7SUFDWkksUUFBUSxFQUFFO1FBQ05DLFFBQVEsRUFBRSxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDO1lBQzNCSixLQUFLLENBQUNMLEtBQUssQ0FBQ1UsSUFBSSxDQUFDSixNQUFNLENBQUNHLE9BQU8sQ0FBQztRQUNoQywrRUFBK0U7U0FDbEY7UUFDREUsWUFBWSxFQUFFLENBQUNOLEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQzdCRCxLQUFLLENBQUNMLEtBQUssR0FBR00sTUFBTSxDQUFDRyxPQUFPO1NBQy9CO1FBQ0RHLGNBQWMsRUFBRSxDQUFDUCxLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUMvQixNQUFNTyxTQUFTLEdBQUdSLEtBQUssQ0FBQ0wsS0FBSyxDQUFDYyxTQUFTLENBQUNDLENBQUFBLENBQUMsR0FBSUEsQ0FBQyxDQUFDQyxLQUFLLEtBQUtWLE1BQU0sQ0FBQ0csT0FBTyxDQUFDTyxLQUFLO1lBQUEsQ0FBQztZQUM5RSxJQUFJSCxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2RSLEtBQUssQ0FBQ0wsS0FBSyxDQUFDYSxTQUFTLENBQUMsQ0FBQ0ksS0FBSyxFQUFFLENBQUM7YUFDdEM7U0FDSjtRQUNEQyxXQUFXLEVBQUUsQ0FBQ2IsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDNUIsTUFBTWEsVUFBVSxHQUFHZCxLQUFLLENBQUNMLEtBQUssQ0FBQ2MsU0FBUyxDQUFDQyxDQUFBQSxDQUFDLEdBQUlBLENBQUMsQ0FBQ0MsS0FBSyxLQUFLVixNQUFNLENBQUNHLE9BQU87WUFBQSxDQUFDO1lBQ3pFLElBQUlVLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFDakJkLEtBQUssQ0FBQ0wsS0FBSyxDQUFDb0IsTUFBTSxDQUFDRCxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ3hDO0tBRUo7Q0FDSixDQUFDO0FBRUssTUFBTSxFQUFFZixRQUFRLEdBQUVPLFlBQVksR0FBRUMsY0FBYyxHQUFFTSxXQUFXLEdBQUUsR0FBR2pCLFVBQVUsQ0FBQ29CLE9BQU87QUFDekYsaUVBQWVwQixVQUFVLENBQUNxQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRlbXBsYXRlLy4vcmVkdWNlcnMvdHdlZXQuanM/YjlhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHZhbHVlOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCB0d2VldFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICd0d2VldCcsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIGFkZFR3ZWV0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpXG4gICAgICAgICAgICBzdGF0ZS52YWx1ZS5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgICAgLy8gc3RhdGUudmFsdWUubGlrZXMuc3RhdGUucHVzaCh7dXNlcm5hbWU6IHN0YXRlLnZhbHVlLnVzZXJuYW1lLCBsaWtlZDogZmFsc2V9KVxuICAgICAgICB9LFxuICAgICAgICBhZGRBbGxUd2VldHM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH0sXG4gICAgICAgIGluY3JlbWVudExpa2VzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlrZUluZGV4ID0gc3RhdGUudmFsdWUuZmluZEluZGV4KGUgPT4gZS50d2VldCA9PT0gYWN0aW9uLnBheWxvYWQudHdlZXQpXG4gICAgICAgICAgICBpZiAobGlrZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS52YWx1ZVtsaWtlSW5kZXhdLmxpa2VzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZVR3ZWV0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHdlZXRJbmRleCA9IHN0YXRlLnZhbHVlLmZpbmRJbmRleChlID0+IGUudHdlZXQgPT09IGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgICAgaWYgKHR3ZWV0SW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgIHN0YXRlLnZhbHVlLnNwbGljZSh0d2VldEluZGV4LCAxKVxuICAgICAgICB9XG5cbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgeyBhZGRUd2VldCwgYWRkQWxsVHdlZXRzLCBpbmNyZW1lbnRMaWtlcywgcmVtb3ZlVHdlZXQgfSA9IHR3ZWV0U2xpY2UuYWN0aW9uc1xuZXhwb3J0IGRlZmF1bHQgdHdlZXRTbGljZS5yZWR1Y2VyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsInR3ZWV0U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUd2VldCIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJwdXNoIiwiYWRkQWxsVHdlZXRzIiwiaW5jcmVtZW50TGlrZXMiLCJsaWtlSW5kZXgiLCJmaW5kSW5kZXgiLCJlIiwidHdlZXQiLCJsaWtlcyIsInJlbW92ZVR3ZWV0IiwidHdlZXRJbmRleCIsInNwbGljZSIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/tweet.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    value: {\n        token: null,\n        username: null,\n        firstname: null\n    }\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        login: (state, action)=>{\n            state.value.firstname = action.payload.firstname;\n            state.value.token = action.payload.token;\n            state.value.username = action.payload.username;\n        },\n        logout: (state)=>{\n            state.value.firstname = null;\n            state.value.token = null;\n            state.value.username = null;\n        }\n    }\n});\nconst { login , logout  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxZQUFZLEdBQUc7SUFDbkJDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUsSUFBSTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFQyxTQUFTLEVBQUUsSUFBSTtLQUFFO0NBQ3hEO0FBRU0sTUFBTUMsU0FBUyxHQUFHTiw2REFBVyxDQUFDO0lBQ2pDTyxJQUFJLEVBQUUsTUFBTTtJQUNaTixZQUFZO0lBQ1pPLFFBQVEsRUFBRTtRQUNSQyxLQUFLLEVBQUUsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDeEJELEtBQUssQ0FBQ1IsS0FBSyxDQUFDRyxTQUFTLEdBQUdNLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDUCxTQUFTO1lBQ2hESyxLQUFLLENBQUNSLEtBQUssQ0FBQ0MsS0FBSyxHQUFHUSxNQUFNLENBQUNDLE9BQU8sQ0FBQ1QsS0FBSyxDQUFDO1lBQ3pDTyxLQUFLLENBQUNSLEtBQUssQ0FBQ0UsUUFBUSxHQUFHTyxNQUFNLENBQUNDLE9BQU8sQ0FBQ1IsUUFBUSxDQUFDO1NBQ2hEO1FBQ0RTLE1BQU0sRUFBRSxDQUFDSCxLQUFLLEdBQUs7WUFDakJBLEtBQUssQ0FBQ1IsS0FBSyxDQUFDRyxTQUFTLEdBQUcsSUFBSTtZQUM1QkssS0FBSyxDQUFDUixLQUFLLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDekJPLEtBQUssQ0FBQ1IsS0FBSyxDQUFDRSxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSSxNQUFNLEVBQUVLLEtBQUssR0FBRUksTUFBTSxHQUFFLEdBQUdQLFNBQVMsQ0FBQ1EsT0FBTyxDQUFDO0FBQ25ELGlFQUFlUixTQUFTLENBQUNTLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10ZW1wbGF0ZS8uL3JlZHVjZXJzL3VzZXIuanM/MGRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHZhbHVlOiB7IHRva2VuOiBudWxsLCB1c2VybmFtZTogbnVsbCwgZmlyc3RuYW1lOiBudWxsIH0sXG59O1xuXG5leHBvcnQgY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICd1c2VyJyxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgIGxvZ2luOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS52YWx1ZS5maXJzdG5hbWUgPSBhY3Rpb24ucGF5bG9hZC5maXJzdG5hbWVcbiAgICAgICAgc3RhdGUudmFsdWUudG9rZW4gPSBhY3Rpb24ucGF5bG9hZC50b2tlbjtcbiAgICAgICAgc3RhdGUudmFsdWUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZC51c2VybmFtZTtcbiAgICAgIH0sXG4gICAgICBsb2dvdXQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS52YWx1ZS5maXJzdG5hbWUgPSBudWxsXG4gICAgICAgIHN0YXRlLnZhbHVlLnRva2VuID0gbnVsbDtcbiAgICAgICAgc3RhdGUudmFsdWUudXNlcm5hbWUgPSBudWxsO1xuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgXG4gIGV4cG9ydCBjb25zdCB7IGxvZ2luLCBsb2dvdXQgfSA9IHVzZXJTbGljZS5hY3Rpb25zO1xuICBleHBvcnQgZGVmYXVsdCB1c2VyU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsInRva2VuIiwidXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJ1c2VyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJsb2dpbiIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImxvZ291dCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();