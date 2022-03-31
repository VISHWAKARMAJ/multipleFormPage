import React from "react";
import TodoList from "../TodoList";

export default function Team({ prevStep, nextStep }) {
  return (
    <div>
      <div className="container">
        <div className="heading"> Team</div>
        <div className="Name">Invite or Add a person</div>
        <TodoList />
        <button className="prevbtn" onClick={prevStep}>
          prev
        </button>
        <button className="nextbtn" onClick={nextStep}>
          submit
        </button>
      </div>
    </div>
  );
}
