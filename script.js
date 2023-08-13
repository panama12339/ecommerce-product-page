const navItems = document.querySelectorAll('#nav-list li');
const indicator = document.getElementById('indicator');

navItems.forEach(item =>{
    item.addEventListener('click', e =>{
        const clickedItem = e.currentTarget;
        const offsetLeft = clickedItem.offsetLeft;
        const itemWidth = clickedItem.clientWidth;

        indicator.style.width = `${itemWidth}px`;
        indicator.style.left = `${offsetLeft}px`;
    });
});
//shop
const cartIcon = document.getElementById('cart-icon');
const cartPopup = document.getElementById('cart-popup');

function positionCartPopup(){

    const cartIconRect = cartIcon.getBoundingClientRect();

    const popupTop = cartIconRect.bottom + window.scrollY;

    const popupLeft = cartIconRect.left + window.scrollX;

    cartPopup.style.top = `${popupTop}px`;
    cartPopup.style.left = `${popupLeft}px`;

    //cartPopup.classList.toggle('active');


    //cartPopup.classList.add('active');
}
cartIcon.addEventListener('click', ()=>{
    positionCartPopup();
    cartPopup.classList.toggle('active');
});

window.addEventListener('resize', positionCartPopup);

//Agregar
const minusIcon = document.getElementById('minus-icon');
const plusIcon = document.getElementById('plus-icon');
const quantityElement = document.getElementById('quantity');
//const addToCart = document.getElementById('add-to-cart');
//const cartQuantity = document.getElementById('quantity');
//const cartEmptyText = document.getElementById('cart-quantity');


//let quantity = 0;
//let cartQuantityElement = 0;

//function updateQuantity(){
//    quantityElement.textContent = quantity;
//}
//function updateCartQuantity(){
//    cartQuantity.textContent = cartQuantityElement;
//    if(cartQuantityElement > 0){
//        cartEmptyText.style.display = 'none';
//    }else{
//        cartEmptyText.style.display = 'block';
//    }
//}
minusIcon.addEventListener('click',()=>{
    if(quantity>0){
        quantity--;
        updateQuantity();
    }
});
plusIcon.addEventListener('click', ()=>{
    quantity++;
    updateQuantity();
});
//addToCart.addEventListener('click',()=>{
//    cartQuantityElement += quantity;
//    updateCartQuantity();
//})
//updateQuantity();
//updateCartQuantity();

//IMAGENES
const smallImages = document.querySelectorAll('.small-image');
const bigImage = document.getElementById('big-image');

//evento de click en cada imagen pequeña
smallImages.forEach(smallImage => {
    smallImage.addEventListener('click', () => {
        const newImageSrc = smallImage.src.replace('-thumbnail', '');
        bigImage.src = newImageSrc;
    });
});

// Agrega este código en tu archivo script.js
const lightbox = document.getElementById('light')
const lightboxBigImage = document.getElementById('lightbox-big-image');
const lightboxPrevButton = document.getElementById('lightbox-prev-button');
const lightboxNextButton = document.getElementById('lightbox-next-button');

let currentImageIndex = 0;

// Función para abrir la vista emergente
function openLightbox(index) {
  lightbox.style.display = 'block';
  currentImageIndex = index;
  updateLightboxImage(currentImageIndex);
}

// Función para cerrar la vista emergente
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Función para actualizar la imagen en la vista emergente
function updateLightboxImage(index) {
  const newImageSrc = smallImages[index].src.replace('-thumbnail', '');
  lightboxBigImage.src = newImageSrc;
}

// Abrir vista emergente al hacer clic en la imagen grande
bigImage.addEventListener('click', () => {
  openLightbox(currentImageIndex);
});

// Cerrar vista emergente al hacer clic fuera de la imagen grande
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
 
});

// Cambiar a la imagen anterior en la vista emergente
lightboxPrevButton.addEventListener('click', () => {
  if (currentImageIndex > 0) {
    updateLightboxImage(--currentImageIndex);
  }
});

// Cambiar a la siguiente imagen en la vista emergente
lightboxNextButton.addEventListener('click', () => {
  if (currentImageIndex < smallImages.length - 1) {
    updateLightboxImage(++currentImageIndex);
  }
});

const lightboxCloseButton = document.getElementById('lightbox-close-button');

lightboxCloseButton.addEventListener('click', () => {
  closeLightbox();
});