# Kjøre JavaScript

📚 [Les mer i oppslagsverket](https://bekk.gitbook.io/web-intro/grunnleggende-webutvikling/cover-3/06-filer)

## 1) Kjøre JavaScript fra HTML

Den enkleste måten å kjøre JavaScript på siden din, er å skrive koden direkte inni en `<script>`-tag.

Legg inn en `<script>`-tag i HTML-en sin body, og få den til å vise en _alert_ når du åpner siden.

<details>
<summary>🚨Løsningsforslag</summary>

Vi legger `<script>`-taggen vår i slutten av `<body>` i `index.html`:

```html
<body>
    <script>
        alert("Hei fra JavaScript!");
    </script>
</body>
```
</details>

## 2) Referere til ekstern fil

Det blir fort rotete å blande HTML- og Javascript i samme fil. Flytt JavaScripten til en egen fil, og referer til denne fra `index.html`.

<details>
<summary>🚨Løsningsforslag</summary>

Vi legger `<script>`-taggen vår i slutten av `<body>` i `index.html`:

```html
<!-- index.html -->
<body>
    <script type="text/javascript" src="filnavn.js">
</body>
```

```js
// filnavn.js
alert("Hei fra JavaScript!");
```

</details>


## 3) Lytt til klikk på en knapp

Det er litt irriterende at alerten dukker opp hver gang vi laster inn siden på nytt. HTML-siden vår har en _like_-knapp, og vi ønsker å vise alerten først når du trykker på knappen.

### 3a) Få tak i knappen med JavaScript

Bruk `document`-globalen for å huke tak i knappen vår. Kjør `console.log` på returverdien for å se hva vi fikk tilbake.

<details>
<summary>🚨Løsningsforslag</summary>

Like-knappen har ID-en `like-button-1`. Vi kan derfor bruke `document` sin `getElementById`-funksjon med ID-en vår som argument.

```js
const knapp = document.getElementById("like-button-1");
console.log(knapp);
```

📚 [Les mer om å hente ut noder fra DOM-en](https://bekk.gitbook.io/web-intro/grunnleggende-webutvikling/cover-3/07-dom-apiet#aksessere-html-elementer)
</details>

### 3b) Lytte på klikk

Nå har vi fått tak i knappen med JavaScript. Bruk returverdien til å sette på en _event listener_ som lytter på klikk på knappen.

<details>
<summary>🚨Løsningsforslag</summary>

Her må vi bruke funksjonen `addEventListener`, som ligger på noden vi hentet fra DOM-en. Funksjonen tar inn to argumenter; hendelsen du ønsker å lytte på, i vårt tilfelle "click", og en funksjon som skal kjøre hver gang hendelsen trigges.

```js
knapp.addEventListener("click", () => {
    alert("Du liket posten!");
});
```
</details>

📚 [Les mer om hendelser i oppslagsverket](https://bekk.gitbook.io/web-intro/grunnleggende-webutvikling/cover-3/07-dom-apiet#hendelser)

📚 [Les mer om JavaScript-funksjoner i oppslagsverket](https://bekk.gitbook.io/web-intro/grunnleggende-webutvikling/cover-3/04-funksjoner)