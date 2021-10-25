import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryImagesMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onOpenClick);

function createGalleryImagesMarkup(galleryItems) {
return galleryItems
.map(({ preview, original, description }) => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `;
}).join('');
}

function onOpenClick (event) {
  
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
const url = event.target.dataset.source;

 const instance = basicLightbox.create(
`
<img src='${url}' width="800" height="600"> 
`,
{
	onShow: (instance) => {
window.addEventListener('keydown', (event) => {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    instance.close();
  }
});
  },
  
})
instance.show();
}
