import React from 'react';
import ReactPlayer from 'react-player';
import portfolio from '../Assests/vd.mp4'
import { Container,Box,Typography } from '@mui/material';
import PortfolioCss from '../Css/Projects.module.css';
import CodeIcon from '@mui/icons-material/Code';

const Portfolio=()=> {
  return (
    <div>
      <ReactPlayer
        url={portfolio}
        width="100%"
        height="100%"
        controls
        playing
        muted
      />
        <Box>
        <Box>
          <Typography variant='h4' align='center' paddingTop={2}>Portfolio Website (MERN Stack)</Typography>
          <Typography variant='body1'  align='center' padding={2} paddingBottom={0}>Portfolio website is a personal website to showcase yourself to Employers and others.</Typography>
        <Typography variant='body1'  align='center' padding={2} paddingTop={0.5} paddingBottom={0}>It is a website to show your skills, Projects you have done and Your contact information.</Typography>
        <Typography variant='h4' align='center' paddingTop={2}><CodeIcon/> PortFolio Website is made using these technologies <CodeIcon/></Typography>
<Box>
  <Box>
    <Typography variant='h5'>
      <ul className={PortfolioCss.techlist}>
        <li className={PortfolioCss.techitem}>HTML</li>
        <li className={PortfolioCss.techitem}>CSS</li>
        <li className={PortfolioCss.techitem}>JavaScript</li>
         <li className={PortfolioCss.techitem}>ReactJs</li>
         <li className={PortfolioCss.techitem}>Material UI</li>
         <li className={PortfolioCss.techitem}>Bootstrap</li>
      </ul>
   
    </Typography>
  </Box>
</Box>
       
        </Box>
      </Box>
    </div>
  );
};

export default Portfolio;
