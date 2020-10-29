# HTML & CSS

## Emoji-guide

Du kommer til å se noen emojis i oppgavene. De betyr ca det her:

- :trophy: Oppgave: Her er hva du skal gjøre
- :bulb: Tips: Litt ekstra info som kan være greit å være for å løse en oppgave
- :rotating*light: Løsningsforslag: Her finner du en komplett gjennomgang av hvordan du \_kan* løse oppgaven

## Header

HTML-dokumenter inneholder en rekke elementer som enten er self closing, altså lukker seg selv; eller som har underelementer, ofte referert til som children.

Et element defineres med en tag. En tag ser slik ut `<tag>`. En tag markerer starten eller slutten på elementet, med innholdet i midten: `<tag>innhold</tag>`
Eventuelt er tagen self-closing: `<tag/>`

Det fins mange forkskjellige tags som har som oppgave å få siden til å se ut som man vil.

Vi har `<p>` for å definere avsnitt, `<h1>` for overskrifter (og h2, h3 osv. for mindre overskrifter), `<li>` for lister, og `<div>` for å definere områder innen HTMLkoden. Disse er bare noen få eksempler.

:trophy: Start et HTML dokument, og lag en overskrift som sier "Hello world!"

:bulb: Du kan skrive koden inn i `<body>` elementet i den inkluderte filen.

<details><summary>:rotating_light: Løsningsforslag</summary>
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

:trophy: Legg til bildet `working.jpg`, som ligger i `img` mappen, i `index.html`.

<details><summary>:rotating_light: Løsningsforslag</summary>
Alle html-elementer kan ha attributter. Disse kan brukes til å gi tilleggsinformasjon om et element. I vårt tilfelle bruker vi `src` attributtet til å spesifisere den relative pathen til bildet.

```html
<img
  src="./img/working.jpeg"
  alt="Fem personer som jobber sammen rundt et bord"
/>
```

</details>

## Lag det vakkert med CSS :sparkles:

Okey, nå har vi en overskrift og et bilde. Elementene er der, men de skjer kanskje ikke så vakre ut.

En post på Bekkstagram består av hvem som har lastet den opp, et bilde og en beskrivelse av bildet. Dette kan representeres med html-koden nedenfor:

```html
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
```

:trophy: Erstatt bildet (`img`-taggen) du laget i forrige oppgave med html-koden over og få det til å se ut som bildet under.

:bulb: Man kan velge å style elementer med en gitt klasse. For eksempel kan man style bildet med klasse `image` med css'en under.

```css
.image {
  /* Din styling */
}
```
<img src="./images/post.png" style="max-width: 500px;" alt="Screenshot of Bekkstagram post" />
