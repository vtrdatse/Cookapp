import React from 'react';
import Admin from './admin/admin';
import Navigation from './Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './home/Home';
import Dashboard from './admin/layouts/dashboard';
import Users from './admin/layouts/user';

export default function App() {
	const location = useLocation();
	const isAdmin = location.pathname.startsWith('/admin');
	return (
		<div className="App">
			{!isAdmin && <Navigation />}
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/admin/*" element={<Admin />}></Route>
			</Routes>
		</div>
	);
}
