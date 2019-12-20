// combaining Arrays

/* 

let shoppingCart =[345, 375, 485, 158];
let newItems = [95, 256];

shoppingCart.push(...newItems);
console.log(shoppingCart);  // [ 345, 375, 485, 158, 95, 256 ]

*/


// Copying Arrays

/*

const shoppingCart = [ 345, 375, 485, 158];
const updateCart = shoppingCart.slice();
updateCart.push(100);
console.log(updateCart); // [ 345, 375, 485, 158, 100]
console.log(shoppingCart); // [ 345, 375, 485, 158]

*/

/*

const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals));

// [1, 5, 1, 10, 2, 3]
// ...[1, 5, 1, 10, 2, 3]
// 1, 5, 1, 10, 2, 3

*/

// ..Deconstruction

const { adventure, cities, ...teams } = {
    adventure: 'Trip',
    cities: 'Guadalajara',
    teamMates_1: 'Carlos',
    teamMates_2: 'Gregorio'
  }
  
  console.log(adventure);
  console.log(cities);
  console.log(teams);
  
  