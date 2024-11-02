import React from 'react'
import AboutMeCss from '../Css/AboutMe.module.css'; 
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
    const navigate = useNavigate();
    const handleContactClick = () => {
        navigate('/contact'); 
      };

    return (
    <div className={AboutMeCss.container}>
<div className={AboutMeCss.left}>
    <div className={AboutMeCss.imgDivBorder}>
<div className={AboutMeCss.imgDiv}>
    <img src={require('../Assests/Nouman2.jpg')} alt="Nouman Pic" className={AboutMeCss.img}/>
</div>
</div>
    </div>   
    <div className={AboutMeCss.right}>
<div className={AboutMeCss.details}>
<h1 className={AboutMeCss.h1}>About Me</h1>
<p className={AboutMeCss.p}>Hi, My name is Nouman Khan !!</p>
<p className={AboutMeCss.p}>I am a B.Tech 3<sup>rd</sup> year student of DCRUST, Murthal. Pursuing my degree in Compter Science and Engineering. I have a keen interest in Developling Softwares of Web, solving problems and finding dynamic ideas in the software world. </p>
<p className={AboutMeCss.p}>I am a Full Stack Web Developer. I am proficient in making Clean, Responsive and Dynamic WebApps using the MERN Stack. </p>
</div>
<button type='button' className={AboutMeCss.button} onClick={handleContactClick}>Contact Me</button>
    </div>
     </div>
  )
}

export default AboutMe;