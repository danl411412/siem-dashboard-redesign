import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import KPITiles from './components/KPITiles';
import EventTimeline from './components/EventTimeline';
import Visualizations from './components/Visualizations';
import AlertTable from './components/AlertTable';
import AssetPanel from './components/AssetPanel';
import SearchFilterPanel from './components/SearchFilterPanel';

import MapView from './components/MapView';

const drawerWidth = 240;

const navItems = [
  'Search',
  'Dashboards',
  'Alerts',
  'Reports',
  'Assets',
  'Settings',
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          SIEM Dashboard
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {navItems.map((text) => (
          <ListItem key={text} disablePadding sx={{ minHeight: 48 }}>
            <ListItemButton sx={{ py: 1.5, px: 3 }}>
              <ListItemText primary={text} primaryTypographyProps={{ fontSize: 17, fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#21243d',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => {
              if (window.innerWidth < 600) {
                handleDrawerToggle();
              } else {
                handleSidebarToggle();
              }
            }}
            sx={{ mr: 2, display: 'inline-flex' }}
          >
            <MenuIcon />
          </IconButton>
          {!sidebarOpen && (
            <IconButton
              color="inherit"
              aria-label="open sidebar"
              edge="start"
              onClick={handleSidebarToggle}
              sx={{ mr: 2, display: 'none' }}
            >
              <ChevronRightIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            SIEM Dashboard
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton color="inherit" sx={{ ml: 1 }}>
            <NotificationsIcon />
          </IconButton>
          <Avatar sx={{ ml: 2, bgcolor: '#4f8cff' }}>A</Avatar>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: sidebarOpen ? drawerWidth : 0 }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          open={sidebarOpen}
          sx={{
            display: { xs: 'none', sm: 'block' },
            width: sidebarOpen ? drawerWidth : 0,
            flexShrink: 0,
            transition: 'width 0.2s',
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: sidebarOpen ? drawerWidth : 0,
              transition: 'width 0.2s',
              overflowX: 'hidden',
            },
          }}
        >
          {sidebarOpen && (
            <Box>
              {drawer}
              <IconButton
                onClick={handleSidebarToggle}
                sx={{ position: 'absolute', top: 8, right: -28, bgcolor: '#21243d', color: '#fff', borderRadius: 1, boxShadow: 1, display: { xs: 'none', sm: 'inline-flex' } }}
                size="small"
              >
                <ChevronRightIcon />
              </IconButton>
            </Box>
          )}
        </Drawer>
      </Box>
      {!sidebarOpen && (
        <IconButton
          color="primary"
          aria-label="open sidebar"
          onClick={handleSidebarToggle}
          sx={{
            position: 'fixed',
            top: 80,
            left: 8,
            zIndex: 1300,
            bgcolor: '#fff',
            border: '1px solid #ddd',
            boxShadow: 2,
            display: { xs: 'inline-flex', sm: 'none' },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: sidebarOpen ? `calc(100% - ${drawerWidth}px)` : '100%' },
          background: '#f4f6fa',
          minHeight: '100vh',
          transition: 'width 0.2s',
        }}
      >
        <Toolbar />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '2fr 1fr' },
            gridTemplateRows: 'auto auto auto auto',
            gap: 2,
            alignItems: 'start',
          }}
        >
          <Box sx={{ gridColumn: { xs: '1', md: '1' }, gridRow: '1' }}>
            <KPITiles />
          </Box>
          <Box sx={{ gridColumn: { xs: '1', md: '2' }, gridRow: '1' }}>
            <SearchFilterPanel />
          </Box>
          <Box sx={{ gridColumn: { xs: '1', md: '1' }, gridRow: '2' }}>
            <Visualizations />
          </Box>
          <Box sx={{ gridColumn: { xs: '1', md: '2' }, gridRow: '2' }}>
            <EventTimeline />
          </Box>
          <Box sx={{ gridColumn: { xs: '1', md: '1' }, gridRow: '3' }}>
            <AlertTable />
          </Box>
          <Box sx={{ gridColumn: { xs: '1', md: '2' }, gridRow: '3' }}>
            <AssetPanel />
          </Box>
        </Box>
        <MapView />
      </Box>
    </Box>
  );
}

export default App;
