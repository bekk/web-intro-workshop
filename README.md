# Introduksjon

En workshop som kan hjelpe deg i gang med webprogrammering.
Workshopen inneholder oppgaver for å lære HTML, CSS og JavaScript.

## Oppslagsverk

Vi har også laget en [GitBook](https://bekk.gitbook.io/web-intro/) som du gjerne må bruke som oppslagsverk underveis om det er noe du lurer på.

## Emoji-guide

Du kommer til å se noen emojis i oppgavene. De betyr ca det her:

- 🏆 Oppgave: Her er hva du skal gjøre
- 💡 Tips: Litt ekstra info som kan være greit å være for å løse en oppgave
- 🚨 Løsningsforslag: Her finner du en komplett gjennomgang av hvordan du *kan* løse oppgaven

# Html og Css

## Header

HTML-dokumenter inneholder en rekke elementer som enten er self closing, altså lukker seg selv; eller som har underelementer, ofte referert til som children.

Et element defineres med en tag. En tag ser slik ut `<tag>`. En tag markerer starten eller slutten på elementet, med innholdet i midten: `<tag>innhold</tag>`
Eventuelt er tagen self-closing: `<tag/>`

Det fins mange forkskjellige tags som har som oppgave å få siden til å se ut som man vil.

Vi har `<p>` for å definere avsnitt, `<h1>` for overskrifter (og h2, h3 osv. for mindre overskrifter), `<li>` for lister, og `<div>` for å definere områder innen HTMLkoden. Disse er bare noen få eksempler.

🏆 Lag en overskrift som sier "Hello world!"

💡 Du kan skrive koden inn i `<body>` elementet i den inkluderte filen.

<details><summary>🚨 Løsningsforslag</summary>
Body elementet ditt skal se sånn ut:

```html
<body>
  <h1>Hello World!</h1>
</body>
```

</details>

## Bilde

Bilder representeres med taggen `img` i HTML. Attributtet `src` forteller nettleseren hvor den kan hente bildet. I vårt tilfelle vil dette være en lokal fil.

```html
<img src="Path til bildet" alt="Beskrivelse av bildet" />
```

> Det er viktig å beskrive bilde med `alt` attributtet, slik at skjermlesere og andre verktøy kan presentere det riktig for brukeren.

🏆 Legg til bildet `working.jpg`, som ligger i `img` mappen, i `index.html`.

<details><summary>🚨 Løsningsforslag</summary>
Alle html-elementer kan ha attributter. Disse kan brukes til å gi tilleggsinformasjon om et element. I vårt tilfelle bruker vi `src` attributtet til å spesifisere den relative pathen til bildet.

```html
<img
  src="./img/working.jpeg"
  alt="Fem personer som jobber sammen rundt et bord"
/>
```

</details>

## CSS - Cascading Style Sheets

CSS er teknologien vi bruker for å gi HTML det utseende vi ønsker. Hvor ting skal ligge i forhold til hverandre på siden, farger, font, og bakgrunn er ting man setter i CSS. 

>Litt på siden, så er CSS en norsk oppfinnelse 💪

HTML elementer har ofte en `class` attributt. En `class` kan deles av flere elementer. Den kan også ha en `id` attributt. Denne er unik per element. CSS bruker klassenavn og id-navn for å referere til elementer. 

En `<p class="avsnitt">Hei</p>` tag med class referers i CSS med et punktum:

```css
.avsnitt{
    color: black;
}
```
En `<p id="avsnitt">Hei</p>` tag med id refereres med firkant:

```css
#avsnitt{
    color: red;
}
```

🏆 Sett overskriften din til midten av siden, med `text-align` i CSS, og gjør teksten rød.

💡 CSS kode kan du legge inne i `<style>` tags, som du plasserer innenfor `<head>` seksjonen av siden din.

💡 Les på [MDN artikkelen](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align) om text-align

<details><summary>🚨 Løsningsforslag</summary>

```css
.overskrift{
    text-align: center;
    color: red;
}
```

</details>

## Lag det vakkert med CSS ✨

Okey, nå har vi en overskrift og et bilde. Elementene er der, men de skjer kanskje ikke så vakre ut.

En post på Bekkstagram består av hvem som har lastet den opp, et bilde og en beskrivelse av bildet. Dette kan representeres med html-koden nedenfor:

```html
<main>
  <h1>Bekkstagram</h1>
  <article class="post">
    <h3 class="author">olav</h3>
    <img
      class="image"
      src="./img/working.jpeg"
      alt="Fem personer som jobber sammen rundt et bord"
    />
    <p class="description">
      God trøkk på jobb i dag
      <span role="img" aria-label="Emoji med solbriller">😎</span>
    </p>
  </article>
</main>
```
<!-- TODO:
Ordne teksten nedenfor så den gir litt med mening 
-->
🏆 Erstatt innholdet i body-elementet html-koden over og få det til å se ut som bildet under.

1. Sett en maks-bredde på innholdet og sentrer det på midten av siden (Du kan feks. style `main` elementet)
2. Fiks størrelsen på bildet. (Hint: Bredden på bildet er mer enn 100%)
3. Legg på bakgrunnsfarge, rund av hjørnene og legg til litt luft rundt tekstene.

💡 Fargen vi har brukt som bakgrunnsfarge heter `gainsboro`

<!-- Gir ikke så veldig mening -->
💡 Man kan velge å style elementer med en gitt klasse. For eksempel kan man style bildet med klasse `image` med css'en under.

```css
.image {
  /* Din styling */
}
```

<img src="./oppgaver/images/post.png" style="max-width: 500px;" alt="Screenshot of Bekkstagram post" />

<details><summary>🚨 Løsningsforslag</summary>

For å begrense bredden til elementer kan vi bruke `max-width`, la oss feks. begrense bredden til 500px. Det som er hakket mer magisk er at man kan sentrere et element horisontalt ved å sette høyre og venstre margin til `auto`.

```css
main {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
```

Ved å sette bredden på bildet til å være 100% passer man på at det ikke blir for stort.

```css
.image {
  width: 100%;
}
```

Bakgrunnsfarge er ganske selvforklarende, men det er ikke `border-radius`. Man kan bruke verdien for å runde av hjørnene som i skjermbildet. For at tekstene ikke skal være helt i kanten av elementet kan man feks legge på 10px padding på alle sider (top, bunn, høyre, venstre).

> `padding: 10px;` er en kortere måte å definere padding på alle kanter av et element. Man kunne definert den for hver kant ved å skrive feks. `padding-left: 10px;` osv.

```css
.post {
  background-color: gainsboro;
  border-radius: 5px;
}

.author,
.description {
  padding: 10px;
}
```

</details>

# JavaScript

📚 [Les mer i oppslagsverket](https://bekk.gitbook.io/web-intro/grunnleggende-webutvikling/cover-3/06-filer)

## 1) Kjøre JavaScript fra HTML

Den enkleste måten å kjøre JavaScript på siden din, er å skrive koden direkte inni en `<script>`-tag.

🏆 Legg inn en `<script>`-tag i HTML-en sin body, og få den til å vise en _alert_ når du åpner siden.

<details>
<summary>🚨 Løsningsforslag</summary>

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

Det blir fort rotete å blande HTML- og Javascript i samme fil. Javascript kan flyttes til en egen fil, og lastes inn i HTML-filen for en mer ryddig struktur.

🏆 Flytt JavaScripten til en egen fil, og referer til denne fra `index.html`.

<details>
<summary>🚨 Løsningsforslag</summary>

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

🏆 Bruk `document`-globalen for å huke tak i knappen vår. Kjør `console.log` på returverdien for å se hva vi fikk tilbake.

<details>
<summary>🚨 Løsningsforslag</summary>

Like-knappen har ID-en `like-button-1`. Vi kan derfor bruke `document` sin `getElementById`-funksjon med ID-en vår som argument.

```js
const knapp = document.getElementById("like-button-1");
console.log(knapp);
```
</details>

📚 [Les mer om å hente ut noder fra DOM-en](https://bekk.gitbook.io/web-intro/grunnleggende-webutvikling/cover-3/07-dom-apiet#aksessere-html-elementer)

### 3b) Lytte på klikk

Nå har vi fått tak i en referanse til knappen med JavaScript. Det neste steget er å lytte til hendelser som utløses av knappen.

🏆 Bruk referansen til knappen til å sette på en _event listener_ som lytter på klikk på knappen.

<details>
<summary>🚨 Løsningsforslag</summary>

Her må vi bruke funksjonen `addEventListener`, som ligger på noden vi hentet fra DOM-en. Funksjonen tar inn to argumenter; hendelsen du ønsker å lytte på, i vårt tilfelle "click", og en funksjon som skal kjøre hver gang hendelsen trigges.

```js
knapp.addEventListener("click", () => {
    alert("Du liket posten!");
});
```
</details>

📚 [Les mer om hendelser i oppslagsverket](https://bekk.gitbook.io/web-intro/grunnleggende-webutvikling/cover-3/07-dom-apiet#hendelser)

📚 [Les mer om JavaScript-funksjoner i oppslagsverket](https://bekk.gitbook.io/web-intro/grunnleggende-webutvikling/cover-3/04-funksjoner)



### 4) Bygg opp HTML fra JavaScript
<!-- Todo: Ordne på teksten under -->
Frem til nå har vi bygget opp feeden med statisk HTML-kode. I den virkelige verden ønsker vi å bygge opp feeden basert på en datakilde med dynamiske data - f.eks. fra et eksternt api. 

I denne oppgaven er datakilden vår `images.js` som ligger i `img`-mappa. Der er det definerert en liste av objekter hvor hvert objekt representerer innholdet til en post. 

Du skal vi slette all html-kode som ligger i posts-elementet i `index.html` og erstatte innholdet med dynamiske data vha JavaScript. 


### 4a) Vis ett bilde

Nå skal du bruke JavaScript for å vise frem et bilde. 

<details>
<summary>🚨 Løsningsforslag</summary>

.....Litt tekst her, kanskje...

```js
const image = document.createElement('img');
image.className = 'image';
image.src = './img/working.jpeg';
image.alt = 'Fem personer som jobber sammen rundt et bord';

const post = document.createElement('article');
post.className = 'post';
post.appendChild(image);

const hovedElement = document.getElementById('posts');
hovedElement.appendChild(post)

```
</details>


### 4b) Vis alle bildene


<details>
<summary>🚨 Løsningsforslag</summary>

.....Litt tekst her, kanskje...

```js
const posts = [...]

const lagPostContent = (post) => {
  const image = document.createElement('img');
  image.className = 'image';
  image.src = post.path;
  image.alt = post.alt;

  const postContent = document.createElement('article');
  postContent.className = 'post';
  postContent.appendChild(image);
  return postContent
}

const hovedElement = document.getElementById('posts');

posts.map(lagPostContent).forEach((postAsDomElement) => {
    hovedElement.appendChild(postAsDomElement)
});

```
</details>

### 4c) Vis author


### 4d) Vis med metadata

Timestamp; egen oppgave mtp. new Date(...).toLocalDateString(...)
Author og description

<details>
<summary>🚨 Løsningsforslag</summary>

.....Litt tekst her, kanskje...

```js
const lagPostContent = (post) => {
    const image = document.createElement('img');
    image.className = 'image';
    image.src = post.path;
    image.alt = post.alt;

    const author = document.createElement("h3")
    author.className= "author";
    author.innerHTML = post.username;

    const description = document.createElement("p");
    description.className = 'description';
    description.innerHTML = post.description;

    const details = document.createElement('section');
    details.className = 'post-details';
    const timestamp = document.createElement('p');
    timestamp.className = 'timestamp';
    timestamp.innerHTML = new Date(post.createdDate).toLocaleDateString('nb-NO')
    details.appendChild(timestamp)

    const likes = document.createElement('p');
    likes.className = 'likes';
    const likeCount = document.createTextNode("Likes: " + post.likes);
    const likeButton = document.createElement('button');
    likeButton.className='like-button';
    const likeButtonContent = document.createElement('span')
    likeButtonContent.setAttribute('role', 'img');
    likeButtonContent.setAttribute('aria-label', 'Lik bildet');
    likeButtonContent.innerText = "👍";
    likeButton.appendChild(likeButtonContent);

    likes.appendChild(likeCount)
    likes.appendChild(likeButton);

    details.appendChild(likes);

    const postContent = document.createElement('article');
    postContent.className = 'post';
    postContent.appendChild(author);
    postContent.appendChild(image);
    postContent.appendChild(description);
    postContent.appendChild(details);

    return postContent
}
```
</details>


# Like et bilde

## Med `onclick`-handler 🕹

```html
<button onclick="like()">Like</button>
<script>
  function like() {
    alert("I like it! #like4like #l4l");
  }
</script>
```

## Med `event listener` ⚡️

```html
<button id="like-button-1">Like</button>
<script>
  const likeButton = document.getElementById("like-button-1");

  likeButton.addEventListener("click", function (event) {
    alert("I like it! #like4like #l4l");
  });
</script>
```

**NB!** Bekkstagram-feeden vår kan inneholde mange like-knapper og da er det viktig at hver av de har sin unike id for å få tak i disse.

## Med like-oppdatering (counter) 👍

```html
<p><span id="like-value-1">1</span> likes</p>
<button onclick="like()">Like</button>
<script>
  function like() {
    likeSpan = document.getElementById("like-value-1");
    alert("I like it! #like4like #l4l");
    likeSpan.innerHTML = Number(likeSpan.textContent) + 1;
  }
</script>
```

## Todo ✅

- Utvide til å kunne trykke knappene uavhengige av hverandre og de endrer hver sin counter (løse id-problematikk)

# Vis mer 👀

## 1) Vis mer

Noen ganger kan beskrivelser bli lange, og vi ønsker ikke alltid å vise all teksten når vi scroller i feeden. I denne oppgaven skal vi utvide og komprimere beskrivelsen under bildet når brukeren trykker på teksten.

For å få til dette må vi knytte sammen CSS-stylingen og JavaScript-funksjonaliteten. CSS-koden under vil skjule all tekst som er lenger enn én linje. Legg denne koden inn i CSS-filen din (spør gjerne Google eller en venn om hva de forskjellige egenskapene gjør):

```css
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


# Toggle kommentarfeltet

Nå skal vi lage en knapp som styrer visning av kommentarfeltet! Lag en knapp som viser kommentarene dersom de er skjult, og skjuler kommentarene dersom de er vist.
Hint: I denne oppgaven kan du bruke JavaScript til å tilegne et HTML-element en CSS klasse som skjuler kommentar-seksjonen

<details>
<summary>🚨 Løsningsforslag</summary>
Slik løser vi oppgaven:

Oppgaven kan løses på flere måter, en av disse er å benytte Javascript til å endre CSSen på kommentar-seksjonen.
I HMTL-filen din lager du en knapp som håndterer toggle:
```html
<button id="hide-button" type="button">Skjul</button>
```
I CSS-en legger vi til en klasse-selector som heter "hide", som skal skjule alle elementer i den klassen
```css
.comments.hide {
    display : none;
}
```
I JS-filen kan du legge inn en funksjon som lytter på endringer på knappen din "hide-button" i HTML-filen. Vi lager en funksjon som håndterer vise/skjule funksjonen ved å tilegne kommentar-seksjonen CSS klassen "hide":
```js
const toggleComments = () => {
      const commentSection = document.getElementsByClassName("comments").item(0);
      const hideButton = document.getElementById("hide-button");
      if (commentSection.classList.contains("hide")) {
          commentSection.classList.remove("hide");
          hideButton.innerText = "skjul";
      } else {
          commentSection.classList.add("hide");
          hideButton.innerText = "vis";
      }
  };
```
Funksjonen trigges ved å 1) bruke en event listener.
```js
document.getElementById("hde-button").addEventListener("click", toggleComments);
```
Eller 2) direkte i button-taggen sin "onclick" funksjon:

```html
 <button id="hide-button" type="button" onclick="(toggleComments)();">Skjul</button>
```
</details>

