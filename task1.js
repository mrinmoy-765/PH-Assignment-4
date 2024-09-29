function calculateTax(income, expenses) {
  if (income <= 0 || expenses <= 0 ) {
    return 'Invalid Input';
  }
  
  if (income < expenses) {
    return 'Invalid Input';
  }

  
  let num1 = income;
  let num2 = expenses;
  let saving = num1 - num2;
  let tax = saving*.20;


  return tax;
}

// Example usage:
console.log(calculateTax(5000, 200)); 