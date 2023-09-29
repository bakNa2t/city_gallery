//Adding to the popup Image attributes 'block' and 'scr' from parent 
document.querySelectorAll('.gallery__link').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

const popupImage = document.querySelector('.popup-image');
const popupSpan = document.querySelector('.popup-image span');

//Closing the popup Image when clicking outside
document.addEventListener('click', (e) => {
    if(e.target === popupImage){
        popupImage.style.display = 'none';
    }
});

//Closing the popup Image when clicking crossmark
popupSpan.addEventListener('click', () => {
    popupImage.style.display = 'none';
});