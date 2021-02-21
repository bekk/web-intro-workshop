function addComment(){
    // Hente ut kommentaren fra inputboksen ved hjelp av ID
    var inputText = document.getElementById("comment").value;


    // Hente ut seksjonen med kommentarer
    var commentSection = document.getElementsByClassName("comments");
  
    // Opprette en ny HTML-artikkel og sette klassenavnet
    var commentBox = document.createElement("article")
    commentBox.setAttribute("class", "comment")
    
    // Opprette en ny HTML-paragraf, sette klassenavnet 
    var user = document.createElement("p")
    user.setAttribute("class", "comment-user") 
    //legger til en statisk tekst for brukernavn TODO: hva skal stå her?
    user.appendChild(document.createTextNode("username"))
    

    //Lage en kommentarparagraf, sette på klassenavn og fylle inn kommentaren fra inputfeltet
   var comment = document.createElement("p")
   comment.setAttribute("class", "comment-text") 
   comment.appendChild(document.createTextNode(inputText))


   //Lage timestamp-paragraf, legge på klassenavn 
   var timestamp = document.createElement("p")
   timestamp.setAttribute("class", "timestamp") 
   // Lagt til statisk tidsstempe TODO: Skal vi ha noe annet her?
   timestamp.appendChild(document.createTextNode("2 seconds ago"))

   // Legge til de ulike paragrafene under artikkelen
   commentBox.appendChild(user)
   commentBox.appendChild(comment)
   commentBox.append(timestamp)
   
   // Legge artikkelen, med paragrafene, inn under seksjonen
   commentSection[0].appendChild(article)
}