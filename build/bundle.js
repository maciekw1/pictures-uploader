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

/***/ "./js/clearingErrMessages/clearText.js":
/*!*********************************************!*\
  !*** ./js/clearingErrMessages/clearText.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearText\": () => (/* binding */ clearText)\n/* harmony export */ });\nfunction clearText(element) {\n  element.innerText = '';\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/clearingErrMessages/clearText.js?");

/***/ }),

/***/ "./js/clearingErrMessages/emptyArray.js":
/*!**********************************************!*\
  !*** ./js/clearingErrMessages/emptyArray.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"emptyArray\": () => (/* binding */ emptyArray)\n/* harmony export */ });\nfunction emptyArray(array) {\n  array.splice(0);\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/clearingErrMessages/emptyArray.js?");

/***/ }),

/***/ "./js/clearingErrMessages/hideMsgField.js":
/*!************************************************!*\
  !*** ./js/clearingErrMessages/hideMsgField.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hideMsgField\": () => (/* binding */ hideMsgField)\n/* harmony export */ });\nfunction hideMsgField(field) {\n  field.style.display = 'none';\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/clearingErrMessages/hideMsgField.js?");

/***/ }),

/***/ "./js/exif.js":
/*!********************!*\
  !*** ./js/exif.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exif\": () => (/* binding */ exif)\n/* harmony export */ });\nfunction exif(file, placeholder) {\n  EXIF.getData(file, function () {\n    //prevents throwing error when no exif GPS data is present\n    if (this.exifdata.GPSLatitudeRef) {\n      var convertDMStoDD = function convertDMStoDD(degrees, minutes, seconds, direction) {\n        var dd = degrees + minutes / 60 + seconds / (60 * 60);\n\n        if (direction === 'S' || direction === 'W') {\n          dd = dd * -1;\n        }\n\n        return dd;\n      };\n\n      var latitude = convertDMStoDD(this.exifdata.GPSLatitude[0], this.exifdata.GPSLatitude[1], this.exifdata.GPSLatitude[2], this.exifdata.GPSLatitudeRef).toFixed(6);\n      var longitude = convertDMStoDD(this.exifdata.GPSLongitude[0], this.exifdata.GPSLongitude[1], this.exifdata.GPSLongitude[2], this.exifdata.GPSLongitudeRef).toFixed(6);\n      placeholder.innerHTML += 'GPS Longitude: ' + longitude + '&deg;' + '<br>' + 'GPS Latitude: ' + latitude + '&deg;';\n    } else {\n      placeholder.innerHTML += 'No GPS data found';\n    }\n  });\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/exif.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_preventAndStopEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/preventAndStopEvent.js */ \"./js/utils/preventAndStopEvent.js\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.scss */ \"./sass/style.scss\");\n/* harmony import */ var _clearingErrMessages_clearText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearingErrMessages/clearText */ \"./js/clearingErrMessages/clearText.js\");\n/* harmony import */ var _clearingErrMessages_hideMsgField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearingErrMessages/hideMsgField */ \"./js/clearingErrMessages/hideMsgField.js\");\n/* harmony import */ var _clearingErrMessages_emptyArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clearingErrMessages/emptyArray */ \"./js/clearingErrMessages/emptyArray.js\");\n/* harmony import */ var _uploadBtnMethods_uploadOnCondition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uploadBtnMethods/uploadOnCondition */ \"./js/uploadBtnMethods/uploadOnCondition.js\");\n/* harmony import */ var _uploadBtnMethods_displayValidationError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploadBtnMethods/displayValidationError */ \"./js/uploadBtnMethods/displayValidationError.js\");\n/* harmony import */ var _uploadBtnMethods_updateIdAfterRemove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uploadBtnMethods/updateIdAfterRemove */ \"./js/uploadBtnMethods/updateIdAfterRemove.js\");\n/* harmony import */ var _uploadBtnMethods_generateList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uploadBtnMethods/generateList */ \"./js/uploadBtnMethods/generateList.js\");\n/* harmony import */ var _uploadBtnMethods_enableRemoveButtons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uploadBtnMethods/enableRemoveButtons */ \"./js/uploadBtnMethods/enableRemoveButtons.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\n\n\n\nvar fileInput = document.getElementById('fileInput');\nvar fileSelect = document.getElementById('fileSelect');\nvar numberOfSelectedFiles = document.getElementById('numberOfSelectedFiles');\nvar fieldForErrorMsg = document.getElementById('error');\nvar uploadButton = document.getElementById('uploadButton');\nvar list = document.querySelector('#list');\nvar selectedFiles = [];\nvar uploadedFiles = {};\nvar errorFiles = [];\n\nfileSelect.onclick = function (e) {\n  fileInput.click();\n};\n\nfileInput.onchange = function (e) {\n  joinInputAndDrop(fileInput.files);\n};\n\nfileInput.onclick = function () {\n  /*After removing list elements files indexes have to be updated before another file is added.\n  * Without that new file might replace displayed one instead of being added at the end of the list*/\n  (0,_uploadBtnMethods_updateIdAfterRemove__WEBPACK_IMPORTED_MODULE_7__.updateIdAfterRemove)(uploadedFiles);\n  (0,_clearingErrMessages_clearText__WEBPACK_IMPORTED_MODULE_2__.clearText)(fieldForErrorMsg);\n  (0,_clearingErrMessages_hideMsgField__WEBPACK_IMPORTED_MODULE_3__.hideMsgField)(fieldForErrorMsg);\n};\n\nfileSelect.ondragenter = function (e) {\n  (0,_utils_preventAndStopEvent_js__WEBPACK_IMPORTED_MODULE_0__.preventAndStopEvent)(e);\n  document.querySelector('.btn').classList.add('dragover');\n};\n\nfileSelect.ondragleave = function (e) {\n  document.querySelector('.btn').classList.remove('dragover');\n};\n\nfileSelect.ondragover = function (e) {\n  return (0,_utils_preventAndStopEvent_js__WEBPACK_IMPORTED_MODULE_0__.preventAndStopEvent)(e);\n};\n\nfileSelect.ondrop = function (e) {\n  (0,_uploadBtnMethods_updateIdAfterRemove__WEBPACK_IMPORTED_MODULE_7__.updateIdAfterRemove)(uploadedFiles);\n  (0,_clearingErrMessages_clearText__WEBPACK_IMPORTED_MODULE_2__.clearText)(fieldForErrorMsg);\n  (0,_clearingErrMessages_hideMsgField__WEBPACK_IMPORTED_MODULE_3__.hideMsgField)(fieldForErrorMsg);\n  (0,_utils_preventAndStopEvent_js__WEBPACK_IMPORTED_MODULE_0__.preventAndStopEvent)(e);\n  e.target.classList.remove('dragover');\n  var files = e.dataTransfer.files;\n  joinInputAndDrop(files);\n};\n\nuploadButton.onclick = function () {\n  //clears error field to prevent multiple error messages after multiple upload attempts\n  (0,_clearingErrMessages_clearText__WEBPACK_IMPORTED_MODULE_2__.clearText)(numberOfSelectedFiles);\n  (0,_clearingErrMessages_clearText__WEBPACK_IMPORTED_MODULE_2__.clearText)(fieldForErrorMsg);\n  (0,_clearingErrMessages_hideMsgField__WEBPACK_IMPORTED_MODULE_3__.hideMsgField)(fieldForErrorMsg);\n  (0,_clearingErrMessages_emptyArray__WEBPACK_IMPORTED_MODULE_4__.emptyArray)(errorFiles);\n  (0,_uploadBtnMethods_uploadOnCondition__WEBPACK_IMPORTED_MODULE_5__.uploadOnCondition)(selectedFiles, uploadedFiles, errorFiles);\n  (0,_uploadBtnMethods_displayValidationError__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(errorFiles, fieldForErrorMsg, selectedFiles); //clears rendered list to prevent duplicates\n\n  list.innerHTML = '';\n  /* After removing list elements, when user accidentally clicks upload button\n  * without selected files,method updateIdAfterRemove has to be executed before\n  * generateList, to ensure that correct ids are displayed. */\n\n  (0,_uploadBtnMethods_updateIdAfterRemove__WEBPACK_IMPORTED_MODULE_7__.updateIdAfterRemove)(uploadedFiles);\n  (0,_uploadBtnMethods_generateList__WEBPACK_IMPORTED_MODULE_8__.generateList)(uploadedFiles, list);\n  (0,_uploadBtnMethods_enableRemoveButtons__WEBPACK_IMPORTED_MODULE_9__.enableRemoveButtons)(list, uploadedFiles); // clears input field after upload to prevent multiple uploads of the same files\n\n  fileInput.value = '';\n  selectedFiles.length = 0;\n};\n\nfunction joinInputAndDrop(files) {\n  _toConsumableArray(files).forEach(function (file) {\n    return selectedFiles.push(file);\n  });\n\n  numberOfSelectedFiles.innerText = 'Files selected: ' + selectedFiles.length;\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/main.js?");

/***/ }),

/***/ "./js/uploadBtnMethods/displayValidationError.js":
/*!*******************************************************!*\
  !*** ./js/uploadBtnMethods/displayValidationError.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _errorMessages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorMessages.js */ \"./js/uploadBtnMethods/errorMessages.js\");\n\n\nvar displayValidationError = function displayValidationError(errorArr, placeToDisplay, selectedFiles) {\n  if (selectedFiles.length === 0) {\n    var error = document.createElement('div');\n    error.classList.add('error');\n    error.innerText = _errorMessages_js__WEBPACK_IMPORTED_MODULE_0__.errorMessages.fileRequired;\n    placeToDisplay.appendChild(error);\n    placeToDisplay.style.display = 'block';\n  }\n\n  errorArr.map(function (file) {\n    var fileInfo = document.createElement('div');\n    var error = document.createElement('div');\n    var container = document.createElement('div');\n    fileInfo.classList.add('file-info');\n    error.classList.add('error');\n    container.classList.add('error-container');\n    fileInfo.innerText = \"File name: \".concat(file.name, \"\\n    File size: \").concat((file.size / 1024 / 1024).toFixed(2), \"MB\\n    File type: \").concat(file.type);\n    error.innerText = \"\".concat(file.size > 1024 * 1024 ? _errorMessages_js__WEBPACK_IMPORTED_MODULE_0__.errorMessages.fileSize : '', \"\\n             \").concat(!(file.type === 'image/jpeg' || file.type === 'image/jpg') ? _errorMessages_js__WEBPACK_IMPORTED_MODULE_0__.errorMessages.fileType : '', \"\\n    \");\n    placeToDisplay.appendChild(container).appendChild(fileInfo);\n    placeToDisplay.appendChild(container).appendChild(error);\n    placeToDisplay.style.display = 'block';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayValidationError);\n\n//# sourceURL=webpack://pictures_uploader/./js/uploadBtnMethods/displayValidationError.js?");

