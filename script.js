document.querySelector("p").innerHTML = "!dlroW olleH";
let error = "";

// Get the cost, tip percentage

const mealCost = Number(prompt("Enter the cost of the meal"));

//If the cost is less than or equal to 8, set an error
if (mealCost <= 0) {
	error = "The cost must be greater than 0";
}

const tipPercent = Number(prompt("Enter the tip percentage"));

//If the tip is outside 1-100, set an error
if (tipPercent < 1) {
	error = "The tip must be at least 1 percent";
} else if (tipPercent > 100) {
	error = "The tip can't be more than 100 percent";
}

// Get the number of people

const numPeople = Number(prompt("Enter the number of people"));

// If there is less than one person set on error
if (numPeople < 1) {
	error = "There must be at least one person";
}

//Display any errors if they exist
if (error !== "") {
	alert(`${error}`);
} else {
	//Convert the percent number to decimal (tip divided by 100)
	const tipDecimal = tipPercent / 100;

	//Calculate the tip amount on the meal cost
	const tipCost = mealCost * tipDecimal;

	//Add the tip to the meal cost and divide it all by the number of people
	const totalCostPerPerson = (mealCost + tipCost) / numPeople;

	//Store either "person or "people" depending if multiple people were added
	const personString = numPeople > 1 ? "people" : "person";

	//Display the cost per person with the tip
	alert(
		`The meal cost for ${numPeople} ${personString} is ${totalCostPerPerson}
        `,
	);
}
