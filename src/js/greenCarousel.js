 class Carousel {
      constructor(container) {
        this.container = container;
        this.track = container.querySelector('.green-carousel-track');
        this.slides = container.querySelectorAll('.green-carousel-slide');
        this.prevBtn = container.querySelector('.green-carousel-prev');
        this.nextBtn = container.querySelector('.green-carousel-next');
        this.currentIndex = 1; // Start with middle slide active
        this.isTransitioning = false;

        this.init();
      }

      init() {
        this.setupEventListeners();
        this.updateSlides();
        this.centerActiveSlide();
      }

      setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') {
            this.prev();
          } else if (e.key === 'ArrowRight') {
            this.next();
          }
        });

        // Touch/swipe support
        let startX = 0;
        let endX = 0;

        this.track.addEventListener('touchstart', (e) => {
          startX = e.touches[0].clientX;
        });

        this.track.addEventListener('touchend', (e) => {
          endX = e.changedTouches[0].clientX;
          this.handleSwipe(startX, endX);
        });

        // Mobile click navigation
        this.slides.forEach((slide, index) => {
          slide.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
              e.preventDefault();
              this.handleSlideClick(index);
            }
          });
        });

        // Handle window resize
        window.addEventListener('resize', () => {
          this.centerActiveSlide();
        });
      }

      handleSwipe(startX, endX) {
    const threshold = 50;
    const diff = startX - endX;

    if (Math.abs(diff) > threshold) {
        if (diff > 0) {
            this.next();
        } else {
            this.prev();
        }
    }
}


      prev() {
        if (this.isTransitioning) return;

        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
      }

      next() {
        if (this.isTransitioning) return;

        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlides();
      }

      updateSlides() {
        this.isTransitioning = true;

        // Remove active class from all slides
        this.slides.forEach(slide => {
          slide.classList.remove('green-active');
        });

        // Add active class to current slide
        this.slides[this.currentIndex].classList.add('green-active');

        // Center the active slide
        this.centerActiveSlide();

        // Update button states
        this.updateButtonStates();

        // Reset transition flag after animation completes
        setTimeout(() => {
          this.isTransitioning = false;
        }, 500); // Match CSS transition duration
      }

      centerActiveSlide() {
        const trackWidth = this.track.offsetWidth;
        const slideWidth = this.getSlideWidth();
        const gap = this.getGap();
        const totalSlideWidth = slideWidth + gap;
        const centerOffset = (trackWidth - slideWidth) / 2;
        const targetOffset = centerOffset - (this.currentIndex * totalSlideWidth);

        this.track.style.transform = `translateX(${targetOffset}px)`;
      }

      getSlideWidth() {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 400) return 200;
  if (windowWidth <= 600) return 250;
  if (windowWidth <= 900) return 300;
  return 400;
}


      getGap() {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 400) return 12; // 0.75rem
        if (windowWidth <= 600) return 16; // 1rem
        if (windowWidth <= 900) return 24; // 1.5rem
        return 32; // 2rem
      }

      updateButtonStates() {
        // Enable/disable buttons based on current position
        this.prevBtn.disabled = false;
        this.nextBtn.disabled = false;

        // Optional: Add visual feedback for disabled state
        this.prevBtn.style.opacity = '1';
        this.nextBtn.style.opacity = '1';
      }
    }

    // Initialize carousel when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
      const carouselContainer = document.querySelector('.green-carousel-container');
      if (carouselContainer) {
        new Carousel(carouselContainer);
      }
    });