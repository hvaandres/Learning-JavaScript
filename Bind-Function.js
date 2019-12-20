
// We use the Bind () method primarily to call a function with the this value set explicitly. It other words, bind () allows us to easily set which specific object will be bound to this when a function or method is invoked.

const userOne = {
    firstName: "Andres",
    lastName: "Haro"
  }
  
  const userTwo = {
    firstName: "Luis",
    lastName: "Herrera"
  }
  
  const fullName = function() {
    return `${this.lastName}, ${this.firstName}`;
  }
  
  const Andres = fullName.bind(userOne);
  const Luis = fullName.bind(userTwo);
  
  Andres() // 'Haro, Andres'
  Luis() // 'Herrera, Luis'