'use strict';

const si = require('systeminformation');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./public'));
app.use('/draggabilly', express.static('./node_modules/draggabilly'));

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/temp', function (req, res) {
	res.json(temperatureData);
});

// Response Object
let temperatureData = {
	current: 'Pending',
	lastMinAvg: 'Pending',
};

// Accumulated Temperature readings
let lastMinArr = Array();

/**
 * Handles `temp` by keeping `temperatureData` object up to date
 * as well as controlling the size of `lastMinArr`
 */
function updateTemperatureObj(temp) {
	temperatureData.current = Number.parseFloat(temp).toPrecision(3);

	if (lastMinArr.length < 59) {
		lastMinArr.push(temp);
	} else {
		lastMinArr.pop();
		lastMinArr.push(temp);
	}

	temperatureData.lastMinAvg = Number.parseFloat(
		lastMinArr.reduce((acc, cur) => acc + cur) / lastMinArr.length
	).toPrecision(3);
}

// Requesting current CPU temp in celsius
setInterval(async function cpuData() {
	try {
		const temp = await (await si.cpuTemperature()).main;
		updateTemperatureObj(temp);
	} catch (e) {
		console.log(e);
	}
}, 1000);
