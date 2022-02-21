let navbar_container = document.querySelector('ul#navbar_container');
let menu_status = 'h'

function showMenu() {
    if (menu_status == 'v') {
        navbar_container.style = 'display: none;'
        menu_status = 'h'
    } else if (menu_status == 'h') {
        navbar_container.style = 'display: block;'
        menu_status = 'v'
    }
}