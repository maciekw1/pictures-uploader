import {errorMessages} from './errorMessages.js';

const displayValidationError = (errorArr, placeToDisplay, selectedFiles) => {

    if (selectedFiles.length === 0)  {
        const error = document.createElement('div');
        error.classList.add('error');
        error.innerText = errorMessages.fileRequired;
        placeToDisplay.appendChild(error);
        placeToDisplay.style.display = 'block';
    }

    errorArr.map(file => {
        const fileInfo = document.createElement('div');
        const error = document.createElement('div');
        const container = document.createElement('div');
        fileInfo.classList.add('file-info');
        error.classList.add('error');
        container.classList.add('error-container');
        fileInfo.innerText = `File name: ${file.name}
    File size: ${(file.size / 1024 / 1024).toFixed(2)}MB
    File type: ${file.type}`;
        error.innerText =
            `${file.size > 1024 * 1024 ? errorMessages.fileSize : ''}
             ${!(file.type === 'image/jpeg' || 
                file.type === 'image/jpg') ? errorMessages.fileType : ''}
    `;
        placeToDisplay.appendChild(container).appendChild(fileInfo);
        placeToDisplay.appendChild(container).appendChild(error);
        placeToDisplay.style.display = 'block';
    });
};

export default displayValidationError;
