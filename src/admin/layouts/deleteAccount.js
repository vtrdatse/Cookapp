import axios from 'axios';

const deleteAccount = async (id) => {
	try {
		const response = await axios.delete(`https://cookappapisu23.azurewebsites.net/api/Accounts/${id}`, {
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.status >= 200 && response.status <= 299) {
			console.log('Account deleted successfully');
		}
	} catch (error) {
		console.error('Failed to delete account:', error);
	}
};

export default deleteAccount;
