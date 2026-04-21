# Lista zmian do poprawy - Portfolio CV

## UX / Doświadczenie użytkownika

- [x] **Hamburger menu na mobile** — nawigacja jest ukryta (`display: none`) bez żadnej alternatywy. Dodać hamburger icon z rozwijanym menu.
- [x] **Dot navigation (wskaźniki sekcji)** — boczne kropki pokazujące aktualną sekcję i łączną liczbę sekcji. Standard w SPA portfolio.
- [x] **Przycisk CTA w hero** — dodać "Zobacz projekty" / "Skontaktuj się" zamiast samego tekstu. Wyraźny następny krok dla użytkownika.
- [x] **Kontakt jako pełna sekcja** — zamiast ukrytego footer'a wysuwanego z dołu. Nieintuicyjne, użytkownik może nie wiedzieć że kontakt tam jest.
- [x] **Loading state / placeholder** — wideo w tle może się długo ładować. Dodać fallback (np. ciemne tło z gradientem) dopóki wideo się nie załaduje.

## Design / Estetyka

- [x] **Gradient accent color** — zamienić płaski `#007bff` na gradient (np. blue-to-cyan, blue-to-purple). Dodać do nagłówków, przycisków, hover efektów.
- [x] **Glassmorphism na header i kartach** — `backdrop-filter: blur()` + semi-transparent tło (`rgba`). Standard w dark-theme portfolio 2025.
- [x] **Pozbyć się inline styles** — przenieść wszystkie `style=""` z HTML do klas CSS (hero content, footer linki).
- [x] **Responsywna typografia w hero** — zamienić `font-size: 27px` na `clamp()` lub `vw` żeby tekst skalował się płynnie. Większy h1, wyraźniejsza hierarchia.
- [x] **Rozróżnienie wizualne kart projektów** — dodać gradient border na hover, ikony projektu, lub subtelne kolory różnicujące.
- [x] **Płynne przejścia między sekcjami** — sekcje jasne (skills, about) i ciemne (hero, projects) przechodzą ostro. Dodać gradient przejściowy lub spójny dark-theme na całej stronie.
- [x] **Odświeżyć sekcję Technologie** — akordeon z "+" jest outdated. Opcje: always-visible karty z ikonami tech, subtelny reveal bez klikania, lub minimalistyczne tagi.
- [x] **Dodać treść do logo** — `<a class="logo"></a>` jest puste. Dodać inicjały, ikonę lub imię.

## Techniczne / SEO

- [x] **Dodać favicon** — brak ikony w zakładce przeglądarki.
- [x] **Dodać meta description** — poprawi SEO i wygląd w wynikach wyszukiwania.
- [x] **Zaktualizować copyright** — zmienić 2025 na 2026 lub zrobić dynamicznie w JS (`new Date().getFullYear()`).
- [x] **`prefers-reduced-motion`** — wyłączać animacje i autoplay wideo dla użytkowników z wrażliwością na ruch. Wymagane dla dostępności (WCAG).
- [x] **Poprawić dostępność** — dodać `aria-label` do linków, `role` do nawigacji, focus styles dla klawiatury.

## Opcjonalne (do rozważenia)

- [x] **Przebudować custom scroll** — magnetic scroll (hijack kółka myszy) psuje dostępność i UX. Rozważyć zwykły smooth scroll z `scroll-behavior: smooth`.
- [x] **Angielska wersja językowa** — toggle PL/EN, popularne w portfolio programistów.
- [x] **Lazy loading obrazków** — `loading="lazy"` na `<img>` w sekcji about.
- [x] **Open Graph meta tagi** — lepszy podgląd przy udostępnianiu linku (LinkedIn, Facebook, Slack).
