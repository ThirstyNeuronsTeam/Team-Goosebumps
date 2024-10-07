const integers = [2, 3, 1, 5, 6, 7];

//I want to filter out odd numbers from above array

/* const oddNumbers = integers.filter((integer) => {
    //If I divide a nunber by 2 , and the remainder is 1 , Is it odd or even? - ODD
    if (integer % 2 === 1) {
      return true;
    } else {
      return false;
    } 
    //If I divide a nunber by 2 , and the remainder is 0, Is it odd or even? - EVEN
  }); */

const oddNumbers = integers.filter(integer => integer % 2 === 1);
//[3,1,5,7]

console.log(oddNumbers[0]===3);
console.log(oddNumbers[1]===3);