class Instructor {
    constructor ({name, role = 'assistant'}){
        this.name = name;
        this.role = role;
    }
    allDetails(){
        console.log(`${this.name}: ${this.role}`);
    }
}

const Alan = new Instructor({name: 'Andres Haro'});
const Leila = new Instructor({name: 'Leila Arechiga', role:'teacher'});
Alan.allDetails();
Leila.allDetails();