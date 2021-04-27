import react, { useState } from 'react';
import axios from 'axios';

const Ingredient_Recipe = () => {
	const [ingredient, setIngredient] = useState('');
	const [meals, setMeals] = useState([]);

	const handleIngredient = (e) => {
		setIngredient(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const requestObj = {
			ingredient: ingredient,
		};
		axios.post('http://localhost:3011/v1/find', requestObj).then((res) => {
			console.log(res.data.meals);
			setMeals(res.data.meals);
		});
	};

	return (
		<div>
			<h1>Recipe Finder</h1>
			<div>
				<form>
					<div>
						<input
							placeholder='Main Ingredient Name'
							value={ingredient}
							onChange={handleIngredient}
						></input>
					</div>
					<div>
						<button onClick={(e) => handleSubmit(e)}>Click</button>
					</div>
				</form>
			</div>
			<div>
				<table>
					<tbody>
						{meals.map((item) => {
							return (
								<div id={item.idMeal}>
									<tr>{item.strMeal}</tr>
									<img src={item.strMealThumb}></img>
								</div>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Ingredient_Recipe;
