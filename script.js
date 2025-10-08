// --- Countdown Timer ---
// Set the date for the wedding: Nov 15, 2025, at 8:00 PM (20:00:00)
const weddingDate = new Date("Nov 15, 2025 20:00:00").getTime();

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

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

// Initialize and add scroll event listener
window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

// Trigger on load
handleScrollAnimation();

// --- Google Calendar Link Generator ---
document.addEventListener('DOMContentLoaded', () => {
    const tilakBtn = document.getElementById('tilak-calendar-link');
    const vivahBtn = document.getElementById('vivah-calendar-link');

    const location = "Shahu Guest House, Colonelganj, Gonda, U.P.";
    const details = "You're invited to celebrate the wedding of Shiv & Sudha. We seek your blessings.";

    // --- Event Details (Times are in UTC) ---
    const events = {
        tilak: {
            title: "Tilak Ceremony: Shiv & Sudha",
            // Date: Nov 10, 2025, 6:00 PM - 8:00 PM IST (12:30 - 14:30 UTC)
            dates: "20251110T123000Z/20251110T143000Z",
            location: location,
            details: details
        },
        vivah: {
            title: "Wedding: Shiv & Sudha",
            // Date: Nov 15, 2025, 8:00 PM - 10:00 PM IST (14:30 - 16:30 UTC)
            dates: "20251115T143000Z/20251115T163000Z",
            location: location,
            details: details
        }
    };

    function createGoogleCalendarLink(event) {
        const baseUrl = "https://www.google.com/calendar/render?action=TEMPLATE";
        const params = new URLSearchParams({
            text: event.title,
            dates: event.dates,
            location: event.location,
            details: event.details,
            crm: 'BUSY'
        });
        return `${baseUrl}&${params.toString()}`;
    }

    tilakBtn.href = createGoogleCalendarLink(events.tilak);
    vivahBtn.href = createGoogleCalendarLink(events.vivah);
});