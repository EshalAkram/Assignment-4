//Q:1 Assign "Hello, World!" to this variable and print it.
let greeting;
greeting=("Hello World!")
console.log(greeting);
//Q:2 Assign integer values and perform arithmetic operations.
let num1, num2;
num1=4;
num2=6;
console.log("addition", num1+num2);
console.log("subtraction", num1-num2);
console.log("multiplication", num1*num2);
console.log("division", num1/num2);
console.log("expo", num1**num2);
console.log("%", num1%num2);
//Q:3 Instructions: Swap the values of two variables without using a third variable.
let a = 1,
  b = 2; 
  [a, b]=[b, a]
  console.log("a", a);
  console.log("b", b);
//Q:4 Instructions: This applies to TypeScript. Create a string variable and try changing its type.
let message: string;
message=false;//error occurs.
//Q:5 Instructions: Use the modulus operator to find the remainder of two numbers.
let number1, number2; 
number1=8;
number2=3;
console.log(number1%number2);
//Q:6 Instructions: Increment a variable's value by 1 using two different methods.
let counter = 0;
counter++; // first way of increment 1.
console.log(counter);
counter +=1; // second way to add 1
console.log(counter);
//Q:7 Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a1 = true,
  b1 = false,
  c1 = true; // Write expressions using these.
//expression for AND gate;
  console.log(a1 && b1); //false;
  console.log(a1 && c1); //true;
  console.log(b1 && c1);//false;
  console.log(b1 && b1);//false;
//expression for OR gate;
  console.log(a1 || b1);//true;
  console.log(a1 || c1);//true;
  console.log(b1 || c1);//true;
  console.log(b1 || b1);//false;
//expression for NOT gate;
  console.log!(a1 && b1);//true;
  console.log!(a1 && c1);//false;
  console.log!(b1 && c1);//true;
  console.log!(b1 && b1);//true;
//Q:8 Instructions: Show examples of using compound assignment operators.
let num = 10; // Use +=, -=, *=, and /= on this variable.
num +=5;
console.log(num);//15
num -=2;
console.log(num);//13
num *=4;
console.log(num);//52
num /=2;
console.log(num);//26
//Q:9 Instructions: Write a program to check if a number is even or odd.

let num3; // Determine if this is even or odd.
num3 =9;
if(num3 %2 == 0){console.log("This Number is Even")}
else{console.log("This Number is Odd")};
//Q:10  Voting Eligibility; Instructions: Check if a person is eligible to vote.

let age; // Check if age is 18 or older to determine voting eligibility.
age = 22;
if(age >= 18){console.log("This Person is Eligible for Vote")}
else if(age < 18){console.log("This Person is not Eligible for Vote")};
//Q:11  Grading System
//Instructions: Assign a grade based on a numerical score.
let student_score; // Use conditionals to assign and print grades A, B, C, D, or F.
student_score=848;
if(student_score>=800){console.log("Student has A grade")}
if(student_score<800 && student_score==600){console.log("Student has B grade")}
if (student_score<600 && student_score==400){console.log("Student has C grade")}
if(student_score<400 && student_score==200){console.log("Student has D grade")}
else if(student_score<200) {console.log("Student is Fail")};
//Q:12 Instructions: Find the maximum of three numbers.

let x, y, z; // Determine the largest among these.
x=5;
y=6;
z=8;
if(x>y && x>z){console.log("x is greatest number")}
else if(y>x && y>z){console.log("y is greatest number")}
else("z is greatest number");
//Q.:13 Leap Year Checker:
//Instructions: Check if a given year is a leap year.

let year;// Determine if this is a leap year.
year=2024; 
if(year%4==0){console.log("This is a leap year")}
else(console.log("This is not a leap year"));
//Q.:14 Fahrenheit to Celsius Converter
//Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit; // Convert this to Celsius and print the result.
fahrenheit=35;
let celsius=(fahrenheit-32)*5/9;
console.log("Temprature in celsius",celsius);
//Q:15  Positive, Negative, or Zero
//Instructions: Check if a number is positive, negative, or zero.
let number; // Determine the sign of this number.
number= -53;
if(number>0){console.log("The number is positive")}
else if(number<0){console.log("The number is negative")}
else(console.log("The number is zero"));
//Q:16 Multiplication Table
//Instructions: Write a program that prints the multiplication table of a given number up to 10.
let table1; // Print the multiplication table for this number up to 10. 
table1= 11;
console.log("11*1 =" , table1 * 1); // 11
console.log("11*2 =" , table1 * 2); // 22
console.log("11*3 =" , table1 * 3); // 33
console.log("11*4 =" , table1 * 4); // 44
console.log("11*5 =" , table1 * 5); // 55
console.log("11*6 =" , table1 * 6); // 66
console.log("11*7 =" , table1 * 7); // 77
console.log("11*8 =" , table1 * 8); // 88
console.log("11*9 =" , table1 * 9); // 99
console.log("11*10 =" , table1 * 10); // 110
console.log("11*11 =" , table1 * 11); // 121
console.log("11*12 =" , table1 * 12); // 132
//Assignment complete.




