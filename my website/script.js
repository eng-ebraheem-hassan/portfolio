document.querySelectorAll('#contact ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        const confirmLeave = confirm('هل تريد حقاً مغادرة الصفحة لزيارة هذا الرابط؟');
        if (!confirmLeave) {
            event.preventDefault();
        }
    });
});

const portfolioImages = document.querySelectorAll('.portfolio-img');

portfolioImages.forEach(image => {
    image.addEventListener('click', function() {
        const fullScreenDiv = document.createElement('div');
        fullScreenDiv.style.position = 'fixed';
        fullScreenDiv.style.top = '0';
        fullScreenDiv.style.left = '0';
        fullScreenDiv.style.width = '100%';
        fullScreenDiv.style.height = '100%';
        fullScreenDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        fullScreenDiv.style.display = 'flex';
        fullScreenDiv.style.justifyContent = 'center';
        fullScreenDiv.style.alignItems = 'center';
        fullScreenDiv.style.cursor = 'pointer';

        const fullScreenImage = document.createElement('img');
        fullScreenImage.src = this.src;
        fullScreenImage.style.maxWidth = '90%';
        fullScreenImage.style.maxHeight = '90%';

        fullScreenDiv.appendChild(fullScreenImage);
        document.body.appendChild(fullScreenDiv);

        fullScreenDiv.addEventListener('click', function() {
            document.body.removeChild(fullScreenDiv);
        });
    });
});
