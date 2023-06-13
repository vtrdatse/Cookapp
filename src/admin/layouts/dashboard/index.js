/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from '../../components/MDBox';

// Material Dashboard 2 React example components
import DashboardLayout from '../../examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from '../../examples/Navbars/DashboardNavbar';
import Footer from '../../examples/Footer';
import ComplexStatisticsCard from '../../examples/Cards/StatisticsCards/ComplexStatisticsCard';
import { MdToday, MdPersonAdd, MdRestaurant, MdPerson } from 'react-icons/md';
import { LuChefHat } from 'react-icons/lu';
import useFetchData from '../useFetchData';
import { PieChart } from 'recharts';
function Dashboard() {
	const { data: RecipePosts } = useFetchData('https://cookappapi.azurewebsites.net/api/RecipePosts/getallposts');
	const { data: Accounts } = useFetchData('https://cookappapi.azurewebsites.net/api/Accounts/getallaccount');

	const user = Accounts?.filter((account) => account.roleid == 3);
	const chef = Accounts?.filter((account) => account.roleid == 2);
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox py={3}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								color="dark"
								icon={<MdToday />}
								title="Today Views"
								count={281}
								percentage={{
									color: 'success',
									amount: '+55%',
									label: 'than lask week'
								}}
							/>
						</MDBox>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								color="success"
								icon={<MdRestaurant />}
								title="Recipes"
								count={RecipePosts?.length}
								percentage={{
									color: 'success',
									amount: '+1%',
									label: 'than yesterday'
								}}
							/>
						</MDBox>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								icon={<LuChefHat />}
								title="Chef"
								count={chef?.length}
								percentage={{
									color: 'success',
									amount: '',
									label: 'Just update'
								}}
							/>
						</MDBox>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								color="primary"
								icon={<MdPerson />}
								title="Users"
								count={user?.length}
								percentage={{
									color: 'success',
									amount: '',
									label: 'Just updated'
								}}
							/>
						</MDBox>
					</Grid>
				</Grid>
			</MDBox>
			<Footer />
		</DashboardLayout>
	);
}

export default Dashboard;
