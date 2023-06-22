import React from 'react';
import MDBox from '../../../components/MDBox';
import MDTypography from '../../../components/MDTypography';
import MDAvatar from '../../../components/MDAvatar';
import MDBadge from '../../../components/MDBadge';
import useFetchData from '../../useFetchData';

// Images
import team2 from '../../../assets/images/team-2.jpg';
import UpdateAccount from '../../updateAccount';
import deleteAccount from '../../deleteAccount';

const Author = ({ image, name, id }) => (
	<MDBox display="flex" alignItems="center" lineHeight={1}>
		<MDAvatar src={image} name={name} size="sm" />
		<MDBox ml={2} lineHeight={1}>
			<MDTypography display="block" variant="button" fontWeight="medium">
				{name}
			</MDTypography>
			<MDTypography variant="caption">id: {id}</MDTypography>
		</MDBox>
	</MDBox>
);

const Function = ({ title }) => (
	<MDBox lineHeight={1} textAlign="left">
		<MDTypography display="block" variant="caption" color="text" fontWeight="medium">
			{title}
		</MDTypography>
	</MDBox>
);

const useAccountsData = () => {
	const { data } = useFetchData('https://cookappapisu23.azurewebsites.net/api/Accounts');
	const filteredData = data?.filter((item) => item.roleid === '3');

	return filteredData || [];
};

export default function Data() {
	const accountsData = useAccountsData();

	const handleChangeActive = (id) => {
		const accountChange = accountsData?.find((item) => item.id == id);
		accountChange && (accountChange.isActive = !accountChange.isActive);
		UpdateAccount(id, accountChange);
	};

	const handleDelete = (id) => {
		deleteAccount(id);
	};

	const rows = accountsData.map((item) => ({
		author: <Author image={team2} name={item.fullName} id={item.id} />,
		password: <Function title={item.password} />,
		state: (
			<MDBox ml={-1} onClick={() => handleChangeActive(item.id)}>
				<MDBadge
					badgeContent={item.isActive ? 'Active' : 'Banned'}
					color={item.isActive ? 'success' : 'dark'}
					variant="gradient"
					size="sm"
				/>
			</MDBox>
		),
		view: (
			<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
				View
			</MDTypography>
		),
		delete: (
			<MDTypography
				component="a"
				href="#"
				variant="caption"
				color="text"
				fontWeight="medium"
				onClick={() => handleDelete(item.id)}
			>
				Delete
			</MDTypography>
		)
	}));

	return {
		columns: [
			{ Header: 'author', accessor: 'author', width: '45%', align: 'left' },
			{ Header: 'password', accessor: 'password', align: 'left' },
			{ Header: 'state', accessor: 'state', align: 'center' },
			{ Header: 'view', accessor: 'view', align: 'center' },
			{ Header: 'delete', accessor: 'delete', align: 'center' }
		],
		rows: rows || []
	};
}
