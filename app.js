const gridContainer = document.querySelector(".gridContainer"); 

for (let i = 0; i < 256; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.className = "grid"

    gridContainer.appendChild(gridDiv);
    gridDiv.classList.add("colorGrid");
}

const rgbGrid = document.querySelectorAll(".colorGrid");

rgbGrid.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "red";
    })
})


// divContainer / given grid = dimension of the grid
// 300 x 300px container / 3x3 grid = 100px 
