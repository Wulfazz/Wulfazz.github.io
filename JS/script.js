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
    const imageContainer = document.getElementById("image-container");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentIndex = 0;
    let totalImages = 16;  // Remplacez par le nombre total d'images
    let imagesPath = "../img/carousel/img";

    // Génération des éléments HTML pour chaque image
    for (let i = 1; i <= totalImages; i++) {
        const imgElement = document.createElement('div');
        imgElement.style.backgroundImage = `url('${imagesPath + i}.png')`;
        imgElement.className = 'carousel-image';
        imgElement.addEventListener('click', () => showImage(i - 1));
        imageContainer.appendChild(imgElement);
    }

    function showImage(index) {
        currentIndex = index;
        const translateValue = -index * 100 + '%';
        imageContainer.style.transform = `translateX(${translateValue})`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    showImage(currentIndex);
});