## 1) Vis mer 👀

### Oppgavebeskrivelse

Noen ganger kan beskrivelser bli lange, og vi ønsker ikke alltid å vise all teksten når vi scroller i feeden. I denne oppgaven skal vi utvide og komprimere beskrivelsen under bildet når brukeren trykker på teksten.

For å få til dette må vi knytte sammen CSS-stylingen og JavaScript-funksjonaliteten. CSS-koden under vil skjule all tekst som er lenger enn én linje. Legg denne koden inn i CSS-filen din (spør gjerne Google eller en venn om hva de forskjellige egenskapene gjør):

```
.description--closed {
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
```

Neste steg er å legge til og fjerne denne stylingen når en bruker klikker på teksten. Da vi lagde funksjonalitet på like-knappen brukte vi `addEventListener` for å lytte etter handlingen `click` fra brukeren. Da la vi på en alert når man trykket på knappen, men denne gangen skal vi bruke `classList.toggle()` for å toggle css-klassen av og på. Siden toggle er en funksjon må vi sende inn CSS-klassen som en variabel.

<details>
<summary>🚨 Løsningsforslag</summary>

```
const desc = document.getElementById("description-1");
desc.addEventListener("click", () => {
  desc.classList.toggle("description--closed");
});
```

</details>

📚 [Les mer i oppslagsverket](https://bekk.gitbook.io/web-intro/grunnleggende-webutvikling/cover-3/06-filer)

## 2) Vis mer eller ikke?

Men, det er ikke alltid beskrivelsen er lang nok til å skjule. Da kan det være greit å sjekke lengden på teksten før vi legger på en event-listener.

<details>
<summary>🚨 Løsningsforslag</summary>

```
const desc = document.getElementById("description-1");
const tooLong = desc.innerText.length > 60;
if (tooLong) {
  desc.addEventListener("click", () => {
    desc.classList.toggle("description--closed");
  });
}
```

</details>

## 3) Skjule lang tekst by default

Nå kan vi skjule og vise lang beskrivelse på klikk - wihu! 🎉
Siste steg er å skjule for lang tekst by default, så da må vi legge på denne klassen fra starten av. Legg på klassenavnet `description--closed` i HTMLen på beskrivelses-elementet.

I samme slengen kan du legge på en musepeker (`cursor: pointer`) på beskrivelsen når den er åpen også.

<details>
<summary>🚨 Løsningsforslag</summary>

```
<p class="description description--closed" id="description-1">
    Min kule beskrivelse
</p>

```

</details>

### Ideer 💡:

- Knytte sammen CSS og JS
- Animasjon
- "... mer"
- line-clamp = 1
- string.length <= 60
- Bytte ut tekst?
