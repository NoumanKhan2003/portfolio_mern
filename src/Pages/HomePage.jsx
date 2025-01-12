import HomeCss from "../Css/Home.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useContext, useEffect, useState } from "react";
import { ModeContext } from "../Components/ModeContext";
import ProgressCircle from "../Components/ProgressCircle";
import Resume from "../Assests/ResumeNouman.pdf";
import NoumanImg from "../Assests/noumanimg.jpg";
const Home = () => {
  const navigate = useNavigate();
  const { mode } = useContext(ModeContext);
  const [loading, setLoading] = useState(true);
  const [themeChange, setThemeChange] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    setThemeChange(true);
    const themeTimeout = setTimeout(() => {
      setThemeChange(false);
    }, 400);
    return () => clearTimeout(themeTimeout);
  }, [mode]);

  const handleAboutClick = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };

  if (loading || themeChange) {
    return <ProgressCircle />;
  }

  return (
    <div className={HomeCss.main} data-theme={mode}>
      <div className={HomeCss.left}>
        <h1 className={HomeCss.name1} data-theme={mode}>
          Hey, I'M{" "}
        </h1>
        <h1
          className={HomeCss.name2}
          onClick={handleAboutClick}
          data-theme={mode}
        >
          NOUMAN KHAN
        </h1>
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
            href={Resume}
            data-theme={mode}
            startIcon={<DownloadOutlinedIcon />}
          >
            Download CV
          </Button>
        </div>
      </div>
      <div className={HomeCss.right}>
        <div className={HomeCss.imagediv} data-theme={mode}>
          <img
            src={NoumanImg}
            alt="Nouman Pic"
            onClick={handleAboutClick}
            data-theme={mode}
          />
        </div>
        <Button
          className={HomeCss.download2}
          variant="contained"
          color="success"
          size="large"
          href={Resume}
          data-theme={mode}
          startIcon={<DownloadOutlinedIcon />}
        >
          Download CV
        </Button>
      </div>
    </div>
  );
};

export default Home;
