import { Navigate } from "react-router-dom";
import HomeCss from "../Css/Home.module.css";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleContactClick=()=>{
    navigate('/contact');
  };
  const handleAboutClick=()=>{
    navigate('/about');
  };
  return (
    <div className={HomeCss.main}>
      <div className={HomeCss.left}>
        <h1 className={HomeCss.name1}>Hey, I'M </h1>
        <h1 className={HomeCss.name2} onClick={handleAboutClick}>NOUMAN KHAN</h1>
        <p className={HomeCss.about}>
          I'm a aspiring full-stack web developer and software engineer,
          passionate about crafting innovative digital solutions. Proficient in
          MERN Stack. Currently exploring the world of web development through
          personal projects.
        </p>
        <div className={HomeCss.buttonDiv}>
        <Button
          className={HomeCss.contact}
          variant="contained"
          color="success"
          size="large"
      onClick={handleContactClick}
        >
          Contact Me
        </Button>
        </div>
      </div>
      <div className={HomeCss.right}>
        <div className={HomeCss.imagediv}>
          <img src={require("../Assests/noumanimg.jpg")} alt="Nouman Pic" onClick={handleAboutClick}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
