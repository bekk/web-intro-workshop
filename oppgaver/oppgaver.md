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
</details>

📚 [Les mer om å hente ut noder fra DOM-en](https://bekk.gitbook.io/web-intro/grunnleggende-webutvikling/cover-3/07-dom-apiet#aksessere-html-elementer)

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



### 4) Bygg opp HTML fra JavaScript

Frem til nå har vi bygget opp feeden med statisk HTML-kode. I den virkelige verden ønsker vi å bygge opp feeden basert på en datakilde med dynamiske data - f.eks. fra et eksternt api. 

I denne oppgaven er datakilden vår `images.js` som ligger i `img`-mappa. Der er det definerert en liste av objekter hvor hvert objekt representerer innholdet til en post. 

Du skal vi slette all html-kode som ligger i posts-elementet i `index.html` og erstatte innholdet med dynamiske data vha JavaScript. 


### 4a) Vis ett bilde

Nå skal du bruke JavaScript for å vise frem et bilde. 

<details>
<summary>🚨Løsningsforslag</summary>

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
<summary>🚨Løsningsforslag</summary>

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
<summary>🚨Løsningsforslag</summary>

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
