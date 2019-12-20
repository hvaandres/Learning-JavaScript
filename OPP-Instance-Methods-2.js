// Excersice


class Computer {
	constructor({ year, brand, memoryRam = 'Ram' }) {
		this.year = year;
		this.brand = brand;
		this.memoryRam = memoryRam;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} use a lot of ${this.memoryRam}`)
	}
}

//Write your code here

const Apple = new Computer ({year: 2019, brand: 'Apple', memoryRam: 'Memory Ram'}); 

Apple.carSpecs();