/***/ }),

/***/ "./js/uploadBtnMethods/enableRemoveButtons.js":
/*!****************************************************!*\
  !*** ./js/uploadBtnMethods/enableRemoveButtons.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enableRemoveButtons\": () => (/* binding */ enableRemoveButtons)\n/* harmony export */ });\n/* harmony import */ var _generateList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateList */ \"./js/uploadBtnMethods/generateList.js\");\n\nfunction enableRemoveButtons(list, uploadedFiles) {\n  document.querySelectorAll('.button').forEach(function (button, idx) {\n    button.onclick = function (e) {\n      var id = e.target.classList[1].split('-')[1];\n      list.removeChild(document.querySelector(\".list-item-\".concat(id)));\n      delete uploadedFiles[\"\".concat(id)];\n      updateId();\n    };\n  });\n\n  function updateId() {\n    document.querySelectorAll('.id-el').forEach(function (idEl, idx) {\n      idEl.textContent = String(idx + 1);\n    });\n  }\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/uploadBtnMethods/enableRemoveButtons.js?");

/***/ }),

/***/ "./js/uploadBtnMethods/errorMessages.js":
/*!**********************************************!*\
  !*** ./js/uploadBtnMethods/errorMessages.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorMessages\": () => (/* binding */ errorMessages)\n/* harmony export */ });\nvar errorMessages = {\n  fileSize: 'File size is too big. Maximum size is 1 MB.',\n  fileType: 'File type is not supported. Supported types are: jpg, jpeg.',\n  fileRequired: 'Please choose a file.'\n};\n\n//# sourceURL=webpack://pictures_uploader/./js/uploadBtnMethods/errorMessages.js?");

