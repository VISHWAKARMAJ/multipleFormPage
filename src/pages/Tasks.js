import React from "react";
import TodoList from "../TodoList";

export default function Tasks({ prevStep, nextStep }) {
  return (
    <div>
      <div className="container">
        <div className="heading"> Tasks</div>
        <div className="Name">Add a task</div>
        <TodoList />
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
