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

document.addEventListener("DOMContentLoaded", function () {
    const thumbnailsContainer = document.getElementById("thumbnails-container");
    const fullImageContainer = document.getElementById("full-image-container");
    const fullImage = document.getElementById("full-image");

    const totalImages = 18;  // Remplacez par le nombre total d'images
    let imagesPath = "../img/gallery/img";

    // Génération des miniatures
    for (let i = 1; i <= totalImages; i++) {
        const thumbnail = document.createElement('img');
        thumbnail.src = `${imagesPath + i}.png`;
        thumbnail.alt = `Thumbnail ${i}`;
        thumbnail.className = 'thumbnail-image';
        thumbnail.addEventListener('click', () => showFullImage(i));
        thumbnailsContainer.appendChild(thumbnail);
    }

    function showFullImage(index) {
        fullImage.src = `${imagesPath + index}.png`;
        fullImageContainer.style.display = 'flex';
    }

    fullImageContainer.addEventListener('click', hideFullImage);

    function hideFullImage() {
        fullImageContainer.style.display = 'none';
    }
});