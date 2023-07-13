import React, { useState, useEffect } from 'react';

const Base64ToImageConverter = ({ image, className }) => {
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		const img = new Image();
		img.src = `data:image/png;base64,${image}`;
		img.onload = () => {
			setImageUrl(img.src);
		};
	}, [image]);

	return (
		<div
			className={className}
			style={{
				backgroundImage: `url(${imageUrl})`,
				backgroundOrigin: 'initial',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: '100% 100%',
				opacity: 1
			}}
		></div>
	);
};

export default Base64ToImageConverter;
