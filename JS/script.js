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

// Conteneur / bouttons nav
const imageContainer = document.getElementById('image-container');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');

    // Nombre d'images
    const totalImages = 11;
    let currentIndex = 0;

    // Génération des éléments HTML pour chaque image
    for (let i = 1; i <= totalImages; i++) {
        const imgElement = document.createElement('img');
        // Source des images carousel
        imgElement.src = `../img/carousel/img${i}.png`;
        // Ajout détail en cas de soucis d'affichage
        imgElement.alt = `Image ${i}`;
        // Ajout d'une classe
        imgElement.className = 'carousel-image';
        imgElement.addEventListener('click', () => showImage(i - 1));
        imageContainer.appendChild(imgElement);
    }

    // Fonction pour affichage
    function showImage(index) {
        currentIndex = index;
        const translateValue = -index * 100 + '%';
        imageContainer.style.transform = `translateX(${translateValue})`;
    }

    // Fonction pour passer à l'image suivante
    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    // Fonction pour passer à l'image précédente
    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    // Gestion des événements pour les boutons de navigation
    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    // Défilement automatique du carrousel
    setInterval(nextImage, 4000); // Changez la valeur pour ajuster la vitesse du défilement