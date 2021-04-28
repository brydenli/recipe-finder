import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<h1>Recipe Finder</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/recipes'>Search Recipe by Ingredient</Link>
				</li>
				<li>
					<Link to='/random'>Find a Random Recipe</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
