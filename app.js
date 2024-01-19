const gridContainer = document.querySelector(".gridContainer"); 

for (let i = 0; i < 256; i++) {
   let gridDiv = document.createElement("div");
    gridDiv.className = "grid"

    gridContainer.appendChild(gridDiv);
}
