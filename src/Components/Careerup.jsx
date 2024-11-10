import React from 'react';
import ReactPlayer from 'react-player';
import careerup from '../Assests/careerup.mp4'
import CareerupCss from '../Css/Projects.module.css'
import { Container,Box,Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
const Careerup=()=> {
  return (
    <div>
      <ReactPlayer
        url={careerup}
        width="100%"
        height="100%"
        controls
        playing
        muted
      />
      <Box>
        <Box>
          <Typography variant='h4' align='center' paddingTop={2}>CareerUp (Job-Portal) (PHP Based)</Typography>
          <Typography variant='body1' align='center' padding={2} paddingBottom={0}>CareerUp is the Web based platform to find personalised job according to your skills, locations and types of jobs required. You can find jobs internships and events in this portal. You also get some additional features like Automatic resume building using multiple templates.</Typography>
        <Typography variant='body1' align='center' padding={2} paddingTop={0.5} paddingBottom={0}>CareerUp is not only for the job seekers, but also for the employers to post easily the jobs and events in just a step.</Typography>
        <Typography variant='h4' align='center' paddingTop={2}><CodeIcon/> CareerUp is made using these technologies <CodeIcon/></Typography>
<Box>
  <Box>
    <Typography variant='h5'>
      <ul className={CareerupCss.techlist}>
        <li className={CareerupCss.techitem}>HTML</li>
        <li className={CareerupCss.techitem}>CSS</li>
        <li className={CareerupCss.techitem}>JavaScript</li>
         <li className={CareerupCss.techitem}>PHP</li>
         <li className={CareerupCss.techitem}>MySql</li>
         <li className={CareerupCss.techitem}>Bootstrap</li>
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
