let gridContainer = document.querySelector(".gridContainer"); 
const addBtn = document.querySelector("#addButton");


function createCanvas(dim) {
    for (let i = 0; i < dim; i++) {
        let gridDiv = document.createElement("div");
        gridDiv.className = "grid"
    
        gridContainer.appendChild(gridDiv);
    }
}

document.addEventListener("load", createCanvas(256));

function createMouseListener() {
    let rgbGrid = document.querySelectorAll(".grid");

    rgbGrid.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "red";
        })
    })
}

function changeGridSize(dim) {
    let rgbGrid = document.querySelectorAll(".grid");
    let size = String((640 / dim));
    rgbGrid.forEach((grid) => {
        grid.style.width = size.concat("px");
        grid.style.height = size.concat("px");
    });
}

addBtn.addEventListener("click", () => {
    let userInput = prompt("Please enter the dimension:");
    let newDimension = userInput * userInput;

    let rgbGrid = document.querySelectorAll(".grid");
    rgbGrid.forEach((grid) => {
        grid.remove();
    })

    createCanvas(newDimension);
    changeGridSize(userInput);
    createMouseListener();
});

createMouseListener();

// divContainer / given grid = dimension of the grid
// 300 x 300px container / 3x3 grid = 100px 
