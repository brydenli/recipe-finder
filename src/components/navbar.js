import { Link } from 'react-router-dom';
import '../styling/navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='list'>
				<a href='/' className='logo'>
					Recipe Finder
				</a>
				<Link to='/recipes' classname='list-item'>
					Search by Ingredient
				</Link>
				<Link to='/random' classname='list-item'>
					Find Random Recipe
				</Link>
				<h3>Powered by TheMealDB.com</h3>
			</div>
			<div></div>
		</div>
	);
};

export default Navbar;
