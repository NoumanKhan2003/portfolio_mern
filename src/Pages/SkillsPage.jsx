import React, { useContext } from "react";
import SkillsCss from "../Css/Skill.module.css";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import { ModeContext } from "../Components/ModeContext";
import skillsData from "../Json/skills.json";
import { Box } from "@mui/material";

const Skills = () => {
  const { mode } = useContext(ModeContext);
  return (
    <Box className={SkillsCss.wrapper} data-theme={mode}>
      <Box className={SkillsCss.container}>
        <Box className={SkillsCss.headingBox}>
          <h1 className={SkillsCss.heading} data-theme={mode}>
            Technologies, I have worked with
            <ImportantDevicesOutlinedIcon
              fontSize="larger"
              className={SkillsCss.headingIcon}
            />
          </h1>
        </Box>
        <Box
          flexWrap="wrap"
          justifyContent="space-evenly"
          gap={5}
          className={SkillsCss.skillBox1}
        >
          {skillsData.map((skill, index) => (
            <Box
              key={index}
              className={SkillsCss.imgBoxOuter}
              data-theme={mode}
            >
              <Box className={SkillsCss.imgBoxInner} data-theme={mode}>
                <Box className={SkillsCss.imgBoxFront}>
                  <img
                    src={
                      mode === "dark"
                        ? require(`../Assets/${skill.imgDark}`)
                        : require(`../Assets/${skill.imgLight}`)
                    }
                    alt={skill.name}
                    className={SkillsCss.img}
                  />
                  <Box>
                    <h1 className={SkillsCss.frontHeading} data-theme={mode}>
                      {skill.name}
                    </h1>
                  </Box>
                </Box>
                <Box className={SkillsCss.imgBoxBack}>
                  <h2 className={SkillsCss.backHeading} data-theme={mode}>
                    {skill.name}
                  </h2>
                  <p className={SkillsCss.backDescribe} data-theme={mode}>
                    {skill.description}
                  </p>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
