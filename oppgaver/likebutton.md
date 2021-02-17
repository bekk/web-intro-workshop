# Like-funksjonalitet

**Oppgave:** Starte med å sende ut en `alert` og ende opp med en counter.

---

### Med `onclick`-handler 🕹

```html
<button onclick="like()">Like</button>
<script>
  function like() {
    alert("I like it! #like4like #l4l");
  }
</script>
```

### Med `event listener` ⚡️

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

### Med like-oppdatering (counter) 👍

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

### Todo ✅

- Utvide til å kunne trykke knappene uavhengige av hverandre og de endrer hver sin counter (løse id-problematikk)
