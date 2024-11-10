import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';
import { Typography } from '@mui/material';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const projectData = [
    { id: 1, name: 'CareerUp',icon: <WorkOutlineIcon/>, description: 'Personalised Job Search Portal' },
    { id: 2, name: 'Portfolio',icon: <SchoolIcon/>, description: 'Porfolio Website for showcase of projects' },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: 280, display: 'flex', flexDirection: 'column' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography variant='h5' align='center'>Choose to view</Typography>
        <Divider component={Box} sx={{ my: 2 }} bgcolor={'black'}/>           

        {projectData.map((project, index) => (
          <ListItem key={project.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
               {project.icon}
              </ListItemIcon>
              <ListItemText
                primary={project.name}
                secondary={project.description}
              />
            </ListItemButton>
            </ListItem>
        ))}
      </List>
    </Box>
  );

  const fontSize = {
    xs: '1.4rem',
    sm: '2rem',
  };

  return (
    <div>
      <Box display="flex">
        <Button
          onClick={toggleDrawer('left', true)}
          startIcon={<CalendarViewDayIcon />}
          size="large"
          variant="inherit"
        >
          <Typography variant="h6" fontSize="1.2rem">View</Typography>
        </Button>
        <Typography
          variant="h5"
          fontWeight="bold"
          fontSize={fontSize}
          margin="auto"
          paddingRight="4vw"
          sx={fontSize}
        >
          View the Projects
        </Typography>
      </Box>

      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>
    </div>
  );
}
