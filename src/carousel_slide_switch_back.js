export default function carouselSlideSwitchBack() {
    const imageSlidesArray = Array.from(document.querySelectorAll('.imageSlides'));
    const imageSelectedIndex = imageSlidesArray.findIndex(({classList}) => classList.contains('selected'));
    const imageRemoveIndex = imageSlidesArray.findIndex(({classList}) => classList.contains('remove'));
    const newRemoveIndex = imageRemoveIndex - 1;
    const backButton = document.querySelector(".backArrow");

    backButton.removeEventListener('click', carouselSlideSwitchBack);
    imageSlidesArray[imageSelectedIndex].classList.toggle("selected");
    imageSlidesArray[imageRemoveIndex].classList.toggle("selected");
    imageSlidesArray[imageRemoveIndex].classList.toggle("remove");
    setTimeout(() => {
        if (newRemoveIndex === -1) {
            imageSlidesArray[imageSlidesArray.length - 1].classList.toggle('remove');
        } else {
            imageSlidesArray[newRemoveIndex].classList.toggle('remove');
        }
    }, 300);
    setTimeout(() => {
        backButton.addEventListener('click', carouselSlideSwitchBack);
    }, 600)
}