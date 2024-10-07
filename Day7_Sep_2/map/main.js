const values = [1, 2, 3, 4, 6, 10];


//creating new array using map , "each element" in the "above array" converted to "a div with two spans"
const squareValues = values.map((value) => { 
  return `<div class="spansParent">
             <span class="span1">${value}</span>
             <span class="span2">${value*value}</span>
         </div>`;
});

const elements = squareValues.join("");

const parent = document.getElementById("list");

parent.innerHTML = elements;


