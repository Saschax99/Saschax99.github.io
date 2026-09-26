# ReiseRadar

Statische, responsive Projekt-Landingpage für eine geplante Plattform zur Analyse von Pauschalreisen. Mit klar gekennzeichneter Demo-Reise, geplantem Deal Score und Ausblick auf Telegram und WhatsApp. Keine echte Suche, Buchung, API, Datenbank oder Backend-Anbindung.

## Lokale Entwicklung

`index.html` direkt im Browser öffnen. Alle Website-Ressourcen liegen lokal im Repository; es werden keine Pakete benötigt.

Alternativ mit installiertem Python im Projektordner:

```sh
python -m http.server 8000
```

Danach `http://localhost:8000` öffnen. Der Server dient ausschließlich der lokalen Vorschau.

## Dateien

- `index.html`: Landingpage und Demo-Dialog
- `styles.css`: Responsive Layouts, Fokuszustände und reduzierte Bewegung
- `script.js`: Mobile Navigation, Demo-Dialog und Jahreszahl
- `assets/`: Eigene SVG-Illustrationen und Logo; keine externen Bildquellen
- `impressum.html`, `datenschutz.html`: Betreiberangaben und Datenschutzhinweise
- `robots.txt`: Crawler-Zugriff; rechtliche Seiten tragen zusätzlich `noindex`
- `.nojekyll`: Statische Dateien ohne Jekyll-Verarbeitung

## Deployment mit GitHub Pages

1. Betreiberangaben und Datenschutzhinweise vor der Veröffentlichung auf Aktualität prüfen.
2. Website-Dateien auf den Branch `main` des Repositorys `Saschax99.github.io` pushen.
3. Im Repository **Settings → Pages** öffnen.
4. Unter **Build and deployment → Source** die Option **Deploy from a branch** wählen.
5. Branch **main**, Ordner **/ (root)** auswählen und **Save** klicken.
6. Den erfolgreichen Pages-Workflow abwarten und `https://saschax99.github.io/` aufrufen.

Weitere Pushes auf den eingestellten Branch aktualisieren die Website automatisch. Änderungen an den Pages-Einstellungen oder eine Veröffentlichung werden durch die lokalen Dateien allein nicht ausgelöst.

## Inhalte ändern

Der vorläufige Name `ReiseRadar` ist reiner Text und lässt sich projektweit ersetzen (einschließlich HTML-Metadaten und `assets/social-card.svg`). Farben stehen als CSS-Variablen am Anfang von `styles.css`. Texte, Demo-Daten und Kanalhinweise befinden sich in `index.html`.

Die Open-Graph-URL verwendet derzeit `https://saschax99.github.io/`. Bei einer eigenen Domain beide absoluten Open-Graph-URLs aktualisieren. `assets/social-card.png` ist das Vorschaubild für geteilte Links (1200 × 630 Pixel). Die bearbeitbare Vorlage liegt unter `assets/social-card.svg`; nach Änderungen daraus das PNG neu exportieren.

Für echte Messenger-Kanäle die deaktivierten Buttons erst nach Einrichtung durch Links auf die verifizierten Kanaladressen ersetzen. Entwicklungsstatus, Datenschutzhinweise und Funktionsbeschreibungen entsprechend aktualisieren.

## Verhalten und Barrierefreiheit

- Inhalte und Navigation funktionieren auch ohne JavaScript; der zusätzliche Demo-Button erscheint erst bei unterstütztem Dialog.
- Das mobile Menü meldet seinen Zustand über `aria-expanded` und lässt sich mit Escape schließen.
- Der native Demo-Dialog begrenzt den Tastaturfokus, lässt sich mit Escape oder dem Bestätigungsbutton schließen und setzt den Fokus zum Auslöser zurück.
- Semantische Bereiche, Sprunglink, sichtbare Fokuszustände und `prefers-reduced-motion` werden berücksichtigt.
- Systemfonts, lokale SVGs, keine externen Bibliotheken, Cookies oder Browser-Speicher.

