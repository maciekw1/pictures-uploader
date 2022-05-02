export function removeListEl(list, uploadedFiles) {
    document.querySelectorAll('.button').forEach((button, idx) => {
        button.onclick = (e) => {
            const id = e.target.classList[1].split('-')[1];
            list.removeChild(document.querySelector(`.list-item-${id}`));
            uploadedFiles.splice(parseInt(id), 1);
            updateId();
        }
    });

    function updateId() {
        document.querySelectorAll('.id-el').forEach((idEl, idx) => {
            idEl.textContent = String(idx + 1);
        });
    }
}
