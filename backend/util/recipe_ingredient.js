const axios = require('axios');

const irecipe_api = async (ingredient) => {
	let returnObj = {};
	await axios
		.get('http://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredient)
		.then((res) => {
			returnObj = res.data;
		});
	return returnObj;
};

module.exports = irecipe_api;
