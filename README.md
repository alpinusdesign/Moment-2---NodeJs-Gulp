# Moment 2 - NodeJs och Gulp

## Vad är syftet med automatiseringsprocessen?

Automatiseringsprocessen ämnar att effektivisera utvecklingsprocessen genom att minimera den tid som behöver läggas på de rutinmässiga, repetitiva uppgifter som kan utföras automatiskt.
På detta sätt kan utvecklaren istället fokusera sin tid på det mer kreativt krävande och lösningsorienterade arbetet som inte kan automatiseras.

## Vilka paket och verktyg har använts i projektet, och varför?

### Autoprefixer

**Autoprefixer** har använts för att tillägga prefix på de vissa CSS-egenskaper som inte stöds universellt, i syfte att öka webbläsarstödet.

### Browser-sync

**Browser-sync** har använts för att automatiskt uppdatera webbläsarfönstret vid ändring av filer.

### Clean-css

**Clean-css** har använts för att minifiera CSS-filer.

### Concat

**Concat** har använts för att konkatenera CSS- och Javascript-filer.

### Image

**Clean-css** har använts för att optimera bildfiler.

### Terser

**Terser** har använts för att minifiera Javascript-filer.

## Hur fungerar systemet?

Gulp-filen består utav ett antal uppgifter som är inriktade på ett visst område:

* **cssTask** lägger till prefix för Internet Explorer, Google Chrome och Firefox, för vissa CSS-egenskaper; den konkatenerar och minifierar alla CSS-filer, och överför dem slutligen till publikationskatalogen.

* **jsTask** konkatenerar och minifierar alla Javascript-filer, och överför dem slutligen till publikationskatalogen.

* **htmlTask** överför alla HTML-filer till publikationskatalogen.

* **imgTask** optimerar bildfiler och överför dem till publikationskatalogen.

Alla ovannämnda uppgifter uppdaterar även webbläsarfönstret.

* **watchTask** hanterar bevakningen av filändringar, och upprättar en lokalwebbserver som möjliggör det automatiska uppdaterandet av webbläsarfönstret när en fil ändras.

Systemet körs genom att använda kommandot __gulp__, vilket gör att uppgifterna utförs och webbläsarfönstret ändras vid ändring av relaterade filer.

## Övriga tillägg

Utöver de krav som ställts i uppgiftsbeskrivningen implementerades den bildoptimerande uppgiften.