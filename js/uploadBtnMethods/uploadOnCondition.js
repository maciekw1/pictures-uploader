export function uploadOnCondition(fileList, uploadedFiles, errorFiles) {
    Object.keys(fileList).forEach(key => {
        if (fileList[key].size > 1024 *1024 *3|| fileList[key].type !== 'image/jpeg') {
            errorFiles.push(fileList[key]);
            return
        }
        uploadedFiles.push(fileList[key]);
    });
}