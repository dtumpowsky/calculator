//Business (back-end) logic:

var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2){
	return number1 - number2;
};

var multiply = function(number1, number2){
	return number1 * number2;
};

var divide = function(number1, number2){
	return number1 / number2;
};

// Front-end

$(document).ready(function() {
  $("button#add1").click(function(event) {
		var number1 = parseInt($("#numberChoice1").val());
		var number2 = parseInt($("#numberChoice2").val());
		var result = add(number1, number2);
    $("#submit").text(result);
		event.preventDefault();

	});


	$("button#sub1").click(function(event) {
		var number1 = parseInt($("#numberChoice1").val());
		var number2 = parseInt($("#numberChoice2").val());
		var result = subtract(number1, number2);
		$("#submit").text(result);
		event.preventDefault();

	});


	$("button#mult1").click(function(event) {
		var number1 = parseInt($("#numberChoice1").val());
		var number2 = parseInt($("#numberChoice2").val());
		var result = multiply(number1, number2);
		$("#submit").text(result);
		event.preventDefault();

	});

	$("button#divide1").click(function(event) {
		var number1 = parseInt($("#numberChoice1").val());
		var number2 = parseInt($("#numberChoice2").val());
		var result = divide(number1, number2);
		$("#submit").text(result);
		event.preventDefault();

	});

	/*
	$("form#math").submit(function(event) {
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
    $("#output").text(result);
		event.preventDefault();
	});
	$("form#math").submit(function(event) {
		var number1 = parseInt($("#sub1").val());
		var number2 = parseInt($("#sub2").val());
		var result = subtract(number1, number2);
    $("#output").text(result);
		event.preventDefault();
  });
	$("form#math").submit(function(event) {
		var number1 = parseInt($("#mult1").val());
		var number2 = parseInt($("#mult2").val());
		var result = multiply(number1, number2);
		$("#output").text(result);
		event.preventDefault();
	});
	$("form#math").submit(function(event) {
		var number1 = parseInt($("#divide1").val());
		var number2 = parseInt($("#divide2").val());
		var result = divide(number1, number2);
		$("#output").text(result);
		event.preventDefault();
	});*/
});





/*BMI Calculator

var bmi = function(weight, height){
	return (weight / (height^2));
}

var height = prompt("How tall are you? (in)");
var weight = prompt("How much do you weigh?");

var kg = weight * 2.2;
var cm = height * 2.54;

alert(bmi(kg, cm));


// Temperature Converty C -> F//


var celsius = prompt("What is the temperature Celsius?")

var conversion = function(inputTemperatureC) {
	return (inputTemperatureC * (9/5) + 32);
}

alert(conversion(celsius) + " degrees fahrenheit");




// Temperature Converty F -> C//

var fahrenheit = prompt("What is the temperature Fahrennheit?");

var fahrenConvert = function(inputTemperatureF) {
  return ((inputTemperatureF - 32) / (9/5));
}

alert(fahrenConvert(fahrenheit) + " degrees celsius");





// Liters to Gallons conversion

var liters = prompt("How many liters are you using?")

var literToGallon = function(inputVolume) {
  return (inputVolume / 4);
}

alert(literToGallon(liters) + " gallon(s)");









// Liters to Gallons conversion

var liters = prompt("How many liters are you using?")

var literToGallon = function(inputVolume) {
  return (inputVolume / 4);
}

alert(literToGallon(liters) + " gallon(s)");


// Cups to fl Ounces

var cup = prompt("How many cups?")

var cupToOunces = function(inputVolume) {
	return (inputVolume * 8);
}

alert(cupToOunces(cup) + " fl. oz");


// Tablespoon to teaspoon //

var tableSpoon = prompt("How many Tb?");

var tableTeas = function(inputAmount) {
  return (inputAmount * 3);
}

alert(tableTeas(tableSpoon));


// Pint to Gallon //

var pint = prompt("How many pints?");

var pintToGallon = function(inputVolume) {
	return (inputVolume * 0.125);
}

alert(pintToGallon(pint));*/
