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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var _reducers_tweet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/tweet */ \"./reducers/tweet.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nconst reducers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.combineReducers)({\n    user: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    tweet: _reducers_tweet__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\nconst persistConfig = {\n    key: \"morningnews\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_9___default())\n};\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.configureStore)({\n    reducer: (0,redux_persist__WEBPACK_IMPORTED_MODULE_7__.persistReducer)(persistConfig, reducers),\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: false\n        })\n});\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_7__.persistStore)(store);\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__.PersistGate, {\n            persistor: persistor,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"HackaTweet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\pages\\\\_app.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\pages\\\\_app.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gwen\\\\Desktop\\\\hackatweet\\\\hackatweet-frontend\\\\pages\\\\_app.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNGO0FBRVU7QUFDSDtBQUNDO0FBQzhCO0FBQ047QUFDQztBQUNkO0FBRWhELE1BQU1VLFFBQVEsR0FBR04saUVBQWUsQ0FBQztJQUFFRixJQUFJO0lBQUVDLEtBQUs7Q0FBRSxDQUFDO0FBQ2pELE1BQU1RLGFBQWEsR0FBRztJQUFFQyxHQUFHLEVBQUUsYUFBYTtJQUFFSCxPQUFPO0NBQUU7QUFFckQsTUFBTUksS0FBSyxHQUFHUixnRUFBYyxDQUFDO0lBQzNCUyxPQUFPLEVBQUVQLDZEQUFjLENBQUNJLGFBQWEsRUFBRUQsUUFBUSxDQUFDO0lBQ2hESyxVQUFVLEVBQUUsQ0FBQ0Msb0JBQW9CLEdBQUtBLG9CQUFvQixDQUFDO1lBQUVDLGlCQUFpQixFQUFFLEtBQUs7U0FBRSxDQUFDO0NBQ3hGLENBQUM7QUFFRixNQUFNQyxTQUFTLEdBQUdaLDJEQUFZLENBQUNPLEtBQUssQ0FBQztBQUV0QyxTQUFTTSxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ3BCLGlEQUFRO1FBQUNZLEtBQUssRUFBRUEsS0FBSztrQkFDcEIsNEVBQUNMLHdFQUFXO1lBQUNVLFNBQVMsRUFBRUEsU0FBUzs7OEJBQy9CLDhEQUFDbEIsa0RBQUk7OEJBQ0gsNEVBQUNzQixPQUFLO2tDQUFDLFlBQVU7Ozs7OzRCQUFROzs7Ozt3QkFDcEI7OEJBQ1AsOERBQUNGLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7OztnQkFDaEI7Ozs7O1lBQ0wsQ0FDWDtDQUNIO0FBRUQsaUVBQWVGLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10ZW1wbGF0ZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB0d2VldCBmcm9tICcuLi9yZWR1Y2Vycy90d2VldCdcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XHJcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xyXG5cclxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoeyB1c2VyLCB0d2VldCB9KTtcclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHsga2V5OiAnbW9ybmluZ25ld3MnLCBzdG9yYWdlIH07XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VycyksXHJcbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PiBnZXREZWZhdWx0TWlkZGxld2FyZSh7IHNlcmlhbGl6YWJsZUNoZWNrOiBmYWxzZSB9KSxcclxuIH0pO1xyXG5cclxuIGNvbnN0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XHJcblxyXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8UGVyc2lzdEdhdGUgcGVyc2lzdG9yPXtwZXJzaXN0b3J9PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkhhY2thVHdlZXQ8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUGVyc2lzdEdhdGU+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJQcm92aWRlciIsInVzZXIiLCJ0d2VldCIsImNvbWJpbmVSZWR1Y2VycyIsImNvbmZpZ3VyZVN0b3JlIiwicGVyc2lzdFN0b3JlIiwicGVyc2lzdFJlZHVjZXIiLCJQZXJzaXN0R2F0ZSIsInN0b3JhZ2UiLCJyZWR1Y2VycyIsInBlcnNpc3RDb25maWciLCJrZXkiLCJzdG9yZSIsInJlZHVjZXIiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJzZXJpYWxpemFibGVDaGVjayIsInBlcnNpc3RvciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/tweet.js":
/*!***************************!*\
  !*** ./reducers/tweet.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addAllTweets\": () => (/* binding */ addAllTweets),\n/* harmony export */   \"addTweet\": () => (/* binding */ addTweet),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"tweetSlice\": () => (/* binding */ tweetSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    value: []\n};\nconst tweetSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tweet\",\n    initialState,\n    reducers: {\n        addTweet: (state, action)=>{\n            //   console.log('payload', action.payload);\n            state.value.push(action.payload);\n        },\n        addAllTweets: (state, action)=>{\n            state.value = action.payload;\n        }\n    }\n});\nconst { addTweet , addAllTweets  } = tweetSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tweetSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy90d2VldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsWUFBWSxHQUFHO0lBQ25CQyxLQUFLLEVBQUUsRUFBRTtDQUNWO0FBRU0sTUFBTUMsVUFBVSxHQUFHSCw2REFBVyxDQUFDO0lBQ3BDSSxJQUFJLEVBQUUsT0FBTztJQUNiSCxZQUFZO0lBQ1pJLFFBQVEsRUFBRTtRQUNSQyxRQUFRLEVBQUUsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDN0IsNENBQTRDO1lBQzFDRCxLQUFLLENBQUNMLEtBQUssQ0FBQ08sSUFBSSxDQUFDRCxNQUFNLENBQUNFLE9BQU8sQ0FBQyxDQUFDO1NBQ2xDO1FBQ0RDLFlBQVksRUFBRSxDQUFDSixLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUMvQkQsS0FBSyxDQUFDTCxLQUFLLEdBQUdNLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDO1NBQzlCO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSSxNQUFNLEVBQUVKLFFBQVEsR0FBRUssWUFBWSxHQUFFLEdBQUdSLFVBQVUsQ0FBQ1MsT0FBTyxDQUFDO0FBQzdELGlFQUFlVCxVQUFVLENBQUNVLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10ZW1wbGF0ZS8uL3JlZHVjZXJzL3R3ZWV0LmpzP2I5YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB2YWx1ZTogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdHdlZXRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAndHdlZXQnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYWRkVHdlZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdwYXlsb2FkJywgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICBzdGF0ZS52YWx1ZS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgICBhZGRBbGxUd2VldHM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnZhbHVlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgYWRkVHdlZXQsIGFkZEFsbFR3ZWV0cyB9ID0gdHdlZXRTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCB0d2VldFNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwidHdlZXRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZFR3ZWV0Iiwic3RhdGUiLCJhY3Rpb24iLCJwdXNoIiwicGF5bG9hZCIsImFkZEFsbFR3ZWV0cyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/tweet.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    value: {\n        token: null,\n        username: null,\n        firstname: null\n    }\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        login: (state, action)=>{\n            state.value.firstname = action.payload.firstname;\n            state.value.token = action.payload.token;\n            state.value.username = action.payload.username;\n        },\n        logout: (state)=>{\n            state.value.firstname = null;\n            state.value.token = null;\n            state.value.username = null;\n        }\n    }\n});\nconst { login , logout  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxZQUFZLEdBQUc7SUFDbkJDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUsSUFBSTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFQyxTQUFTLEVBQUUsSUFBSTtLQUFFO0NBQ3hEO0FBRU0sTUFBTUMsU0FBUyxHQUFHTiw2REFBVyxDQUFDO0lBQ2pDTyxJQUFJLEVBQUUsTUFBTTtJQUNaTixZQUFZO0lBQ1pPLFFBQVEsRUFBRTtRQUNSQyxLQUFLLEVBQUUsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDeEJELEtBQUssQ0FBQ1IsS0FBSyxDQUFDRyxTQUFTLEdBQUdNLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDUCxTQUFTO1lBQ2hESyxLQUFLLENBQUNSLEtBQUssQ0FBQ0MsS0FBSyxHQUFHUSxNQUFNLENBQUNDLE9BQU8sQ0FBQ1QsS0FBSyxDQUFDO1lBQ3pDTyxLQUFLLENBQUNSLEtBQUssQ0FBQ0UsUUFBUSxHQUFHTyxNQUFNLENBQUNDLE9BQU8sQ0FBQ1IsUUFBUSxDQUFDO1NBQ2hEO1FBQ0RTLE1BQU0sRUFBRSxDQUFDSCxLQUFLLEdBQUs7WUFDakJBLEtBQUssQ0FBQ1IsS0FBSyxDQUFDRyxTQUFTLEdBQUcsSUFBSTtZQUM1QkssS0FBSyxDQUFDUixLQUFLLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDekJPLEtBQUssQ0FBQ1IsS0FBSyxDQUFDRSxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSSxNQUFNLEVBQUVLLEtBQUssR0FBRUksTUFBTSxHQUFFLEdBQUdQLFNBQVMsQ0FBQ1EsT0FBTyxDQUFDO0FBQ25ELGlFQUFlUixTQUFTLENBQUNTLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10ZW1wbGF0ZS8uL3JlZHVjZXJzL3VzZXIuanM/MGRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHZhbHVlOiB7IHRva2VuOiBudWxsLCB1c2VybmFtZTogbnVsbCwgZmlyc3RuYW1lOiBudWxsIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3VzZXInLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgbG9naW46IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3RhdGUudmFsdWUuZmlyc3RuYW1lID0gYWN0aW9uLnBheWxvYWQuZmlyc3RuYW1lXHJcbiAgICAgICAgc3RhdGUudmFsdWUudG9rZW4gPSBhY3Rpb24ucGF5bG9hZC50b2tlbjtcclxuICAgICAgICBzdGF0ZS52YWx1ZS51c2VybmFtZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJuYW1lO1xyXG4gICAgICB9LFxyXG4gICAgICBsb2dvdXQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLnZhbHVlLmZpcnN0bmFtZSA9IG51bGxcclxuICAgICAgICBzdGF0ZS52YWx1ZS50b2tlbiA9IG51bGw7XHJcbiAgICAgICAgc3RhdGUudmFsdWUudXNlcm5hbWUgPSBudWxsO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuICBcclxuICBleHBvcnQgY29uc3QgeyBsb2dpbiwgbG9nb3V0IH0gPSB1c2VyU2xpY2UuYWN0aW9ucztcclxuICBleHBvcnQgZGVmYXVsdCB1c2VyU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsInRva2VuIiwidXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJ1c2VyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJsb2dpbiIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImxvZ291dCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

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