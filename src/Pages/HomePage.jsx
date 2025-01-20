import HomeCss from "../Css/Home.module.css";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useContext, useEffect, useState, useCallback } from "react";
import { ModeContext } from "../Components/ModeContext";
import HomeSkeleton from "../Components/HomeSkeleton";
import Resume from "../Assets/ResumeNouman.pdf";
import NoumanImg from "../Assets/Nouman2.jpg";

const Home = () => {
  const navigate = useNavigate();
  const { mode } = useContext(ModeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAboutClick = useCallback(() => {
    navigate("/about");
    window.scrollTo(0, 0);
  }, [navigate]);

  if (loading) {
    return <HomeSkeleton />;
  }

  return (
    <Box className={HomeCss.main} data-theme={mode}>
      <Box className={HomeCss.left}>
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
        <Box className={HomeCss.buttonDiv}>
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
        </Box>
      </Box>
      <Box className={HomeCss.right}>
        <Box className={HomeCss.imagediv} data-theme={mode}>
          <img
            src={NoumanImg}
            alt="Nouman Pic"
            onClick={handleAboutClick}
            data-theme={mode}
          />
        </Box>
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
      </Box>
    </Box>
  );
};

export default Home;
