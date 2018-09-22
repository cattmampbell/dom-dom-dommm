// 'DOMContentLoaded' event handler on document
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    // Creates <elementName class="className"> and appends the element via appendTo
    const createElement = (elementName, className, appendTo) => {
        const element = document.createElement(elementName);
        element.className = className;
        appendTo.appendChild(element);
        return element;
    }

    const divContainer = createElement('div', 'header-container', body);
    const divRow1 = createElement('div', 'row', divContainer);
    const divCol1 = createElement('div', 'col-12 text-center', divRow1);

    const btn = createElement('button', 'btn col-4 btn-lg btn-outline-secondary px-2 py-2 mx-2 my-4', divCol1);
    const btnTxt = document.createTextNode('Add Square'); 
    btn.appendChild(btnTxt); 

    const divRow2 = createElement('div', 'row', divContainer);
    const divCol2 = createElement('div', 'col-12', divRow2);

    let idCount = 0; // Initializes idCount (number of squares on the page)
   
    // Creates <div class="div-square" id="idCount"> and appends it to divCol2, then creates <h1>idCount</h1> and appends it to divSquare
    const addSquare = () => {
        const divSquare = createElement('div', 'div-square', divCol2); 
        idCount += 1; // Adds 1 to idCount each time addSquare() is called
        divSquare.id = idCount; 

        const divHead = createElement('h1', 'h1 text-center text-light justify-content-center align-items-center mt-4', divSquare);
        divHead.style.visibility = 'hidden';
        const divTxt = document.createTextNode(idCount);
        divHead.appendChild(divTxt);

        const showTxt = () => { divHead.style.visibility = 'visible'; } // Sets visibility: visible;
        divSquare.addEventListener('mouseover', showTxt); // 'mouseover' event handler on divSquare, calls showTxt()
        
        const hideTxt = () => { divHead.style.visibility = 'hidden'; } // Sets visibility: hidden;
        divSquare.addEventListener('mouseout', hideTxt); // 'mouseout' event handler on divSquare, calls hideTxt()

        const myColors = [ '#007bff', '#6c757d', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#f8f9fa', '#343a40' ];

        // Randomly selects an index from myColors, assigns value to myRandomColor
        const getRandomColor = () => {
            const myRandomColor = myColors[ Math.floor (Math.random() * myColors.length) ];
            return myRandomColor;
        }

        // 'click' event handler on divSquare, calls getRandomColor() and sets return as value of background-color:
        divSquare.addEventListener('click', () => {
            const thisRandomColor = getRandomColor();
            divSquare.style.backgroundColor = thisRandomColor;
        })

        // 'dblclick' event handler on divSquare
        divSquare.addEventListener('dblclick', () => { 
            const divSquareId = parseInt(divSquare.id);
            const firstDivSquare = divCol2.firstElementChild;
            const firstDivSquareId = parseInt(firstDivSquare.id);
            const lastDivSquare = divCol2.lastElementChild;
            const lastDivSquareId = parseInt(lastDivSquare.id);
            const divSquareTotal = document.querySelectorAll('div-square').length;
            if(divSquareId === 1 && divSquareId === firstDivSquareId && divSquareId === lastDivSquareId && divSquareId === divSquareTotal) {
                alert(`There are no more squares, this is the only one! Click button to add more!`); 
            } else if(divSquareId === 1 && divSquareId < divSquareTotal) {
                alert(`Click the button to add more squares to the page!`);
            } else if(divSquareId / 2 !== 0) { // Odd
                const deletePreviousDivSquare = divSquare.previousElementSibling;
                const deletePreviousDivSquareId = deletePreviousDivSquare.id;
                alert(`Well, isn't this odd?`);
            } else if(divSquareId > 1 && divSquareId !== firstDivSquareId && divSquareId !== lastDivSquareId && divSquareId > deletePreviousDivSquareId) {
                alert(`Goodbye, ${deletePreviousDivSquareId}!`);
            } else if(divSquareId % 2 == 0) { Even
                alert(`This is even, I'd say!`);
                const deleteNextDivSquare = divSquare.nextElementSibling;
                const deleteNextDivSquareId = deleteNextDivSquare.id;
            }
        })
    };

    // 'click' event handler on <button>
    btn.addEventListener('click', addSquare); 
})