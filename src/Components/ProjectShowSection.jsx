import React from 'react';
import ReactPlayer from 'react-player';
import CareerupCss from '../Css/Projects.module.css'
import {Box,Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
const Careerup=(props)=> {
  return (
    <div>
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
          <Typography variant='h4' align='center' paddingTop={2}>{props.title}</Typography>
          <Typography variant='body1' align='center' padding={2} paddingBottom={0}>{props.body1}</Typography>
        <Typography variant='body1' align='center' padding={2} paddingTop={0.5} paddingBottom={0}>{props.body2}</Typography>
        <Typography variant='h4' align='center' paddingTop={2}><CodeIcon/> {props.project} is made using these technologies <CodeIcon/></Typography>
<Box>
  <Box>
    <Typography variant='h5'>
    <ul className={CareerupCss.techlist}>
        {props.tech.map((technology, index) => (
          <li key={index} className={CareerupCss.techitem}>
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

export default Careerup;
