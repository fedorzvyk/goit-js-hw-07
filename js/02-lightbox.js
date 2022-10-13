import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGalery(galleryArray) {
    return galleryArray
        .map(({ original, preview, description }) => {
            return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" loading="lazy"/>
    </a>`;
        })
        .join('');
}

function imagesMarkup(string) {
    return gallery.insertAdjacentHTML('beforeend', string);
}

imagesMarkup(createGalery(galleryItems));

let galleryLightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
