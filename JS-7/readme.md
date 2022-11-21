# Different type of logical operators in JavaScript

![CHEESE!](logical_operators.png)

# If Statement with Logical AND :

Run only when both conditon must be TRUE
if(condtion 1 && condition 2){
// write statement here;
}

# If statement with Logical OR :

Run only when either one condition must be TRUE
if (Condition1 || Condition2){
// write statement here;
}

# If statement with logical NOT:

it gives true value if the condition is false and false value if the conddition is true.
if !(condition){
//write statement here;
}

# JavaScript Conditional Ternary Operator

it's very similar to the JavaScript If else statement. Minor difference is that we can write multiple statement if one of the given statement is true or false in If-else statement while there should be single statement in Conditional Ternary Operator if the given statement is true or false.

# Conditional Ternary Operator:

(condition)? True Statement : False Statement

example:
var x = 20;
var z;
(x < 25) ? z = "True" : z = "False";
document.write(z);

.
