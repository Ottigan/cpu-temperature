'use strict';

const temp = document.getElementById('temp');

setInterval(async function () {
	let response = await fetch('/temp');
	let responseJson = await response.json();
	let tempInCelsius = responseJson.celsius;
	temp.innerText = tempInCelsius;
}, 3000);
