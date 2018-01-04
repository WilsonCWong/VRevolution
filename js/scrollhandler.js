/*=== Sticky navbar functionality ===*/
window.onscroll = () => {stickNavbar()};

var navbar = document.getElementsByClassName("navbar")[0];
var container = document.getElementsByClassName("container")[0];

var sticky = navbar.offsetTop;

function stickNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

/*=== Smooth scroll functionality ===*/

// We're only scrolling to the sections defined by the nav. If you wish to customize this,
// you'll have to select the elements and attach event listeners yourself.
var navLinks = document.getElementsByClassName("nav-link");

for (var i = 0; i < navLinks.length; i++) {
    var targetName = navLinks[i].getAttribute('href');
    var target = document.querySelector(targetName);

    // We need a closure to keep the right value of target by the time the function runs
    var targetClosure = function(target) {
        return function(ev) { scrollTo(ev, target); };
    };

    var handler = targetClosure(target);

    navLinks[i].addEventListener('click', handler, false);
}

function scrollTo(ev, elem) {
    ev.preventDefault();
    elem.focus();
    elem.scrollIntoView({
        behavior: 'smooth'
    })
}

// Not used. Can be useful for scrolling to any arbritrary element if you wish to do that.
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