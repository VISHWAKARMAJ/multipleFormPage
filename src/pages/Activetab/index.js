import React from "react";

const tabName = [
  {
    id: 1,
    Name: "Time & Materials"
  },
  {
    id: 2,
    Name: "Fixed Fee"
  },
  {
    id: 3,
    Name: "Non-Billable"
  }
];

export default function ActiveTab({ ActiveTab, setActiveTab }) {
  return (
    <div
      style={{
        display: "flex",
        margin: "10px",
        justifyContent: "space-around",
        border: "1px solid",
        fontSize: "26px",
        borderRadius: "4px"
      }}
    >
      {tabName.map((tab) => {
        return (
          <div>
            <div onClick={() => setActiveTab(`${tab.Name}`)}>
              <div style={{ backgroundColor: "blue" }}>{tab.Name} </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
