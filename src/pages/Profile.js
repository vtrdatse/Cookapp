import React, { useEffect, useState } from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const tabList = [
	{
		id: 'account-tab',
		href: '#account',
		'aria-controls': 'account',
		value: 'Account',
		icon: 'fa fa-home text-center mr-1'
	},
	{
		id: 'password-tab',
		href: '#password',
		'aria-controls': 'password',
		value: 'Password',
		icon: 'fa fa-key text-center mr-1'
	},
	{
		id: 'security-tab',
		href: '#security',
		'aria-controls': 'security',
		value: 'Security',
		icon: 'fa fa-user text-center mr-1'
	},
	{
		id: 'recipes-tab',
		href: '#recipes',
		'aria-controls': 'recipes',
		value: 'Recipes',
		icon: 'fa fa-list-dropdown  text-center mr-1'
	},
	{
		id: 'application-tab',
		href: '#application',
		'aria-controls': 'application',
		value: 'Application',
		icon: 'fa fa-tv text-center mr-1'
	},
	{
		id: 'notification-tab',
		href: '#notification',
		'aria-controls': 'notification',
		value: 'Notification',
		icon: 'fa fa-bell text-center mr-1'
	}
];

const Profile = () => {
	const [activeTab, setActiveTab] = useState('account-tab');
	const [data, setData] = useState('');
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const { data: data } = await axios.get(
				'https://localhost:7250/api/Accounts1/ea92283c-f9de-42f5-9af3-260b2502d4d8'
			);
			setData(data);

			const { data: recipes } = await axios.get('https://localhost:7250/api/Recipeposts');
			setRecipes(recipes);
		};
		getData();
	}, []);
	const handleTabClick = (tabId) => {
		setActiveTab(tabId);
	};

	const recipespost = recipes?.filter((item) => item.ref_account === 'ea92283c-f9de-42f5-9af3-260b2502d4d8');
	console.log(recipespost);
	return (
		<>
			<Header />

			<section className="py-5 my-5">
				<div className="container">
					<div className="bg-white shadow rounded-lg d-block d-sm-flex">
						{/* Profile Tab */}
						<div className="profile-tab-nav border-right">
							<div className="p-4">
								<div className="img-circle text-center mb-3">
									<img
										src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/314904974_1588651738276509_6305221414825831123_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_ohc=bvZeuH4VtVMAX9soZsX&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDzWEnbXV2d8F_VnW2hjOE5g2iF9I45gUSadtCa-zHNsw&oe=64A084F3"
										alt="Image"
										className="shadow rounded-circle"
										style={{ width: '50px', height: '50px' }}
									/>
								</div>
								<h4 className="text-center">{data.fullName}</h4>
							</div>
							<div
								className="nav flex-column nav-pills"
								id="v-pills-tab"
								role="tablist"
								aria-orientation="vertical"
							>
								{tabList.map((item) => {
									return (
										<a
											key={item.id}
											className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
											onClick={() => handleTabClick(item.id)}
											id={item.id}
											data-toggle="pill"
											href={item.href}
											role="tab"
											aria-controls={item['aria-controls']}
											aria-selected={activeTab === item.id ? true : false}
										>
											<i className={item.icon}></i>
											{item.value}
										</a>
									);
								})}
							</div>
						</div>
						{/* Tab Content */}
						<div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
							{/* Account Tab Content */}
							<div
								className={`tab-pane fade ${activeTab === 'account-tab' ? 'show active' : ''}`}
								id="account"
								role="tabpanel"
								aria-labelledby="account-tab"
							>
								<h3 className="mb-4">Account Settings</h3>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label>Full Name</label>
											<input type="text" className="form-control" value={data.fullName} />
										</div>
									</div>

									<div className="col-md-6">
										<div className="form-group">
											<label>UserName</label>
											<input type="text" className="form-control" value={data.username} />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label>Company</label>
											<input type="text" className="form-control" value="VTD Workspace" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label>Designation</label>
											<input type="text" className="form-control" value="UI Developer" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label>Bio</label>
											<textarea className="form-control" rows="4">
												Chúng ta đều hiểu rằng, nhu cầu ăn uống của con người đến một cách hết
												sức tự nhiên. Giống như một chu kỳ được lặp lại, con người sẽ cảm thấy
												đói và mong muốn được thưởng thức những bữa ăn. Đó chính là động lực bên
												trong, các chuyên gia cho rằng đây chính là bản năng con người để duy
												trì sự sống. Thật vậy, chỉ khi được cung cấp đầy đủ năng lượng, chúng ta
												mới cảm thấy khỏe khoắn và đảm bảo thể lực, tinh thần để có thể tham gia
												các hoạt động khác.
											</textarea>
										</div>
									</div>
								</div>
								<div>
									<button className="btn btn-primary">Update</button>
									<button className="btn btn-light">Cancel</button>
								</div>
							</div>
							{/* Password Tab Content */}
							<div
								className={`tab-pane fade ${activeTab === 'password-tab' ? 'show active' : ''}`}
								id="password"
								role="tabpanel"
								aria-labelledby="password-tab"
							>
								<h3 className="mb-4">Password Settings</h3>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label>Old password</label>
											<input type="password" className="form-control" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label>New password</label>
											<input type="password" className="form-control" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label>Confirm new password</label>
											<input type="password" className="form-control" />
										</div>
									</div>
								</div>
								<div>
									<button className="btn btn-primary">Update</button>
									<button className="btn btn-light">Cancel</button>
								</div>
							</div>
							{/* Security Tab Content */}
							<div
								className={`tab-pane fade ${activeTab === 'security-tab' ? 'show active' : ''}`}
								id="security"
								role="tabpanel"
								aria-labelledby="security-tab"
							>
								<h3 className="mb-4">Security Settings</h3>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label>Login</label>
											<input type="text" className="form-control" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label>Two-factor auth</label>
											<input type="text" className="form-control" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													value=""
													id="recovery"
												/>
												<label className="form-check-label" htmlFor="recovery">
													Recovery
												</label>
											</div>
										</div>
									</div>
								</div>
								<div>
									<button className="btn btn-primary">Update</button>
									<button className="btn btn-light">Cancel</button>
								</div>
							</div>
							{/* Recipes */}
							<div
								className={`tab-pane fade ${activeTab === 'recipes-tab' ? 'show active' : ''}`}
								id="recipes"
								role="tabpanel"
								aria-labelledby="recipes-tab"
							>
								<h3 className="mb-4">Reviews</h3>
								<div className="d-flex flex-wrap">
									{recipespost?.map((item) => {
										return (
											<Card
												key={item.id}
												sx={{ minWidth: 275 }}
												className="md-6"
												style={{ flex: '0 0 50%' }}
											>
												<CardContent>
													<Typography variant="h5" component="div">
														{item.title}
													</Typography>
													<Typography
														sx={{ fontSize: 14 }}
														color="text.secondary"
														gutterBottom
													>
														rate
													</Typography>
													<Typography sx={{ mb: 1.5 }} color="text.secondary">
														{item.create_time}
													</Typography>
													<Typography variant="body2">{item.content}</Typography>
												</CardContent>
												<CardActions>
													<Button size="small">Go to</Button>
												</CardActions>
											</Card>
										);
									})}
								</div>
							</div>
							{/* Application Tab Content */}
							<div
								className={`tab-pane fade ${activeTab === 'application-tab' ? 'show active' : ''}`}
								id="application"
								role="tabpanel"
								aria-labelledby="application-tab"
							>
								<h3 className="mb-4">Application Settings</h3>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													value=""
													id="app-check"
												/>
												<label className="form-check-label" htmlFor="app-check">
													App check
												</label>
											</div>
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													value=""
													id="defaultCheck2"
												/>
												<label className="form-check-label" htmlFor="defaultCheck2">
													Lorem ipsum dolor sit.
												</label>
											</div>
										</div>
									</div>
								</div>
								<div>
									<button className="btn btn-primary">Update</button>
									<button className="btn btn-light">Cancel</button>
								</div>
							</div>
							{/* Notification Tab Content */}
							<div
								className={`tab-pane fade ${activeTab === 'notification-tab' ? 'show active' : ''}`}
								id="notification"
								role="tabpanel"
								aria-labelledby="notification-tab"
							>
								<h3 className="mb-4">Notification Settings</h3>
								<div className="form-group">
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											value=""
											id="notification1"
										/>
										<label className="form-check-label" htmlFor="notification1">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusantium
											accusamus, neque cupiditate quis
										</label>
									</div>
								</div>
								<div className="form-group">
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											value=""
											id="notification2"
										/>
										<label className="form-check-label" htmlFor="notification2">
											hic nesciunt repellat perferendis voluptatum totam porro eligendi.
										</label>
									</div>
								</div>
								<div className="form-group">
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											value=""
											id="notification3"
										/>
										<label className="form-check-label" htmlFor="notification3">
											Ipsa earum maiores voluptates illo ut autem nam at iste recusandae saepe
											perferendis nihil sint maxime, quaerat modi similique numquam vero sed.
										</label>
									</div>
								</div>
								<div>
									<button className="btn btn-primary">Update</button>
									<button className="btn btn-light">Cancel</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</section>
		</>
	);
};

export default Profile;
