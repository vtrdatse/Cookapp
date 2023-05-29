import './App.css';
import RecipesListPage from './pages/RecipesListPage';
import Home from './home/Home';
import 'swiper/css';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<RecipesListPage />
			<Home />
		</BrowserRouter>
	);
}

export default App;
