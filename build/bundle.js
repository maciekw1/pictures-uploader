/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/exif.js":
/*!********************!*\
  !*** ./js/exif.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exif\": () => (/* binding */ exif)\n/* harmony export */ });\nfunction exif(file, placeholder) {\n  console.log(EXIF);\n  EXIF.getData(file, function () {\n    // console.log(EXIF.pretty(this));\n    //prevents throwing error when no exif GPS data is present\n    if (this.exifdata.GPSLatitudeRef) {\n      var convertDMStoDD = function convertDMStoDD(degrees, minutes, seconds, direction) {\n        var dd = degrees + minutes / 60 + seconds / (60 * 60);\n\n        if (direction === \"S\" || direction === \"W\") {\n          dd = dd * -1;\n        } // Don't do anything for N or E\n\n\n        return dd;\n      };\n\n      var latitude = convertDMStoDD(this.exifdata.GPSLatitude[0], this.exifdata.GPSLatitude[1], this.exifdata.GPSLatitude[2], this.exifdata.GPSLatitudeRef).toFixed(6);\n      var longitude = convertDMStoDD(this.exifdata.GPSLongitude[0], this.exifdata.GPSLongitude[1], this.exifdata.GPSLongitude[2], this.exifdata.GPSLongitudeRef).toFixed(6);\n      placeholder.innerHTML += 'GPS Longitude: ' + longitude + '&deg;' + '<br>' + 'GPS Latitude: ' + latitude + '&deg;';\n    } else {\n      placeholder.innerHTML += 'No GPS data found';\n    }\n  });\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/exif.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uploadFiles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploadFiles.js */ \"./js/uploadFiles.js\");\n/* harmony import */ var _uploadBtnMethods_clear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploadBtnMethods/clear.js */ \"./js/uploadBtnMethods/clear.js\");\n/* harmony import */ var _utils_preventAndStopEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/preventAndStopEvent.js */ \"./js/utils/preventAndStopEvent.js\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/style.scss */ \"./sass/style.scss\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nvar fileInput = document.getElementById('fileInput');\nvar fileSelect = document.getElementById('fileSelect');\nvar selectInfo = document.getElementById('selectInfo');\nvar validationError = document.getElementById('error');\nvar selectedFiles = [];\n\nfileSelect.onclick = function (e) {\n  fileInput.click();\n};\n\nfileInput.onchange = function (e) {\n  joinInputAndDrop(fileInput.files);\n};\n\nfileInput.onclick = function () {\n  (0,_uploadBtnMethods_clear_js__WEBPACK_IMPORTED_MODULE_1__.clear)(validationError);\n};\n\nfileSelect.ondragenter = function (e) {\n  (0,_utils_preventAndStopEvent_js__WEBPACK_IMPORTED_MODULE_2__.preventAndStopEvent)(e);\n  document.querySelector('.btn').classList.add('dragover');\n};\n\nfileSelect.ondragleave = function (e) {\n  document.querySelector('.btn').classList.remove('dragover');\n};\n\nfileSelect.ondragover = function (e) {\n  return (0,_utils_preventAndStopEvent_js__WEBPACK_IMPORTED_MODULE_2__.preventAndStopEvent)(e);\n};\n\nfileSelect.ondrop = function (e) {\n  (0,_uploadBtnMethods_clear_js__WEBPACK_IMPORTED_MODULE_1__.clear)(validationError);\n  (0,_utils_preventAndStopEvent_js__WEBPACK_IMPORTED_MODULE_2__.preventAndStopEvent)(e);\n  e.target.classList.remove('dragover');\n  var files = e.dataTransfer.files;\n  joinInputAndDrop(files);\n};\n\ndocument.getElementById(\"uploadButton\").onclick = function () {\n  (0,_uploadFiles_js__WEBPACK_IMPORTED_MODULE_0__.upload)(selectedFiles, selectInfo, validationError, fileInput);\n};\n\nfunction joinInputAndDrop(files) {\n  _toConsumableArray(files).forEach(function (file) {\n    return selectedFiles.push(file);\n  });\n\n  selectInfo.innerText = 'Files selected: ' + selectedFiles.length;\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/main.js?");

/***/ }),

/***/ "./js/uploadBtnMethods/clear.js":
/*!**************************************!*\
  !*** ./js/uploadBtnMethods/clear.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clear\": () => (/* binding */ clear)\n/* harmony export */ });\nfunction clear(validationError, errorFiles, selectInfo) {\n  if (selectInfo) selectInfo.innerText = '';\n  validationError.innerText = '';\n  if (errorFiles) errorFiles.splice(0); //instead of: errorFiles.splice(0, errorFiles.length)\n\n  validationError.style.display = 'none';\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/uploadBtnMethods/clear.js?");

/***/ }),

