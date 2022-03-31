import React from "react";

export default function ManageProject({ prevStep, nextStep }) {
  return (
    <div>
      <div className="container">
        <div className="main-heading"> Who can manage Project</div>
        <div className="main-paragrap">
          Don't panic - You can also customize this permissions in settings
        </div>
        <div className="small">
          <div className="span"> span </div>
          <div className="group">
            <div className="heading1">Everyone</div>
            <div className="paragrap">
              All users can now to see it,but guests cannot access the projects.{" "}
            </div>
          </div>
        </div>
        <div className="small">
          <div className="span"> span </div>
          <div className="group">
            <div className="heading1">Only Admin's</div>
            <div className="paragrap">Only admins can manage everything </div>
          </div>
        </div>
        <div className="small">
          <div className="span">span </div>
          <div className="group">
            <div className="heading1">Only to Specific people</div>
            <div className="paragrap">
              Only some specific people can able to see it{" "}
            </div>
          </div>
        </div>
        <button className="prevbtn" onClick={prevStep}>
          back
        </button>
        <button className="nextbtn" onClick={nextStep}>
          next
        </button>
      </div>
    </div>
  );
}
