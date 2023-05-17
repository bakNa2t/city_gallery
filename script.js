document.querySelectorAll('.gallery__link').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
})

const popupImage = document.querySelector('.popup-image');

document.addEventListener('click', function(e){
    if(e.target === popupImage){
        document.querySelector('.popup-image').style.display = 'none';
    }
})

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}