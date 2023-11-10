import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const galleryListItem = galleryListImg(galleryItems);

function galleryListImg(galleryItem) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="modal"><li class="gallery__item">
         <a class="gallery__link" href="${original}">
         <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
    />
  </a>
</li></div>`;
    }).join("");
}

galleryList.insertAdjacentHTML("beforeend", galleryListItem);

const galleryListClick = (event) => {
    event.preventDefault();
    if (event.target === event.currentTarget) return;

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`,
        {
            onShow: () => {
                window.addEventListener('keydown', onKeydownEsc);
            },
            onClose: () => {
                window.removeEventListener('keydown', onKeydownEsc);
            }
        });
    const onKeydownEsc = (event) => {
        console.log(event.code);
        if (event.code === 'Escape') {
            instance.close();
        }
    };

    instance.show();
};

galleryList.addEventListener("click", galleryListClick);

console.log(galleryItems);
