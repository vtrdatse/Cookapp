import React from 'react';
import Header from '../components/ui/Header';
import Banner from '../components/Banner';
import Ingerdient from '../components/Ingerdient';
import Platform from '../components/Platform';
import SwiperCP from '../components/SwiperCP';
import Other from '../components/Order';
import Footer from '../components/ui/Footer';

const RecipesListPage = () => {
	const SWIPER_CP = [
		{
			title: 'Lorem is applet',
			slides: [
				{
					img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D08JdNj8jGHk&psig=AOvVaw3DtoZJ9uHuZv95Q9dHtOVm&ust=1685089909187000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLiG7Z2HkP8CFQAAAAAdAAAAABAE',
					text: 'Lorem ',
					desc: 'loreme is applet'
				},
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				},
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				},
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				}
			]
		},
		{
			title: 'Lorem is applet',
			slides: [
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				},
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				},
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				},
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				}
			]
		},
		{
			title: 'Lorem is applet',
			slides: [
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				},
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				},
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				},
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				}
			]
		},
		{
			title: 'Lorem is applet',
			slides: [
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				},
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				},
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				},
				{
					img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
					text: 'Lorem ',
					desc: 'loreme is applet'
				}
			]
		}
	];
	return (
		<div>
			<Header />
			<Banner />
			<Ingerdient />
			<Platform />
			{SWIPER_CP.map((item, index) => (
				<SwiperCP data={item} />
			))}
			<Other />
			<Footer />
		</div>
	);
};

export default RecipesListPage;
