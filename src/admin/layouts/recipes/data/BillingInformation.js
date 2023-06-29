import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from '../../../components/MDBox';
import MDTypography from '../../../components/MDTypography';

// Billing page components
import Bill from './RecipesComponents';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BillingInformation() {
	const [data, setData] = useState();

	useEffect(() => {
		const fetch = async () => {
			try {
				const { data } = await axios.get('https://localhost:7250/api/Recipeposts');
				setData(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetch();
	}, [data, setData]);
	return (
		<Card id="delete-account">
			<MDBox pt={3} px={2}>
				<MDTypography variant="h6" fontWeight="medium">
					Recipes Information
				</MDTypography>
			</MDBox>
			<MDBox pt={1} pb={2} px={2}>
				<MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
					{data &&
						data.map((item) => {
							return (
								<Bill
									name={item.title}
									id={item.id}
									tag={item.tag}
									content={item.content}
									image={item.image}
									create_time={item.create_time}
								/>
							);
						})}
				</MDBox>
			</MDBox>
		</Card>
	);
}

export default BillingInformation;
