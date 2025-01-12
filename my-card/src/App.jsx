import React from "react";
import profilePic from "./assets/profile-pic.png";
import "./App.css";
function App() {
  return (
    <>
      <div className="container">
        <img src={profilePic} alt="profilepic" />
        <div className="matter">
          <h1>Poosirinty Nayakulu Hanish</h1>
          <h2>Front-end Software Engineer</h2>
          <h2>Skills</h2>
          <div className="left">
            <li>Python</li>
            <li>Javascript</li>
            <li>Java</li>
          </div>
          <div className="right">
            <li>C++</li>
            <li>React</li>
            <li>Git and Github</li>
          </div>
          <div className="links">
            <ul><li><a href="https://www.linkedin.com/in/hanish-p-03h/" target="blank" rel="noreferrer">Linkedin</a></li></ul>
            <ul><li><a href="https://github.com/hanishP3" rel="noreferrer"  target="blank">Github</a></li></ul>
            <ul><li><a href="https://x.com/hanish1dev " rel="noreferrer"  target="blank">Twitter</a></li></ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
