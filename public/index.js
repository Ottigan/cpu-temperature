'use strict';

const current = document.getElementById('current');
const lastMin = document.getElementById('last-min');

// Ability to drag the widget around
const draggable = new Draggabilly('.draggable', {
	containment: true,
});

setInterval(async function () {
	let response = await fetch('/temp');
	let responseJson = await response.json();
	let currentData = responseJson.current;
	let lastMinData = responseJson.lastMinAvg;

	current.innerText = '';
	lastMin.innerText = '';

	// Blinking effect to prove that it is alive...
	setTimeout(() => {
		current.innerText = currentData;
		lastMin.innerText = lastMinData;
	}, 100);
}, 1000);
