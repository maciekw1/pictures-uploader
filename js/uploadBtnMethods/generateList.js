import {exif} from "../exif.js";

export function generateList(filesToDisplay, list) {
    filesToDisplay.forEach((file, idx) => {
        const liEl = document.createElement('li');
        const idEl = document.createElement('span');
        const image = document.createElement('img');
        const tooltipContainer = document.createElement('div');
        const tooltip = document.createElement('span');
        const fileDescription = document.createElement('div');
        const button = document.createElement('button');
        const container = document.querySelectorAll('.container');

        liEl.classList.add('list-item', `list-item-${idx}`);
        idEl.classList.add('id-el');
        image.classList.add('image');
        tooltipContainer.classList.add('tooltip');
        tooltip.classList.add('tooltip-text');
        button.classList.add('button',`button-${idx}`);
        fileDescription.classList.add('file-description');
        image.file = file;
        image.width = 100;

        fileDescription.innerText = `File name: ${file.name}
    File size: ${(file.size / 1024 / 1024).toFixed(2)}MB
    File extension: ${file.name.split('.').pop()}
    `;
        //here goes exif
        /*
         * exif function has to be called after fileDescription.innerText because it
         * adds the text about GPS to fileDescription. This exif text would be deleted by another fileDescription.innerText cal
         * */
        exif(file, fileDescription);

        button.innerText = 'Delete';
        tooltip.innerText = 'click to enlarge';
        idEl.textContent = String(idx + 1);

        liEl.appendChild(idEl);
        image.appendChild(tooltip);
        tooltipContainer.appendChild(tooltip);
        list.appendChild(liEl).appendChild(tooltipContainer).appendChild(image);
        liEl.appendChild(fileDescription);
        liEl.appendChild(button);

        const reader = new FileReader();
        reader.onload = (aImg => { return e => { aImg.src = e.target.result; }; })(image);
        reader.readAsDataURL(file);

        image.onclick = () => {
            image.width = image.width === 100 ? window.innerWidth/2 : 100; //image.naturalWidth
            for (const el in container) {
                console.log(el, container);
                container[el].style.maxWidth = image.width !== 100 ? `${window.innerWidth/1.5 + 300}px` : '560px';
            }
        };
    });
}
