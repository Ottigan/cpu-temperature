'use strict';

const si = require('systeminformation');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

let temperature = { celsius: 'Pending' };

setInterval(async function cpuData() {
	try {
		const data = await si.cpuTemperature();
		temperature.celsius = data.main.toString();
	} catch (e) {
		console.log(e);
	}
}, 1000);

app.get('/temp', function (req, res) {
	console.log('Received a request!');

	res.json(temperature);
});
