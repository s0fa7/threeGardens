window.onload = (event) => {

    const containers = document.querySelectorAll('.main-section-navigation-container');
    const mainImg = document.querySelector('.main-section-img img');

    let activeContainer = containers[0]; // по умолчанию выбран первый
    let previousState = new Map();

    const imageMap = {
        0: '/src/assets/images/main/tree-main1.png',
        1: '/src/assets/images/main/tree-main2.png',
        2: '/src/assets/images/main/tree-main3.png'
    };

    // Сохраняем изначальные классы всех элементов
    containers.forEach((container, index) => {
        const togglableElements = container.querySelectorAll('.hidden, .hidden-navigation-decorative');
        togglableElements.forEach(el => {
            previousState.set(el, {
                hasHidden: el.classList.contains('hidden'),
                hasDecorative: el.classList.contains('hidden-navigation-decorative')
            });
        });
    });

    // Сразу убираем классы у первого элемента
    if (activeContainer) {
        removeClasses(activeContainer);
        changeMainImage(imageMap[0]);
    }

    // Назначаем обработчики
    containers.forEach((container, index) => {
        container.addEventListener('click', () => {
            if (activeContainer && activeContainer !== container) {
                restoreClasses(activeContainer);
            }

            if (activeContainer !== container) {
                removeClasses(container);
                activeContainer = container;
                changeMainImage(imageMap[index]);
            } else {
                // Повторный клик — свернуть
                restoreClasses(container);
                activeContainer = null;
                changeMainImage(imageMap[0]); // вернём первую картинку
            }
        });
    });

    function removeClasses(container) {
        const elements = container.querySelectorAll('.hidden, .hidden-navigation-decorative');
        elements.forEach(el => {
            el.classList.remove('hidden');
            el.classList.remove('hidden-navigation-decorative');

            // 👇 Добавляем анимацию
            el.classList.add('animated-fade-in');

            // Удалим анимационный класс после завершения (если нужно перезапускать анимацию позже)
            el.addEventListener('animationend', () => {
                el.classList.remove('animated-fade-in');
            }, { once: true });
        });
    }


    function restoreClasses(container) {
        const elements = container.querySelectorAll('*');
        elements.forEach(el => {
            const state = previousState.get(el);
            if (state) {
                if (state.hasHidden) el.classList.add('hidden');
                else el.classList.remove('hidden');

                if (state.hasDecorative) el.classList.add('hidden-navigation-decorative');
                else el.classList.remove('hidden-navigation-decorative');
            }
        });
    }

    function changeMainImage(newSrc) {
        if (!mainImg) return;

        // Удалим анимацию, чтобы можно было перезапустить
        mainImg.classList.remove('animate-in');

        // Маленькая задержка — иначе анимация не перезапустится
        setTimeout(() => {
            mainImg.src = newSrc;

            // Перезапускаем анимацию
            mainImg.classList.add('animate-in');
        }, 50);
    }
}