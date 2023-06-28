import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation() {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const pages = [
		{ id: 1, name: 'Home', path: '/' },
		{ id: 2, name: 'Dashboard', path: '/admin' },
		{ id: 3, name: 'Contact', path: '/Contact' }
	];

	return (
		<AppBar position="static" color="primary">
			<Toolbar disableGutters>
				<Typography
					variant="h6"
					noWrap
					component={Link}
					to="/"
					sx={{
						mr: 2,
						display: { xs: 'none', md: 'flex' },
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none'
					}}
				>
					APP
				</Typography>
				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="inherit"
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left'
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left'
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
					>
						{pages.map((page) => (
							<MenuItem key={page.id} onClick={handleCloseNavMenu}>
								<Button fullWidth color="inherit" component={NavLink} to={page.path}>
									{page.name}
								</Button>
							</MenuItem>
						))}
					</Menu>
				</Box>
				<Box sx={{ flexGrow: 1 }} />
				<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
					{pages.map((page) => (
						<Tooltip key={page.id} title={page.name} arrow placement="bottom">
							<Button color="inherit" component={NavLink} to={page.path} activeClassName="active">
								{page.name}
							</Button>
						</Tooltip>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
}
