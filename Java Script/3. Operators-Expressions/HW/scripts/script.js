function oddOrEven()
{
	var a = window.prompt("Enter a number");
	if (a % 2 == 0)
	{
		alert("Your number is even");
	}
	else
	{
		alert("Your number is odd");
	}
}

function divideBy5And7()
{
    var a = window.prompt("Enter an integer number");
    var boolean = (a % 5 == 0) && (a % 7 == 0);
    if (boolean) {
        window.alert("Your number is devided by 5 and 7 at the same time");
    }
    else {
        window.alert("Your number isn't devided by 5 and 7 at the same time");
    }
}

function rectangleArea()
{
    var width = prompt("Width:");
    var height = prompt("Height:");
    alert("Rectengle's area is: " + width*height)
}

