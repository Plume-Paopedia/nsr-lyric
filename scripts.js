document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lightbox effect for images
    const images = document.querySelectorAll('.image-gallery img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            lightbox.classList.add('lightbox');
            document.body.appendChild(lightbox);

            const imgClone = img.cloneNode();
            lightbox.appendChild(imgClone);

            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });

    // Zoom effect on images
    document.querySelectorAll('.img-fluid').forEach(img => {
        img.classList.add('zoom');
    });

    // Show extra content on button click
    document.getElementById('loadMoreBtn').addEventListener('click', function() {
        const extraContent = document.getElementById('extraContent');
        if (extraContent.style.display === "none") {
            extraContent.style.display = "block";
            this.textContent = "Voir moins";
        } else {
            extraContent.style.display = "none";
            this.textContent = "En savoir plus";
        }
    });
});