import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../Home.jsx';
import Contact from '../../pages/contact/index.jsx';
import Plan from '../../pages/plan/index.jsx';
import Create from '../../pages/profile/allrecipes-personal-recipes/create/index.jsx';
import AllrecipesPersonalRecipes from '../../pages/profile/allrecipes-personal-recipes/index.jsx';
import ChangePassword from '../../pages/profile/change-password/index.jsx';
import Favourite from '../../pages/profile/favourite/index.jsx';
import Profile from '../../pages/profile/index.jsx';
import PresonnalInfor from '../../pages/profile/presonnal-infor/index.jsx';
import Reviews from '../../pages/profile/reviews/index.jsx';
import DetailRecipe from '../../pages/recipe/detail/index.jsx';
import Recipes from '../../pages/recipe/index.jsx';
import ProtectedRoute from './ProtectRoute.jsx';
import LoginForm from '../../pages/login/LoginForm.jsx';
import SignUpForm from '../../pages/login/SignUpForm.jsx';
export const AppRouter = () => {
	const ScrollToTop = () => {
		const { pathname } = useLocation();

		React.useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);

		return null;
	};

	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginForm />} />
				<Route path="/recipes" element={<Recipes />} />
				<Route path="/recipes/:id" element={<DetailRecipe />} />
				<Route path="/plan" element={<Plan />} />
				{/* <Route path="/plan" element={<ProtectedRoute><Plan /></ProtectedRoute>} /> */}
				<Route path="/contact" element={<Contact />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/profile/presonnal-infor" element={<PresonnalInfor />} />
				<Route path="/profile/allrecipes-personal-recipes/create" element={<Create />} />
				<Route path="/profile/change-password" element={<ChangePassword />} />
				<Route path="/profile/favourite" element={<Favourite />} />
				<Route path="/profile/allrecipes-personal-recipes" element={<AllrecipesPersonalRecipes />} />
				<Route path="/plan" element={<Plan />} />
				<Route path="/profile/reviews" element={<Reviews />} />
				<Route path="/signup" element={<SignUpForm />}></Route>
			</Routes>
		</Router>
	);
};
