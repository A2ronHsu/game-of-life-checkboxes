const rowInput = document.querySelector("#row");
const columnInput = document.querySelector("#column");
const checkboxMatrix = document.querySelector(".checkbox_matrix");

console.log(rowInput,columnInput, checkboxMatrix);

function renderCheckboxes (){
   const rows = rowInput.valueAsNumber;
   const columns = columnInput.valueAsNumber;
   console.log(rows, columns)

   for (let i = 0; i < rows; i++){
      for (let j = 0; j < columns; j++){
         const rowContainer = document.createElement("div");
         rowContainer.className = i
         const newInput = document.createElement("input");
         newInput.setAttribute("type", "checkbox")
         const addedCheckbox = checkboxMatrix.appendChild(newInput);
         console.log(`"${i}${j}"`)
         addedCheckbox.c = `"${i}${j}"`;

      }
   }
}

renderCheckboxes();