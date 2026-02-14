// Part 1: Create the data array
const expenses = [
  { name: "Lunch", category: "Food", amount: 12 },
  { name: "Groceries", category: "Food", amount: 45 },
  { name: "Bus Ticket", category: "Transport", amount: 4 },
  { name: "Gas", category: "Transport", amount: 30 },
  { name: "Movie", category: "Entertainment", amount: 15 },
  { name: "Video Game Rental", category: "Entertainment", amount: 8 }
];
// Part 2: Display all expenses
console.log("All Expenses:");
expenses.forEach(exp => {
  console.log(`${exp.name} | ${exp.category} | $${exp.amount}`);
});
// Part 3: Add 15% tax using map()
const expensesWithTax = expenses.map(exp => {
  return {
    name: exp.name,
    category: exp.category,
    amount: Number((exp.amount * 1.15).toFixed(2))
  };
});

console.log("Expenses With Tax:");
console.log(expensesWithTax);
// Part 4: Filter Food expenses
const foodExpenses = expenses.filter(exp => exp.category === "Food");

console.log("Food Expenses Only:");
console.log(foodExpenses);
// Part 5: Total spent overall
const totalSpent = expenses.reduce((total, exp) => {
  return total + exp.amount;
}, 0);

console.log("Total Spent:", totalSpent);

const totalFoodSpent = expenses
  .filter(exp => exp.category === "Food")
  .reduce((total, exp) => total + exp.amount, 0);

console.log("Total Food Spent:", totalFoodSpent);
