const testimonialSection = document.querySelector(".testimonials");

if (testimonialSection) {
    const slides = [...testimonialSection.querySelectorAll(".testimonial-card")];
    const previousButton = testimonialSection.querySelector(".testimonial-prev");
    const nextButton = testimonialSection.querySelector(".testimonial-next");
    const viewport = testimonialSection.querySelector(".testimonial-viewport");
    let currentSlide = 0;
    let isAnimating = false;

    const showSlide = (index, direction) => {
        if (isAnimating) {
            return;
        }

        const nextSlideIndex = (index + slides.length) % slides.length;

        if (nextSlideIndex === currentSlide) {
            return;
        }

        isAnimating = true;
        const outgoingSlide = slides[currentSlide];
        const incomingSlide = slides[nextSlideIndex];
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        incomingSlide.hidden = false;
        outgoingSlide.classList.add(`is-leaving-${direction}`);
        incomingSlide.classList.add(`is-entering-${direction}`);

        const finishTransition = () => {
            outgoingSlide.hidden = true;
            outgoingSlide.classList.remove(`is-leaving-${direction}`);
            incomingSlide.classList.remove(`is-entering-${direction}`);
            currentSlide = nextSlideIndex;
            isAnimating = false;
        };

        if (prefersReducedMotion) {
            finishTransition();
        } else {
            incomingSlide.addEventListener("animationend", finishTransition, { once: true });
        }
    };

    previousButton.addEventListener("click", () => showSlide(currentSlide - 1, "previous"));
    nextButton.addEventListener("click", () => showSlide(currentSlide + 1, "next"));

    viewport.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            showSlide(currentSlide - 1, "previous");
        }

        if (event.key === "ArrowRight") {
            showSlide(currentSlide + 1, "next");
        }
    });
}
