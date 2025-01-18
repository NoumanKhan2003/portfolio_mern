import EducationCss from "../Css/Education.module.css";
import collegeImg from "../Assets/Nouman Marksheet.jpg";
import highSchoolImg from "../Assets/Nouman 12th.jpg";
import schoolImg from "../Assets/Nouman 10th.jpg";
import { Button } from "@mui/material";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import { useContext } from "react";
import { ModeContext } from "../Components/ModeContext";
const Education = () => {

  const { mode } = useContext(ModeContext);
  return (
    <div className={EducationCss.container} data-theme={mode}>
      <div className={EducationCss.headingDiv}>
        <h1 className={EducationCss.h1} data-theme={mode}>
          My Education
        </h1>
      </div>
      <div className={EducationCss.main}>
        <div className={EducationCss.college}>
          <h2 className={EducationCss.h2} data-theme={mode}>
            &#9734; DeenBandhu Chhotu Ram University of Science and Technology,
            Murthal
          </h2>
          <p className={EducationCss.p} data-theme={mode}>
            B.Tech(Computer Science and Engineering)
            <p className={EducationCss.year} data-theme={mode}>
              (2026)
            </p>
          </p>
          <Button
            variant="contained"
            color={mode === "dark" ? "success" : "primary"}
            startIcon={<CloudDownloadOutlinedIcon />}
            href={collegeImg}
            data-theme={mode}
          >
            Download
          </Button>
        </div>
        <div className={EducationCss.senior}>
          <h2 className={EducationCss.h2} data-theme={mode}>
            &#9734; K.L. Mehta Dayanand Public Sr. Sec. School, Faridabad
          </h2>
          <p className={EducationCss.p} data-theme={mode}>
            Non-Medical (CBSE)
            <p className={EducationCss.year} data-theme={mode}>
              (2022)
            </p>
          </p>
          <Button
            variant="contained"
            color={mode === "dark" ? "success" : "primary"}
            startIcon={<CloudDownloadOutlinedIcon />}
            href={highSchoolImg}
            data-theme={mode}
          >
            Download
          </Button>
        </div>
        <div className={EducationCss.junior}>
          <h2 className={EducationCss.h2} data-theme={mode}>
            &#9734; K.D. Sr. Sec. School, Faridabad
          </h2>
          <p className={EducationCss.p} data-theme={mode}>
            HBSE
            <p className={EducationCss.year} data-theme={mode}>
              (2020)
            </p>
          </p>
          <Button
            variant="contained"
            color={mode === "dark" ? "success" : "primary"}
            startIcon={<CloudDownloadOutlinedIcon />}
            href={schoolImg}
            data-theme={mode}
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Education;
