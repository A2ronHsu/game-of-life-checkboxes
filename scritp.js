const main = document.querySelector("main");
const rowInput = document.querySelector("#row");
const columnInput = document.querySelector("#column");
const renderAreaButton = document.querySelector("#renderArea");
const startButton = document.querySelector("#start-button")

function renderEmptyCheckboxes() {
   const rows = rowInput.valueAsNumber;
   const columns = columnInput.valueAsNumber;
   let matrix = document.createElement("div");
   matrix.setAttribute("class", "checkbox_matrix");


   // console.log(rows, columns)
   for (let i = 0; i < rows; i++) {
      const rowContainer = document.createElement("div");
      rowContainer.setAttribute("class", `row r${i}`); //each row have a unique r${i} class
      matrix.appendChild(rowContainer);
      for (let j = 0; j < columns; j++) {
         const newInput = document.createElement("input");
         newInput.setAttribute("type", "checkbox");
         newInput.setAttribute("class", `column c${j}`); //each column is a child of a row div and have the class c${i}
         newInput.id = `e_${i}_${j}`; //each cell/element have the id e${i}{j}
         rowContainer.appendChild(newInput);
         // console.log(`"${i}${j}"`, addedCheckbox);

      }
   }

   return matrix;
}

main.append(renderEmptyCheckboxes());

function clearCheckboxMatrix() {
   const checkboxMatrix = document.querySelector(".checkbox_matrix");
   checkboxMatrix.remove();

}



renderAreaButton.addEventListener("click", () => {
   clearCheckboxMatrix();
   main.append(renderEmptyCheckboxes());
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

const liveOrDie = (currentCell = document.querySelector(), liveNeighboursCellCount) => {
   const isCurrentCellChecked = currentCell.checked;

   if (isCurrentCellChecked) {
      if (liveNeighboursCellCount < 2 || liveNeighboursCellCount > 3) return false;
      else return true
   } else {
      if (liveNeighboursCellCount == 3) return true;
   }
}



const updateState = () => {
   const updateCheckboxMatrix = renderEmptyCheckboxes()
   const updateStateRow = updateCheckboxMatrix.children;
   for (let i = 0; i < updateStateRow.length; i++) {
      const updateStateColumns = updateStateRow[i].children;
      for (let j = 0; j < updateStateColumns.length; j++) {
         const currentStateCell = document.querySelector(`#e_${i}_${j}`);
         const neighboursCount = getLiveNeighbours(currentStateCell);
         updateStateColumns[j].checked = liveOrDie(currentStateCell, neighboursCount);

      }
   }
   clearCheckboxMatrix();
   main.append(updateCheckboxMatrix);
}

let buttonSwitch = false
let timer;
startButton.addEventListener("click", () => {
   buttonSwitch = !buttonSwitch;
   console.log(buttonSwitch);
   if (buttonSwitch) {
      timer = setInterval(() => {
         updateState()
      }, 500)
   }else{
      clearInterval(timer);
   }

})



// console.log(getLiveNeighbours(document.querySelector("#e_1_1")));
