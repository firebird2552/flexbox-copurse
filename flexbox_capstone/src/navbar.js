const links = document.getElementById("navbar_links");
const hamburger_click = (e) => {
    if (links.classList.contains("show")) {
        links.classList.remove("show")
    }
    else {
        links.classList.toggle("show")
    }

}