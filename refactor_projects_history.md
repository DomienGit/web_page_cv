# Historia refaktoryzacji sekcji Projekty

## Cel zmian
Użytkownik zgłosił, że obecna sekcja projektów jest przytłaczająca, kafelki są za duże, a obrazki tła są zbędne i wprowadzają chaos wizualny. Celem była zmiana na styl minimalistyczny i bardziej czytelny.

## Przebieg prac

### 1. Zmiana stylów (style.css)
- Przejście z 2-kolumnowego na 3-kolumnowy grid (`grid-template-columns: repeat(3, 1fr)`).
- Rezygnacja z obrazków tła (`background-image`) na rzecz delikatnych, ciemnych kart (`rgba(255, 255, 255, 0.05)`).
- Dodanie obramowania i efektu hover (podświetlenie krawędzi na niebiesko i lekkie uniesienie karty).
- Ustawienie treści (tytuł, opis, tagi) jako zawsze widocznej (usunięcie `opacity: 0` z nakładek).

### 2. Uproszczenie struktury (index.html)
- Usunięcie tagów `style="background-image: ..."` z każdej karty.
- Usunięcie kontenerów `.project-overlay`.
- Skrócenie opisów projektów, aby były bardziej zwięzłe i pasowały do mniejszych kafelków.
- Dodanie projektu Spotify bezpośrednio jako `div.project-card` (zamiast owijania go w `<a>`), aby zachować spójność interakcji z pozostałymi kartami.

### 3. Logika interakcji (script.js)
- Zaktualizowanie listenera kliknięć, aby obsługiwał wszystkie karty (w tym `spotify-api`) w ten sam sposób (otwieranie linku GitLab w nowej karcie).

## Efekt końcowy
Sekcja projektów stała się lżejsza, bardziej przejrzysta i profesjonalna. Wszystkie informacje o technologiach są dostępne natychmiast bez dodatkowych interakcji, co poprawia User Experience (UX).
