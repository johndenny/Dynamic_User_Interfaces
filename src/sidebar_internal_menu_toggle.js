export default function sidebarInternalMenuToggle(event) {
    const sidebarInternalMenu = event.target.lastElementChild;
    event.stopPropagation()
    sidebarInternalMenu.classList.toggle('selected');
}