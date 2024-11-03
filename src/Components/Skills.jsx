import React from "react";
import SkillsCss from "../Css/Skill.module.css";
const Skills = () => {
  return (
    <div className={SkillsCss.wrapper}>
      <div className={SkillsCss.container}>
        <div className={SkillsCss.headingDiv}>
          <h1 className={SkillsCss.heading}>
            Technologies, I have worked with
          </h1>
        </div>
        <div className={SkillsCss.skilldiv1}>
          <div className={SkillsCss.imgDivOuter}>
            <div className={SkillsCss.imgdivInner}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={require("../Assests/react.png")}
                  alt="React"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.h1}>ReactJs</h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading}>ReactJs</h2>
                <p className={SkillsCss.backDescribe}>
                  Used for building dynamic UIs and Single page WebApps.
                  <br/>
                  Prepared this project with React Library/Framework
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter}>
            <div className={SkillsCss.imgdivInner}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={require("../Assests/nodejs.png")}
                  alt="nodejs"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.h1}>NodeJs</h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading}>NodeJs</h2>
                <p className={SkillsCss.backDescribe}>
                  Its a Server-side JavaScript with Node.js used for server side
                  technology.
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter}>
            <div className={SkillsCss.imgdivInner}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={require("../Assests/express.png")}
                  alt="express"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.h1}>ExpressJs</h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading}>ExpressJs</h2>
                <p className={SkillsCss.backDescribe}>
                  Fast web framework for Node.js.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={SkillsCss.skilldiv2}>
          <div className={SkillsCss.imgDivOuter}>
            <div className={SkillsCss.imgdivInner}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={require("../Assests/mongodb.png")}
                  alt="mongodb"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.h1}>MongoDb</h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading}>MongoDb</h2>
                <p className={SkillsCss.backDescribe}>
                  NoSQL database for modern apps used in MERN Stack.
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter}>
            <div className={SkillsCss.imgdivInner}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={require("../Assests/js.png")}
                  alt="Js"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.h1}>JavaScript</h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading}>JavaScript</h2>
                <p className={SkillsCss.backDescribe}>
                  The language of the Client Side technology.
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter}>
            <div className={SkillsCss.imgdivInner}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={require("../Assests/html.jpg")}
                  alt="html"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.h1}>HTML</h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading}>HTML</h2>
                <p className={SkillsCss.backDescribe}>
                  Markup language for structuring web content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={SkillsCss.skilldiv3}>
          <div className={SkillsCss.imgDivOuter}>
            <div className={SkillsCss.imgdivInner}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={require("../Assests/css.jpg")}
                  alt="css"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.h1}>CSS</h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading}>CSS</h2>
                <p className={SkillsCss.backDescribe}>
                  Used for Styling web pages with CSS
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter}>
            <div className={SkillsCss.imgdivInner}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={require("../Assests/bootstrap.jpg")}
                  alt="Bootstrap"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.h1}>BootStrap</h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading}>BootStrap</h2>
                <p className={SkillsCss.backDescribe}>
                  Responsive framework of CSS for web designing.
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter}>
            <div className={SkillsCss.imgdivInner}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={require("../Assests/php.png")}
                  alt="Php"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.h1}>PHP</h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading}>PHP</h2>
                <p className={SkillsCss.backDescribe}>
                  Server-side scripting language used for connecting to server.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={SkillsCss.skilldiv4}>
          <div className={SkillsCss.imgDivOuter}>
            <div className={SkillsCss.imgdivInner}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={require("../Assests/mysql.png")}
                  alt="mysql"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.h1}>MySQL</h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading}>MySQL</h2>
                <p className={SkillsCss.backDescribe}>
                  Relational database management system used by Php language.
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter}>
            <div className={SkillsCss.imgdivInner}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={require("../Assests/c++.jpg")}
                  alt="c++"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.h1}>C++</h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading}>C++</h2>
                <p className={SkillsCss.backDescribe}>
                  Powerful programming language used for various types of
                  functions.
                </p>
              </div>
            </div>
          </div>
          <div className={SkillsCss.imgDivOuter}>
            <div className={SkillsCss.imgdivInner}>
              <div className={SkillsCss.imgDivFront}>
                <img
                  src={require("../Assests/github.png")}
                  alt="github"
                  className={SkillsCss.img}
                />
                <h1 className={SkillsCss.h1}>GitHub</h1>
              </div>
              <div className={SkillsCss.imgDivBack}>
                <h2 className={SkillsCss.backHeading}>GitHub</h2>
                <p className={SkillsCss.backDescribe}>
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
