export default function slideButton(event) {
    const slideDotIndex = [...event.target.parentElement.children].indexOf(event.target);
    const imageSlidesArray = [...document.querySelectorAll('.imageSlides')];
    const slideButtonsArray = [...document.querySelectorAll(".slideDots")];
    const imageSelectedIndex = imageSlidesArray.findIndex(({classList}) => classList.contains('selected'));
    const imageRemoveIndex = imageSlidesArray.findIndex(({classList}) => classList.contains('remove'));
    const newRemoveIndex = slideDotIndex - 1;


    if (slideDotIndex === imageSelectedIndex) {
        return
    }
    slideButtonsArray[imageSelectedIndex].classList.toggle('selected');
    imageSlidesArray[imageSelectedIndex].classList.toggle('selected');

    if (slideDotIndex === imageRemoveIndex) {
        imageSlidesArray[imageRemoveIndex].classList.toggle('remove');
        if (newRemoveIndex === -1) {
            imageSlidesArray[imageSlidesArray.length - 1].classList.toggle('opacity');
            imageSlidesArray[imageSlidesArray.length - 1].classList.toggle('remove');
        } else {
            imageSlidesArray[newRemoveIndex].classList.toggle('opacity');
            imageSlidesArray[newRemoveIndex].classList.toggle('remove');
        }
        imageSlidesArray[slideDotIndex].classList.toggle('selected');
        slideButtonsArray[slideDotIndex].classList.toggle('selected');
    } else {
        imageSlidesArray[imageRemoveIndex].classList.toggle('remove');
        imageSlidesArray[imageSelectedIndex].classList.toggle('remove');
        imageSlidesArray[slideDotIndex].classList.toggle('selected');
        slideButtonsArray[slideDotIndex].classList.toggle('selected');
    }
    setTimeout(() => {
    if (slideDotIndex === imageRemoveIndex) {
        if (newRemoveIndex === -1) {
            imageSlidesArray[imageSlidesArray.length - 1].classList.toggle('opacity');
        } else {
            imageSlidesArray[newRemoveIndex].classList.toggle('opacity');
        }
    }
    }, 300)
}