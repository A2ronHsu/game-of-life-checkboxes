const main = document.querySelector("main");
const rowInput = document.querySelector("#row");
const columnInput = document.querySelector("#column");
const renderAreaButton = document.querySelector("#renderArea");
let checkboxMatrix = document.querySelector(".checkbox_matrix");


test = document.querySelector("#test");
test.addEventListener("click", () => {
   const element00 = document.querySelector("#e00");
   console.log(element00.checked);
})
//initial state

function renderCheckboxes() {
   const rows = rowInput.valueAsNumber;
   const columns = columnInput.valueAsNumber;
   console.log(rows, columns)
   for (let i = 0; i < rows; i++) {
      const rowContainer = document.createElement("div");
      rowContainer.setAttribute("class", `row r${i}`); //each row have a unique r${i} class
      checkboxMatrix.appendChild(rowContainer);
      for (let j = 0; j < columns; j++) {
         const newInput = document.createElement("input");
         newInput.setAttribute("type", "checkbox");
         newInput.setAttribute("class", `column c${j}`); //each column is a child of a row div and have the class c${i}
         newInput.id = `e_${i}_${j}`; //each cell/element have the id e${i}{j}
         const addedCheckbox = rowContainer.appendChild(newInput);
         // console.log(`"${i}${j}"`, addedCheckbox);

      }
   }
}

function clearCheckboxMatrix() {
   checkboxMatrix.remove();
   checkboxMatrix = document.createElement("div");
   checkboxMatrix.setAttribute("class", "checkbox_matrix");
   main.appendChild(checkboxMatrix);
}

renderCheckboxes();


renderAreaButton.addEventListener("click", () => {
   clearCheckboxMatrix();
   renderCheckboxes();
});

//Conway's game o life rules

/**
 * 
 * @param {*} cell HTML element with an id in the /#e-\d-\d/ format
 * @returns a number with the live number of cells.
 */
const getLiveNeighbours = (currentCell = document.querySelector()) => {
   if (!/e_\d+_\d+/.test(currentCell.id)) {
      console.log("not valid id");
   }
   const idArray = currentCell.id.split("_");
   const currentRow = Number(idArray[1]);
   const currentCol = Number(idArray[2]);
   let count = 0;
   for (let i = currentRow - 1; i <= currentRow + 1; i++) {
      for (let j = currentCol - 1; j <= currentCol + 1; j++) {
         if (i != currentRow || j != currentCol) {
            const neighboursCell = document.querySelector(`#e_${i}_${j}`);
            if (neighboursCell) {
               if (neighboursCell.checked) count++;
            }
         }
      }
   }
   return count;
   
}

const liveOrDie = (currentCell = document.querySelector()) =>{
   const isCurrentCellChecked = currentCell.checked;
   const liveNeighboursCellCount = getLiveNeighbours(currentCell);
   
   if(isCurrentCellChecked){
      if (liveNeighboursCellCount < 2) currentCell.checked = false;
      if (liveNeighboursCellCount > 3) currentCell.checked = false;
   }else{
      if (liveNeighboursCellCount == 3) currentCell.checked = true;
   }
}



console.log(checkboxMatrix.childNodes);
console.log(getLiveNeighbours(document.querySelector("#e_1_1")));