/***/ "./js/uploadBtnMethods/displayValidationError.js":
/*!*******************************************************!*\
  !*** ./js/uploadBtnMethods/displayValidationError.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _errorMessages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorMessages.js */ \"./js/uploadBtnMethods/errorMessages.js\");\n\n\nvar displayValidationError = function displayValidationError(errorArr, placeToDisplay, selectedFiles) {\n  if (selectedFiles.length === 0) {\n    var error = document.createElement('div');\n    error.classList.add('error');\n    error.innerText = _errorMessages_js__WEBPACK_IMPORTED_MODULE_0__.errorMessages.fileRequired;\n    placeToDisplay.appendChild(error);\n    placeToDisplay.style.display = 'block';\n  }\n\n  errorArr.map(function (file) {\n    var fileInfo = document.createElement('div');\n    var error = document.createElement('div');\n    var container = document.createElement('div');\n    fileInfo.classList.add('file-info');\n    error.classList.add('error');\n    container.classList.add('error-container');\n    fileInfo.innerText = \"File name: \".concat(file.name, \"\\n    File size: \").concat((file.size / 1024 / 1024).toFixed(2), \"MB\\n    File type: \").concat(file.type);\n    error.innerText = \"\".concat(file.size > 1024 * 1024 * 3 ? _errorMessages_js__WEBPACK_IMPORTED_MODULE_0__.errorMessages.fileSize : '', \"\\n             \").concat(!(file.type === 'image/jpeg' || file.type === 'image/jpg') ? _errorMessages_js__WEBPACK_IMPORTED_MODULE_0__.errorMessages.fileType : '', \"\\n    \");\n    placeToDisplay.appendChild(container).appendChild(fileInfo);\n    placeToDisplay.appendChild(container).appendChild(error);\n    placeToDisplay.style.display = 'block';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayValidationError);\n\n//# sourceURL=webpack://pictures_uploader/./js/uploadBtnMethods/displayValidationError.js?");

/***/ }),

/***/ "./js/uploadBtnMethods/errorMessages.js":
/*!**********************************************!*\
  !*** ./js/uploadBtnMethods/errorMessages.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorMessages\": () => (/* binding */ errorMessages)\n/* harmony export */ });\nvar errorMessages = {\n  fileSize: 'File size is too big. Maximum size is 1 MB.',\n  fileType: 'File type is not supported. Supported types are: jpg, jpeg.',\n  fileCount: 'Too many files.',\n  fileRequired: 'Please choose a file.',\n  fileExtension: 'File extension is not supported.'\n};\n\n//# sourceURL=webpack://pictures_uploader/./js/uploadBtnMethods/errorMessages.js?");

/***/ }),

/***/ "./js/uploadBtnMethods/generateList.js":
/*!*********************************************!*\
  !*** ./js/uploadBtnMethods/generateList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateList\": () => (/* binding */ generateList)\n/* harmony export */ });\n/* harmony import */ var _exif_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exif.js */ \"./js/exif.js\");\n\nfunction generateList(filesToDisplay, list) {\n  filesToDisplay.forEach(function (file, idx) {\n    var liEl = document.createElement('li');\n    var idEl = document.createElement('span');\n    var image = document.createElement('img');\n    var tooltipContainer = document.createElement('div');\n    var tooltip = document.createElement('span');\n    var fileDescription = document.createElement('div');\n    var button = document.createElement('button');\n    var container = document.querySelectorAll('.container');\n    liEl.classList.add('list-item', \"list-item-\".concat(idx));\n    idEl.classList.add('id-el');\n    image.classList.add('image');\n    tooltipContainer.classList.add('tooltip');\n    tooltip.classList.add('tooltip-text');\n    button.classList.add('button', \"button-\".concat(idx));\n    fileDescription.classList.add('file-description');\n    image.file = file;\n    image.width = 100;\n    fileDescription.innerText = \"File name: \".concat(file.name, \"\\n    File size: \").concat((file.size / 1024 / 1024).toFixed(2), \"MB\\n    File extension: \").concat(file.name.split('.').pop(), \"\\n    \"); //here goes exif\n\n    /*\n     * exif function has to be called after fileDescription.innerText because it\n     * adds the text about GPS to fileDescription. This exif text would be deleted by another fileDescription.innerText cal\n     * */\n\n    (0,_exif_js__WEBPACK_IMPORTED_MODULE_0__.exif)(file, fileDescription);\n    button.innerText = 'Delete';\n    tooltip.innerText = 'click to enlarge';\n    idEl.textContent = String(idx + 1);\n    liEl.appendChild(idEl);\n    image.appendChild(tooltip);\n    tooltipContainer.appendChild(tooltip);\n    list.appendChild(liEl).appendChild(tooltipContainer).appendChild(image);\n    liEl.appendChild(fileDescription);\n    liEl.appendChild(button);\n    var reader = new FileReader();\n\n    reader.onload = function (aImg) {\n      return function (e) {\n        aImg.src = e.target.result;\n      };\n    }(image);\n\n    reader.readAsDataURL(file);\n\n    image.onclick = function () {\n      image.width = image.width === 100 ? window.innerWidth / 2 : 100; //image.naturalWidth\n\n      for (var el in container) {\n        console.log(el, container);\n        container[el].style.maxWidth = image.width !== 100 ? \"\".concat(window.innerWidth / 1.5 + 300, \"px\") : '560px';\n      }\n    };\n  });\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/uploadBtnMethods/generateList.js?");

