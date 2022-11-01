/* Header blur on hover*/
window.addEventListener("scroll", function() {
    var b = document.querySelector("b");
    b.classList.toggle("sticky", window.scrollY > 800);
})

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 500);
})

window.addEventListener("scroll", function() {
    var opaque = document.querySelector("opaque");
    opaque.classList.toggle("sticky", window.scrollY > 300);
})

window.addEventListener("scroll", function() {
    var c = document.querySelector("c");
    c.classList.toggle("sticky", window.scrollY > 790);
})

window.addEventListener("scroll", function() {
    var d = document.querySelector("d");
    d.classList.toggle("sticky", window.scrollY > 790);
})




/* Launch Particle-JS*/

window.particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});