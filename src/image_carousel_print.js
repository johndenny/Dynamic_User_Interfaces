import Slide1 from "./slide1.jpg"
import Slide2 from "./slide2.jpg"
import Slide3 from "./slide3.jpg"
import Slide4 from "./slide4.jpg"
// import Slide5 from "./slide5.jpg"
// import Slide6 from "./slide6.jpg"

export default function imageCarouselPrint() {
    const imageContainer = document.querySelector('.carouselFrame');
    const slideContainer1 = document.createElement('div');
    slideContainer1.className = 'imageSlides selected';
    imageContainer.appendChild(slideContainer1);
    const slide1 = new Image();
    slide1.src = Slide1;
    slideContainer1.appendChild(slide1);
    const slideContainer2 = document.createElement('div');
    slideContainer2.className = 'imageSlides';
    imageContainer.appendChild(slideContainer2);
    const slide2 = new Image();
    slide2.src = Slide2;
    slideContainer2.appendChild(slide2);
    const SlideContainer3 = document.createElement('div');
    SlideContainer3.className= 'imageSlides';
    imageContainer.appendChild(SlideContainer3);
    const slide3 = new Image();
    slide3.src = Slide3;
    SlideContainer3.appendChild(slide3);
    const slideContainer4 = document.createElement('div');
    slideContainer4.className = 'imageSlides remove';
    imageContainer.appendChild(slideContainer4);
    const slide4 = new Image();
    slide4.src = Slide4;
    slideContainer4.appendChild(slide4);
    // const slide5 = new Image();
    // slide5.src = Slide5;
    // imageContainer.appendChild(slide5);
    // const slide6 = new Image();
    // slide6.src = Slide6;
    // imageContainer.appendChild(slide6);
}