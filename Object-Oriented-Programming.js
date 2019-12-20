// Constructor Function

class Teacher {
  constructor ({ name }) {
    this.name = name;
  }
}

const Andy = new Teacher ({ name: 'Andy Story' });
console.log(Andy.name)