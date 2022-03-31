import React from "react";
import "../project.css";
export default function TimeMaterials() {
  return (
    <div className="">
      <div className="Name">Hourly</div>
      <div className="main-paragrap">
        {" "}
        We need houly rates to track your project's billable amout
      </div>
      <div className="container2">
        <select className="input-border">
          <option className="input-border"> Project Hourly Rate</option>
        </select>
        <input className="input-border" placeholder="12,678.00" />
      </div>
      <div className=""> Budget</div>
      <div className="Paragraph">
        We need houly/rates to track your project's billable amout.
      </div>
      <div className="date-container">
        <select>
          <option> Hours per Person</option>
          <option>Day per Person</option>
        </select>
      </div>
      <input type="checkBox" /> Budget resets every month <br />
      <input type="checkBox" checked /> Send email alerts if project exceeds
      <span className="input-border"> 80.00</span>% of Budget
    </div>
  );
}
