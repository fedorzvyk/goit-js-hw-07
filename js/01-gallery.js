import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', checkTagImg);

function createGalery(galleryArray) {
    return galleryArray
        .map(({ original, preview, description }) => {
            return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" loading="lazy"/>
    </a>
    </div>`;
        })
        .join('');
}

function imagesMarkup(string) {
    return gallery.insertAdjacentHTML('beforeend', string);
}

function checkTagImg(e) {
    e.preventDefault();
    const ifImage = e.target.nodeName === 'IMG';

    if (!ifImage) {
        return;
    } else if (ifImage) {
        showImg(e);
    }
}

function showImg(e) {
    const modalImg = basicLightbox.create(`
	<img src="${e.target.getAttribute('data-source')}" alt="${e.target.getAttribute(
        'alt',
    )}">
	`);
    modalImg.show();

    if (modalImg.show()) {
        window.addEventListener('keydown', onPushEsc);
    } else if (!modalImg.show()) {
        window.removeEventListener('keydown', onPushEsc);
    }

    function onPushEsc(e) {
        if (e.code === 'Escape') {
            modalImg.close();
        }
    }
}

imagesMarkup(createGalery(galleryItems));
