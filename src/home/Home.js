import React from 'react';
import Splides from './components/Splide';
import Title1 from './components/Title1';
import Title2 from './components/Title2';
import Center from './components/Center';
import './components/Home.scss';

export default function Home() {
	return (
		<>
			<Splides />
			<Title1 />
			<Center />
			<Title2 />
		</>
	);
}
