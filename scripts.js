// Listens for the page to load, then runs a function().
document.addEventListener("DOMContentLoaded", function() {
    let div = document.createElement("div"); // Creates <div> tag.
    div.className = "header-container"; // Gives a class name / applies styling via Bootstrap 4.
    document.body.appendChild(div); // Places <div class="header=container"> into <body> of HTML.
    
    let divRow1 = document.createElement("div"); // Creates <div class="row">.
    divRow1.className = "row";
    div.appendChild(divRow1);

    let divCol1 = document.createElement("div"); // Creates <div class="col-12">.
    divCol1.className = "col-12 text-center";
    divRow1.appendChild(divCol1);

    let btn = document.createElement("button"); // Creates <button>.
    let btnTxt = document.createTextNode("Add Square"); // Creates textual content.
    btn.appendChild(btnTxt); // Adds textual content to <button>.
    btn.className = "btn col-4 btn-lg btn-outline-secondary px-2 py-2 mx-2 my-4";
    divCol1.appendChild(btn);

    let divRow2 = document.createElement("div"); // Creates <div class="row">.
    divRow2.className = "row";
    div.appendChild(divRow2);

    let divCol2 = document.createElement("div"); // Creates <div class="col-12">.
    divCol2.className = "col-12";
    divRow2.appendChild(divCol2);

    let idCount = 0; // Creates 'idCount', set value to 0.

    // Creates addSquare() function.
    function addSquare() {
        let divSquare = document.createElement("div"); // Creates <div class="div-square">.
        divSquare.className = "div-square";
        divCol2.appendChild(divSquare);
        idCount++; // Adds +1 to 'idCount' with each iteration of addSquare() function.
        divSquare.id = idCount;

        let divHead = document.createElement("h1"); // Creates <h1>.
        let divTxt = document.createTextNode(idCount);
        divHead.appendChild(divTxt);
        divHead.className = "h1 text-center text-light justify-content-center align-items-center mt-4";
        divHead.style.visibility = "hidden"; // Sets the CSS 'visible' Property to a value of 'hidden'. 
        divSquare.appendChild(divHead);

        // Creates showTxt() function.
        function showTxt() {
            divHead.style.visibility = "visible"; // Changes the CSS 'visible' Property to a value of 'visible'. 
        };

        // Listens for <div class="div-square"> to be moused over, then runs showTxt() function.
        divSquare.addEventListener("mouseover", showTxt);

        // Creates hideTxt() function.
        function hideTxt() {
            divHead.style.visibility = "hidden";
        };

        // Listens for <div class="div-square"> to be moused out, then runs hideTxt() function.
        divSquare.addEventListener("mouseout", hideTxt);

        // Creates an array of myColors[].
        let myColors = [
            "#007bff", // Equal to "primary" (blue).
            "#6c757d", // Equal to "secondary" (dark grey).
            "#28a745", // Equal to "success" (green).
            "#dc3545", // Equal to "danger" (red).
            "#ffc107", // Equal to "warning" (yellow).
            "#17a2b8", // Equal to "info" (teal).
            "#f8f9fa", // Equal to "light" (light grey).
            "#343a40" // Equal to "dark" (black).
        ];

        // Creates getRandomColor() function.
        function getRandomColor() {
            let myRandomColor = myColors[Math.floor(Math.random()*myColors.length)]; // Randomly selects an item from myColors[].
            return myRandomColor;
        };

        // Listens for <div class="div-square"> to be clicked, then runs a function().
        divSquare.addEventListener("click", function() {
            let myRandomColor = getRandomColor();
            divSquare.style.backgroundColor = myRandomColor;
        });

        // Creates ifEven() function.
        function ifEven() {
            alert("This is even!");
            /*
            if() {
               
            } else if() {
                alert("There aren't any squares after the clicked square!");
            };
            */
        };

        // Creates ifOdd() function.
        function ifOdd() {
            alert("This is odd!");
            /*
            if() {
                
            } else if() {
                alert("There aren't any squares before the clicked square!");
            };
            */
        };

        // Listens for <div class="div-square"> to be double clicked, then runs a function().
        divSquare.addEventListener("dblclick", function() {
            // console.log(this.id); 
            if(this.id % 2 == 0) {
                ifEven();
                // alert("This is even!");
            } else {
                ifOdd();
                // alert("This is odd!");
            };
        });
    };

    // Listens for <button> to be clicked, then runs addSquare() function.
    btn.addEventListener("click", addSquare);
}); 