// JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("header");
    var videoSection = document.getElementById("video");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        // Si la position de défilement est au-dessus de la section vidéo, ajoute une classe, sinon, supprime la classe.
        if (scrollPosition > videoSection.offsetTop) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    });
});
