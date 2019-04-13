import React from "react";
import dai from "../assets/images/dai.png";
import { changeState } from "../stores/navigation";
import PrimaryButton from "./PrimaryButton";
import ConvictionVoting from "./ConvictionVoting";

const milestones = [
  {
    title: "Milestone 1: Example of some milestone",
    subtext: "Campaign: Reforestation in Indonesia",
    currentValue: 2000,
    maxValue: 5000
  }
];

const globalparams = {
  alpha: 90,
  totaltime: 100
};

const convictions = [
  {
    name: "Griff",
    stakes: [{ time: 0, tokensstaked: 1000 }, { time: 50, tokensstaked: 0 }]
  },
  {
    name: "Jeff",
    stakes: [{ time: 30, tokensstaked: 1000 }, { time: 80, tokensstaked: 7000 }]
  }
];

const Milestones = () => (
  <div className="eco-milestones">
    <div className="navbar-wrapper">
      <ul className="navbar">
        <li className="selected">Active</li>
        <li>Paid</li>
        <li>Canceled</li>
        <li>Rejected</li>
      </ul>
      <PrimaryButton name={"Propose a Milestone"} />
    </div>

    <table>
      <tr>
        <td>Name</td>
        <td>Funding Progress</td>
        <td>Actions</td>
      </tr>
      {milestones.map(({ title, subtext, currentValue, maxValue }) => (
        <>
          <tr onClick={() => changeState("milestone")}>
            <td>
              <p className="title">{title}</p>
              <p className="subtext">{subtext}</p>
            </td>
            <td>
              <div className="progress-text">
                <img src={dai} />
                <p>{currentValue}</p>
                <p className="grey"> / {maxValue} xDAI</p>
              </div>
              <div className="progress-bar">
                <div>
                  <div
                    style={{ transform: `scaleX(${currentValue / maxValue})` }}
                  />
                </div>
              </div>
              <ConvictionVoting
                globalparams={globalparams}
                convictions={convictions}
              />
            </td>
            <td>
              <PrimaryButton name="Donate xDAI" showDai />
            </td>
          </tr>
        </>
      ))}
    </table>
  </div>
);

export default Milestones;
