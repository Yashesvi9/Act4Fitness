import React from "react";
import { useState } from "react";
import { Typography } from "antd";
import ProgressBar from "./ProgressBar";
import Table from "./Table";
import { Link } from "react-router-dom";
import { Divider } from "antd";
const { Title } = Typography;

const Home = () => {
  const [stepCount, setStepCount] = useState(0);
  const [calBurnt, setCalBurnt] = useState(0);
  const [goalWeight, setgoalWeight] = useState(0);

  return (
    <div className="container">
      <div className="container-left">
        <span>
          <Table getStepCount={setStepCount} getCalorieCount={setCalBurnt}/>
        </span>
      </div>
      <div className="container-right">
      <Link to = "/StatForm"><span>
         <button className="btn1">Click here to enter your details</button>
        </span></Link>
        <Divider/>
       <h1 className="progressHeading"> Your progress </h1> 
       
        <ProgressBar label="Steps" value={stepCount} unit="" maxValue={10000}/>
        <ProgressBar label="Calories Burnt" unit="kCal" value={calBurnt} maxValue={5000}/>
        <ProgressBar label="Goal Weight" unit="%" value={goalWeight} maxValue={600}/> 
      </div>
    </div>
  );
};

export default Home;
