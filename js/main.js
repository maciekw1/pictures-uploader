import {upload} from './uploadFiles.js';
import {clear} from './uploadBtnMethods/clear.js';
import {preventAndStopEvent} from './utils/preventAndStopEvent.js';
import '../sass/style.scss';

const fileInput = document.getElementById('fileInput');
const fileSelect = document.getElementById('fileSelect');
const selectInfo = document.getElementById('selectInfo');
const validationError = document.getElementById('error');
const selectedFiles = [];

fileSelect.onclick = (e) => {
    fileInput.click();
};

fileInput.onchange =  (e) => {
    joinInputAndDrop(fileInput.files);
};

fileInput.onclick = () => {
    clear(validationError);
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
    clear(validationError);
    preventAndStopEvent(e);
    e.target.classList.remove('dragover');

    const { files } = e.dataTransfer;
    joinInputAndDrop(files);
};

document.getElementById('uploadButton').onclick = () => {
    upload(selectedFiles, selectInfo, validationError, fileInput);
};

function joinInputAndDrop(files) {
    [...files].forEach(file => selectedFiles.push(file));
    selectInfo.innerText = 'Files selected: ' + selectedFiles.length;
}
