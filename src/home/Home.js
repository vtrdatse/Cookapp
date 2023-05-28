import React from 'react';
import Splides from './Splide';
import Title1 from './Title1';
import Title2 from './Title2';
import Center from './Center';
import './Home.css';

export default function Home() {
	return (
		<div className="home">
			<Splides />
			<Title1 />
			<Center />
			<Title2 />
		</div>
	);
}
