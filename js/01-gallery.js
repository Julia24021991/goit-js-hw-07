import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const galleryListItem = galleryListImg(galleryItems);

function galleryListImg(galleryItem) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
         <a class="gallery__link" href="${original}">
         <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
    />
  </a>
</li>`;
    }).join("");
}

galleryList.insertAdjacentHTML("beforeend", galleryListItem);

const galleryListClick = (event) => {
    event.preventDefault();
    const source = event.target.dataset.source;
    if (!source) return;
    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">`, {
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
