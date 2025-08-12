const track = document.querySelector('.carousel-track');
    const leftBtn = document.querySelector('.arrow.left');
    const rightBtn = document.querySelector('.arrow.right');

    let items = Array.from(track.children);
    let isAnimating = false;

    function updateClasses() {
      items.forEach((item, index) => {
        item.className = 'carousel-item';
        if (index < 2) {
          item.classList.add('hidden');
        } else if (index === 2 || index === 3) {
          item.classList.add('small');
        } else if (index === 4) {
          item.classList.add('big', 'active');
        }
      });
    }

    function move(direction) {
      if (isAnimating) return;
      isAnimating = true;

      // Просто меняем порядок элементов в массиве
      if (direction === 'left') {
        items.unshift(items.pop());
      } else {
        items.push(items.shift());
      }

      // Обновляем DOM
      updateDOM();

      // Даем время на завершение transition
      setTimeout(() => {
        isAnimating = false;
      }, 500);
    }

    function updateDOM() {
      track.innerHTML = '';
      items.forEach(item => track.appendChild(item));
      updateClasses();
    }

    leftBtn.addEventListener('click', () => move('left'));
    rightBtn.addEventListener('click', () => move('right'));

    updateClasses();
