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

const imageContainer = document.getElementById('image-container');
const totalImages = 11; // Changez le nombre d'images selon vos besoins
let currentIndex = 0;

// Génération des éléments HTML pour chaque image
for (let i = 1; i <= totalImages; i++) {
    const imgElement = document.createElement('img');
    imgElement.src = `../img/carousel/img${i}.png`;
    imgElement.alt = `Image ${i}`;
    imgElement.className = 'carousel-image';
    imgElement.addEventListener('click', () => showImage(i - 1)); // Soustrayez 1 pour l'index correct
    imageContainer.appendChild(imgElement);
}

// Fonction pour afficher une image spécifique
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

// Défilement automatique du carrousel
setInterval(nextImage, 5000); // Changez la valeur pour ajuster la vitesse du défilement