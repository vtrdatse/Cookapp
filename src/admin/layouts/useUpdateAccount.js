import axios from 'axios';

const useUpdateAccount = () => {
	const updateAccount = async (id, updatedData) => {
		try {
			const response = await axios.put(
				`https://cookappapi.azurewebsites.net/api/Accounts/updateaccountbyid?id=${id}`,
				updatedData,
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);

			if (response.status === 200) {
				console.log('Account updated successfully');
			}
		} catch (error) {
			console.error('Failed to update account:', error);
		}
	};

	return { updateAccount };
};

export default useUpdateAccount;
