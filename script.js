// --- Countdown Timer ---
// Set the date for the wedding: Nov 15, 2025, at 5:00 PM (17:00:00)
const weddingDate = new Date("Nov 15, 2025 17:00:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    // When the countdown is over
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "The celebration is underway! Shiv Weds Sudha 🎉";
    }
}, 1000);


// --- Scroll Animation ---
const scrollElements = document.querySelectorAll(".animate-on-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add("is-visible");
};

const hideScrollElement = (element) => {
    element.classList.remove("is-visible");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else {
            // Optional: hide the element again when it scrolls out of view
            // hideScrollElement(el);
        }
    });
};

// Initialize and add scroll event listener
window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

// Trigger on load
handleScrollAnimation();