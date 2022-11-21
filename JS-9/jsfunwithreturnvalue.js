function fullname(fname = "Isha", lname = "Hitang"){
    var a = fname + "  " + lname;
    return a ;
}
var fuln = fullname();
document.write(fuln + "<br><br><br><br>");

document.write("Creating function to calculate the total marks of three subjects and to calculate the total percentage of three");
function sum(java, dsa, sef){
    var a = java + dsa + sef;
    return a ;
}
var total = sum(100, 94, 90);
document.write("<br><br>" + "Total marks :- " +total);

function per(Tper){
    var b = total / 300 * 100;
    document.write("<br><br>" + "Total percentage of Isha Hitang is :-&nbsp "+b.toFixed(2));
    document.write("<br><br>" + "Result :- Excellent ")
}
per(total); // calling the percentage calculation formula
