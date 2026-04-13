const header = document.querySelector('.main-header');

document.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// --- Video Loading ---
document.querySelectorAll('.bg-video').forEach(video => {
    if (video.readyState >= 2) {
        video.classList.add('loaded');
    } else {
        video.addEventListener('loadeddata', () => {
            video.classList.add('loaded');
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('[data-sal]');
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('.main-nav a');
    const logoLink = document.querySelector('.logo');
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    let currentSectionIndex = 0;
    let isScrolling = false;

    // --- Scroll Indicator ---
    scrollIndicator.addEventListener('click', () => {
        scrollToSection(1);
    });

    // --- Hamburger Menu ---
    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('menu-open');
        mainNav.classList.toggle('menu-open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('menu-open');
            mainNav.classList.remove('menu-open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // --- Animation and Section Tracking Observer ---
    const dotLinks = document.querySelectorAll('.dot-link');

    function updateDotNav(sectionId) {
        dotLinks.forEach(dot => {
            dot.classList.toggle('active', dot.dataset.section === sectionId);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                const index = Array.from(sections).indexOf(entry.target);
                if (index !== -1) {
                    currentSectionIndex = index;
                    updateDotNav(entry.target.id);
                }
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.6
    });
    sections.forEach(section => observer.observe(section));

    // --- Dot Navigation Clicks ---
    dotLinks.forEach(dot => {
        dot.addEventListener('click', () => {
            const targetId = dot.dataset.section;
            const targetSection = document.getElementById(targetId);
            const targetIndex = Array.from(sections).indexOf(targetSection);
            if (targetIndex !== -1) {
                scrollToSection(targetIndex);
            }
        });
    });

    // --- Smooth Scrolling Logic ---
    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            isScrolling = true;
            const targetTop = sections[index].offsetTop;
            window.scrollTo({ top: targetTop, behavior: 'smooth' });

            setTimeout(() => {
                isScrolling = false;
            }, 800);
        }
    }

    // --- Wheel Event Listener (Magnetic Scroll) ---
    window.addEventListener('wheel', (event) => {
        if (isScrolling) {
            event.preventDefault();
            return;
        }

        const currentSection = sections[currentSectionIndex];

        // Special handling for the 'projects' section internal scroll
        if (currentSection.id === 'projects') {
            const { scrollTop, scrollHeight, clientHeight } = currentSection;
            if (scrollHeight > clientHeight) {
                if (event.deltaY > 0 && scrollTop + clientHeight < scrollHeight - 5) return;
                if (event.deltaY < 0 && scrollTop > 5) return;
            }
        }

        // Section switching
        if (event.deltaY > 0) {
            if (currentSectionIndex < sections.length - 1) {
                event.preventDefault();
                scrollToSection(currentSectionIndex + 1);
            }
        } else {
            if (currentSectionIndex > 0) {
                event.preventDefault();
                scrollToSection(currentSectionIndex - 1);
            }
        }
    }, { passive: false });

    // --- Navigation Links ---
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                event.preventDefault();

                const targetSection = document.querySelector(targetId);
                const targetIndex = Array.from(sections).indexOf(targetSection);
                if (targetIndex !== -1) {
                    scrollToSection(targetIndex);
                }
            }
        });
    });

    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(0);
    });

    // --- Projects Video Height Sync ---
    const projectsSection = document.getElementById('projects');
    const projectsVideo = document.getElementById('projects-video');
    function syncProjectsHeight() {
        if (projectsSection && projectsVideo) {
            projectsVideo.style.height = `${projectsSection.scrollHeight}px`;
        }
    }
    setTimeout(syncProjectsHeight, 500);
    window.addEventListener('resize', syncProjectsHeight);

    // --- Project Card Clicks ---
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const project = card.getAttribute('data-project');
            let url = '';
            switch(project) {
                case 'calendar-automation': url = 'https://gitlab.com/Domien023/calendar-automation'; break;
                case 'lotnisko': url = 'https://gitlab.com/Domien023/airport-2.git'; break;
                case 'yt-lottery': url = 'https://ytlottery.pl'; break;
                case 'client-server': url = 'https://gitlab.com/Domien023/client-server.git'; break;
                case 'devlog': url = 'https://gitlab.com/Domien023/devlog.git'; break;
                case 'rest-api-lotnisko': url = 'https://gitlab.com/Domien023/rest-api-airport.git'; break;
                case 'spotify-api': url = 'https://gitlab.com/Domien023/spotify-api.git'; break;
            }
            if (url) window.open(url, '_blank');
        });
    });
});
