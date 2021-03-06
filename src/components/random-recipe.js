import react, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import '../styling/random-recipe.css';

const Random_Recipe = () => {
	const [mealID, setMealID] = useState(0);
	const [mealName, setMealName] = useState('');
	const [category, setCategory] = useState('');
	const [region, setRegion] = useState('');
	const [ingredients, setIngredients] = useState([]);
	const [measures, setMeasures] = useState([]);
	const [instructions, setInstructions] = useState('');
	const [imgsrc, setImgsrc] = useState('');
	const [instructionList, setInstructionList] = useState([]);

	useEffect(() => {
		handleRandom();
	}, []);

	const handleRandom = async () => {
		let response = {};
		await axios
			.get('http://localhost:3011/v1/random')
			.then((res) => {
				response = res.data[0];
				console.log(response);
				setMealID(response.idMeal);
				setMealName(response.strMeal);
				setCategory(response.strCategory);
				setRegion(response.strArea);
				setInstructions(response.strInstructions);
				setImgsrc(response.strMealThumb);
				setIngredients([
					response.strIngredient1,
					response.strIngredient2,
					response.strIngredient3,
					response.strIngredient4,
					response.strIngredient5,
					response.strIngredient6,
					response.strIngredient7,
					response.strIngredient8,
					response.strIngredient9,
					response.strIngredient10,
					response.strIngredient11,
					response.strIngredient12,
					response.strIngredient13,
					response.strIngredient14,
					response.strIngredient15,
					response.strIngredient16,
					response.strIngredient17,
					response.strIngredient18,
					response.strIngredient19,
					response.strIngredient20,
				]);
				setMeasures([
					response.strMeasure1,
					response.strMeasure2,
					response.strMeasure3,
					response.strMeasure4,
					response.strMeasure5,
					response.strMeasure6,
					response.strMeasure7,
					response.strMeasure8,
					response.strMeasure9,
					response.strMeasure10,
					response.strMeasure11,
					response.strMeasure12,
					response.strMeasure13,
					response.strMeasure14,
					response.strMeasure15,
					response.strMeasure16,
					response.strMeasure17,
					response.strMeasure18,
					response.strMeasure19,
					response.strMeasure20,
				]);
			})
			.then(async () => {
				const instruction_split = await instructions.split('. ');
				await setInstructionList(instruction_split);
				console.log(instructionList);
			});
	};

	return (
		<div>
			<div className='container'>
				<div>
					<h2 className='mealName'>{mealName}</h2>
				</div>

				<div className='subcontainer-1'>
					<img src={imgsrc} alt='food image'></img>
				</div>
				<button onClick={handleRandom}>New Recipe</button>

				<div className='subcontainer-2'>
					<table>
						<thead>
							<th>Ingredient</th>
							<th>Amount</th>
						</thead>
						<tbody>
							{ingredients.map((item) => {
								return (
									<tr>
										<td>{item}</td>
										<td>{measures[ingredients.indexOf(item)]}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					<table>
						<thead>
							<th>Step</th>
							<th>Instructions</th>
						</thead>
						<tbody>
							{instructionList.map((item) => {
								return (
									<tr>
										<td>{instructionList.indexOf(item) + 1}</td>
										<td>{item}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Random_Recipe;
