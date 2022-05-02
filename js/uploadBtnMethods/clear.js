export function clear(validationError, errorFiles, selectInfo) {
    if (selectInfo) selectInfo.innerText = '';
    validationError.innerText = '';
    if (errorFiles) errorFiles.splice(0); //instead of: errorFiles.splice(0, errorFiles.length)
    validationError.style.display = 'none';
}
