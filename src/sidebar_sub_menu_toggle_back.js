export default function sidebarSubMenuToggleBack(event) {
    const subMenu = event.target.parentElement;
    event.stopPropagation();
    subMenu.classList.toggle('selected');
}