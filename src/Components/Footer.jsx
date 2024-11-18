import React ,{useContext} from 'react';
import FooterCss from '../Css/Footer.module.css';
import { SocialIcon } from 'react-social-icons';
import {ModeContext} from "./ModeContext";

const Footer = () => {
  const { mode } = useContext(ModeContext);
  return (
    <div className={FooterCss.container} data-theme={mode}>
        <div className={FooterCss.main}>
           <div className={FooterCss.about}>
            <h1 className={FooterCss.heading} data-theme={mode}>
                Full-Stack Web Developer
            </h1>
            <p className={FooterCss.para} data-theme={mode}>My goal is to deliver seamless user experiences while continuously learning and adapting to new technologies. Let's connect and build something amazing together!</p>
        </div>
        <div className={FooterCss.icons}>
        <SocialIcon url="mailto:noumanyt2003@gmail.com" className={FooterCss.icon}/>
        <SocialIcon url="https://www.linkedin.com/in/nouman-khan-95923a256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={FooterCss.icon}/>
        <SocialIcon url="https://github.com/NoumanKhan2003" className={FooterCss.icon}/>
        <SocialIcon url="https://www.instagram.com/nouman_khan_innocent?igsh=MTE2NGRsYW84OGF2Mg==" className={FooterCss.icon}/>
        </div>
        </div>
    </div>
  )
}

export default Footer