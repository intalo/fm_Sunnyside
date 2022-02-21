let navbar_container = document.querySelector("ul#navbar_container");
let menu_status = "h";

function showMenu() {
    if (menu_status == "v") {
        navbar_container.style =
            "opacity: 0; transition: 0.3s; top: -25px; width: 25vw;";
        menu_status = "h";
    } else if (menu_status == "h") {
        navbar_container.style =
            "opacity: 1; transition: 0.3s; top: 75px; width: 75vw;";
        menu_status = "v";
    }
}
