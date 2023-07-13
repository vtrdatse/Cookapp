import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const UploadImage = () => {
	const [imageUrl, setImageUrl] = useState();
	const [loading, setLoading] = useState(false);

	const beforeUpload = (file) => {
		const isImage = file.type.startsWith('image/');
		if (!isImage) {
			message.error('You can only upload image files!');
		}
		return isImage;
	};

	const getBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	};

	const handleChange = async (info) => {
		if (info.file.status === 'uploading') {
			setLoading(true);
			return;
		}
		if (info.file.status === 'done') {
			try {
				const url = await getBase64(info.file.originFileObj);
				setLoading(false);
				setImageUrl(url);
			} catch (error) {
				setLoading(false);
				message.error('Failed to convert file to base64.');
			}
		}
	};

	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	return (
		<Upload
			name="avatar"
			listType="picture-card"
			className="avatar-uploader w-full"
			showUploadList={false}
			beforeUpload={beforeUpload}
			onChange={handleChange}
		>
			{imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
		</Upload>
	);
};

export default UploadImage;
