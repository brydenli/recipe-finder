import '../styling/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Recipe_view from '../components/recipe_view';
import Home from '../components/home';
import Random_Recipe from '../components/random-recipe';
import Ingredient_Recipe from '../components/ingredient-recipe';
import Navbar from '../components/navbar';

function App() {
	return (
		<div>
			<Router>
				<Navbar></Navbar>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/item/:id' component={Recipe_view} />
					<Route path='/random' component={Random_Recipe} />
					<Route path='/recipes' component={Ingredient_Recipe} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
