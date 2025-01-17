const inputBtn = document.querySelector("#input-btn");
const body = document.querySelector("body");
const width = 960;

function getRandomColor(){
    let redValue = Math.floor(Math.random()*(255));
    let greenValue = Math.floor(Math.random()*(255));
    let blueValue = Math.floor(Math.random()*(255));
    return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}


inputBtn.addEventListener("click", ()=>{
    let gridSize = parseInt(prompt("Enter grid size : 1-100"));
    formGrid(gridSize);
});

function clearPrev(){
    const container = document.querySelector("#container");
    if(container != null)
        body.removeChild(container);
}

//Forming a grid of gridSize(gridSize*gridSize)
function formGrid(gridSize = 16){
    clearPrev();
    const container = document.createElement("div");
    const squareWidth = Math.floor(width/gridSize);
    container.setAttribute("id", "container");
    container.style.width = `${squareWidth*gridSize}px`;
    body.appendChild(container);
    const squaresCount = gridSize**2;
    for(let i=0; i<squaresCount; i++){
        const square = document.createElement("div");
        square.setAttribute("id", `${i}-sqaure`);
        square.style.boxSizing = "border-box";
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareWidth}px`;
        square.style.backgroundColor = getRandomColor();
        square.style.opacity = 1;
        container.appendChild(square);
    }
    //Hover darkener event.
    container.addEventListener("mouseover", (event)=>{
        let opacity = +event.target.style.opacity;
        if(opacity!=0){
            event.target.style.backgroundColor = getRandomColor();
            opacity -= 0.1;
            event.target.style.opacity = opacity;
        }
    });
}

formGrid();

