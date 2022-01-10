export default function sidebarMenuToggle(event) {
    const modal = document.querySelector('.modal');
    const sidebarList = event.target.parentElement.nextElementSibling.firstElementChild;
    modal.classList.toggle('selected');
    modal.classList.toggle('background');
    sidebarList.classList.toggle('selected');
}