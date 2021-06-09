let commentCount = 0
const commentTimestamp = {}

function addComment(){
  // Hente ut kommentaren fra inputboksen ved hjelp av ID
  var inputText = document.getElementById("comment").value;


  // Hente ut seksjonen med kommentarer
  var commentSection = document.getElementsByClassName("comments");

  // Opprette en ny HTML-artikkel og sette klassenavnet
  var commentBox = document.createElement("article")
  commentBox.setAttribute("class", "comment")
  
  // Generere og sette en ID for kommentaren
  const commentId = `comment-${commentCount}`
  commentBox.setAttribute("id", commentId)

  // Opprette en ny HTML-paragraf, sette klassenavnet 
  var user = document.createElement("p")
  user.setAttribute("class", "comment-user") 

  //legger til en statisk tekst for brukernavn TODO: hva skal stå her?
  user.appendChild(document.createTextNode("anonymous"))
  
  //Lage en kommentarparagraf, sette på klassenavn og fylle inn kommentaren fra inputfeltet
  var comment = document.createElement("p")
  comment.setAttribute("class", "comment-text") 
  comment.appendChild(document.createTextNode(inputText))

  // Lagre timestamp i global dictionary
  commentTimestamp[commentId] = Date.now()
  
  // Sette et interval for å oppdatere timestamp hvert minutt
  setInterval(updateAndSetTimestamp, 6000, commentId)
  // Legge til de ulike paragrafene under artikkelen
  commentBox.appendChild(user)
  commentBox.appendChild(comment)
  
  // Legge artikkelen, med paragrafene, inn under seksjonen
  commentSection[0].appendChild(commentBox)

  // Kjør funksjonen for å legge til timestamp første gang
  updateAndSetTimestamp(commentId)

  // Oppdatere antall kommentarer
  commentCount += 1
}

function updateAndSetTimestamp(commentId){
  //Lage timestamp-paragraf, legge på klassenavn 
  const timestamp = document.createElement("p")
  timestamp.setAttribute("class", "timestamp") 
  
  // Få tak i commentbox og det gamle timestamp elementet
  const commentBox = document.getElementById(commentId)
  const oldTimestamp = commentBox.getElementsByClassName('timestamp')[0]
  
  // Bruke det globale objektet og "omregningsfunksjonen" for å finne ut hvor lenge siden en kommentar ble lagret
  const timeAgo = howLongAgo(commentTimestamp[commentId])
  timestamp.appendChild(document.createTextNode(timeAgo))

  // Hvis det er et timestamp fra før, fjern det
  if (oldTimestamp) {
    commentBox.removeChild(oldTimestamp)
  }
  // Legg til det nye timestampet
  commentBox.appendChild(timestamp)
}

function howLongAgo (timestamp) {
  const secondsAgo = (Date.now() - timestamp) / 1000
  if (secondsAgo < 60){
    return 'Less than a minute ago'
  }
  const minutes = Math.floor(secondsAgo/60)
  if (minutes == 1){
    return '1 minute ago'
  }
  return `${minutes} minutes ago`
}
