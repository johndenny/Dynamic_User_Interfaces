export default function sidebarMenuToggle(event) {
    const modal = document.querySelector('.modal');
    const sidebarList = event.target.nextElementSibling.firstElementChild;
    modal.classList.toggle('selected');
    modal.classList.toggle('background');
    sidebarList.classList.toggle('selected');
}