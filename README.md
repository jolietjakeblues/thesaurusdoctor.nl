
# ThesaurusDoctor – Time Stream Scan

ThesaurusDoctor is een lichte webapp waarmee u de gezondheid van uw termenbron beoordeelt, in een thema geïnspireerd op Doctor Who. U scant uw thesaurus of taxonomie als een tijdlijn en krijgt een diagnose met concrete acties.

## Wat doet ThesaurusDoctor

De app helpt u om snel zicht te krijgen op:

- structuur en stabiliteit van uw termenbron  
- risico’s rond beheer, logging en onderhoud  
- koppelingen met andere vocabularia en LOD  
- terugkerende problemen rond overlap en veroudering

De Doctor Who laag (TARDIS, sonic screwdriver, Daleks, Cybermen, Weeping Angels, Vashta Nerada, Silence) is een metafoor. De inhoud blijft gewoon: governance, kwaliteit en interoperabiliteit.

## Hoe werkt de webapp

De webapp heeft drie schermen:

1. **TARDIS intake**  
   U vult in:
   - in welk “universum” uw bron werkt (collectie, publiek, overheid, enzovoort)  
   - naam en leeftijd van uw termenbron  
   - hoeveel “regeneraties” uw bron heeft gehad (migraties, grote wijzigingen)  
   - welke tijdlijn-afwijkingen u ziet  
   - welke “villain patronen” u herkent (Dalek, Cyberman, Angel, Vashta, Silence)  

2. **Tijdlijnanalyse**  
   De app bepaalt:
   - een status van uw tijdlijn  
     - Stabiele tijdlijn  
     - Gefragmenteerde tijdlijn  
     - Instabiele tijdlijn  
     - Tijdvortex (spoedgeval)  
   - een lijst met gevonden paradoxen  
   - een samenvatting in gewone taal

3. **Sonic Screwdriver actions**  
   U krijgt per probleemtype concrete acties. Voorbeelden:
   - Dalek paradox: structuur te star  
   - Cyberman paradox: te veel upgrades zonder releasebeleid  
   - Weeping Angel paradox: geen logging of besluitvastlegging  
   - Vashta Nerada schaduw: stille kwaliteitsafname door gebrek aan onderhoud  
   - Silence moment: problemen die iedereen kent maar niemand opvolgt  

U kunt een **Time Fix rapport (PDF)** genereren met alle bevindingen en adviezen.

## Installatie en gebruik

ThesaurusDoctor is een statische webapp.

### Lokaal openen

- Zet de bestanden in één map:
  - `index.html`  
  - `style.css`  
  - `app.js`  
- Open `index.html` in uw browser.

### GitHub Pages

1. Maak een publieke repository, zet de drie bestanden in de root.  
2. Voeg eventueel een map `assets/` toe voor logo en achtergrond.  
3. In GitHub:
   - Settings → Pages  
   - Source: `Deploy from a branch`  
   - Branch: `main` en `/root`  
4. De site komt dan beschikbaar op `https://<user>.github.io/<repo>`

## Technologie

- Pure HTML, CSS en JavaScript  
- `jsPDF` voor genereren van het PDF-rapport  
- Geen backend, geen database  
- Alle invoer blijft in de browser

## Wanneer gebruikt u ThesaurusDoctor

- bij het starten of herzien van terminologiebeheer  
- als voorbereiding op een project, migratie of audit  
- als gesprekstool met collega’s over:
  - eigenaarschap  
  - structuur en onderhoud  
  - koppelingen met externe vocabularia

## Motto

> The timeline can be saved.  
> ThesaurusDoctor helpt u de tijdlijn van uw termenbron stabiel, begrijpelijk en verbonden te houden.