let currentSlide = 0;
const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length;

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlidePosition();
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
