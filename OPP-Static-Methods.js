// Exercise

class Home {
	constructor({ type, payment = "renting" }) {
		this.type = type;
		this.payment = payment;
	}

	static homeImprovement(yourHome) {
		return (yourHome.payment === 'mortgage')
	}
}

//Write your code here

let choice1 = new Home ({'type':'house', 'payment':'mortgage'});
let choice2 = new Home ({'type':'apartment'});

console.log(choice1);
console.log(choice2);