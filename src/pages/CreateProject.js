import React from "react";
import "./project.css";
export default function CreatProject({ prevStep, nextStep }) {
  return (
    <div className="container">
      <div className="heading"> Create a project</div>
      <div className="main-container">
        <div className="Name">Project Name</div>
        <input type="text" className="input-border" />
        <div className="Name">clint Name</div>
        <div className="container2">
          <select className="input-border">
            <option className="input-border"> select clint</option>
          </select>
          <div className="or-text">or</div>
          <input className="input-border" placeholder="+ new clint" />
        </div>
        <div className="Name"> Date</div>
        <div className="date-container">
          <input className="input1 input-border" />
          <input className="input-border" />
        </div>
        <div className="Name"> Note</div>
        <div className="text-area">
          <textarea className="text-area input-border" />
        </div>
      </div>
      {/* <button onClick={prevStep}>prev</button> */}
      <div className="">
        <button className="nextbtn" onClick={nextStep}>
          next
        </button>
      </div>
    </div>
  );
}
