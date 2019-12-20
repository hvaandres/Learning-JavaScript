// We need to check if two objects are equals or not!

// Kepp on eye: You will need to know that adding another object will give you a false output.


const isEqual = (look1, look2) => {
  const look1Keys = Object.keys(look1);
  const look2Keys = Object.keys(look2);

  if (look1Keys.length !== look2Keys.length) {
    return false;
  }

  for (let lookKey of look1Keys) {
    if (look1[lookKey] !== look2[lookKey]) {
      return false;
    }
  }

  return true;
};


// If you delete great:{[]:""} will say that is true

const look1 = {
  name: "Andres",
  age: 22,
  great: {
    food: "Torta Ahogada",
    vacation: "San Diego"
  }
};

// If you delete great:{[]:""} will say that is true

const look2 = {
  name: "Andres",
  age: 22,
  great: {
    food: "Torta Ahogada",
    vacation: "San Diego"
  }
};

look1 == look2;
isEqual(look1, look2);