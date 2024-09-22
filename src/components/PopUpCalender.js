import React, { useState } from 'react';
import Calender from 'react-simple-calender';
import "./css/popup.css"
import { message } from 'antd';

function PopUpCalender(props) {

  const [popupDate, setPopupDate] = useState(new Date());
  return (
    props.showPopup ?
    <div className="popUp">
        <div>
            <button className="close-btn" onClick={()=> {props.setShowPopup(false);props.setTableDate(popupDate);}}>Select</button>
            <button className="close-btn" onClick={()=> {props.setShowPopup(false);}}>Close</button>
        </div>
        <Calender multiselect={false} onChange={(params)=> {setPopupDate(params.date);}} />
    </div> : ""
  )
}

export default PopUpCalender;