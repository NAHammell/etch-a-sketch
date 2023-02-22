const sketchpad = document.querySelector('#sketchpad');
const gridBtn = document.querySelector('#grid-gen');

const colorBlack = document.querySelector('#black');
const colorRed = document.querySelector('#red');

let color = 'red';

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        sketchpad.appendChild(row);

        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('pointerover', function() {
              this.style = `background-color: ${color}`;  
            });
            row.appendChild(pixel);
        }
    }
}

function clearGrid() {
    while (sketchpad.firstChild) {
        sketchpad.removeChild(sketchpad.lastChild);
    }
}

function newGrid() {
    gridSize = parseInt(prompt());
    if (gridSize <= 100) {
        clearGrid();
        createGrid(gridSize);
    } else if (gridSize > 100) {
        alert('Grid size too large.');
    }
}

gridBtn.addEventListener('click', newGrid);

colorBlack.addEventListener('click', colorset => {color = 'black'});
colorRed.addEventListener('click', colorset => {color = 'red'});

createGrid(64);