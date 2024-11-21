import React from "react";
import ReactPlayer from "react-player";
import ProjectsCss from "../Css/Projects.module.css";
import { Box, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { useContext } from "react";
import { ModeContext } from "./ModeContext";
const Projects = (props) => {
  const { mode } = useContext(ModeContext);
  return (
    <div className={ProjectsCss.main} data-theme={mode}>
      <ReactPlayer
        url={props.video}
        width="100%"
        height="100%"
        controls
        playing
        muted
      />
      <Box>
        <Box>
          <Typography
            variant="h4"
            align="center"
            paddingTop={2}
            color={mode === "dark" ? "#fff9cc" : "black"}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            padding={2}
            paddingBottom={0}
            color={mode === "dark" ? "#d4ffcc" : "black"}
          >
            {props.body1}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            padding={2}
            paddingTop={0.5}
            paddingBottom={0}
            color={mode === "dark" ? "#d4ffcc" : "black"}
          >
            {props.body2}
          </Typography>
          <Typography
            variant="h4"
            align="center"
            paddingTop={2}
            color={mode === "dark" ? "#fcffc5" : "black"}
          >
            <CodeIcon /> {props.project} is made using these technologies{" "}
            <CodeIcon />
          </Typography>
          <Box>
            <Box>
              <Typography variant="h5">
                <ul className={ProjectsCss.techlist}>
                  {props.tech.map((technology, index) => (
                    <li
                      key={index}
                      className={ProjectsCss.techitem}
                      data-theme={mode}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
