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

// Nav reponsive
document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
    });
});

// Gallery
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

// Données persos
var infosPersonnages = {

    // Infos LSPD
    "Capitaine": {
        "nom": "Capitaine",
        "description": "Personnage haut en couleur ! Sait piloter un hélicoptère et a parfois des problèmes de mémoires.",
        "image": "../img/teams/capitaine.png"
    },

    "Eliott": {
        "nom": "Matricule 07",
        "description": "Sergent dans le LSPD, il a réussi à passer en une soirée de cadet à sergent.",
        "image": "../img/teams/Elliot.png"
    },

    "Sean": {
        "nom": "Matricule 02",
        "description": "Inspecteur dans le LSPD, il est présent sur les enquêtes et les affaires coriaces.",
        "image": "../img/teams/Sean.png"
    },

    "Ana": {
        "nom": "Matricule 29",
        "description": "Inspecteur dans le LSPD, elle suit les pistes et coince les méchants.",
        "image": "../img/teams/Ana.png"
    },

    "Malena": {
        "nom": "Matricule 05",
        "description": "La loi ! C'est moi !",
        "image": "../img/teams/Malena.png"
    },

    "Miller": {
        "nom": "Matricule 25",
        "description": "Texan, il a un petit soucis avec les commentaires déplacés.",
        "image": "../img/teams/Miller.png"
    },

    "Adrien": {
        "nom": "Matricule 22",
        "description": "Arrivée récente dans le LSPD, mais bien actif.",
        "image": "../img/teams/Adrien.png"
    },

    // Infos EMS
    "Lazar": {
        "nom": "Lazar MIKHAILOV",
        "description": "Vous avez un bobo ? Dr.Lazar à la rescousse !",
        "image": "../img/teams/lazar.png"
    },

    "Turner": {
        "nom": "Timothy TURNER",
        "description": "Observer et soigner, tel est notre métier !",
        "image": "../img/teams/turner.png"
    },

    "Beatriz": {
        "nom": "Beatriz LUZ RIVERA",
        "description": "Encore vous ? Il va falloir penser à faire attention ...",
        "image": "../img/teams/béa.png"
    },

    "Alexiane": {
        "nom": "Alexiane VAN HEGEL",
        "description": "Vous avez un bobo ? Dr.Lazar à la rescousse !",
        "image": "../img/teams/Alexiane.png"
    },

    // Infos VAGOS
    "Maria": {
        "nom": "Maria-Carmen RODRIGUEZ-DIAZ",
        "description": "A une grande tendance à faire des doigts.",
        "image": "../img/teams/Maria.png"
    },

    "Guapo": {
        "nom": "Guapo VOCERO",
        "description": "Tape fort, si vous voulez vivre ! Evitez le ring !",
        "image": "../img/teams/guapo.png"
    },

    "Emiliano": {
        "nom": "Emiliano SUAREZ",
        "description": "Dit : 'Le boucher' ",
        "image": "../img/teams/emiliano.png"
    },

    // Infos MOREAU
    "Paul": {
        "nom": "Paul LOUIS",
        "description": "Très bien, discutons avant ou après les tirs ?",
        "image": "../img/teams/Paul.png"
    },

    "Jake": {
        "nom": "Jake LOUIS",
        "description": "Tu touches à ma soeur, tu te prends une balle !",
        "image": "../img/teams/Jake.png"
    },

    "Evlyn": {
        "nom": "Evlyn LOUIS",
        "description": "Si t'as du chocolat, on peut discuter ! Sinon, tu vas te faire buter !",
        "image": "../img/teams/Evlyn.png"
    },

    "Jules": {
        "nom": "Jules MCMILLAN",
        "description": "Moi ? Je suis innocent ...",
        "image": "../img/teams/Jules.png"
    },

    // Infos LOST
    "Prez": {
        "nom": "Ethan JONES",
        "description": "Chalut ! Prez des losts !",
        "image": "../img/teams/ethan.png"
    },

    "Chuck": {
        "nom": "Charles ANDERSON",
        "description": "Tu veux voir bambi ? C'est mon pied de bibiche !",
        "image": "../img/teams/chuck.png"
    },

    "Vixxen": {
        "nom": "Léa SCOTTSON",
        "description": "Si tu veux un exemple, j'en ai beaucoup et pour tout !",
        "image": "../img/teams/vixxen.png"
    },

    "Speedy": {
        "nom": "Steven WILLIAMS",
        "description": "La méfiance est la base de toute relations !",
        "image": "../img/teams/speedy.png"
    },
};

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("membreModal");
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var persoElements = document.querySelectorAll('.perso');
    persoElements.forEach(function(perso) {
        perso.addEventListener('click', function() {
            var persoName = perso.textContent || perso.innerText;
            var info = infosPersonnages[persoName];

            if (info) {
                document.getElementById('membreInfo').innerText = "Informations sur " + info.nom + ": " + info.description;
                document.getElementById('membreImage').src = info.image;
            } else {
                document.getElementById('membreInfo').innerText = "Aucune information disponible pour " + persoName;
                document.getElementById('membreImage').src = ''; // Mettre une image par défaut si nécessaire
            }

            modal.style.display = "block";
        });
    });
});