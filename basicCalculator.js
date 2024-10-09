// Declare variables to store two numeric values
let num1 = 10; // assigned value
let num2 = 5; // assigned value


// Performing arithmetic operations and displaying the results
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// Use assignment operators to update the values
num1 += 3; // Equivalent to num1 = num1 + 3
num2 *= 2; // Equivalent to num2 = num2 * 2

// Display the updated values
console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

// Use comparison operators to compare the values
console.log("Is num1 equal to num2?", num1 === num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 !== num2);



// Apply logical operators to combine conditions
let isPositive = (num1 > 0) && (num2 > 0);
let isEven = (num1 % 2 === 0) || (num2 % 2 === 0);

// Display the results
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);