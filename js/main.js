import {preventAndStopEvent} from './utils/preventAndStopEvent.js';
import '../sass/style.scss';
import {clearText} from "./clearingErrMessages/clearText";
import {hideMsgField} from "./clearingErrMessages/hideMsgField";
import {emptyArray} from "./clearingErrMessages/emptyArray";
import {uploadOnCondition} from "./uploadBtnMethods/uploadOnCondition";
import displayValidationError from "./uploadBtnMethods/displayValidationError";
import {updateIdAfterRemove} from "./uploadBtnMethods/updateIdAfterRemove";
import {generateList} from "./uploadBtnMethods/generateList";
import {enableRemoveButtons} from "./uploadBtnMethods/enableRemoveButtons";

const fileInput = document.getElementById('fileInput');
const fileSelect = document.getElementById('fileSelect');
const numberOfSelectedFiles = document.getElementById('numberOfSelectedFiles');
const fieldForErrorMsg = document.getElementById('error');
const uploadButton = document.getElementById('uploadButton');
const list = document.querySelector('#list');
const selectedFiles = [];
const uploadedFiles = {};
const errorFiles = [];

fileSelect.onclick = (e) => {
    fileInput.click();
};

fileInput.onchange =  (e) => {
    joinInputAndDrop(fileInput.files);
};

fileInput.onclick = () => {
    /*After removing list elements files indexes have to be updated before another file is added.
    * Without that new file might replace displayed one instead of being added at the end of the list*/
    updateIdAfterRemove(uploadedFiles);
    clearText(fieldForErrorMsg);
    hideMsgField(fieldForErrorMsg);
};

fileSelect.ondragenter = (e) => {
    preventAndStopEvent(e);
    document.querySelector('.btn').classList.add('dragover');
};

fileSelect.ondragleave = (e) => {
    document.querySelector('.btn').classList.remove('dragover');
};

fileSelect.ondragover = (e) => preventAndStopEvent(e);

fileSelect.ondrop = (e) => {
    updateIdAfterRemove(uploadedFiles);
    clearText(fieldForErrorMsg);
    hideMsgField(fieldForErrorMsg);
    preventAndStopEvent(e);
    e.target.classList.remove('dragover');

    const { files } = e.dataTransfer;
    joinInputAndDrop(files);
};

uploadButton.onclick = () => {
    //clears error field to prevent multiple error messages after multiple upload attempts
    clearText(numberOfSelectedFiles);
    clearText(fieldForErrorMsg);
    hideMsgField(fieldForErrorMsg);
    emptyArray(errorFiles);

    uploadOnCondition(selectedFiles, uploadedFiles, errorFiles);

    displayValidationError(errorFiles, fieldForErrorMsg, selectedFiles);

    //clears rendered list to prevent duplicates
    list.innerHTML = '';
    /* After removing list elements, when user accidentally clicks upload button
    * without selected files,method updateIdAfterRemove has to be executed before
    * generateList, to ensure that correct ids are displayed. */
    updateIdAfterRemove(uploadedFiles);

    generateList(uploadedFiles, list);

    enableRemoveButtons(list, uploadedFiles);

    // clears input field after upload to prevent multiple uploads of the same files
    fileInput.value = '';
    selectedFiles.length = 0;
};

function joinInputAndDrop(files) {
    [...files].forEach(file => selectedFiles.push(file));
    numberOfSelectedFiles.innerText = 'Files selected: ' + selectedFiles.length;
}
