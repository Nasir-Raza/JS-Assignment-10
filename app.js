/* Coded by 
	 Name	: Nasir Raza
	 Roll #	: KH01210813250
*/

var counter = 0;
var operator = 0;
var equal = 0;
var mathExpression;

function onButtonClick(buttonId) {

	if (buttonId !== "backspace" && buttonId !== "clear" && buttonId !== "plusminus") {
		if (buttonId === "plus" || buttonId === "minus" || buttonId === "multiply" || buttonId === "divide") {
			if (counter !== 0) {
				if (counter <= 9 && operator === 0) {
					document.getElementById("display").value += document.getElementById(buttonId).value;
					counter = 0;
					operator = 1;
				}
			}
		}
		else {
			if (counter < 9 && operator === 0) {
				document.getElementById("display").value += document.getElementById(buttonId).value;
				counter++;
				console.log("operator value inside if block", operator);
				console.log("counter value inside if block", counter);
				console.log("buttonId value inside if block", buttonId);
			}
			else if (counter < 9 && operator === 1) {
				document.getElementById("display").value += document.getElementById(buttonId).value;
				counter++;
				operator = 0;
				console.log("operator value inside if block", operator);
				console.log("counter value inside if block", counter);
				console.log("buttonId value inside if block", buttonId);
			}
		}
	}

	mathExpression = document.getElementById("display").value;
	console.log("math expression outside if ", mathExpression);


	if (buttonId === "equal" && mathExpression.length > 0) {
		mathExpression = document.getElementById("display").value;
		mathExpression = mathExpression.slice(0, mathExpression.length - 1);
		document.getElementById("display").value = eval(mathExpression);
		console.log(mathExpression);
		equal++;
	}

	if (buttonId === "plusminus" && document.getElementById("display").value !== "") {
		document.getElementById("display").value = document.getElementById("display").value * -1;
		console.log(document.getElementById("display").value);

	}

	if (buttonId === "clear") {
		document.getElementById("display").value = "";
		console.log(document.getElementById("display").value);

	}

	if (buttonId === "backspace") {
		var dispValue;
		dispValue = document.getElementById("display").value;
		dispValue = dispValue.slice(0, dispValue.length - 1);
		console.log("disp Value ", dispValue);
		document.getElementById("display").value = dispValue;
		counter--;
		counter = counter < 0 ? 0 : counter;
	}
}
