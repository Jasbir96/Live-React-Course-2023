import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import {Link} from "react-router-dom";


const settings = ['Profile', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static"
            style={{ backgroundColor: "white" }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters className="navbar_container">
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { md: 'flex' },
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src="insta.png" alt=""
                            height="50px"
                            style={{ backgroundColor: "white" }}
                        />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>

                    </Box>
                    <Box sx={{ flexGrow: 0 }} style={{display:"flex"}}>
                        <div className='nav_icons-container'>
                            <HomeIcon fontSize="large" className='nav-icons'
                           ></HomeIcon>
                            <ExploreIcon fontSize="large" className='nav-icons'></ExploreIcon>   
                        </div>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem key={"profile"} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">
                                    <Link to="/profile">  Profile</Link>
                                   </Typography>
                            </MenuItem>
                            <MenuItem key={"logout"} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
