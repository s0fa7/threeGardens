document.addEventListener('DOMContentLoaded', function () {
    // Карусель для абонементов
    const cards = document.querySelectorAll('.plant-card');
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
    
});