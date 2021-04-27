import react, { useState } from 'react';
import axios from 'axios';
import Random_Recipe from './random-recipe';
import Home from './home';
import Ingredient_Recipe from './ingredient-recipe';

const Main = () => {
	const [search, setSearch] = useState(0);
	//search = 0 -> Main Page
	//search = 1 -> Search Recipe by Ingredient
	//search = 2 -> Find a Random Recipe

	const handleSearch = (e, value) => {
		e.preventDefault();
		setSearch(value);
	};

	return (
		<div>
			<div>
				<ul>
					<a
						href='#'
						onClick={(e) => {
							handleSearch(e, 0);
						}}
					>
						Home
					</a>
					<a
						href='#'
						onClick={(e) => {
							handleSearch(e, 1);
						}}
					>
						Search Recipe by Ingredient
					</a>
					<a
						href='#'
						onClick={(e) => {
							handleSearch(e, 2);
						}}
					>
						Find a Random Recipe
					</a>
				</ul>
			</div>
			<div>
				{search === 0 ? <Home /> : <div></div>}
				{search === 1 ? <Ingredient_Recipe /> : <div></div>}
				{search === 2 ? <Random_Recipe /> : <div></div>}
			</div>
		</div>
	);
};

export default Main;
