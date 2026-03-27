# Kontekst Projektu: Web Page CV - Dominik Solpa

To jest osobiste portfolio/CV Dominika Solpy. Strona jest nowoczesnym, jednostronicowym (SPA-like) serwisem z silnym naciskiem na estetykę (wideo w tle, animacje).

## Kluczowe Technologie
- **HTML5/CSS3**: Czysty HTML i Vanilla CSS (wykorzystanie zmiennych CSS, Flexbox, Grid).
- **JavaScript**: Vanilla JS do obsługi nawigacji i efektów.
- **Design**: Dark mode, wideo tła (`black.mp4`), fonty Poppins i Roboto.

## Struktura Projektu
- `index.html`: Główna struktura (Sekcje: Hero, Technologie, Projekty, O mnie, Kontakt).
- `style.css`: Definicje stylów, zmienne kolorystyczne, animacje `data-sal`.
- `script.js`: Logika przewijania, Intersection Observer, obsługa kart projektów.
- `images/`: Zasoby wizualne, ikony technologii i social media.
- `docs/cv.pdf`: Plik CV do pobrania.

## Ważne Mechanizmy
1. **Custom Scrolling**: W `script.js` zaimplementowano niestandardową obsługę kółka myszy (`wheel`), która przełącza całe sekcje.
2. **Animacje**: Wykorzystanie atrybutu `data-sal="slide-up"` wraz z `IntersectionObserver` w JS do wyzwalania animacji wejścia.
3. **Sekcja Projekty**: Karty projektów mają dynamiczne tła i nakładki (overlay) z opisem technologii. Kliknięcie w kartę otwiera odpowiednie repozytorium na GitLab.
4. **Sticky Header**: Nagłówek zmienia wygląd po przewinięciu (`.scrolled`).

## Wytyczne dla Gemini
- Zachowuj spójność wizualną (używaj zmiennych CSS z `:root`).
- Przy modyfikacjach JS uważaj na logikę `isScrolling` i `currentSectionIndex`, aby nie zepsuć autorskiego systemu nawigacji.
- Preferuj czysty kod bez zewnętrznych bibliotek (Vanilla JS/CSS).
- Wszystkie nowe sekcje powinny wspierać animacje `data-sal`.
