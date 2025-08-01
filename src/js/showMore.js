document.addEventListener('DOMContentLoaded', function () {
    const showMoreBtn = document.getElementById('show-more-btn');
    const hiddenCards = document.querySelectorAll('.hidden-cards');
    
    if (showMoreBtn && hiddenCards.length > 0) {
        showMoreBtn.addEventListener('click', function () {
            // Показываем все скрытые карточки
            hiddenCards.forEach(card => {
                card.classList.add('show');
            });
            
            // Кнопка остается видимой после показа карточек
            // showMoreBtn.style.display = 'none'; // Убираем эту строку
        });
    }
});