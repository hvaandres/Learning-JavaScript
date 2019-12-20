
function SavingCalc(paycheck) {
    this.percent = 0.30;
    this.paycheck = paycheck;
  
    this.deposit = function() {
      return (this.percent * this.paycheck)
    }
  }
  
  const chaseBank = new SavingCalc(4500);