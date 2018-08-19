// Listens for the page to load, then runs a function().
document.addEventListener("DOMContentLoaded", function() {
    let div = document.createElement("div"); // Creates <div> tag.
    div.className = "header-container"; // Gives a class name / applies styling via Bootstrap 4.
    document.body.appendChild(div); // Places <div class="header=container"> into <body> of HTML.
    
    let divRow1 = document.createElement("div"); // Creates <div class="row">
    divRow1.className = "row";
    div.appendChild(divRow1);

    let divCol1 = document.createElement("div"); // Creates <div class="col-12">
    divCol1.className = "col-12 text-center";
    divRow1.appendChild(divCol1);

    let btn = document.createElement("button"); // Creates <button> element.
    let btnTxt = document.createTextNode("Add Square"); // Creates textual content.
    btn.appendChild(btnTxt); // Adds textual content to <button> element.
    btn.className = "btn col-4 btn-lg btn-outline-secondary px-2 py-2 mx-2 my-4";
    divCol1.appendChild(btn);

    let divRow2 = document.createElement("div"); // Creates <div class="row">
    divRow2.className = "row";
    div.appendChild(divRow2);

    let divCol2 = document.createElement("div"); // Creates <div class="col-12">
    divCol2.className = "col-12";
    divRow2.appendChild(divCol2);

    let idCount = 0; // Creates 'idCount', set value to 0.

    // Creates addSquare() function.
    function addSquare() {
        let divSquare = document.createElement("div"); // Creates <div class="div-square">
        divSquare.className = "div-square";
        divCol2.appendChild(divSquare);
        idCount++; // Adds +1 to 'idCount' with each iteration of addSquare() function.
        divSquare.id = idCount;

        let divHead = document.createElement("h1"); // Creates <h1>
        let divTxt = document.createTextNode(idCount);
        divHead.appendChild(divTxt);
        divHead.className = "h1 text-center text-light justify-content-center align-items-center mt-4";
        divHead.style.visibility = "hidden"; // Sets the CSS 'visible' Property to a value of 'hidden'. 
        divSquare.appendChild(divHead);

        // Creates showTxt() function.
        function showTxt() {
            divHead.style.visibility = "visible"; // Sets the CSS 'visible' Property to a value of 'visible'. 
        };

        // Listens for <div class="div-square" to be moused over, then runs showTxt() function.
        divSquare.addEventListener("mouseover", showTxt);
    };

    // Listens for <button> to be clicked, then runs addSquare() function.
    btn.addEventListener("click", addSquare);
});