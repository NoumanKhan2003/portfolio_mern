import * as React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "./ModeContext";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const projectData = [
    {
      id: 1,
      name: "CareerUp",
      icon: <WorkOutlineIcon />,
      description: "Personalised Job Search Portal",
      link: "careerup",
    },
    {
      id: 2,
      name: "Portfolio",
      icon: <SchoolIcon />,
      description: "Porfolio Website for showcase of projects",
      link: "portfolio",
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{
        width: 280,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      color={mode === "dark" ? "white" : "black"}
      bgcolor={mode === "dark" ? "#101010" : "white"}
    >
      <List>
        <Typography variant="h5" align="center">
          Choose to view
        </Typography>
        <Divider
          component={Box}
          sx={{ my: 2 }}
          bgcolor={mode === "dark" ? "white" : "black"}
        />
        {projectData.map((project, index) => (
          <ListItem key={project.id} disablePadding>
            <ListItemButton
              component={Link}
              to={`/projects/${project.link}`}
              sx={{
                backgroundColor: mode === "dark" ? "#101010" : "white",
                "&:hover": {
                  backgroundColor: mode === "dark" ? "#1c1c1c" : "#e0e0e0",
                },
                color: mode === "dark" ? "white" : "black",
              }}
            >
              <ListItemIcon
                sx={{
                  color: mode === "dark" ? "white" : "black",
                }}
              >
                {project.icon}
              </ListItemIcon>
              <ListItemText
                primary={project.name}
                secondary={project.description}
                primaryTypographyProps={{
                  color: mode === "dark" ? "white" : "black",
                }}
                secondaryTypographyProps={{
                  color: mode === "dark" ? "#aaaaaa" : "#555555",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const fontSize = {
    xs: "1.4rem",
    sm: "2rem",
  };
  const { mode } = useContext(ModeContext);
  return (
    <div>
      <Box
        display="flex"
        bgcolor={mode === "dark" ? "#101010" : "white"}
        color={mode === "dark" ? "white" : "black"}
      >
        <Button
          onClick={toggleDrawer("left", true)}
          startIcon={<CalendarViewDayIcon />}
          size="large"
          variant="inherit"
        >
          <Typography variant="h6" fontSize="1.2rem">
            View
          </Typography>
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
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
}
