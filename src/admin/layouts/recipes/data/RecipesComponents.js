import PropTypes from 'prop-types';

// @mui material components
import Icon from '@mui/material/Icon';

// Material Dashboard 2 React components
import MDBox from '../../../components/MDBox';
import MDTypography from '../../../components/MDTypography';
import MDButton from '../../../components/MDButton';
import MDAvatar from '../../../components/MDAvatar';
import Base64ImageConverter from '../convertBase64';

// Material Dashboard 2 React context
import { useMaterialUIController } from '../../../context';

function Bill({ name, id, tag, content, image, create_time }) {
	const [controller] = useMaterialUIController();
	const { darkMode } = controller;

	return (
		<MDBox
			component="li"
			display="flex"
			justifyContent="space-between"
			alignItems="flex-start"
			bgColor={darkMode ? 'transparent' : 'grey-100'}
			borderRadius="lg"
			p={3}
			mt={2}
		>
			<MDBox width="100%" display="flex" flexDirection="column">
				<MDBox
					display="flex"
					justifyContent="space-between"
					alignItems={{ xs: 'flex-start', sm: 'center' }}
					flexDirection={{ xs: 'column', sm: 'row' }}
					mb={2}
				>
					<Base64ImageConverter image={image} />
					<MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
						{name}
					</MDTypography>

					<MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
						<MDBox mr={1}>
							<MDButton variant="text" color="error">
								&nbsp;delete
							</MDButton>
						</MDBox>
						<MDButton variant="text" color={darkMode ? 'white' : 'dark'}>
							&nbsp;goto
						</MDButton>
					</MDBox>
				</MDBox>
				<MDBox mb={1} lineHeight={0}>
					<MDTypography variant="caption" color="text">
						id:&nbsp;&nbsp;&nbsp;
						<MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
							{id}
						</MDTypography>
					</MDTypography>
				</MDBox>
				<MDBox mb={1} lineHeight={0}>
					<MDTypography variant="caption" color="text">
						tag:&nbsp;&nbsp;&nbsp;
						<MDTypography variant="caption" fontWeight="medium">
							{tag}
						</MDTypography>
					</MDTypography>
				</MDBox>
				<MDTypography variant="caption" color="text">
					content:&nbsp;&nbsp;&nbsp;
					<MDTypography variant="caption" fontWeight="medium">
						{content}
					</MDTypography>
				</MDTypography>
				<MDTypography variant="caption" color="text">
					Create:&nbsp;&nbsp;&nbsp;
					<MDTypography variant="caption" fontWeight="medium">
						{create_time}
					</MDTypography>
				</MDTypography>
			</MDBox>
		</MDBox>
	);
}

// Setting default values for the props of Bill
Bill.defaultProps = {
	noGutter: false
};

// Typechecking props for the Bill
Bill.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	noGutter: PropTypes.bool
};

export default Bill;
