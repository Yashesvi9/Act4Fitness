import React from 'react'
import { useState } from 'react';
import "./css/popUpForm.css"

function Steps({showPopup, setShowPopup, setStepData}) {
  const [steps, setSteps] = useState(0);
  const [stepDuration, setStepDuration] = useState(0);
  
  return (
    showPopup ?
    <div className='popUpForm'>
      <form>
        <label>Enter the number of steps:
              <input 
          type="number" 
          name="steps" 
          value={steps} 
          onChange={(event)=>{setSteps(event.target.value)}}
        />
</label>
<br/><br/>
<label>Enter duration:
        <input 
          type="number" 
          name="duration" 
          value={stepDuration}
          onChange={(event)=>setStepDuration(event.target.value)}
        />
</label>
    </form>
    <br/>
  <div>
          <button className="close-btn" onClick={()=> {setShowPopup(false);setStepData(steps, stepDuration);}}>Submit</button>
          <button className="close-btn" onClick={()=> {setShowPopup(false);}}>Close</button>
    </div>
    </div> : ""
  )
}

export default Steps