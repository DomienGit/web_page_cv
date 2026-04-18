const header = document.querySelector('.main-header');

// --- Language System ---
const translations = {
    pl: {
        nav_home: 'Home',
        nav_skills: 'Technologie',
        nav_projects: 'Projekty',
        nav_about: 'O mnie',
        nav_contact: 'Kontakt',
        hero_greeting: 'Cześć!',
        hero_description: 'Jestem Dominik. Łączę pasję do technologii z praktycznymi umiejętnościami – nie tylko piszę kod w Pythonie, ale też potrafię zautomatyzować jego wdrożenie na serwer.<br>Poza programowaniem ładuję baterie jeżdżąc na rowerze i próbując nowych rzeczy. <br>Aktualnie szukam swojej pierwszej pracy jako Backend Developer, gdzie będę mógł przełożyć moje portfolio na realną wartość dla firmy. <br>Zapraszam do sprawdzenia moich projektów!',
        scroll_text: 'Scroll',
        skills_title: 'Technologie',
        skill_backend_header: 'Backend & Logika Aplikacji',
        skill_backend_1: '<strong>Język:</strong> Python',
        skill_backend_2: '<strong>Frameworki:</strong> FastAPI, Flask',
        skill_backend_3: '<strong>Architektura:</strong> Sockety, client-server',
        skill_backend_4: '<strong>Wydajność:</strong> Threading, multiprocessing',
        skill_db_header: 'Bazy Danych',
        skill_db_3: '<strong>Bezpieczeństwo:</strong> hash+salt',
        skill_db_4: '<strong>Projektowanie:</strong> Modelowanie danych, relacje',
        skill_devops_header: 'Infrastruktura & DevOps',
        skill_devops_1: '<strong>Konteneryzacja:</strong> Docker',
        skill_devops_2: '<strong>Serwery:</strong> Linux (konfiguracja i zarządzanie VPS)',
        skill_devops_3: '<strong>Wersjonowanie kodu:</strong> Git',
        skill_ai_header: 'Sztuczna Inteligencja & API',
        skill_ai_2: '<strong>Integracje:</strong> Google Calendar API, Spotify API',
        skill_ai_3: '<strong>Protokoły:</strong> IMAP/SMTP (automatyzacja mailowa)',
        skill_test_header: 'Testowanie & Jakość Kodu',
        skill_test_1: '<strong>Frameworki testowe:</strong> unittest, pytest',
        skill_test_2: '<strong>Praktyki:</strong> Clean Code, PEP8',
        projects_title: 'Projekty',
        project_calendar_desc: 'Automatyzacja tworzenia wydarzeń w Google Kalendarzu na podstawie e-maili. System monitoruje skrzynkę i wykorzystuje AI (OpenAI) do ekstrakcji szczegółów spotkań.',
        project_airport_desc: 'Symulacja lotniska w czasie rzeczywistym z wizualizacją 2D i wielowątkowym zarządzaniem ruchem samolotów.',
        project_ytlottery_desc: 'Aplikacja webowa hostowana na serwerze VPS, służąca do losowań na żywo na YouTube. Automatycznie pobiera uczestników z czatu i oferuje animację "slot machine".',
        project_clientserver_desc: 'Aplikacja z uwierzytelnianiem i bezpiecznym systemem wymiany wiadomości oparta na socketach.',
        project_devlog_desc: 'Dziennik programisty z automatycznym tagowaniem wpisów przy użyciu NLP (spaCy) i konteneryzacją Docker.',
        project_restapi_desc: 'Interfejs API do monitorowania stanu lotniska, historii lądowań oraz analizy danych o kolizjach.',
        project_spotify_desc: 'Integracja pozwalająca na sterowanie muzyką i wybór albumów bezpośrednio przez Spotify API.',
        about_title: 'O mnie',
        about_description: 'W pracy stawiam na otwartą komunikację i wymianę wiedzy. Szukam środowiska, w którym będę mógł uczyć się od doświadczonych inżynierów, chętnie przyjmując feedback, aby stale stawać się lepszym programistą. Moje wcześniejsze doświadczenia w innych branżach nauczyły mnie dużej elastyczności, odpowiedzialności za zadania oraz umiejętności dogadywania się z każdym. Doskonale rozumiem, że technologia to tylko narzędzie – na koniec dnia liczy się to, by mój kod rozwiązywał realne problemy i dowoził wartość biznesową dla zespołu.',
        contact_title: 'Kontakt',
        contact_subtitle: 'Masz pytanie lub chcesz współpracować? Napisz do mnie!',
        footer: '&copy; 2025 Dominik Solpa. Wszelkie prawa zastrzeżone.'
    },
    en: {
        nav_home: 'Home',
        nav_skills: 'Technologies',
        nav_projects: 'Projects',
        nav_about: 'About me',
        nav_contact: 'Contact',
        hero_greeting: 'Hi!',
        hero_description: "I'm Dominik. I combine a passion for technology with practical skills – not only do I write code in Python, but I can also automate its deployment to a server.<br>Beyond programming, I recharge by cycling and trying new things. <br>I'm currently looking for my first job as a Backend Developer, where I can translate my portfolio into real value for a company. <br>Feel free to check out my projects!",
        scroll_text: 'Scroll',
        skills_title: 'Technologies',
        skill_backend_header: 'Backend & Application Logic',
        skill_backend_1: '<strong>Language:</strong> Python',
        skill_backend_2: '<strong>Frameworks:</strong> FastAPI, Flask',
        skill_backend_3: '<strong>Architecture:</strong> Sockets, client-server',
        skill_backend_4: '<strong>Performance:</strong> Threading, multiprocessing',
        skill_db_header: 'Databases',
        skill_db_3: '<strong>Security:</strong> hash+salt',
        skill_db_4: '<strong>Design:</strong> Data modeling, relationships',
        skill_devops_header: 'Infrastructure & DevOps',
        skill_devops_1: '<strong>Containerization:</strong> Docker',
        skill_devops_2: '<strong>Servers:</strong> Linux (VPS configuration and management)',
        skill_devops_3: '<strong>Version control:</strong> Git',
        skill_ai_header: 'Artificial Intelligence & API',
        skill_ai_2: '<strong>Integrations:</strong> Google Calendar API, Spotify API',
        skill_ai_3: '<strong>Protocols:</strong> IMAP/SMTP (email automation)',
        skill_test_header: 'Testing & Code Quality',
        skill_test_1: '<strong>Testing frameworks:</strong> unittest, pytest',
        skill_test_2: '<strong>Practices:</strong> Clean Code, PEP8',
        projects_title: 'Projects',
        project_calendar_desc: 'Automation of Google Calendar event creation based on emails. The system monitors the inbox and uses AI (OpenAI) to extract meeting details.',
        project_airport_desc: 'Real-time airport simulation with 2D visualization and multi-threaded aircraft traffic management.',
        project_ytlottery_desc: 'Web application hosted on a VPS server for live YouTube giveaways. Automatically fetches participants from chat and offers a "slot machine" animation.',
        project_clientserver_desc: 'Application with authentication and secure messaging system based on sockets.',
        project_devlog_desc: "Developer's diary with automatic entry tagging using NLP (spaCy) and Docker containerization.",
        project_restapi_desc: 'API interface for monitoring airport status, landing history, and collision data analysis.',
        project_spotify_desc: 'Integration allowing music control and album selection directly through the Spotify API.',
        about_title: 'About me',
        about_description: "At work, I value open communication and knowledge sharing. I'm looking for an environment where I can learn from experienced engineers, readily accepting feedback to constantly become a better programmer. My previous experiences in other industries have taught me great flexibility, responsibility for tasks, and the ability to get along with anyone. I perfectly understand that technology is just a tool – at the end of the day, what matters is that my code solves real problems and delivers business value for the team.",
        contact_title: 'Contact',
        contact_subtitle: 'Have a question or want to collaborate? Write to me!',
        footer: '&copy; 2025 Dominik Solpa. All rights reserved.'
    }
};

let currentLang = localStorage.getItem('lang') || 'pl';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        langToggle.querySelector('.lang-label').textContent = lang === 'pl' ? 'EN' : 'PL';
    }
}

document.querySelector('.lang-toggle').addEventListener('click', () => {
    setLanguage(currentLang === 'pl' ? 'en' : 'pl');
});

setLanguage(currentLang);

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
            sections[index].scrollIntoView({ behavior: 'smooth' });
        }
    }

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
                case 'calendar-automation': url = 'https://gitlab.com/Domien023/email_agent.git'; break;
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
