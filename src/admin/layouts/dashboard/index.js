// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from '../../components/MDBox';

// Material Dashboard 2 React example components
import DashboardLayout from '../../examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from '../../examples/Navbars/DashboardNavbar';
import Footer from '../../examples/Footer';
import ComplexStatisticsCard from '../../examples/Cards/StatisticsCards/ComplexStatisticsCard';
import { MdToday, MdRestaurant, MdPerson } from 'react-icons/md';
import { LuChefHat } from 'react-icons/lu';
import Data from './data/reportsBarChartData';
import PieChart from '../../examples/Charts/PieChart';

function Dashboard() {
	const { accounts, recipePosts, dataChart } = Data();
	const user = accounts?.filter((account) => account.roleid == 3);
	const chef = accounts?.filter((account) => account.roleid == 2);

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
									label: 'than last week'
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
								count={recipePosts?.length}
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
			<MDBox mt={4.5}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6} lg={4}>
						<MDBox mb={3}>
							<PieChart
								icon={<LuChefHat />}
								title="RecipePost"
								description="Chart"
								height={400}
								chart={dataChart}
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
