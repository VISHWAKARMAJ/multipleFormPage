import React from "react";

export default function Select({ prevStep, nextStep }) {
  return (
    <div>
      {" "}
      <div className="container">
        <div className="heading"> Select a view</div>
        <div className="main-container">
          <div className="paragrap">
            You can also customize this view in settings
          </div>

          <div className="con">
            <div className="box">
              <div className="tag"> tag</div>
            </div>
            <div className="box">
              <div className="tag">tag</div>
            </div>
          </div>
          <div className="list">
            <div>List</div>
            <div>Board</div>
          </div>
        </div>
        <button className="prevbtn" onClick={prevStep}>
          prev
        </button>
        <button className="nextbtn" onClick={nextStep}>
          next
        </button>
      </div>
    </div>
  );
}
