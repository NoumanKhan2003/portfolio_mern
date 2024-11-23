import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Error404 from "./Components/Error404";
import Footer from "./Components/Footer";
import ProjectShowSection from './Components/ProjectShowSection';
import careerup from "./Assests/careerup.mp4";
import portfolio_mern from './Assests/portfolioVideo.mp4'
import { ModeProvider } from "./Components/ModeContext";
function App() {
  return (
    <ModeProvider>
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />}>

          <Route index element={<ProjectShowSection 
            title="CareerUp (Job-Portal) (PHP Based)" 
            body1="CareerUp is the Web based platform to find personalised job according to your skills, locations and types of jobs required. You can find jobs internships and events in this portal. You also get some additional features like Automatic resume building using multiple templates." 
            body2="CareerUp is not only for the job seekers, but also for the employers to post easily the jobs and events in just a step." 
            project="CareerUp" 
            video={careerup} 
            numOfTech={6} 
            tech={["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"]}/>} />

            <Route path="careerup" element={<ProjectShowSection 
            title="CareerUp (Job-Portal) (PHP Based)" 
            body1="CareerUp is the Web based platform to find personalised job according to your skills, locations and types of jobs required. You can find jobs internships and events in this portal. You also get some additional features like Automatic resume building using multiple templates." 
            body2="CareerUp is not only for the job seekers, but also for the employers to post easily the jobs and events in just a step." 
            project="CareerUp" 
            video={careerup} 
            numOfTech={6} 
            tech={["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"]}/>} />

            <Route path="portfolio" element={<ProjectShowSection 
            title="Portfolio Website (MERN Stack)" 
            body1="Portfolio website is a personal website to showcase yourself to Employers and others." 
            body2="It is a website to show your skills, Projects you have done and Your contact information." project="Portfolio Website" 
            video={portfolio_mern}
            tech={["HTML", "CSS", "JavaScript", "React", "Material UI", "Bootstrap"]}/>} />
            
          </Route>

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
    </ModeProvider>
  );
}

export default App;
