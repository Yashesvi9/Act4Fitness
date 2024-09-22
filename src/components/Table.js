import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import PopUpCalender from './PopUpCalender';
import Steps from './Steps';
import Activity from './Activity';

const stepsTaskId = 9999;

function Table({ getStepCount, getCalorieCount }) {

    const defaultTask = {
        taskId: "1",
        duration: 1,
        calBurnt: 0,
        timeOfLogging: (new Date().toTimeString())
    };

    const [calenderPopup, setCalenderPopup] = useState(false);
    const [stepLogPopup, setStepLogPopup] = useState(false);
    const [taskLogPopup, setTaskLogPopup] = useState(false);
    const [date, setDate] = useState(new Date());
    const [currentTaskData, setCurrentTaskData] = useState(defaultTask);
    const [listOfTasks, setListOfTasks] = useState(getDataFromLocalStorage());

    useEffect(() => {
        if (currentTaskData.calBurnt == 0)
            return;
        localStorage.setItem(date.toISOString().split("T")[0], JSON.stringify([...listOfTasks, currentTaskData]));
        setListOfTasks(prevTaskList => [...prevTaskList, currentTaskData]);
    }, [currentTaskData]);

    useEffect(() => {
        setListOfTasks(getDataFromLocalStorage());
    }, [date]);

    useEffect(() => {
        getCalorieCount(calculateTotalCalories());
        getStepCount(calculateTotalSteps());
    }, [listOfTasks]);


    function getDataFromLocalStorage() {
        // console.log("getting data from local storage");
        var parsed = [];
        // console.log("Trying");
        let localStorageData = localStorage.getItem(date.toISOString().split("T")[0]);
        // console.log("localstorgae:" + localStorageData);
        if (localStorageData != null)
            parsed = JSON.parse(localStorageData);
        return parsed;
    }

    function calculateTotalCalories() {
        let totalCaloriesBurnt = 0;
        // console.log("Looping over items");
        for (var i = 0; i < listOfTasks.length; i++) {
            // console.log(listOfTasks[i]);
            totalCaloriesBurnt += Number(listOfTasks[i].calBurnt);
        }
        // console.log("total calorie count: " + totalCaloriesBurnt);
        return totalCaloriesBurnt;
    }

    function calculateTotalSteps() {
        let totalSteps = 0;
        for (var i = 0; i < listOfTasks.length; i++) {
            if (listOfTasks[i].taskId === stepsTaskId)
                totalSteps += Number(listOfTasks[i].numSteps);
        }
        // console.log("total step count: " + totalSteps);
        return totalSteps;
    }

    function setStepTaskData(countValue, countDuration) {
        let taskLog = {}
        taskLog.taskId = stepsTaskId;
        taskLog.duration = Number(countDuration);
        taskLog.calBurnt = Number(countValue) * 0.04
        taskLog.taskName = "Walking/Running : " + countValue + " Steps";
        let currentTimestamp = new Date().toTimeString()
        taskLog.timeOfLogging = currentTimestamp
        taskLog.numSteps = Number(countValue)
        setCurrentTaskData(taskLog);
    }

    function showCalender() {
        setCalenderPopup(true);
    }

    function showStepLogger() {
        setStepLogPopup(true);
    }

    function showTaskLogger() {
        setTaskLogPopup(true);
    }

    return (
        <div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th><button onClick={showCalender} className='Btn'>{date.toLocaleDateString()}</button></th>

                        <th><button onClick={showStepLogger} className='Btn'>Log steps</button></th>
                        <th><button onClick={showTaskLogger} className='Btn'>Log activity</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Activity</th>
                        <th>Duration</th>
                        <th>Calories Burnt</th>
                        <th>Time</th>
                    </tr>
                    {listOfTasks[0] == null ? <tr /> : listOfTasks.map(function (item) {
                        return <tr>
                            <td>{item.taskName}</td>
                            <td>{item.duration}</td>
                            <td>{item.calBurnt}</td>
                            <td>{item.timeOfLogging}</td>
                        </tr>;
                    })}
                </tbody>
            </table>
            <PopUpCalender showPopup={calenderPopup} setShowPopup={setCalenderPopup} setTableDate={setDate} />
            <Steps showPopup={stepLogPopup} setShowPopup={setStepLogPopup} setStepData={setStepTaskData} />
            <Activity showPopup={taskLogPopup} setShowPopup={setTaskLogPopup} setTaskData={setCurrentTaskData} />
        </div>
    );
}

export default Table;