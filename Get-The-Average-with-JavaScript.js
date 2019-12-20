// Create a Constant called getAverage
// Sum the values from the array
// Get the lenght of the array
// Divide the array sum by the lenghts
// Add the constant with the array with the numbers that you will use for the Average.


const myAverage = arr => {
    const reducer =(total, currentValue) => total + currentValue;
    const total = arr.reduce(reducer);
    return total / arr.length;
  };
  
  myAverage([2,10,88,99,82,99,102,110,110]);