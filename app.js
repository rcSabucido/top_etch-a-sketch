let gridContainer = document.querySelector(".gridContainer"); 
const addBtn = document.querySelector("#addButton");


function createCanvas(dim) {
    for (let i = 0; i < dim; i++) {
        let gridDiv = document.createElement("div");
        gridDiv.className = "grid"
    
        gridContainer.appendChild(gridDiv);
        gridDiv.classList.add("colorGrid");
    }
}

document.addEventListener("load", createCanvas(256));

let rgbGrid = document.querySelectorAll(".colorGrid");

rgbGrid.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "red";
    })
})


addBtn.addEventListener("click", () => {
    let userInput = prompt("Please enter the dimension:");
    let newDimension = userInput * userInput;

    rgbGrid.forEach((grid) => {
        grid.remove();
    })

    createCanvas(newDimension);
});

// divContainer / given grid = dimension of the grid
// 300 x 300px container / 3x3 grid = 100px 
