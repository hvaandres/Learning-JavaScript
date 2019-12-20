
// Let's create a HTML - Header_Generator

const headingH = (text, typeOfHeading) => {
    return `
      <h${typeOfHeading}>${text}</h${typeOfHeading}>
    `
  }
  
  headingH('Hola Cabronsito', 1);