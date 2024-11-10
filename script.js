let currentImageIndex = 1;

// Sélection des éléments HTML
const displayedImage = document.getElementById('displayedImage');
const imageNumber = document.getElementById('imageNumber');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Fonction pour charger l'image correspondante et mettre à jour le numéro
function loadImage(index) {
    const img = new Image();
    img.src = `${index}.jpg`;

    img.onload = function() {
        displayedImage.src = img.src;
        currentImageIndex = index;
        imageNumber.textContent = `Image ${currentImageIndex}`;
    };

    img.onerror = function() {
        alert('Il n\'y a plus d\'image');
    };
}

// Écouteur d'événement pour les boutons
nextBtn.addEventListener('click', () => {
    loadImage(currentImageIndex + 1);
});

prevBtn.addEventListener('click', () => {
    if (currentImageIndex > 1) {
        loadImage(currentImageIndex - 1);
    } else {
        alert('Vous êtes déjà à la première image');
    }
});

// Écouteur d'événement pour les touches du clavier
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        // Flèche droite pour image suivante
        loadImage(currentImageIndex + 1);
    } else if (event.key === 'ArrowLeft') {
        // Flèche gauche pour image précédente
        if (currentImageIndex > 1) {
            loadImage(currentImageIndex - 1);
        } else {
            alert('Vous êtes déjà à la première image');
        }
    }
});