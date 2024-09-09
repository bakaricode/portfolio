const form = document.getElementById("form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    console.log("clicked")
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());
	console.log(dataObject);
	form.reset();
    //above is boiler plate code
}

