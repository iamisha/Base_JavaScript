# JavaScript Variables

here we will know about the JavaScript variables and it's types.

# three types of JavaScript variables

1. var (commonly used)
2. const
3. let

-> BASIC SYTAX of using JS variable

varible name = "variable value";

# way of writing variable name

1. write ways
   -> firstname
   -> first_name
   -> first-name
   -> firstName
   -> firstname09

2. wrong ways(the most common mistakes that we all do at beginning of giving variable name)
   -> first name
   -> 99firstname

   these two methods will give the "the uncaught syntaxError: Invalid or unexpected token"

# main -differrence between the var and let

-> we cannot declare the variable twice using let(but we can override the value) but we can decalre the variable multiple no of times using var.

for example:

var fname = "abac";
var fname = "xyz"; is allowed and it will not throw any error.

             but

             let fname = "abc";
             let fname = "xyz"; is not allowed and it will throw uncaught syntaxError.

# constant variable(const)

once we give one value to the variable, we can not give the another value in const. It will give the TypeError. We can't also declare the const variable twice.
