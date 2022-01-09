export default function dropMenuToggle(event) {
    const menuClass = event.target.firstElementChild;
    menuClass.classList.toggle('selected');
}