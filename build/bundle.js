/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__.e(/*! import() */ \"src_style_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./style.css */ \"./src/style.css\"));\r\n__webpack_require__.e(/*! import() */ \"images_icons8-bold-your-text-field-on-document-file-96_png\").then(__webpack_require__.bind(__webpack_require__, /*! ../images/icons8-bold-your-text-field-on-document-file-96.png */ \"./images/icons8-bold-your-text-field-on-document-file-96.png\"));\r\n__webpack_require__.e(/*! import() */ \"images_icons8-italic-96_png\").then(__webpack_require__.bind(__webpack_require__, /*! ../images/icons8-italic-96.png */ \"./images/icons8-italic-96.png\"));\r\n\r\nwindow.onload = () => {\r\n    let display = document.getElementById(\"display\");\r\n\r\n    let divLeft = document.createElement(\"div\");\r\n    let divRight = document.createElement(\"div\");\r\n    var input = document.createElement(\"textArea\");\r\n    let divFeatures = document.createElement(\"div\");\r\n\r\n    let textColorOne = document.createElement(\"div\");\r\n    let textColorTwo = document.createElement(\"div\");\r\n    let textColorThree = document.createElement(\"div\");\r\n    let textColorFour = document.createElement(\"div\");\r\n    let textColorFive = document.createElement(\"div\");\r\n\r\n    let fontSelect = document.createElement(\"select\");\r\n    let select = document.createElement(\"option\");\r\n    let fontOne = document.createElement(\"option\");\r\n    let fontTwo = document.createElement(\"option\");\r\n    let fontThree = document.createElement(\"option\");\r\n    let fontFour = document.createElement(\"option\");\r\n\r\n    let sizeSelect = document.createElement(\"select\");\r\n    let size = document.createElement(\"option\");\r\n    let sizeOne = document.createElement(\"option\");\r\n    let sizeTwo = document.createElement(\"option\");\r\n    let sizeThree = document.createElement(\"option\");\r\n    let sizeFour = document.createElement(\"option\");\r\n\r\n    let textBold = document.createElement(\"img\");\r\n    let textItalic = document.createElement(\"img\");\r\n    let submit = document.createElement(\"button\");\r\n\r\n    divLeft.setAttribute(\"id\", \"divLeft\");\r\n    divRight.setAttribute(\"id\", \"divRight\");\r\n    input.setAttribute(\"id\", \"input\");\r\n    divFeatures.setAttribute(\"id\", \"divFeatures\");\r\n    submit.setAttribute(\"id\", \"submit\");\r\n   \r\n    textColorOne.setAttribute(\"id\", \"textColorOne\");\r\n    textColorTwo.setAttribute(\"id\", \"textColorTwo\");\r\n    textColorThree.setAttribute(\"id\", \"textColorThree\");\r\n    textColorFour.setAttribute(\"id\", \"textColorFour\");\r\n    textColorFive.setAttribute(\"id\", \"textColorFive\");\r\n\r\n    fontSelect.setAttribute(\"id\", \"fontSelect\");\r\n    sizeSelect.setAttribute(\"id\", \"sizeSelect\");\r\n\r\n    textBold.setAttribute(\"id\", \"textBold\");\r\n    textItalic.setAttribute(\"id\", \"textItalic\");\r\n\r\n\r\n    submit.innerHTML = \"Submit\";\r\n    select.innerText = \"Select Font\";\r\n    fontOne.innerText = \"Courier New\";\r\n    fontTwo.innerText = \"Tahoma\";\r\n    fontThree.innerText = \"Georgia\";\r\n    fontFour.innerText = \"Trebuchet\";\r\n    textBold.src = \"../images/icons8-bold-your-text-field-on-document-file-96.png\";\r\n    textItalic.src = \"../images/icons8-italic-96.png\";\r\n    size.innerText = \"size\";\r\n    sizeOne.innerText = \"10\";\r\n    sizeTwo.innerText = \"12\";\r\n    sizeThree.innerText = \"14\";\r\n    sizeFour.innerText = \"16\";\r\n    \r\n\r\n\r\n    var color = \"rgb(145, 139, 139)\";\r\n    textColorOne.onclick = () =>{\r\n        let textColor = document.getElementById(\"input\");\r\n        color = \"#eab595\";\r\n        textColor.style.color = \"#eab595\";\r\n    }\r\n\r\n    textColorTwo.onclick = () =>{\r\n        let textColor = document.getElementById(\"input\");\r\n        color = \"#d87f81\";\r\n        textColor.style.color = \"#d87f81\";\r\n    }\r\n\r\n    textColorThree.onclick = () =>{\r\n        let textColor = document.getElementById(\"input\");\r\n        color = \"#ae6378\";\r\n        textColor.style.color = \"#ae6378\";\r\n    }\r\n\r\n    textColorFour.onclick = () =>{\r\n        let textColor = document.getElementById(\"input\");\r\n        color = \"#79616f\";\r\n        textColor.style.color = \"#79616f\";\r\n    }\r\n\r\n    textColorFive.onclick = () =>{\r\n        let textColor = document.getElementById(\"input\");\r\n        color = \"#7e9680\";\r\n        textColor.style.color = \"#7e9680\";\r\n    }\r\n\r\n\r\n\r\n   var font = \"Roboto\";\r\n   fontSelect.onclick = () => {\r\n\r\n    if(fontOne.selected)\r\n    {\r\n        let textFont = document.getElementById(\"input\");\r\n        textFont.style.fontFamily = \"Courier New\";\r\n        font = \"Courier New\";\r\n    }\r\n    if(fontTwo.selected)\r\n    {\r\n        let textFont = document.getElementById(\"input\");\r\n        textFont.style.fontFamily = \"Tahoma\";\r\n        font = \"Tahoma\";\r\n    }\r\n    if(fontThree.selected)\r\n    {\r\n        let textFont = document.getElementById(\"input\");\r\n        textFont.style.fontFamily = \"Georgia\";\r\n        font = \"Georgia\";\r\n    }\r\n    if(fontFour.selected)\r\n    {\r\n        let textFont = document.getElementById(\"input\");\r\n        textFont.style.fontFamily = \"Trebuchet MS\";\r\n        font = \"Trebuchet MS\";\r\n    }\r\n   }\r\n\r\n\r\n\r\n   var Size = \"10px\";\r\n   sizeSelect.onclick = () => {\r\n\r\n    if(sizeOne.selected)\r\n    {\r\n        let textsize = document.getElementById(\"input\");\r\n        textsize.style.fontSize = \"15px\";\r\n        Size = \"15px\";\r\n    }\r\n    if(sizeTwo.selected)\r\n    {\r\n        let textsize = document.getElementById(\"input\");\r\n        textsize.style.fontSize = \"20px\";\r\n        Size = \"20px\";\r\n    }\r\n    if(sizeThree.selected)\r\n    {\r\n        let textsize = document.getElementById(\"input\");\r\n        textsize.style.fontSize = \"25px\";\r\n        Size = \"25px\";\r\n    }\r\n    if(sizeFour.selected)\r\n    {\r\n        let textsize = document.getElementById(\"input\");\r\n        textsize.style.fontSize = \"30px\";\r\n        Size = \"30px\";\r\n    }\r\n   }\r\n\r\n\r\n\r\n   var Bold = false;\r\n   textBold.onclick = () => {\r\n       let bold = document.getElementById(\"input\");\r\n       bold.style.fontWeight = \"bold\";\r\n       Bold = true;\r\n   } \r\n\r\n   textBold.addEventListener(\"dblclick\", () =>{\r\n        let bold = document.getElementById(\"input\");\r\n        bold.style.fontWeight = \"400\";\r\n        Bold = false;\r\n   });\r\n    \r\n   var Italic = false;\r\n    textItalic.onclick = () => {\r\n        let italic = document.getElementById(\"input\");\r\n        italic.style.fontStyle = \"italic\";\r\n        Italic = true;\r\n    } \r\n\r\n    textItalic.addEventListener(\"dblclick\", () =>{\r\n        let bold = document.getElementById(\"input\");\r\n        bold.style.fontStyle = \"normal\";\r\n        Italic = false;\r\n       });\r\n\r\n      \r\n\r\n    submit.onclick = () => {\r\n        console.log(input.value, color, font, Size, Bold, Italic);\r\n        let data = {\r\n            \"value\": input.value,\r\n            \"color\": color,\r\n            \"font\": font,\r\n            \"size\": Size,\r\n            \"bold\": Bold,\r\n            \"italic\": Italic\r\n        }\r\n        appendNotes(data);\r\n      }\r\n\r\n    sizeSelect.append(size, sizeOne, sizeTwo, sizeThree, sizeFour)\r\n    fontSelect.append(select, fontOne, fontTwo, fontThree, fontFour);\r\n    divFeatures.append(textColorOne, textColorTwo, textColorThree, textColorFour, \r\n    textColorFive, fontSelect, sizeSelect, textBold, textItalic, submit);\r\n    divRight.append(input, divFeatures);\r\n    display.append(divLeft, divRight);\r\n}\r\n\r\n\r\nif(localStorage.getItem(\"notes\")  === null)\r\n    {\r\n        localStorage.setItem(\"notes\", JSON.stringify([]));\r\n    }\r\n\r\n\r\n    function appendNotes(data){\r\n\r\n        divLeft.innerHTML = null;\r\n\r\n        let note = JSON.parse(localStorage.getItem(\"notes\"));\r\n        note.push(data);\r\n        localStorage.setItem(\"notes\", JSON.stringify(note));\r\n\r\n        \r\n       note.forEach(function(item){\r\n            let entry = document.createElement(\"div\");\r\n            let title = document.createElement(\"p\");\r\n\r\n            entry.setAttribute(\"id\", \"entry\");\r\n            title.setAttribute(\"id\", \"entryTitle\");\r\n\r\n            title.innerHTML = item.value;\r\n            entry.style.backgroundColor = item.color;\r\n\r\n            entry.onclick = () => {\r\n                showNote(item)\r\n            }\r\n\r\n            entry.append(title);\r\n            divLeft.append(entry);\r\n            document.getElementById(\"input\").value = null;\r\n       });\r\n       \r\n    }\r\n\r\n    function showNote(item){\r\n        let input = document.getElementById(\"input\");\r\n\r\n        input.value = item.value;\r\n        input.style.color = item.color;\r\n        input.style.fontFamily = item.font;\r\n        input.style.fontSize = item.size;\r\n        if(item.bold)\r\n        {\r\n            input.style.fontWeight = \"700px\";\r\n        }\r\n        else\r\n        {\r\n            input.style.fontWeight = \"400px\";\r\n        }\r\n\r\n        if(item.italic)\r\n        {\r\n            input.style.fontStyle = \"italic\";\r\n        }\r\n        else\r\n        {\r\n            input.style.fontStyle = \"normal\";\r\n        }\r\n     }\r\n\r\n\r\n//      Today's todo list:\r\n// - finish react assignment 2\r\n// - watch DSA lectures again\r\n// - solve contest questions\r\n// - workout\n\n//# sourceURL=webpack://untangle/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "untangle:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkuntangle"] = self["webpackChunkuntangle"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;