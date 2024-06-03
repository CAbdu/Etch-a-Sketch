
const container = document.getElementById('grid-container');
const input = document.getElementById('grid-size');
const button = document.getElementById('generate-grid');

button.addEventListener('click', () => {
  const size = parseInt(input.value);
  if (isNaN(size) || size < 1 || size > 100) {
    alert('Please enter a valid number between 1 and 100.');
  } else {
    createGrid(size, size);
  }
});


function createGrid(rows, cols) {
  // Clear any existing grid items
  container.innerHTML = '';

  // Set the CSS variables for the number of rows and columns
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  // Calculate the size of each grid item
  const gridSize = 640 / rows;

  for (let i = 0; i < rows * cols; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.width = `${gridSize}px`;
    div.style.height = `${gridSize}px`;

    function random_bg_color() {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    console.log(bgColor);
    document.body.style.background = bgColor;
  
      // Add event listener for mouseover event to change color
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = bgColor; // Change to desired color
    });

      }
    
    random_bg_color();
    
   
    container.appendChild(div);
  }
}

// Initialize with a default grid size of 16x16
createGrid(16, 16);

function popupFn() {
  document.getElementById(
      "overlay"
  ).style.display = "block";
  document.getElementById(
      "popupDialog"
  ).style.display = "block";
}
function closeFn() {
  document.getElementById(
      "overlay"
  ).style.display = "none";
  document.getElementById(
      "popupDialog"
  ).style.display = "none";
}