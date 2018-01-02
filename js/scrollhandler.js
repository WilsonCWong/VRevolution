/*=== Sticky navbar functionality ===*/
window.onscroll = () => {stickNavbar()};

var navbar = document.getElementsByClassName("navbar")[0];
var container = document.getElementsByClassName("container")[0];

var sticky = navbar.offsetTop;

function stickNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        container.style.paddingTop = String(container.style.paddingTop + navbar.offsetHeight + "px");
    } else {
        navbar.classList.remove("sticky");
        container.style.removeProperty('padding-top');
        if (container.getAttribute('style') === "") {
            container.removeAttribute('style');
        }
    }
}

/*=== Smooth scroll functionality ===*/


function getElemDistance(elem) {
    var location = 0;
    if (elem.offsetParent) {
        do {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        } while (elem);
    }

    return location >= 0 ? location : 0;
}