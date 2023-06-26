import React, { useEffect, useState } from 'react';
import './Title1.scss';
import axios from 'axios';

export default function Title1() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function FetchData() {
			try {
				const response = await axios.get('https://cookappapisu23.azurewebsites.net/api/RecipePosts');
				setData(response.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}
		FetchData();
	}, []);

	return (
		<div className="container">
			<div className="card-container">
				<h2>Title1</h2>
				<div className="card">
					{data.map((item, index) => (
						<div className="card-block" key={index}>
							<div className="card-block_img">
								<img
									src="https://nystudio107.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg.webp"
									alt=""
								/>
							</div>
							<p className="card-block_name">{item.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
