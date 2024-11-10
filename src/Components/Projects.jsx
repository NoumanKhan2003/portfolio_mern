import React from 'react';
import Drawer from './Drawer';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div>
      <Drawer/> 
      <Outlet/>
        </div>
  );
};

export default Projects;
