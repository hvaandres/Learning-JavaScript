
// Function declarations
// Practice with your first name & last name

function Name (first, last) { 
  console.log(`${last}, ${first}`);
}
Name('Andres', 'Haro');

// Function Expression
Name = (first, last) => { 
  console.log(`${last}, ${first}`);
}
Name('Andres', 'Haro');

// Arrow Function
miMundo = () => { console.log("Hola, como estan? Mi nombre es Mundo"); }
miMundo();

// Function Arguments
firstName = first => { console.log(first.toUpperCase()); }
firstName('Haro');

// More than two Arguments
Name = (first, last) => { console.log(`${last}, ${first}`); }
Name('Andres', 'Haro');

// Example with Return


userInfo = (direccion, estado, ciudad) => {
    return `${direccion}, ${estado} ${ciudad}`;
};
userInfo('Guadalajara', 'Jalisco', 'Mexico');

