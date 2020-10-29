## 1) Toggle kommentarfeltet
Nå skal vi lage en knapp som styrer visning av kommentarfeltet! Lag en knapp som viser kommentarene dersom de er skjult, og skjuler kommentarene dersom de er vist.
Hint: I denne oppgaven kan du bruke JavaScript til å tilegne et HTML-element en CSS klasse som skjuler kommentar-seksjonen

<details>
<summary>🚨Løsningsforslag</summary>
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