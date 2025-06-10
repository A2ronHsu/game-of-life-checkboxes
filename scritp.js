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
      rowContainer.setAttribute("class", `row r${i}`);
      checkboxMatrix.appendChild(rowContainer);
      for (let j = 0; j < columns; j++) {
         const newInput = document.createElement("input");
         newInput.setAttribute("type", "checkbox");
         newInput.setAttribute("class", `column c${j}`);
         newInput.id = `e${i}${j}`;
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
 * @param {*} cell this is the html node that represent a cell. It id property is the cell row-columns number.
 * @returns a number with the number of cells.
 */
const getNeighbours = (cell) =>{
   const 
}

