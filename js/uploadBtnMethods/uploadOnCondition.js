export function uploadOnCondition(fileList, uploadedFiles, errorFiles) {
    Object.keys(fileList).forEach(key => {
        if (fileList[key].size > 1024 * 1024 || fileList[key].type !== 'image/jpeg') {
            errorFiles.push(fileList[key]);
            return
        }
        if (uploadedFiles[key]) {
            uploadedFiles[`${Object.keys(uploadedFiles).length}`] = fileList[key];
        } else {
            uploadedFiles[key] = fileList[key];
        }
    });
}