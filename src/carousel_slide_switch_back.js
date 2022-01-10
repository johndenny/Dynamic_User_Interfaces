export default function carouselSlideSwitchBack() {
    const imageSlidesArray = Array.from(document.querySelectorAll('.imageSlides'));
    const slideButtonsArray = Array.from(document.querySelectorAll(".slideDots"));
    const imageSelectedIndex = imageSlidesArray.findIndex(({classList}) => classList.contains('selected'));
    const imageRemoveIndex = imageSlidesArray.findIndex(({classList}) => classList.contains('remove'));
    const newRemoveIndex = imageRemoveIndex - 1;
    const backButton = document.querySelector(".backArrow");

    backButton.removeEventListener('click', carouselSlideSwitchBack);
    slideButtonsArray[imageSelectedIndex].classList.toggle("selected");
    imageSlidesArray[imageSelectedIndex].classList.toggle("selected");
    imageSlidesArray[imageRemoveIndex].classList.toggle("selected");
    imageSlidesArray[imageRemoveIndex].classList.toggle("remove");
    slideButtonsArray[imageRemoveIndex].classList.toggle('selected');
    if (newRemoveIndex === -1) {
        imageSlidesArray[imageSlidesArray.length - 1].classList.toggle('opacity');
        imageSlidesArray[imageSlidesArray.length - 1].classList.toggle('remove');
    } else {
        imageSlidesArray[newRemoveIndex].classList.toggle("opacity");
        imageSlidesArray[newRemoveIndex].classList.toggle('remove');
    }
    setTimeout(() => {
        if (newRemoveIndex === -1) {
            imageSlidesArray[imageSlidesArray.length - 1].classList.toggle('opacity');
        } else {
            imageSlidesArray[newRemoveIndex].classList.toggle('opacity');
        }
        backButton.addEventListener('click', carouselSlideSwitchBack);
    }, 300);
}