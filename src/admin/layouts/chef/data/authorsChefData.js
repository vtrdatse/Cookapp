import MDBox from '../../../components/MDBox';
import MDTypography from '../../../components/MDTypography';
import MDAvatar from '../../../components/MDAvatar';
import MDBadge from '../../../components/MDBadge';

// Images
import team2 from '../../../assets/images/team-2.jpg';
import team3 from '../../../assets/images/team-3.jpg';
import team4 from '../../../assets/images/team-4.jpg';
import useFetchData from '../../useFetchData';

export default function Data() {
	let { data } = useFetchData('https://cookappapi.azurewebsites.net/api/Accounts/getallaccount');
	data = data?.filter((item) => item.roleid == '2');
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

	const rows = data?.map((item) => {
		return {
			author: <Author image={team2} name={item.fullName} id={item.id} />,
			password: <Function title={item.password} />,
			state: (
				<MDBox ml={-1}>
					<MDBadge
						badgeContent={item.isActive ? 'Active' : 'Banned'}
						color={item.isActive ? 'success' : 'dark'}
						variant="gradient"
						size="sm"
					/>
				</MDBox>
			),

			edit: (
				<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
					Edit
				</MDTypography>
			),
			delete: (
				<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
					Delete
				</MDTypography>
			)
		};
	});
	return {
		columns: [
			{ Header: 'author', accessor: 'author', width: '45%', align: 'left' },
			{ Header: 'password', accessor: 'password', align: 'left' },
			{ Header: 'state', accessor: 'state', align: 'center' },
			{ Header: 'edit', accessor: 'edit', align: 'center' },
			{ Header: 'delete', accessor: 'delete', align: 'center' }
		],

		rows: rows || []
	};
}
