import React from 'react';
import { useState } from 'react';
import ActivityData from "../db/mets.json"
import "./css/popUpForm.css"
function Activity({showPopup, setShowPopup, setTaskData}) {
  const [task, setTask] = useState("1");
  const [duration, setDuration] = useState(0);

  function setTaskLog()
  {
    let taskLog = {}
    taskLog.taskId = task;
    taskLog.duration = Number(duration);
    let activityData = ActivityData.filter(a => a.id == task);
    let userWeight = Number(JSON.parse(localStorage.getItem("userStats")).weight);
    let activityName = activityData[0].activity + "-" + activityData[0].motion
    let currentTimestamp = new Date().toTimeString()
    // console.log("Activity Log")
    // console.log("User weight: " + userWeight);
    // console.log("activity id:" + task);
    // console.log("activity name:" + activityName);
    // console.log(activityData);
    // console.log(taskLog);
    taskLog.taskName = activityName;
    taskLog.calBurnt = activityData[0].met * duration * userWeight;
    taskLog.timeOfLogging = currentTimestamp;
    taskLog.numSteps = 0
  
    setTaskData(taskLog);
  }

  return (
    showPopup ?
    <div className='popUpForm'>
       <form>
        <label>Select task done 
       <select onChange={(event)=>{setTask(event.target.value)}}>{ActivityData.map(function(item) {
        return <option value={item.id}>{item.activity} - {item.motion}</option>;
    })}</select>
      </label>
      <br/><br/>
<label>Enter duration:
        <input 
          type="number" 
          name="duration" 
          value={duration}
          onChange={(event)=>setDuration(event.target.value)}
        />
</label>
    </form>
    <div>
            <button className="close-btn" onClick={()=> {setShowPopup(false);setTaskLog();}}>Submit</button>
            <button className="close-btn" onClick={()=> {setShowPopup(false);}}>Close</button>
    </div>
    </div> : ""
  )
}
export default Activity;
