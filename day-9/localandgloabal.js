document.write("Global variable<br>");
var a = "name is Isha";
function isha(){
     document.write("My " + a);
}
isha(); // using global variable inside the function
document.write("<br>My " + a + "<br><br>"); //using global variable outside the function

document.write("Local variable<br>");
function hitang(){
    var b = "surename is Hitang";
    document.write("My "+b);
}
hitang(); // using local variable inside the function
document.write("<br>My " + b + "<br><br>"); //using local variable outside the function. this give value nothing or it gives the Uncaught ReferenceError in console.
