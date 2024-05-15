// ### Exercise #3.1

// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.001) interest fee.
// Can you help her calculate her costs?

// Return the value of what she should be paying.

const payment = (amount) => {
  let transationFee = 3;
  let interestFee = 0.001;
  let result = amount + transationFee + amount * interestFee;
  console.log(`Total cost: ${result}`);
};

payment(100);
