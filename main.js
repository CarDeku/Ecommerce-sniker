// seleccionando cantidad de articulos por el usuario
let minusBtn = document.querySelector('.input__minus'),
    plusBtn = document.querySelector('.input__plus'),
    userInput = document.querySelector('.input__number');

let userInputNumber = 0;
plusBtn.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber;


});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber<=0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber; 


});

// Agragar total de productos al carrito de compras
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);
let productContainer = document.querySelector('.cart-modal__chekout-container');


addToCartBtn.addEventListener('click', ()=>{

    lastValue += userInputNumber;
    
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();
    

});

//Mostrar el modal con el detalle del carrito
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
let priceModal = document.querySelector('.cart-modal__price');

cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');
    if(lastValue == 0){
        productContainer.innerHTML = `<p class='cart-modal__chekout-container--text'>Your cart is empty.</p>`;
    }else{
        drawProductInModal();
    }
});

//Eliminar items del carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
    
    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = `<p class='cart-modal__chekout-container--text'>Your cart is empty.</p>`;
        cartNotification.innerText = 0;
        cartNotification.style.display = 'none';
        lastValue = 0;
    });
};


//cambiar imagenes cuando se presionen los botones flechas.
const imageContainer = document.querySelector('.gallery__image-container');
const previousGalleryBtn = document.querySelector('.gallery__previous');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', () =>{
    changeNextImage(imageContainer);
});

previousGalleryBtn.addEventListener('click', () =>{
    changePreviousImage(imageContainer);
})




//Mostrar el modal de imagenes cuando se haga click en la imagen de presentacion
const modalGallery = document.querySelector('.modal-gallery__background');
const modalContainerThumnails = document.querySelector('.modal-gallery__image-container');
imageContainer.addEventListener('click', () =>{
    modalGallery.style.display = 'block';
});


//Cambiar la imagen de presentacion del modal al clickear siguiente o anterior
const modalPreviousGalleryBtn = document.querySelector('.modal-gallery__previous');
const modalNextGalleryBtn = document.querySelector('.modal-gallery__next');

modalPreviousGalleryBtn.addEventListener('click', () =>{
    changePreviousImage(modalContainerThumnails);
});
modalNextGalleryBtn.addEventListener('click', () =>{
    changeNextImage(modalContainerThumnails);
});

//Ocultar modal de imagenes al presionar en el icono X
const closed = document.querySelector('.modal-gallery__close-container')
closed.addEventListener('click', () => {
    modalGallery.style.display = 'none';
});

//cambiar las imagenes desde los thumnails
let thumnails = document.querySelectorAll('.gallery__thumnail')
thumnails = [...thumnails];

thumnails.forEach(thumnails => {
    thumnails.addEventListener('click', (e) =>{
        imageContainer.style.backgroundImage = `url('./images/image-product-${e.target.id}.jpg')`;
    })
});

//cambiar las imagenes desde los thumnails en el modal
let thumnailsModal = document.querySelectorAll('.modal-gallery__thumnail');
thumnailsModal = [...thumnailsModal];

thumnailsModal.forEach(thumnailsModal =>{
    thumnailsModal.addEventListener('click', (e)=>{
        console.log('click');
        modalContainerThumnails.style.backgroundImage = `url('./images/image-product-${e.target.id.slice(-1)}.jpg')`;
    });
});

//Mostrar y ocultar el navbar desplegable
const menuBtn = document.querySelector('.header__menu'),
modalNavbarBackground = document.querySelector('.modal-navbar__background'),
navbarClosed = document.querySelector('.modal-navbar__close-icon');

menuBtn.addEventListener('click', ()=>{
    modalNavbarBackground.style.display = 'block';
})

navbarClosed.addEventListener('click', ()=>{
    modalNavbarBackground.style.display = 'none';
});




//Funciones

//funcion que dibuja el contenido del carrito de compras
function drawProductInModal(){
    productContainer.innerHTML = `<div class="cart-modal__details-container">
        <img src="./images/image-product-1-thumbnail.jpg" class="cart-modal__image" alt="snakers">
        <div class="cart-modal__text">
          <p class="cart-modal__product">Autumn Limited Edition...</p>
          <p class="cart-modal__price">$125.00 x ${lastValue} <span>$${125.00*lastValue}</span></p>
        </div>
        <img src="./images/icon-delete.svg" class="cart-modal__delete" alt="delete icon">
      </div>
      <button class="cart-modal__checkout">Checkout</button>`
      priceModal.innerHTML = `$125.00 x ${lastValue} <span>$${125.00*lastValue}</span>`;
    deleteProduct()
}

//funcion de boton siguiente
function changeNextImage(container){ 
    //con este if controlo que el numero de la imagen no se pase de 4   
    if(imgIndex === 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }

    container.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`;
}

//fubncion de boton anterior
function changePreviousImage(container){ 
    //con este if controlo que el numero de la imagen no se pase de 4   
    if(imgIndex === 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }

    container.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`;
}