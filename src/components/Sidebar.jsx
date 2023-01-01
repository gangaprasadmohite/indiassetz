import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import PhoneCallbackRoundedIcon from '@mui/icons-material/PhoneCallbackRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import logo from '../assets/Indiassetz.png';
const drawerWidth = 240;

console.log(logo);

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ borderRadius: '10px' }}>
      <Toolbar>
        <Box
          component="img"
          sx={{
            height: 80,
            marginTop: '1.8rem',
            marginBottom: '0.91rem',
          }}
          alt="Your logo."
          src={logo}
        />
      </Toolbar>
      <Divider sx={{ width: '90%', margin: '0 auto' }} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'Column',
          justifyContent: 'space-evenly',
        }}
      >
        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
          <ListItem sx={{ color: 'rgba(10, 58, 103, 0.4)' }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GridViewRoundedIcon
                  sx={{ color: 'rgba(10, 58, 103, 0.4)', padding: '0px' }}
                />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ color: 'rgba(10, 58, 103, 0.4)' }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Diversity1RoundedIcon
                  sx={{ color: 'rgba(10, 58, 103, 0.4)' }}
                />
              </ListItemIcon>
              <ListItemText primary="Leads" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ color: '#0A3A67' }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupsRoundedIcon sx={{ color: '#0A3A67' }} />
              </ListItemIcon>
              <ListItemText primary="Clients" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ color: 'rgba(10, 58, 103, 0.4)' }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeRoundedIcon sx={{ color: 'rgba(10, 58, 103, 0.4)' }} />
              </ListItemIcon>
              <ListItemText primary="Properties" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ color: 'rgba(10, 58, 103, 0.4)' }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReceiptLongRoundedIcon
                  sx={{ color: 'rgba(10, 58, 103, 0.4)' }}
                />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ color: 'rgba(10, 58, 103, 0.4)' }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PhoneCallbackRoundedIcon
                  sx={{ color: 'rgba(10, 58, 103, 0.4)' }}
                />
              </ListItemIcon>
              <ListItemText primary="Call Back" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ color: 'rgba(10, 58, 103, 0.4)' }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WalletRoundedIcon sx={{ color: 'rgba(10, 58, 103, 0.4)' }} />
              </ListItemIcon>
              <ListItemText primary="Payments" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ color: 'rgba(10, 58, 103, 0.4)' }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <QueryStatsRoundedIcon
                  sx={{ color: 'rgba(10, 58, 103, 0.4)' }}
                />
              </ListItemIcon>
              <ListItemText primary="IA - AI" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ color: 'rgba(10, 58, 103, 0.4)' }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RateReviewRoundedIcon
                  sx={{ color: 'rgba(10, 58, 103, 0.4)' }}
                />
              </ListItemIcon>
              <ListItemText primary="Red Box" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem
            sx={{ marginTop: '120px', color: '#75013D' }}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <LogoutRoundedIcon sx={{ color: '#75013D' }} />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>

      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        borderRadius: '0px 40px 40px 0px',
      }}
      aria-label="mailbox folders"
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
          background: '#0A3A67',
          color: 'black',
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
