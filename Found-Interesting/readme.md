# Interesting facts

here we are sharing some facts which are interesting during the everyday learning process

# comparision check ot null and undefined

console.log(null == undefined); // it gives true because both means empty value
console.log(null === undefined)// it gives false value because they belong to different datatype

# Truncate number to two decimal places without rounding

# foFixed(num);

---- The toFixed() method converts a number to a string. The toFixed() method rounds the string to a specified number of decimals.

var num = parseFloat(10.7784514);
document.write(num.toFixed(1)+"<br />");
document.write(num.toFixed(2)+"<br />");
document.write(num.toFixed(3)+"<br />");
document.write(num.toFixed(10));

-----> we can use toFixed(num) function to match the number upto the required decimal number
