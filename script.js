const sketchpad = document.querySelector('#sketchpad');
const gridBtn = document.querySelector('#grid-gen');

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        sketchpad.appendChild(row);

        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('pointerover', function() {
              this.style = 'background-color: red;';  
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

createGrid(64);