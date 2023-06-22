import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

// Material Dashboard 2 React components
import MDBox from '../../components/MDBox';
import MDTypography from '../../components/MDTypography';

// Material Dashboard 2 React example components
import DashboardLayout from '../../examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from '../../examples/Navbars/DashboardNavbar';
import Footer from '../../examples/Footer';
import ProfileInfoCard from '../../examples/Cards/InfoCards/ProfileInfoCard';
import DefaultProjectCard from '../../examples/Cards/DefaultProjectCard';

// Overview page components
import Header from './components/Header';

// Data
// Images
import homeDecor1 from '../../assets/images/team-1.jpg';
import homeDecor2 from '../../assets/images/team-1.jpg';
import homeDecor3 from '../../assets/images/team-1.jpg';
import homeDecor4 from '../../assets/images/team-1.jpg';
import team1 from '../../assets/images/team-1.jpg';
import team2 from '../../assets/images/team-2.jpg';
import team3 from '../../assets/images/team-3.jpg';
import team4 from '../../assets/images/team-4.jpg';
import useFetchData from '../useFetchData';

function Overview() {
	const { data } = useFetchData('https://cookappapisu23.azurewebsites.net/api/Accounts/1');
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox mb={2} />
			<Header>
				<MDBox mt={5} mb={3}>
					<Grid container spacing={1}>
						<Grid item xs={12} md={6} xl={4} sx={{ display: 'flex' }}>
							<Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
							<ProfileInfoCard
								title="profile information"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
								info={{
									fullName: data?.fullName,
									mobile: '(44) 123 1234 123',
									email: 'alecthompson@mail.com',
									location: 'USA'
								}}
								action={{ route: '', tooltip: 'Edit Profile' }}
								shadow={false}
							/>
							<Divider orientation="vertical" sx={{ mx: 0 }} />
						</Grid>
						<Grid item xs={12} xl={8}>
							<MDBox pt={2} px={2} lineHeight={1.25}>
								<MDTypography variant="h6" fontWeight="medium">
									Recipes
								</MDTypography>
							</MDBox>
							<MDBox p={2}>
								<Grid container spacing={6}>
									<Grid item xs={12} md={6} xl={4}>
										<DefaultProjectCard
											image={homeDecor1}
											label="project #2"
											title="modern"
											description="As Uber works through a huge amount of internal management turmoil."
											action={{
												type: 'internal',
												route: '/pages/profile/profile-overview',
												color: 'info',
												label: 'view project'
											}}
											authors={[
												{ image: team1, name: 'Elena Morison' },
												{ image: team2, name: 'Ryan Milly' },
												{ image: team3, name: 'Nick Daniel' },
												{ image: team4, name: 'Peterson' }
											]}
										/>
									</Grid>
									<Grid item xs={12} md={6} xl={4}>
										<DefaultProjectCard
											image={homeDecor2}
											label="project #1"
											title="scandinavian"
											description="Music is something that everyone has their own specific opinion about."
											action={{
												type: 'internal',
												route: '/pages/profile/profile-overview',
												color: 'info',
												label: 'view project'
											}}
											authors={[
												{ image: team3, name: 'Nick Daniel' },
												{ image: team4, name: 'Peterson' },
												{ image: team1, name: 'Elena Morison' },
												{ image: team2, name: 'Ryan Milly' }
											]}
										/>
									</Grid>
									<Grid item xs={12} md={6} xl={4}>
										<DefaultProjectCard
											image={homeDecor3}
											label="project #3"
											title="minimalist"
											description="Different people have different taste, and various types of music."
											action={{
												type: 'internal',
												route: '/pages/profile/profile-overview',
												color: 'info',
												label: 'view project'
											}}
											authors={[
												{ image: team4, name: 'Peterson' },
												{ image: team3, name: 'Nick Daniel' },
												{ image: team2, name: 'Ryan Milly' },
												{ image: team1, name: 'Elena Morison' }
											]}
										/>
									</Grid>
								</Grid>
							</MDBox>
						</Grid>
					</Grid>
				</MDBox>
			</Header>
			<Footer />
		</DashboardLayout>
	);
}

export default Overview;
