import React, { useState, useEffect } from 'react';
import MDBox from '../../../components/MDBox';
import MDTypography from '../../../components/MDTypography';
import MDButton from '../../../components/MDButton';
import MDInput from '../../../components/MDInput';
import MDBadge from '../../../components/MDBadge';
import { toast } from 'react-toastify';

// Images
import team2 from '../../../assets/images/team-2.jpg';
import updateAccount from '../../updateAccount';
import deleteAccount from '../../deleteAccount';
import axios from 'axios';
import { Card, Modal } from '@mui/material';

const Author = ({ name, id }) => (
	<MDBox display="flex" alignItems="center" lineHeight={1}>
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

export default function Data() {
	const [accountData, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.get('https://localhost:7250/api/Accounts1');
			const filteredData = data?.filter((item) => item.roleid === '3');
			setData(filteredData);
		};
		getData();
	}, []);

	const handleChangeActive = async (item) => {
		const updatedData = accountData.map((dataItem) => {
			if (dataItem.id === item.id) {
				const updatedItem = { ...dataItem, isActive: !dataItem.isActive };
				updateAccount(dataItem.id, updatedItem);
				return updatedItem;
			}
			return dataItem;
		});

		setData(updatedData);
	};

	const handleDelete = (item) => {
		deleteAccount(item.id);
		const updatedData = accountData.filter((dataItem) => dataItem.id !== item.id);
		setData(updatedData);
	};
	const handleEditUser = (item) => {};

	const rows = accountData.map((item) => ({
		author: <Author image={team2} name={item.fullName} id={item.id} />,
		password: <Function title={item.password} />,
		state: (
			<MDBox ml={-1} onClick={() => handleChangeActive(item)}>
				<MDBadge
					badgeContent={item.isActive ? 'Active' : 'Banned'}
					color={item.isActive ? 'success' : 'dark'}
					variant="gradient"
					size="sm"
				/>
			</MDBox>
		),
		roleid: (
			<MDTypography
				component="a"
				href="#"
				variant="caption"
				color="text"
				fontWeight="medium"
				onClick={() => handleEditUser(item)}
			>
				{item.roleid}
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
			{ Header: 'roleid', accessor: 'roleid', align: 'center' },
			{ Header: 'delete', accessor: 'delete', align: 'center' }
		],
		rows: rows || []
	};
}
