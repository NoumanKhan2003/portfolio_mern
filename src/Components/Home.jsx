import HomeCss from "../Css/Home.module.css";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { useContext } from "react";
import {ModeContext} from "./ModeContext"
import Resume from "../Assests/ResumeNouman.pdf"
const Home = () => {
  const navigate = useNavigate();
  const handleResumeClick=(fileUrl, fileName)=>{
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  const handleAboutClick=()=>{
    navigate('/about');
    window.scrollTo(0,0);
  };
  const { mode } = useContext(ModeContext);

  return (
    <div className={HomeCss.main} data-theme={mode}>
      <div className={HomeCss.left}>
        <h1 className={HomeCss.name1} data-theme={mode}>Hey, I'M </h1>
        <h1 className={HomeCss.name2} onClick={handleAboutClick} data-theme={mode}>NOUMAN KHAN</h1>
        <p className={HomeCss.about} data-theme={mode}>
          I'm a aspiring full-stack web developer and software engineer,
          passionate about crafting innovative digital solutions. Proficient in
          MERN Stack. Currently exploring the world of web development through
          personal projects.
        </p>
        <div className={HomeCss.buttonDiv}>
        <Button
          className={HomeCss.download}
          variant="contained"
          color="success"
          size="large"
          onClick={() => handleResumeClick(Resume, "Nouman's Resume")}
          data-theme={mode}
      startIcon={<DownloadOutlinedIcon/>}
        >
         Download CV
        </Button>
        </div>
      </div>
      <div className={HomeCss.right}>
        <div className={HomeCss.imagediv} data-theme={mode}>
          <img src={require("../Assests/noumanimg.jpg")} alt="Nouman Pic" onClick={handleAboutClick} data-theme={mode}/>
        </div>
        <Button
          className={HomeCss.download2}
          variant="contained"
          color="success"
          size="large"
          onClick={() => handleResumeClick(Resume, "Nouman's Resume")}
          data-theme={mode}
      startIcon={<DownloadOutlinedIcon/>}
        >
         Download CV
        </Button>
      </div>
    </div>
  );
};

export default Home;
