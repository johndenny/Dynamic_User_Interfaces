export default function sidebarSubMenuToggle(event) {
    const subMenu = event.target.firstElementChild;
    subMenu.classList.toggle('selected');
}