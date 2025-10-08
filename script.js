// --- Countdown Timer ---
// Set the date for the wedding: March 15, 2026, at 8:00 PM (20:00:00)
const weddingDate = new Date("March 15, 2026 20:00:00").getTime();

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
    const haldiBtn = document.getElementById('haldi-calendar-link');
    const mehendiBtn = document.getElementById('mehendi-calendar-link');
    const vivahBtn = document.getElementById('vivah-calendar-link');

    const mainVenue = "Shahu Guest House, Colonelganj, Gonda, U.P.";
    const homeVenue = "Home, Sweet Home, Gonda, Uttar Pradesh";
    const details = "You're invited to celebrate the wedding of Shiv & Sudha. We seek your blessings.";

    // --- Event Details (Times are in UTC, assuming IST is UTC+5:30) ---
    const events = {
        tilak: {
            title: "Tilak Ceremony: Shiv & Sudha",
            // Date: Nov 10, 2025, 6:00 PM - 8:00 PM IST (12:30 - 14:30 UTC)
            dates: "20251110T123000Z/20251110T143000Z",
            location: mainVenue,
            details: details
        },
        haldi: {
            title: "Haldi Ceremony: Shiv & Sudha",
            // Date: Nov 12, 2025, 11:00 AM - 1:00 PM IST (05:30 - 07:30 UTC)
            dates: "20251112T053000Z/20251112T073000Z",
            location: homeVenue,
            details: details
        },
        mehendi: {
            title: "Mehendi Ceremony: Shiv & Sudha",
            // Date: Nov 13, 2025, 4:00 PM - 6:00 PM IST (10:30 - 12:30 UTC)
            dates: "20251113T103000Z/20251113T123000Z",
            location: homeVenue,
            details: details
        },
        vivah: {
            title: "Wedding: Shiv & Sudha",
            // Date: Nov 15, 2025, 8:00 PM - 10:00 PM IST (14:30 - 16:30 UTC)
            dates: "20251115T143000Z/20251115T163000Z",
            location: mainVenue,
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

    if (tilakBtn) tilakBtn.href = createGoogleCalendarLink(events.tilak);
    if (haldiBtn) haldiBtn.href = createGoogleCalendarLink(events.haldi);
    if (mehendiBtn) mehendiBtn.href = createGoogleCalendarLink(events.mehendi);
    if (vivahBtn) vivahBtn.href = createGoogleCalendarLink(events.vivah);
});


// --- Fine-tuned Hero Section Interactivity ---
document.addEventListener('DOMContentLoaded', () => {
    // RSVP button smooth scroll
    const heroRsvpBtn = document.getElementById('ftn-hero-rsvp-btn');
    const rsvpSection = document.querySelector('.rsvp');

    if (heroRsvpBtn && rsvpSection) {
        heroRsvpBtn.addEventListener('click', (e) => {
            e.preventDefault();
            rsvpSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Language toggle functionality
    const langEnBtn = document.getElementById('ftn-lang-en');
    const langHiBtn = document.getElementById('ftn-lang-hi');
    const translatableElements = document.querySelectorAll('#ftn-hero_mobile_v1 [lang]');

    const setLanguage = (lang) => {
        translatableElements.forEach(el => {
            el.style.display = el.getAttribute('lang') === lang ? '' : 'none';
        });

        // Update button states
        if (lang === 'en') {
            langEnBtn.classList.add('active');
            langEnBtn.setAttribute('aria-pressed', 'true');
            langHiBtn.classList.remove('active');
            langHiBtn.setAttribute('aria-pressed', 'false');
        } else {
            langHiBtn.classList.add('active');
            langHiBtn.setAttribute('aria-pressed', 'true');
            langEnBtn.classList.remove('active');
            langEnBtn.setAttribute('aria-pressed', 'false');
        }
    };

    if (langEnBtn && langHiBtn) {
        langEnBtn.addEventListener('click', () => setLanguage('en'));
        langHiBtn.addEventListener('click', () => setLanguage('hi'));

        // Set initial language based on which button is active
        if(langHiBtn.classList.contains('active')) {
            setLanguage('hi');
        } else {
            setLanguage('en');
        }
    }
});