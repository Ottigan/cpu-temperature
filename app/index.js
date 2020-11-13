'use strict';

const si = require('systeminformation');

setInterval(() => {
	si.cpuTemperature()
		.then(data => console.log(data))
		.catch(error => console.error(error));
}, 5000);
