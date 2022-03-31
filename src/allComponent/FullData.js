import React from "react";
import CreatProject from "../pages/CreateProject";
import ManageProject from "../pages/ManageProject";
import ProjectType from "../pages/ProjectType";
import Select from "../pages/select";
import Tasks from "../pages/Tasks";
import Team from "../pages/Team";
import { useState } from "react";
import Summited from "../pages/summited";

export default function FullData() {
  // const [input, email, pass] = useState([]);
  const [email, username, password, firstName, lastName, country] = useState();
  const values = { email, username, password, firstName, lastName, country };

  const [step, setStep] = useState(1);
  const data = () => {
    switch (step) {
      case 1:
        return (
          <CreatProject
            handleChange={handleChange}
            value={values}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <ManageProject
            handleChange={handleChange}
            value={values}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <ProjectType
            handleChange={handleChange}
            value={values}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 4:
        return (
          <Select
            handleChange={handleChange}
            value={values}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 5:
        return (
          <Tasks
            handleChange={handleChange}
            value={values}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 6:
        return (
          <Team
            handleChange={handleChange}
            value={values}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 7:
        return <Summited />; // never forget the default case, otherwise VS code would be mad!
      default:
        return;
    }
  };
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const nextStep = () => {
    if (step > 6) {
    } else {
      setStep(step + 1);
    }
  };
  const handleChange = (input) => (e) => {
    values({ [input]: e.target.value });
  };
  return (
    <div style={{}}>
      <div>{data()}</div>
    </div>
  );
}
