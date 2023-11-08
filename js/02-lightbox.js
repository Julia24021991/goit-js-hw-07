import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const galleryListItem = galleryListImg(galleryItems);

function galleryListImg(galleryItem) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      alt="${description}" />
   </a>
</li>`;
    }).join("");

}
galleryList.insertAdjacentHTML("beforeend", galleryListItem);

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
});


console.log(galleryItems);
