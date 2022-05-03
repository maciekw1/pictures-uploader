import {generateList} from "./generateList";

export function enableRemoveButtons(list, uploadedFiles) {
    document.querySelectorAll('.button').forEach((button, idx) => {
        button.onclick = (e) => {
            const id = e.target.classList[1].split('-')[1];
            list.removeChild(document.querySelector(`.list-item-${id}`));
            delete uploadedFiles[`${id}`];
            updateId();
        }
    });

    function updateId() {
        document.querySelectorAll('.id-el').forEach((idEl, idx) => {
            idEl.textContent = String(idx + 1);
        });
    }
}
