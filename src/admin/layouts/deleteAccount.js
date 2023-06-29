import axios from 'axios';
import { toast } from 'react-toastify';

const deleteAccount = async (id) => {
	try {
		await axios.delete(`https://localhost:7250/api/Accounts/${id}`);

		toast.success('Delete User Success!!');
	} catch (error) {
		toast.error('Delete User Fail!!');
	}
};

export default deleteAccount;
