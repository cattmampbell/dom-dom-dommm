// Listens for the page to load, then runs a function().
document.addEventListener("DOMContentLoaded", function() {
    let div = document.createElement("div"); // Creates <div> tag.
    div.className = "header-container"; // Gives a class name / applies styling via Bootstrap 4.
    document.body.appendChild(div); // Places <div class="header=container"> into <body> of HTML.
    
    let btn = document.createElement("button"); // Creates <button> element.
    let btnTxt = document.createTextNode("Add Square"); // Creates textual content.
    btn.appendChild(btnTxt); // Adds textual content to <button> element.
    btn.className = "btn btn-lg btn-outline-secondary mx-2 my-2";
    div.appendChild(btn);

    let idCount = 0; // Creates 'idCount', set value to 0.

    // Creates addSquare() function.
    function addSquare() {
        let divSquare = document.createElement("div");
        divSquare.className = "div-square";
        div.appendChild(divSquare);
        idCount++; // Adds +1 to 'idCount' with each iteration of addSquare() function.
        divSquare.id = idCount;
    };

    // Listens for <button> to be clicked, then runs addSquare() function.
    btn.addEventListener("click", addSquare);


});