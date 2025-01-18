import React, { useContext } from "react";
import FooterCss from "../Css/Footer.module.css";
import { SocialIcon } from "react-social-icons";
import { ModeContext } from "./ModeContext";
import { Link as RouterLink } from "react-router-dom";
import {
  Tooltip,
  Box,
  Container,
  List,
  ListItem,
  Typography,
  Link,
} from "@mui/material";
import resume from "../Assets/ResumeNouman.pdf";
import marksheet from "../Assets/Nouman Marksheet.jpg";

const Footer = () => {
  const { mode } = useContext(ModeContext);
  return (
    <Container className={FooterCss.container} data-theme={mode}>
      <Box className={FooterCss.left}>
        <Box className={FooterCss.about}>
          <h1 className={FooterCss.heading} data-theme={mode}>
            Full-Stack Web Developer
          </h1>
          <p className={FooterCss.para} data-theme={mode}>
            My goal is to deliver seamless user experiences while continuously
            learning and adapting to new technologies. Let's connect and build
            something amazing together!
          </p>
        </Box>
        <Box className={FooterCss.icons}>
          <Tooltip title="E-Mail" placement="top" arrow>
            <SocialIcon
              url="mailto:noumanyt2003@gmail.com"
              className={FooterCss.icon}
            />
          </Tooltip>
          <Tooltip title="LinkedIn" placement="top" arrow>
            <SocialIcon
              url="https://www.linkedin.com/in/nouman-khan-95923a256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className={FooterCss.icon}
            />
          </Tooltip>
          <Tooltip title="GitHub" placement="top" arrow>
            <SocialIcon
              url="https://github.com/NoumanKhan2003"
              className={FooterCss.icon}
            />
          </Tooltip>
          <Tooltip title="Instagram" placement="top" arrow>
            <SocialIcon
              url="https://www.instagram.com/nouman_khan_innocent?igsh=MTE2NGRsYW84OGF2Mg=="
              className={FooterCss.icon}
            />
          </Tooltip>
        </Box>
      </Box>
      <Box className={FooterCss.right}>
        <List>
          <ListItem>
            <Typography variant="h4" data-theme={mode} className={FooterCss.linkHeading}>Quick Links</Typography>
          </ListItem>
          <ListItem className={FooterCss.listItems}>
            <Typography variant="h6">
              <Link href={resume} className={FooterCss.listItem} data-theme={mode} target="_blank" rel="noopener noreferrer">
                Resume
              </Link>
            </Typography>
          </ListItem>
          <ListItem className={FooterCss.listItems}>
            <Typography variant="h6">
              <Link href={marksheet} className={FooterCss.listItem} data-theme={mode} target="_blank" rel="noopener noreferrer">
                Marksheet
              </Link>
            </Typography>
          </ListItem>
          <ListItem className={FooterCss.listItems}>
            <Typography variant="h6">
              <RouterLink to="/projects" className={FooterCss.listItem} data-theme={mode}>Projects</RouterLink>
            </Typography>
          </ListItem>
          <ListItem className={FooterCss.listItems}>
            <Typography variant="h6">
              <RouterLink to="/contact" className={FooterCss.listItem} data-theme={mode}>Contacts</RouterLink>
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Footer;
