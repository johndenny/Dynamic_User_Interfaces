import './style.css';
import dropMenuToggle from "./drop_menu_toggle"
import sidebarMenuToggle from "./sidebar_menu_toggle"
import sidebarInternalMenuToggle from "./sidebar_internal_menu_toggle"
import sidebarSubMenuToggleBack from "./sidebar_sub_menu_toggle_back"
import sidebarMenuToggleClose from "./sidebar_menu_toggle_close"
import imageCarouselPrint from "./image_carousel_print"
import carouselSlideSwitch from "./carousel_slide_switch"
import carouselSlideSwitchBack from "./carousel_slide_switch_back"
import slideButton from "./slide_button"

document.querySelectorAll("nav > ul > li").forEach(element => element.addEventListener('mouseenter', dropMenuToggle));
document.querySelectorAll("nav > ul > li").forEach(element => element.addEventListener('mouseleave', dropMenuToggle));
document.querySelectorAll('.sidebar > li').forEach(element => element.addEventListener('click', sidebarInternalMenuToggle));
window.addEventListener('click', sidebarMenuToggleClose);
document.querySelectorAll('.subMenu li:nth-child(1)').forEach(element => element.addEventListener('click', sidebarSubMenuToggleBack));
document.querySelector('.iconElementsContainer').addEventListener('click', sidebarMenuToggle);
document.querySelector('.forwardArrow').addEventListener('click', carouselSlideSwitch);
document.querySelector('.backArrow').addEventListener('click', carouselSlideSwitchBack);
document.querySelectorAll(".slideDots").forEach(element => element.addEventListener('click', slideButton));

imageCarouselPrint();