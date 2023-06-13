Jewelry Shop

Vi har byggt en webbshop i React med Typescript. Vi arbetade med GitHub under hela projektets gång.
Sidan är fullt responsiv.

För att installera projektet:
- Se till att du har NodeJS installerat.
- Öppna upp projektet i VS Code. Öppna terminalen och gör en npm install för att hämta alla dependencies.
- Öppna serversidan i terminalen och kör kommandot npm start.
- Öppna klientsidan i terminalen och kör kommandot npm run dev.
- Nu kan du se applikationen i din webbläsare på din http://localhost:(nummer)/

Projektets struktur
Landningssidan är en hemsida som innehåller bland annat en navigeringsmeny. Därifrån kan man ta sig till shop där vi har listat alla produkter. När man trycker på en produkt så går man till en detaljsidan. 
Både från produktlistan och detaljsidan kan man lägga till en produkt i varukorgen samt ändra antalet eller ta bort produkten.Kundvagnsikon visar hur många produkter den innehåller. När man trycker på kundvagnsikon öppnas en drawer som visar kundvagnens innehåll samt totalbeloppet och en knapp "To checkout" som tar användaren till utchekningsflödet.

Checkout är fördelat inom tre steg. Det första steget visar Kundvagnen och Användarens uppgifter, vilket innehåller även en formulär där användaren får fylla i sitt telefonnummer samt adress.
Det andra steget visar tre olika fraktalternativer med leverantör, kostnad och datum. Datumet ändras dynamiskt. 
Det tredje och sista steget visar olika betalningsmetoder och en Slutför Köp knapp.
När man trycker på Slutför Köp knappen ser man en loader medan beställningen bearbetas och en orderbekräftelse som sammanfatta beställningsinformation.

Man kan logga in genom Login knapp i headern, både som user och admin. En vanlig user kan man logga in med e-mail user@user.se och lösenord user medan en administratör kan logga in med e-mail admin@admin.se och lösenord admin.
Då får man tillgång till Adminpanel, där man kan lägga till en ny produkt samt uppdatera/radera existerande produkter. Man kan även se en lista med alla ordrar. 

Kontaktssidan samt länkarna i footern har ingen funktionalitet, dvs de är med bara för utseendets skull. 



