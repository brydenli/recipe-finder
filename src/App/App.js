import Main from '../components/main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Recipe_view from '../components/recipe_view';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/' exact component={Main} />
					<Route path='/item/:id' component={Recipe_view} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
