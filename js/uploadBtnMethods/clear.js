export function clear(validationError, errorFiles, selectInfo) {
    if (selectInfo) selectInfo.innerText = '';
    validationError.innerText = '';
    if (errorFiles) errorFiles.splice(0);
    validationError.style.display = 'none';
}
