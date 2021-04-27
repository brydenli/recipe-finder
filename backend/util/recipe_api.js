const axios = require('axios');

const recipe_api = async () => {
	let returnObj = {};
	await axios
		.get('http://www.themealdb.com/api/json/v1/1/random.php')
		.then((res) => {
			returnObj = res.data.meals;
		});

	return returnObj;
};

module.exports = recipe_api;
