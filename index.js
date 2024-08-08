// Exercise 1: Age Checker
// Ask the user to enter their age. If they are 18 or older, display "You are an adult." Otherwise, display "You are not an adult."
let age = parseInt(prompt("What's your age: "))

if (age >= 18) {
  console.log("You are an adult. ")
} else {
  console.log("You are not an adult. ")
}

// Exercise 2: Simple Comparison
// Write a program that prompts the user to enter two numbers and displays whether the first number is greater, less than, or equal to the second number.
// Note: make sure you have the correct types!
let num1 = parseInt(prompt("Enter 1st number: "))

let num2 = parseInt(prompt("Enter 2nd number: "))

if (num1 > num2) {
  console.log("The 1st number is greater than the 2nd number. ")
} else if (num1 == num2) {
  console.log("The 1st number is equal to the 2nd number. ")
} else if (num1 < num2) {
  console.log("The 1st number is less than the 2nd number. ")
}

// Exercise 3: Even or Odd
// Create a program that asks the user for an integer and then prints whether the number is even or odd. (Google how to check this!)
let eOrO = parseInt(prompt("Enter a number: "))

if (eOrO % 2 == 0) {
  console.log("This number is even. ")
} else {
  console.log("This number is odd. ")
}

// Exercise 4: Day of the Week
// Prompt the user to enter a day of the week (e.g., "Monday"). Display a message that says whether it's a weekday or the weekend.
let dayOfWeek = prompt("Enter a day of the week (For example, Monday): ")

if (dayOfWeek == "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday") {
  console.log("It is a weekday")
} else if (dayOfWeek == "Saturday " || "Sunday") {
  console.log("It is a weekend")
}

// Exercise 5: Age Group Classifier
// Prompt the user to enter their age and categorize them into different age groups:
// - 0-12: Child
// - 13-19: Teenager
// - 20-64: Adult
// - 65+: Senior Citizen
let age2 = prompt("Enter your age: ")

if (0 <= age2 <= 12) {
  console.log("You are a child. ")
} else if (13 <= age2 <= 19) {
  console.log("You are a teenager. ")
} else if (20 <= age2 <= 64) {
  console.log("You are an adult. ")
} else if (age2 >= 65) {
  console.log("You are a senior citizen. ")
}

// Exercise 6: Rock, Paper, Scissors Game
// Create a simple rock, paper, scissors game. Prompt the user to enter their choice (rock, paper, or scissors) and then randomly generate the computer's choice. Determine the winner and display the result.
let game = prompt("Enter rock, paper or scissors: ")

let pc = Math.floor(Math.random() * 3)

let pcGamer = ["rock", "paper", "scissors"]

if (game == "rock"){
  if (pcGamer[pc] == "rock"){
    console
  }
}