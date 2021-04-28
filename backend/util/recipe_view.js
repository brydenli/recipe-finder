const axios = require('axios');

const recipe_view_api = async (id) => {
	let returnObj = {};
	await axios
		.get('http://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
		.then((res) => {
			returnObj = res.data.meals;
		});

	return returnObj;
};

module.exports = recipe_view_api;
