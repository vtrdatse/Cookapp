import logo from './logo.svg';
import './App.css';
import RecipesListPage from './pages/RecipesListPage';
import Home from './home/Home';
import 'swiper/css';

function App() {
	return (
		<>
			<RecipesListPage />
			<Home />
		</>
	);
}

export default App;
