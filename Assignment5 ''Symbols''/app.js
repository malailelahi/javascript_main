//answer1
// Addition
let num1 = 3;
let num2 = 5;
let sum = num1 + num2;
document.write("<b>The sum of " + num1 + " and " + num2 + " is: " + sum + "</b><br>");

//answer2
// Subtraction
let a = 10;
let b = 4;
let subtraction = a - b;
document.write("<b>The subtraction of " + a + " and " + b + " is: " + subtraction + "</b><br>");


// Multiplication
let x = 6;
let y = 7;
let multiplication = x * y;
document.write("<b>The multiplication of " + x + " and " + y + " is: " + multiplication + "</b><br>");


// Division
let m = 20;
let n = 4;
let division = m / n;
document.write("<b>The division of " + m + " by " + n + " is: " + division + "</b><br>");


// Modulus
let p = 29;
let q = 5;
let modulus = p % q;
document.write("<b>The modulus of " + p + " and " + q + " is: " + modulus + "</b><br>");

//answer3
// a. Declare a variable
let number;

// b. Show value after declaration
document.write("<b>Value after variable declaration is: " + number + "</b><br>");

// c. Initialize the variable with some number
number = 5;

// d. Show initial value
document.write("Initial value: " + number + "<br>");

// e. Increment the variable
number++;

// f. Show value after increment
document.write("Value after increment is: " + number + "<br>");

// g. Add 7 to the variable
number += 7;

// h. Show value after addition
document.write("Value after addition is: " + number + "<br>");

// i. Decrement the variable
number--;

// j. Show value after decrement
document.write("Value after decrement is: " + number + "<br>");

// k. Show the remainder after dividing the variable’s value by 3
let remainder = number % 3;

// l. Output the remainder
document.write("<br>The remainder is: "+remainder +"<br>");

//answer4

let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.write("<b>Total cost to buy 5 tickets to a movie is " + totalCost + " </b>PKR");


//answer5
let tableNumber = 4;


document.write("<h2>Multiplication Table of " + tableNumber + "</h2>");


for (let i = 1; i <= 10; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

document.write("<br>");
//answer6
// 1.
let celsius = 25;

// 2.
let fahrenheitFromCelsius = (celsius * 9/5) + 32;

// 3.
document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F<br>");

// 4. 
let fahrenheit = 70;

// 5. 
let celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;

// 6. 
document.write(fahrenheit + "°F is " + celsiusFromFahrenheit.toFixed(2) + "°C");

//answer7
// Price of item 1
let priceItem1 = 500;

// Price of item 2
let priceItem2 = 300;

// Ordered quantity of item 1
let quantityItem1 = 3;

// Ordered quantity of item 2
let quantityItem2 = 2;

// Shipping charges
let shippingCharges = 150;

// Total cost for each item
let totalCostItem1 = priceItem1 * quantityItem1;
let totalCostItem2 = priceItem2 * quantityItem2;

// Overall total cost
let total  = totalCostItem1 + totalCostItem2 + shippingCharges;

// Display the receipt
document.write("<h2>Shopping Cart Receipt</h2>");
document.write("Price of item 1: " + priceItem1 + " PKR<br>");
document.write("Quantity of item 1: " + quantityItem1 + "<br>");
document.write("Price of item 2: " + priceItem2 + " PKR<br>");
document.write("Quantity of item 2: " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");
document.write("Total cost of item 1: " + totalCostItem1 + " PKR<br>");
document.write("Total cost of item 2: " + totalCostItem2 + " PKR<br>");
document.write("<b>Total Cost (including shipping): " + totalCost + " PKR</b>");

//answer8
let totalMarks = 500;         // Total marks
let marksObtained = 420;      // Marks obtained by student

let percentage = (marksObtained / totalMarks) * 100;

// Output result
document.write("<h2>Student Marks Percentage</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");


//answer9
let totalPKR = (10 * 104.80) + (25 * 28);

document.write("<h2>Currency in PKR</h2>");
document.write("Total amount in Pakistani Rupees: " + totalPKR + " PKR");
document.write("<br>")

//answer 10
let num = 8;  // Aap apni pasand ka number yahan de sakte ho

let result = ((number + 5) * 10) / 2;

document.write("Initial number: " + number + "<br>");
document.write("Result after adding 5, multiplying by 10, and dividing by 2: " + result);


//answer 11
let currentYear = 2025;
let birthYear = 2009;

let age1 = currentYear - birthYear;    // If birthday has occurred
let age2 = age1 - 1;                   // If birthday has not occurred yet

document.write("<h2>Age Calculator</h2>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("your age is "  + age1 + " years old.");

//answer 12
let radius = 10;               // You can change the radius value
let pi = 3.142;

let circumference = 2 * pi * radius;
let area = pi * radius * radius;

document.write("<h2>The Geometrizer</h2>");
document.write("Radius of circle: " + radius + "<br>");
document.write("The circumference is " + circumference.toFixed(2) + "<br>");
document.write("The area is " + area.toFixed(2));

//answer 13
let favoriteSnack = "Chocolate Chip Cookies"; // a
let currentAge = 16;                          // b
let maxAge = 80;                              // c
let perDay = 2;                               // d

// e: Calculate total snacks needed
let totalSnacks = (maxAge - currentAge) * 365 * perDay;

document.write("<h2>The Lifetime Supply Calculator</h2>");
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount Per Day: " + perDay + "<br>");
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");


