# Onpier Infoscreen

Ein HTML/CSS/JS-Projekt für den Raspberry Pi Zero 2 W im Kiosk-Modus. Zeigt automatisch Teamprofile mit Zitat im Slider an.

## Struktur
- `index.html` lädt dynamisch `data/profiles.json`
- Bilder liegen in `assets/`
- Styling & Animationen in `css/styles.css`
- Wechsel alle 8 Sekunden per JS

## Nutzung
```bash
chromium-browser --kiosk file:///home/pi/infoscreen/index.html