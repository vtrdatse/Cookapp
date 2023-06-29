import { toast } from 'react-toastify';

const updateAccount = async (id, updatedData) => {
	try {
		const response = await fetch(`https://localhost:7250/api/Accounts/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				accept: '*/*'
			},
			body: JSON.stringify(updatedData)
		});

		if (response.ok) {
			toast.success('Change State Success!!');
		} else {
			toast.error('Change State Fail!!');
		}
	} catch (error) {
		toast.error('An error occurred:', error);
	}
};

export default updateAccount;
