document.addEventListener('DOMContentLoaded', function () {
    // Карусель для абонементов
    const cards = document.querySelectorAll('.abonement-card');
    const prevBtn = document.getElementById('abonement-prev');
    const nextBtn = document.getElementById('abonement-next');
    let current = 0;
    const total = cards.length;

    function showCard(idx) {
        cards.forEach((card, i) => {
            card.style.display = (i === idx) ? '' : 'none';
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function () {
            current = (current - 1 + total) % total;
            showCard(current);
        });

        nextBtn.addEventListener('click', function () {
            current = (current + 1) % total;
            showCard(current);
        });

        showCard(current);
    }

    // Карусель для секции "О нас"
    const aboutCarousel = document.querySelector('.about-carousel-section');
    
    if (aboutCarousel) {
        const images = [
            '/src/assets/images/aboutUs/work1.png',
            '/src/assets/images/aboutUs/work2.png', 
            '/src/assets/images/aboutUs/work3.png',
            '/src/assets/images/aboutUs/garden1.png',
            '/src/assets/images/aboutUs/garden2.png'
        ];

        const track = aboutCarousel.querySelector('.carousel-track');
        let currentIndex = 2; // индекс активного (большого) фото

        function renderCarousel() {
            if (!track) return;
            
            track.innerHTML = '';
            for (let i = 0; i < images.length; i++) {
                let className = 'carousel-img hidden';
                
                // Вычисляем позиции для зацикленной карусели
                const leftSmall = (currentIndex - 2 + images.length) % images.length;
                const rightSmall = (currentIndex - 1 + images.length) % images.length;
                
                if (i === leftSmall) {
                    className = 'carousel-img small';
                } else if (i === rightSmall) {
                    className = 'carousel-img small right';
                } else if (i === currentIndex) {
                    className = 'carousel-img active';
                }
                
                const img = document.createElement('img');
                img.src = images[i];
                img.className = className;
                img.alt = `Фото ${i+1}`;
                track.appendChild(img);
            }
        }

        function next() {
            currentIndex = (currentIndex + 1) % images.length;
            renderCarousel();
        }
        
        function prev() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            renderCarousel();
        }

        const nextBtn = aboutCarousel.querySelector('#carousel-next');
        const prevBtn = aboutCarousel.querySelector('#carousel-prev');
        
        if (nextBtn) {
            nextBtn.addEventListener('click', next);
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', prev);
        }

        // Инициализация карусели
        renderCarousel();
    }
});