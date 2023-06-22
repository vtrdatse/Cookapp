import axios from 'axios';

const updateAccount = async (id, updatedData) => {
	try {
		const response = await axios.put(`https://cookappapisu23.azurewebsites.net/api/Accounts/${id}`, updatedData, {
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.status >= 200 && response.status <= 299) {
			console.log('Account updated successfully');
		}
	} catch (error) {
		console.error('Failed to update account:', error);
	}
};

export default updateAccount;