## Prüfung vor Veröffentlichung

- Bei 320 px, Tablet- und Desktopbreite auf Umbrüche und horizontalen Überlauf prüfen.
- Navigation, mobilen Menübutton, Escape-Taste und Demo-Dialog mit der Tastatur prüfen.
- Impressum und Datenschutz auf Vollständigkeit sowie alle internen Links prüfen.
- Lighthouse im Browser ausführen, insbesondere für Accessibility und Performance.
- Social-Vorschaubild nach Änderungen an der SVG-Vorlage neu als PNG exportieren.

### Durchgeführte lokale Prüfung

Am 26. September 2026 in Chromium geprüft: alle drei HTML-Seiten bei 320, 375, 620, 768, 900, 1024, 1440 und 1920 Pixeln ohne horizontalen Überlauf. Interne Links und Ressourcen, eindeutige IDs, mobile Navigation einschließlich Escape und Linkauswahl, Demo-Dialog mit Fokusrückgabe, deaktivierte Kanäle, reduzierte Bewegung und Navigation ohne JavaScript erfolgreich geprüft. Keine JavaScript-Fehler in der Browserkonsole. Desktop- und Mobilansicht zusätzlich visuell kontrolliert. Die wichtigsten Text-/Hintergrundfarben erreichen mindestens 4,5:1 Kontrast.

Ein Lighthouse-Audit und eine Prüfung mit Screenreader wurden nicht durchgeführt. Die technische Prüfung ist keine rechtliche Prüfung.

## Noch offen

- Projektname finalisieren und gegebenenfalls projektweit ersetzen
- Domain
- Telegram Channel und WhatsApp Channel
- Affiliate-Partnerschaften
- Reise-API / Datenfeed
- Echte Deal Engine einschließlich nachvollziehbarer Bewertungslogik

Es werden keine bestehenden Partnerschaften behauptet. Die Demo enthält einen rein illustrativen Preis und kann keine Buchung auslösen.

## Herkunft der Betreiber- und Datenschutzangaben

Auf Benutzerwunsch am 26. September 2026 aus dem [Impressum von deal-spotter.de](https://deal-spotter.de/impressum) übernommen: onemanpublisher GbR, Lengerckestieg 2, 22041 Hamburg; Vertretung durch Sascha Dolgow und Luca Stephan Kohls; allgemeine E-Mail und GPG-Adresse. Der Datenschutzkontakt `onemanpublisher@gmail.com` stammt aus der [Datenschutzerklärung von deal-spotter.de](https://www.deal-spotter.de/datenschutz). Der direkte Abruf der rechtlichen Quellseiten schlug teilweise fehl; verwendet wurden die öffentlich indexierten Inhalte. Der aktuelle Status der dort als „beantragt“ bezeichneten USt-IdNr. ist nicht belegt und wurde nicht als aktuelle Tatsache übernommen.

Die Datenschutzerklärung wurde auf die vorhandene statische Seite zugeschnitten. Angaben der Vorlage zu STRATO, eigenen Vier-Wochen-Logs, Cookies, YouTube, reCAPTCHA und Social-Media-Präsenzen wurden nicht übernommen. Es wird kein unbelegter Auftragsverarbeitungsvertrag behauptet. Grundlage für die Hostinghinweise sind die [GitHub-Pages-Dokumentation zur Datenerfassung](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection) und die [GitHub-Datenschutzerklärung](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

Der Impressumsverweis wurde auf [§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html) aktualisiert. Der veraltete Verweis auf die [eingestellte EU-OS-Plattform](https://consumer-redress.ec.europa.eu/site-relocation_en) entfällt. Datenschutzrechte wurden anhand der [DSGVO](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32016R0679) beschrieben; für den Hamburger Sitz wird auf den [HmbBfDI](https://datenschutz-hamburg.de/service-information/beschwerde-oder-hinweis-einreichen) verwiesen.
