/*  --- Global Variables --- */
const grid = document.querySelector(".grid-container")
const sliderValue = document.getElementById("myRange");
const gridsize = document.querySelectorAll(".gridsize");
const gridButton = document.querySelector(".gridButton")
const rainbowButton = document.getElementById("rainbow");
const blackButton = document.getElementById("black");
const eraserButton = document.getElementById("eraser");
let gridDimension = 25;

//Set inital grid
makeGrid(gridDimension,gridDimension);

/* --- Event Listeners --- */
document.getElementById("clear").onclick = clearGrid;

gridButton.addEventListener("click", () => {
    clearGrid();
    /* removeGrid(); */
    makeGrid(gridDimension,gridDimension);
});

rainbowButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.background = getRandomColor();
        });
    });
});

blackButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.background = "black";
        });
    });
})

eraserButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.background = "rgb(185, 182, 182)";
        });
    });
});

// display the value of the initial gridsize 
gridsize.forEach((size) => {
    size.textContent = sliderValue.value;
});

// dynamicaly change the grid size numbers to match the range bar
sliderValue.oninput = function() {
    gridDimension = sliderValue.value;
    gridsize.forEach((size) => {
        size.textContent = sliderValue.value;
        gridDimension = sliderValue.value;
    });
};

/*  --- Functions --- */
function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows); // assigns the value of rows to --grid-rows in .grid-container
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows*cols); i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        grid.appendChild(box);
    };
};

function clearGrid() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.style.background = "rgb(185, 182, 182)"
    });
};

function getRandomColor() {
    let hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    };
    return color;
};


/* If using borders in the grid must use removeGrid() to clear the previous border */
/* function removeGrid() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.remove();
    })
} */