/***/ }),

/***/ "./js/uploadBtnMethods/generateList.js":
/*!*********************************************!*\
  !*** ./js/uploadBtnMethods/generateList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateList\": () => (/* binding */ generateList)\n/* harmony export */ });\n/* harmony import */ var _exif_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exif.js */ \"./js/exif.js\");\n\nfunction generateList(filesToDisplay, list) {\n  var _loop = function _loop(key) {\n    var file = filesToDisplay[key];\n    var liEl = document.createElement('li');\n    var idEl = document.createElement('span');\n    var image = document.createElement('img');\n    var tooltipContainer = document.createElement('div');\n    var tooltip = document.createElement('span');\n    var fileDescription = document.createElement('div');\n    var button = document.createElement('button');\n    var container = document.querySelectorAll('.container');\n    liEl.classList.add('list-item', \"list-item-\".concat(key));\n    idEl.classList.add('id-el');\n    image.classList.add('image');\n    tooltipContainer.classList.add('tooltip');\n    tooltip.classList.add('tooltip-text');\n    button.classList.add('button', \"button-\".concat(key));\n    fileDescription.classList.add('file-description');\n    image.file = file;\n    image.width = 100;\n    fileDescription.innerText = \"File name: \".concat(file.name, \"\\n    File size: \").concat((file.size / 1024 / 1024).toFixed(2), \"MB\\n    File extension: \").concat(file.name.split('.').pop(), \"\\n    \");\n    (0,_exif_js__WEBPACK_IMPORTED_MODULE_0__.exif)(file, fileDescription);\n    button.innerText = 'Delete';\n    tooltip.innerText = 'click to enlarge';\n    idEl.textContent = String(parseInt(key) + 1);\n    liEl.appendChild(idEl);\n    image.appendChild(tooltip);\n    tooltipContainer.appendChild(tooltip);\n    list.appendChild(liEl).appendChild(tooltipContainer).appendChild(image);\n    liEl.appendChild(fileDescription);\n    liEl.appendChild(button);\n    var reader = new FileReader();\n\n    reader.onload = function (aImg) {\n      return function (e) {\n        aImg.src = e.target.result;\n      };\n    }(image);\n\n    reader.readAsDataURL(file);\n\n    image.onclick = function () {\n      image.width = image.width === 100 ? window.innerWidth / 2 : 100; //image.naturalWidth\n\n      for (var el in container) {\n        container[el].style.maxWidth = image.width !== 100 ? \"\".concat(window.innerWidth / 1.5 + 300, \"px\") : '560px';\n      }\n    };\n  };\n\n  for (var key in filesToDisplay) {\n    _loop(key);\n  }\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/uploadBtnMethods/generateList.js?");

