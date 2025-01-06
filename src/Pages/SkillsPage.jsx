import React from "react";
import SkillsCss from "../Css/Skill.module.css";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import { useContext } from "react";
import { ModeContext } from "../Components/ModeContext";
const Skills = () => {
  const { mode } = useContext(ModeContext);
  return (
    <div className={SkillsCss.wrapper} data-theme={mode}>
      <div className={SkillsCss.container}>
        <div className={SkillsCss.headingDiv}>
          <h1 className={SkillsCss.heading} data-theme={mode}>
            Technologies, I have worked with
            <ImportantDevicesOutlinedIcon
              fontSize="larger"
              className={SkillsCss.headingIcon}
            />
          </h1>
        </div>
        <div className={SkillsCss.skilldiv1}>
          <div className={SkillsCss.imgDivOuter} data-theme={mode}>
            <div className={SkillsCss.imgdivInner} data-theme={mode}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={
                    mode === "dark"
                      ? require("../Assests/reactjsDark.png")
                      : require("../Assests/react.png")
                  }
                  alt="React"
                  className={SkillsCss.img}
                />{" "}
                <div>
                  <h1 className={SkillsCss.frontHeading} data-theme={mode}>
                    ReactJs
                  </h1>
                </div>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading} data-theme={mode}>
                  ReactJs
                </h2>
                <p className={SkillsCss.backDescribe} data-theme={mode}>
                  Used for building dynamic UIs and Single page WebApps.
                  <br />
                  Prepared this project with React Library/Framework
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter} data-theme={mode}>
            <div className={SkillsCss.imgdivInner} data-theme={mode}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={
                    mode === "dark"
                      ? require("../Assests/nodejsDark.png")
                      : require("../Assests/nodejs.png")
                  }
                  alt="nodejs"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.frontHeading} data-theme={mode}>
                  NodeJs
                </h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading} data-theme={mode}>
                  NodeJs
                </h2>
                <p className={SkillsCss.backDescribe} data-theme={mode}>
                  Its a Server-side JavaScript with Node.js used for server side
                  technology.
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter} data-theme={mode}>
            <div className={SkillsCss.imgdivInner} data-theme={mode}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={
                    mode === "dark"
                      ? require("../Assests/expressDark.png")
                      : require("../Assests/express.png")
                  }
                  alt="express"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.frontHeading} data-theme={mode}>
                  ExpressJs
                </h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading} data-theme={mode}>
                  ExpressJs
                </h2>
                <p className={SkillsCss.backDescribe} data-theme={mode}>
                  Fast web framework for Node.js.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={SkillsCss.skilldiv2}>
          <div className={SkillsCss.imgDivOuter} data-theme={mode}>
            <div className={SkillsCss.imgdivInner} data-theme={mode}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={
                    mode === "dark"
                      ? require("../Assests/mongodbDark.png")
                      : require("../Assests/mongodb.png")
                  }
                  alt="mongodb"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.frontHeading} data-theme={mode}>
                  MongoDb
                </h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading} data-theme={mode}>
                  MongoDb
                </h2>
                <p className={SkillsCss.backDescribe} data-theme={mode}>
                  NoSQL database for modern apps used in MERN Stack.
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter} data-theme={mode}>
            <div className={SkillsCss.imgdivInner} data-theme={mode}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={
                    mode === "dark"
                      ? require("../Assests/jsDark.jpg")
                      : require("../Assests/js.png")
                  }
                  alt="Js"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.frontHeading} data-theme={mode}>
                  JavaScript
                </h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading} data-theme={mode}>
                  JavaScript
                </h2>
                <p className={SkillsCss.backDescribe} data-theme={mode}>
                  The language of the Client Side technology.
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter} data-theme={mode}>
            <div className={SkillsCss.imgdivInner} data-theme={mode}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={
                    mode === "dark"
                      ? require("../Assests/htmlDark.jpg")
                      : require("../Assests/html.jpg")
                  }
                  alt="html"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.frontHeading} data-theme={mode}>
                  HTML
                </h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading} data-theme={mode}>
                  HTML
                </h2>
                <p className={SkillsCss.backDescribe} data-theme={mode}>
                  Markup language for structuring web content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={SkillsCss.skilldiv3}>
          <div className={SkillsCss.imgDivOuter} data-theme={mode}>
            <div className={SkillsCss.imgdivInner} data-theme={mode}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={
                    mode === "dark"
                      ? require("../Assests/cssDark.jpg")
                      : require("../Assests/css.jpg")
                  }
                  alt="css"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.frontHeading} data-theme={mode}>
                  CSS
                </h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading} data-theme={mode}>
                  CSS
                </h2>
                <p className={SkillsCss.backDescribe} data-theme={mode}>
                  Used for Styling web pages with CSS
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter} data-theme={mode}>
            <div className={SkillsCss.imgdivInner} data-theme={mode}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={
                    mode === "dark"
                      ? require("../Assests/bootstrapDark.webp")
                      : require("../Assests/bootstrap.jpg")
                  }
                  alt="Bootstrap"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.frontHeading} data-theme={mode}>
                  BootStrap
                </h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading} data-theme={mode}>
                  BootStrap
                </h2>
                <p className={SkillsCss.backDescribe} data-theme={mode}>
                  Responsive framework of CSS for web designing.
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter} data-theme={mode}>
            <div className={SkillsCss.imgdivInner} data-theme={mode}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={
                    mode === "dark"
                      ? require("../Assests/phpDark.webp")
                      : require("../Assests/php.png")
                  }
                  alt="Php"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.frontHeading} data-theme={mode}>
                  PHP
                </h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading} data-theme={mode}>
                  PHP
                </h2>
                <p className={SkillsCss.backDescribe} data-theme={mode}>
                  Server-side scripting language used for connecting to server.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={SkillsCss.skilldiv4}>
          <div className={SkillsCss.imgDivOuter} data-theme={mode}>
            <div className={SkillsCss.imgdivInner} data-theme={mode}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={
                    mode === "dark"
                      ? require("../Assests/mysqlDark.jpg")
                      : require("../Assests/mysql.png")
                  }
                  alt="mysql"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.frontHeading} data-theme={mode}>
                  MySQL
                </h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading} data-theme={mode}>
                  MySQL
                </h2>
                <p className={SkillsCss.backDescribe} data-theme={mode}>
                  Relational database management system used by Php language.
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter} data-theme={mode}>
            <div className={SkillsCss.imgdivInner} data-theme={mode}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={
                    mode === "dark"
                      ? require("../Assests/cppdark.avif")
                      : require("../Assests/c++.jpg")
                  }
                  alt="c++"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.frontHeading} data-theme={mode}>
                  C++
                </h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading} data-theme={mode}>
                  C++
                </h2>
                <p className={SkillsCss.backDescribe} data-theme={mode}>
                  Powerful programming language used for various types of
                  functions.
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter} data-theme={mode}>
            <div className={SkillsCss.imgdivInner} data-theme={mode}>
              <div className={SkillsCss.imgDivFront} data-theme={mode}>
                <img
                  src={
                    mode === "dark"
                      ? require("../Assests/githubDark.jpg")
                      : require("../Assests/github.png")
                  }
                  alt="github"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.frontHeading} data-theme={mode}>
                  GitHub
                </h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading} data-theme={mode}>
                  GitHub
                </h2>
                <p className={SkillsCss.backDescribe} data-theme={mode}>
                  Used for Version control and collaboration with other
                  programmers.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
