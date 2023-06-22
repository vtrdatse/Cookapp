import useFetchData from '../../useFetchData';

const useReportsBarChartData = () => {
	const { data: recipePosts } = useFetchData('https://cookappapisu23.azurewebsites.net/api/RecipePosts');
	const { data: accounts } = useFetchData('https://cookappapisu23.azurewebsites.net/api/Accounts');
	const roleUser = 3;
	const roleChef = 2;
	const roleAdmin = 1;

	const userAccountIds = accounts?.filter((account) => account.roleid == roleUser).map((account) => account.id);
	const userRecipes =
		recipePosts && userAccountIds ? recipePosts.filter((recipe) => userAccountIds.includes(recipe.refAccount)) : [];
	const chefAccountIds = accounts?.filter((account) => account.roleid == roleChef).map((account) => account.id);
	const chefRecipes =
		recipePosts && chefAccountIds ? recipePosts.filter((recipe) => chefAccountIds.includes(recipe.refAccount)) : [];
	const adminAccountIds = accounts?.filter((account) => account.roleid == roleAdmin).map((account) => account.id);
	const adminRecipes =
		recipePosts && adminAccountIds
			? recipePosts.filter((recipe) => adminAccountIds.includes(recipe.refAccount))
			: [];
	const dataChart = {
		labels: ['User', 'Chef', 'Admin'],
		datasets: {
			label: 'Recipe Posts',
			data: [userRecipes.length, chefRecipes.length, adminRecipes.length],
			backgroundColors: ['primary', 'info', 'success']
		}
	};

	return {
		recipePosts,
		accounts,
		dataChart
	};
};

export default useReportsBarChartData;
