import React, { useState } from "react";
import ActiveTab from "./Activetab";
import FixedFee from "./projectItem/FixedFee";
import NonBillable from "./projectItem/Non-Billable";
import TimeMaterials from "./projectItem/Time&Materials";

export default function ProjectType({ prevStep, nextStep }) {
  const [activeTab, setActiveTab] = useState("TimeMaterials");
  const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Time & Materials":
        return <TimeMaterials />;
      case "Fixed Fee":
        return <FixedFee />;
      case "Non-Billable":
        return <NonBillable />;
      default:
        return <TimeMaterials />;
    }
  };
  return (
    <div>
      {" "}
      <div className="container">
        <div className="main-heading"> Project Type</div>
        <div className="">
          <div className="main-paragrap">
            Don't panic:- You can also customize this types in settings
          </div>
          <div>
            <ActiveTab activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
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
