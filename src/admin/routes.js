import Dashboard from './layouts/dashboard';
import Users from './layouts/user';
import Chefs from './layouts/chef';
import Profile from './layouts/profile';

import { LuChefHat } from 'react-icons/lu';

// @mui icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const routes = [
	{
		type: 'collapse',
		name: 'Dashboard',
		key: 'dashboard',
		icon: <DashboardIcon fontSize="small" />,
		route: '/dashboard',
		component: <Dashboard />
	},
	{
		type: 'collapse',
		name: 'Users Management',
		key: 'Users',
		icon: <ManageAccountsIcon fontSize="small" />,
		route: '/user',
		component: <Users />
	},
	{
		type: 'collapse',
		name: 'Chefs',
		key: 'Chefs',
		icon: <LuChefHat fontSize="small" />,
		route: '/chef',
		component: <Chefs />
	},
	{
		type: 'collapse',
		name: 'Profile',
		key: 'profile',
		icon: <AccountCircleIcon fontSize="small" />,
		route: '/profile',
		component: <Profile />
	}
];

export default routes;
