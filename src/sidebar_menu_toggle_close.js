export default function sidebarMenuToggleClose(event) {
    const modal = document.querySelector(".modal");
    const sidebarListClose = event.target.firstElementChild;
    const allSidebarSubMenu = Array.from(document.querySelectorAll('.subMenu'));
    const subMenuCheck = allSidebarSubMenu.findIndex(({classList}) => classList.contains('selected'));
    if (event.target === modal) {
        setTimeout(() => {modal.classList.toggle('selected')}, 300);
        sidebarListClose.classList.toggle('selected');
        modal.classList.toggle('background');
    } if (subMenuCheck > -1) {
        allSidebarSubMenu[subMenuCheck].classList.toggle('selected');
    }
}