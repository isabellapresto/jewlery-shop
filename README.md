# Jewelry Shop

Vi har byggt en webbshop i React med Typescript. Vi arbetade med GitHub under hela projektets gång.
Sidan är fullt responsiv men vi har valt som minst storlek 375 x 667 som är en iPhone SE.

# För att installera projektet:
- Se till att du har NodeJS installerat.
- Öppna upp projektet i VS Code. Öppna terminalen och gör en npm install för att hämta alla dependencies.
- Öppna serversidan i terminalen och kör kommandot npm start.
- Öppna klientsidan i terminalen och kör kommandot npm run dev.
- Nu kan du se applikationen i din webbläsare på din http://localhost:(nummer)/
- Se till att du har Framer Motion installerat (npm install framer-motion)

# Projektets struktur
Landningssidan är en hemsida som innehåller bland annat en navigeringsmeny. Därifrån kan man ta sig till shop där vi har listat alla produkter. När man trycker på en produkt så går man till en detaljsidan. 
Både från produktlistan och detaljsidan kan man lägga till en produkt i varukorgen samt ändra antalet eller ta bort produkten.Kundvagnsikon visar hur många produkter den innehåller. När man trycker på kundvagnsikon öppnas en drawer som visar kundvagnens innehåll samt totalbeloppet och en knapp "To checkout" som tar användaren till utchekningsflödet.

Checkout är fördelat inom tre steg. Det första steget visar Kundvagnen och Användarens uppgifter, vilket innehåller även en formulär där användaren får fylla i sitt telefonnummer samt adress.
Det andra steget visar tre olika fraktalternativer med leverantör, kostnad, datum samt totalbeloppet. Datumet ändras dynamiskt och totalbeloppet ändras beroende på utvald fraktsmetod.
Det tredje och sista steget visar olika betalningsmetoder och en Slutför Köp knapp.
När man trycker på Slutför Köp knappen ser man en loader medan beställningen bearbetas och en orderbekräftelse som sammanfatta beställningsinformation.

Man kan logga in genom Login knapp i headern, både som user och admin. En vanlig user kan man logga in med e-mail user@user.se och lösenord user medan en administratör kan logga in med e-mail admin@admin.se och lösenord admin.
Då får man tillgång till Adminpanel, via meny man kan lägga till en ny produkt, uppdatera/ta bort befintliga produkter samt se alla ordrar och markera en order som skickad. 
Man når Adminpanelen både via en ikon i headern samt en länk på Välkommen till inloggad-sidan.

**Kontaktssidan samt länkarna i footern har ingen funktionalitet, dvs de är med bara för utseendets skull. **

# CSS
Material UI (MUI)
CSS direkt i koden
Egna CSS-filer

Vi har använt en mix av dessa tre metoder. I första hand MUI och där har vi skapat ett eget tema för att kunna styra färger och övrig style generellt i projektet. Där vi har velat ha en anpaasd CSS har vi kompletterat CSS direkt i koden. 
Där det har blivit mycket CSS eller CSS med olika villkor så har vi skapat egna CSS filer som vi importerat i den komponenten.
