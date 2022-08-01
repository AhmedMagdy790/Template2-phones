let iconMenue = document.getElementById("icone-menu");
let links = document.getElementById("links");

iconMenue.onclick = function () {
    links.style.display = "flex";
    window.onscroll = () => {
        links.style.display = "none";
    }
} 

links.onclick = () => {
    links.style.display = "none";
}

let nav = document.getElementById("nav")

window.onscroll = () => {

    // if(window.scrollY === 0) {
    //     nav.style.position = "relative";
    //     nav.style.background = "red";
    // }else {
    // }
    nav.style.position = "fixed";
    nav.style.background = "#fff";
    
}
