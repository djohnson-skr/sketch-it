/*  --- Global Variables --- */
const grid = document.querySelector(".grid-container")
const sliderValue = document.getElementById("myRange");
const gridsize = document.querySelectorAll(".gridsize");
let gridDimension = 0;

makeGrid(25,25);
document.getElementById("clear").onclick = clearGrid;

// ----- display the value of the gridsize dynamicaly -----
gridsize.forEach((size) => {
    size.textContent = sliderValue.value;
    gridDimension = sliderValue.value;
});

sliderValue.oninput = function() {
    gridDimension = sliderValue.value;
    gridsize.forEach((size) => {
        size.textContent = sliderValue.value;
        gridDimension = sliderValue.value;
    });
};

// ----- change the grid size via the slider and button -----
const gridButton = document.querySelector(".gridButton")
gridButton.addEventListener("click", () => {
    clearGrid();
    removeGrid();
    makeGrid(gridDimension,gridDimension);
});


/*  --- Functions --- */
function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows); // assigns the value of rows to --grid-rows in .grid-container
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows*cols); i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        grid.appendChild(box);
    };
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.background = "black";
        });
    });
};

function removeGrid() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.remove();
    })
}

function clearGrid() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.style.background = "rgb(185, 182, 182)"
    });
};








