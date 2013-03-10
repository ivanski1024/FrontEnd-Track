var a = window.prompt("Enter an integer number");
var boolean = (a % 5 == 0) && (a % 7 == 0);
if (boolean) {
    window.alert("Your number is devided by 5 and 7 at the same time");
}
else {
    window.alert("Your number isn't devided by 5 and 7 at the same time");
}