/***/ }),

/***/ "./js/uploadBtnMethods/removeListEl.js":
/*!*********************************************!*\
  !*** ./js/uploadBtnMethods/removeListEl.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeListEl\": () => (/* binding */ removeListEl)\n/* harmony export */ });\nfunction removeListEl(list, uploadedFiles) {\n  document.querySelectorAll('.button').forEach(function (button, idx) {\n    button.onclick = function (e) {\n      var id = e.target.classList[1].split('-')[1];\n      list.removeChild(document.querySelector(\".list-item-\".concat(id)));\n      uploadedFiles.splice(parseInt(id), 1);\n      updateId();\n    };\n  });\n\n  function updateId() {\n    document.querySelectorAll('.id-el').forEach(function (idEl, idx) {\n      idEl.textContent = String(idx + 1);\n    });\n  }\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/uploadBtnMethods/removeListEl.js?");

/***/ }),

/***/ "./js/uploadBtnMethods/uploadOnCondition.js":
/*!**************************************************!*\
  !*** ./js/uploadBtnMethods/uploadOnCondition.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"uploadOnCondition\": () => (/* binding */ uploadOnCondition)\n/* harmony export */ });\nfunction uploadOnCondition(fileList, uploadedFiles, errorFiles) {\n  Object.keys(fileList).forEach(function (key) {\n    if (fileList[key].size > 1024 * 1024 * 3 || fileList[key].type !== 'image/jpeg') {\n      errorFiles.push(fileList[key]);\n      return;\n    }\n\n    uploadedFiles.push(fileList[key]);\n  });\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/uploadBtnMethods/uploadOnCondition.js?");

/***/ }),

/***/ "./js/uploadFiles.js":
/*!***************************!*\
  !*** ./js/uploadFiles.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"upload\": () => (/* binding */ upload)\n/* harmony export */ });\n/* harmony import */ var _uploadBtnMethods_clear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploadBtnMethods/clear.js */ \"./js/uploadBtnMethods/clear.js\");\n/* harmony import */ var _uploadBtnMethods_displayValidationError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploadBtnMethods/displayValidationError.js */ \"./js/uploadBtnMethods/displayValidationError.js\");\n/* harmony import */ var _uploadBtnMethods_generateList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uploadBtnMethods/generateList.js */ \"./js/uploadBtnMethods/generateList.js\");\n/* harmony import */ var _uploadBtnMethods_removeListEl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uploadBtnMethods/removeListEl.js */ \"./js/uploadBtnMethods/removeListEl.js\");\n/* harmony import */ var _uploadBtnMethods_uploadOnCondition_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uploadBtnMethods/uploadOnCondition.js */ \"./js/uploadBtnMethods/uploadOnCondition.js\");\n\n\n\n\n\nvar list = document.querySelector('#list');\nvar uploadedFiles = [];\nfunction upload(selectedFiles, selectInfo, validationError, fileInput) {\n  var errorFiles = []; //clears error field to prevent multiple error messages after multiple upload attempts\n\n  (0,_uploadBtnMethods_clear_js__WEBPACK_IMPORTED_MODULE_0__.clear)(validationError, errorFiles, selectInfo);\n  (0,_uploadBtnMethods_uploadOnCondition_js__WEBPACK_IMPORTED_MODULE_4__.uploadOnCondition)(selectedFiles, uploadedFiles, errorFiles);\n  (0,_uploadBtnMethods_displayValidationError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(errorFiles, validationError, selectedFiles); //clears rendered list to prevent duplicates\n\n  list.innerHTML = '';\n  (0,_uploadBtnMethods_generateList_js__WEBPACK_IMPORTED_MODULE_2__.generateList)(uploadedFiles, list);\n  (0,_uploadBtnMethods_removeListEl_js__WEBPACK_IMPORTED_MODULE_3__.removeListEl)(list, uploadedFiles); // clears input field after upload to prevent multiple uploads of the same files\n\n  fileInput.value = '';\n  selectedFiles.length = 0;\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/uploadFiles.js?");

/***/ }),

/***/ "./js/utils/preventAndStopEvent.js":
/*!*****************************************!*\
  !*** ./js/utils/preventAndStopEvent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"preventAndStopEvent\": () => (/* binding */ preventAndStopEvent)\n/* harmony export */ });\nvar preventAndStopEvent = function preventAndStopEvent(event) {\n  event.stopPropagation();\n  event.preventDefault();\n};\n\n//# sourceURL=webpack://pictures_uploader/./js/utils/preventAndStopEvent.js?");

/***/ }),

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pictures_uploader/./sass/style.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;