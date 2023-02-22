const sketchpad = document.querySelector('#sketchpad');

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

createGrid(64);