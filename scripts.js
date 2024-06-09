// scripts.js
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
});