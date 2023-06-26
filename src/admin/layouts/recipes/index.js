import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from '../../components/MDBox';

// Material Dashboard 2 React ../../examples
import DashboardLayout from '../../examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from '../../examples/Navbars/DashboardNavbar';
import Footer from '../../examples/Footer';

// Billing page components
import BillingInformation from './data/BillingInformation';

function Recipes() {
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox mb={1}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<BillingInformation />
					</Grid>
				</Grid>
			</MDBox>
			<Footer />
		</DashboardLayout>
	);
}

export default Recipes;
