const cors = require('cors');
const express = require('express');
const app = express();
const router = express.Router();
const port = 3011;
const recipe_api = require('./util/recipe_api');
const irecipe_api = require('./util/recipe_ingredient');

app.use(cors());
app.use(express.json());
app.use('/v1', router);

router.route('/random').get(async (req, res) => {
	try {
		let recipe = await recipe_api();
		console.log(recipe);
		res.status(200).json(recipe);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.route('/find').post(async (req, res) => {
	console.log(req.body.ingredient);
	try {
		let recipe = await irecipe_api(req.body.ingredient);
		console.log(recipe);
		res.status(200).json(recipe);
	} catch (err) {
		res.status(400).json(err);
	}
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
