let inputBtn = document.querySelector("#input-btn");
let gridSize = 16;
const body = document.querySelector("body");
const width = 960;
const color = ["blue", "green", "red", "lightgreen", "lightblue", "lightred", "orange", "skyblue", "yellow", "violet"];

function getRandomColor(){
    let colorIndex = Math.floor(Math.random()*(color.length-1));
    if(colorIndex >= color.length)
        return "white";
    return color[colorIndex];
}


inputBtn.addEventListener("click", ()=>{
    gridSize = parseInt(prompt("Enter grid size 1-100"));
    formGrid();
});

function clearPrev(){
    const container = document.querySelector("#container");
    if(container != null)
        body.removeChild(container);
}

//Forming a grid of gridSize(gridSize*gridSize)
function formGrid(){
    clearPrev();
    const container = document.createElement("div");
    const squareWidth = Math.floor(width/gridSize);
    container.setAttribute("id", "container");
    container.style.width = `${squareWidth*gridSize}px`;
    body.appendChild(container);
    const squaresCount = gridSize**2;
    for(let i=0; i<squaresCount; i++){
        const square = document.createElement("div");
        square.setAttribute("class", "grid");
        square.setAttribute("id", `${i}-sqaure`);
        square.style.boxSizing = "border-box";
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareWidth}px`;
        square.style.backgroundColor = getRandomColor();
        container.appendChild(square);
    }
}

formGrid();

