const header = document.querySelector('.main-header');

document.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('[data-sal]');
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('.main-nav a');
    const logoLink = document.querySelector('.logo');
    let currentSectionIndex = 0;
    let isScrolling = false;

    // --- Animation and Section Tracking Observer ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Set animations for visible elements
                entry.target.classList.add('is-visible');

                // Update the current section index when a section is mostly visible
                const index = Array.from(sections).indexOf(entry.target);
                if (index !== -1) {
                    currentSectionIndex = index;
                }
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.7 // A threshold of 0.7 means the section is considered "current" when 70% visible
    });
    sections.forEach(section => observer.observe(section)); // Observe all sections

    // --- Smooth Scrolling Logic ---
    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            isScrolling = true;
            sections[index].scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // --- Event listener for when scroll animation finishes ---
    window.addEventListener('scrollend', () => {
        // Allow new scroll interactions only after the previous one has completely finished
        isScrolling = false;
    });

    const footer = document.querySelector('.main-footer');

    // --- Wheel Event Listener ---
    window.addEventListener('wheel', (event) => {
        // If a smooth scroll animation is in progress, ignore new wheel events
        if (isScrolling) {
            event.preventDefault();
            return;
        }

        const currentSection = sections[currentSectionIndex];

        // Handle showing/hiding the footer
        if (currentSection.id === 'about' && event.deltaY > 0) {
            event.preventDefault();
            footer.classList.add('is-visible');
            return;
        } 
        if (footer.classList.contains('is-visible') && event.deltaY < 0) {
            event.preventDefault();
            footer.classList.remove('is-visible');
            return;
        }

        // Special handling for the 'projects' section to allow internal scrolling
        if (currentSection.id === 'projects') {
            const { scrollTop, scrollHeight, clientHeight } = currentSection;

            // Check if the section is scrollable
            if (scrollHeight > clientHeight) {
                // Scrolling down: if not at the bottom, allow native scroll and exit
                if (event.deltaY > 0 && scrollTop + clientHeight < scrollHeight - 1) {
                    return;
                }
                // Scrolling up: if not at the top, allow native scroll and exit
                if (event.deltaY < 0 && scrollTop > 1) {
                    return;
                }
            }
        }

        // If we're here, we're performing a section-to-section scroll.
        // Prevent the default wheel action to avoid double-scrolling.
        event.preventDefault();

        // Determine scroll direction and trigger section change
        if (event.deltaY > 0) {
            // Scrolling down
            if (currentSectionIndex < sections.length - 1) {
                scrollToSection(currentSectionIndex + 1);
            }
        } else {
            // Scrolling up
            if (currentSectionIndex > 0) {
                scrollToSection(currentSectionIndex - 1);
            }
        }
    }, { passive: false }); // passive: false is needed to call preventDefault

    // --- Navigation Link Listeners ---
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');

            if (targetId.startsWith('#')) {
                event.preventDefault();

                if (targetId === '#footer') {
                    scrollToSection(sections.length - 1); // Scroll to the last section
                    setTimeout(() => {
                        footer.classList.add('is-visible');
                    }, 800); // Delay to allow for scroll animation
                    return;
                }

                const targetSection = document.querySelector(targetId);
                const targetIndex = Array.from(sections).indexOf(targetSection);

                if (targetIndex !== -1) {
                    scrollToSection(targetIndex);
                }
            }
        });
    });

    // --- Logo Link Listener ---
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(0);
    });

    // --- Projects Background Height ---
    const projectsSection = document.getElementById('projects');
    const projectsVideo = document.getElementById('projects-video');
    let styleSheet = null;

    function setProjectsBackgroundHeight() {
        if (!styleSheet) {
            styleSheet = document.createElement('style');
            document.head.appendChild(styleSheet);
        }
        const scrollHeight = projectsSection.scrollHeight;
        // Set height of video
        projectsVideo.style.height = `${scrollHeight}px`;
        // Set height of overlay
        styleSheet.innerHTML = `#projects::after { height: ${scrollHeight}px; }`;
    }

    // Set height on load (with a delay) and resize
    setTimeout(setProjectsBackgroundHeight, 100);
    window.addEventListener('resize', setProjectsBackgroundHeight);

    
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const projectName = card.getAttribute('data-project');

        let url = '';
        if (projectName === 'calendar-automation') {
            url = 'https://gitlab.com/Domien023/calendar-automation'; // Assumption, update if different
        } else if (projectName === 'lotnisko') {
            url = 'https://gitlab.com/Domien023/airport-2.git';
        } else if (projectName === 'yt-lottery') {
            url = 'https://ytlottery.pl';
        } else if (projectName === 'client-server') {
            url = 'https://gitlab.com/Domien023/client-server.git';
        } else if (projectName === 'devlog') {
            url = 'https://gitlab.com/Domien023/devlog.git';
        } else if (projectName === 'rest-api-lotnisko') {
            url = 'https://gitlab.com/Domien023/rest-api-airport.git';
        } else if (projectName === 'spotify-api') {
            url = 'https://gitlab.com/Domien023/spotify-api.git';
        }

        if (url) {
            card.addEventListener('click', () => {
                window.open(url, '_blank');
            });
        }
    });
});