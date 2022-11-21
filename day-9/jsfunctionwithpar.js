/*function greet(fname, lname){
    document.write("Hello " + fname + " " + lname);
}
greet("Isha", "Hitang");
greet(); // arguments  are not given  so give the undefined value
*/
function greet(fname = "Isha", lname = "Hitang"){
    document.write("Hello " + fname + " " + lname );
}

//greet();
greet("Raju", "Nepali" + "<br><br>");//It ovewrites the parameters passed during the function declaration.
function sum(a, b){
    document.write(a + b);
}
sum(2, 3 + "<br><br>");
sum(22.2, 33.5);