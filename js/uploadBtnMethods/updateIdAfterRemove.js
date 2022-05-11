export function updateIdAfterRemove(uploadedFiles) {
    Object.entries(uploadedFiles).map((key, idx) => {
        if (parseInt(key[0]) !== idx) {
            uploadedFiles[`${idx}`] = uploadedFiles[`${key[0]}`];
            delete uploadedFiles[`${key[0]}`];
        }
    });
}