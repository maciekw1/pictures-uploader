import {clear} from "./uploadBtnMethods/clear.js";
import displayValidationError from "./uploadBtnMethods/displayValidationError.js";
import {generateList} from "./uploadBtnMethods/generateList.js";
import {removeListEl} from "./uploadBtnMethods/removeListEl.js";
import {uploadOnCondition} from "./uploadBtnMethods/uploadOnCondition.js";

const list = document.querySelector('#list');
const uploadedFiles = [];

export function upload(selectedFiles, selectInfo, validationError, fileInput) {
    let errorFiles = [];
    //clears error field to prevent multiple error messages after multiple upload attempts
    clear(validationError, errorFiles, selectInfo);

    uploadOnCondition(selectedFiles, uploadedFiles, errorFiles);

    displayValidationError(errorFiles, validationError, selectedFiles);

    //clears rendered list to prevent duplicates
    list.innerHTML = '';

    generateList(uploadedFiles, list);

    removeListEl(list, uploadedFiles);
    // clears input field after upload to prevent multiple uploads of the same files
    fileInput.value = '';
    selectedFiles.length = 0;
}
