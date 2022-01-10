export default function carouselSlideSwitch() {
    const imageSlidesArray = Array.from(document.querySelectorAll('.imageSlides'));
    const slideButtonsArray = Array.from(document.querySelectorAll(".slideDots"));
    const imageSelectedIndex = imageSlidesArray.findIndex(({classList}) => classList.contains('selected'));
    const imageRemoveIndex = imageSlidesArray.findIndex(({classList}) => classList.contains('remove'));
    const imageSelectedNextIndex = imageSelectedIndex + 1;
    const forwardButton = document.querySelector(".forwardArrow");

    forwardButton.removeEventListener('click', carouselSlideSwitch);
    slideButtonsArray[imageSelectedIndex].classList.toggle('selected');
    if (imageRemoveIndex > -1) {
        imageSlidesArray[imageRemoveIndex].classList.toggle('remove');
    }
    if (imageSelectedNextIndex === imageSlidesArray.length) {
        imageSlidesArray[imageSelectedIndex].classList.toggle('remove');
        imageSlidesArray[0].classList.toggle('selected');
        slideButtonsArray[0].classList.toggle('selected');
        setTimeout(() => {
            imageSlidesArray[imageSelectedIndex].classList.toggle('selected');
            forwardButton.addEventListener('click', carouselSlideSwitch);
        }, 300)
    } else {
        imageSlidesArray[imageSelectedIndex].classList.toggle('remove');
        imageSlidesArray[imageSelectedNextIndex].classList.toggle('selected');
        slideButtonsArray[imageSelectedNextIndex].classList.toggle('selected');
        setTimeout(() => {
            imageSlidesArray[imageSelectedIndex].classList.toggle('selected');
            forwardButton.addEventListener('click', carouselSlideSwitch);
        }, 300)
    }
    
}