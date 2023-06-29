import React from 'react';

function Base64ImageConverter({ image }) {
	const convertToImage = () => {
		// Remove the data URI prefix if present
		let base64Image = image;
		if (image.startsWith('data:image')) {
			base64Image = image.split(',')[1];
		}

		// Decode the Base64 string into bytes
		const imageBytes = atob(base64Image);

		// Create a Uint8Array to represent the image data
		const imageData = new Uint8Array(imageBytes.length);
		for (let i = 0; i < imageBytes.length; i++) {
			imageData[i] = imageBytes.charCodeAt(i);
		}

		// Create a Blob object from the Uint8Array
		const blob = new Blob([imageData], { type: 'image/png' });

		// Create an object URL from the Blob
		const imageUrl = URL.createObjectURL(blob);

		return imageUrl;
	};

	return (
		<div>
			<img src={convertToImage()} alt="Converted Image" />
		</div>
	);
}

export default Base64ImageConverter;
