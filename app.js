let gridContainer = document.querySelector(".gridContainer"); 
const addBtn = document.querySelector("#addButton");


function createCanvas(dim) {
    for (let i = 0; i < dim; i++) {
        let gridDiv = document.createElement("div");
        gridDiv.className = "grid"

        gridContainer.appendChild(gridDiv);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
function createMouseListener() {
    let rgbGrid = document.querySelectorAll(".grid");

    rgbGrid.forEach((grid) => {
        let opacityNumber = 0;
        let color = getRandomColor();
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = color;
            opacityNumber += .10;
            grid.style.opacity = String(opacityNumber);
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
    if (userInput > 100) {
        alert("Entered dimension is too large, please try again!");
    } else {
        let newDimension = userInput * userInput;

        let rgbGrid = document.querySelectorAll(".grid");
        rgbGrid.forEach((grid) => {
            grid.remove();
        })
    
        createCanvas(newDimension);
        changeGridSize(userInput);
        createMouseListener();
    }
});

createCanvas(256);
createMouseListener();

// divContainer / given grid = dimension of the grid
// 300 x 300px container / 3x3 grid = 100px 