/***/ }),

/***/ "./js/uploadBtnMethods/updateIdAfterRemove.js":
/*!****************************************************!*\
  !*** ./js/uploadBtnMethods/updateIdAfterRemove.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateIdAfterRemove\": () => (/* binding */ updateIdAfterRemove)\n/* harmony export */ });\nfunction updateIdAfterRemove(uploadedFiles) {\n  Object.entries(uploadedFiles).map(function (key, idx) {\n    if (parseInt(key[0]) !== idx) {\n      uploadedFiles[\"\".concat(idx)] = uploadedFiles[\"\".concat(key[0])];\n      delete uploadedFiles[\"\".concat(key[0])];\n    }\n  });\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/uploadBtnMethods/updateIdAfterRemove.js?");

/***/ }),

/***/ "./js/uploadBtnMethods/uploadOnCondition.js":
/*!**************************************************!*\
  !*** ./js/uploadBtnMethods/uploadOnCondition.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"uploadOnCondition\": () => (/* binding */ uploadOnCondition)\n/* harmony export */ });\nfunction uploadOnCondition(fileList, uploadedFiles, errorFiles) {\n  Object.keys(fileList).forEach(function (key) {\n    if (fileList[key].size > 1024 * 1024 || fileList[key].type !== 'image/jpeg') {\n      errorFiles.push(fileList[key]);\n      return;\n    }\n\n    if (uploadedFiles[key]) {\n      uploadedFiles[\"\".concat(Object.keys(uploadedFiles).length)] = fileList[key];\n    } else {\n      uploadedFiles[key] = fileList[key];\n    }\n  });\n}\n\n//# sourceURL=webpack://pictures_uploader/./js/uploadBtnMethods/uploadOnCondition.js?");

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