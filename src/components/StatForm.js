import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Divider } from "antd";

function StatForm () {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
  
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  useEffect(() => {
}, [inputs]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs);
    localStorage.setItem("userStats", JSON.stringify(inputs));
    navigate('/');
  }

  const current = new Date().toISOString().split("T")[0];
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <Divider/>
      <label>Enter your date of birth:
        <input
          type="date" 
          name="birthdate" 
          value={inputs.birthdate} 
          onChange={handleChange}
          max={current}
        />
        </label>
        <Divider/>
        <label>
          Enter your height(cms):
          <input className='row' type="number" name="height" value={inputs.height|| ""} onChange={handleChange}/>
        </label>
        <Divider/>
        <label>
          Enter your weight(kgs):
          <input name="weight" value={inputs.weight || ""} onChange={handleChange}/>
        </label>
        <Divider/>
        <label>
          What motivates you to loose your weight:
          <textarea type="text" name="textarea" value={inputs.textarea || ""} onChange={handleChange}/>
        </label>
        <Divider/>
        <label>
          Enter your weight goal(kgs):
          <input type="number" name="weightgoal" value={inputs.weightgoal || ""} onChange={handleChange}/>
        </label>
        <input  type="submit" />
    </form>
    
 )
  
}

export default StatForm;