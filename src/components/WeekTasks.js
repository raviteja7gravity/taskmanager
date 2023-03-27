import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import Singletask from "./Singletask";
export default function WeekTasks() {
  const [dummy, setDummy] = useState([]);
  //const [R,setR] = useState()
  const getData = (triggerdata) => {
    fetch("http://localhost:8000/posts").then((alldata) =>
      alldata.json().then((x) => {
        setDummy(x);
      })
    );
  };
  const addfunc = (total, sum) => {
    return Number(total) + Number(sum);
  };
  let timeTotal = dummy.map((data) => data["timespent"]);
  console.log("times", timeTotal.reduce(addfunc, 0));
  return (
    <>
      <TaskForm onUpdation={getData} />

      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="bg-light p-3">
                <h4>Monday</h4>
                {dummy.map((data, index) => {
                  if (data["weekID"] == "1")
                    return (
                      <Singletask
                        key={index}
                        id={data["id"]}
                        timetaken={data["timespent"]}
                        task={data["task"]}
                        time={data["time"]}
                      />
                    );
                  else return "";
                })}
              </div>
            </div>
            <div className="col-md-2">
              <div className="bg-light p-3">
                <h4>Tuesday</h4>
                {dummy.map((data, index) => {
                  if (data["weekID"] == "2")
                    return (
                      <Singletask
                        key={index}
                        id={data["id"]}
                        task={data["task"]}
                        time={data["time"]}
                      />
                    );
                  else return "";
                })}
              </div>
            </div>
            <div className="col-md-2">
              <div className="bg-light p-3">
                <h4>Wednesday</h4>
                {dummy.map((data, index) => {
                  if (data["weekID"] == "3")
                    return (
                      <Singletask
                        key={index}
                        id={data["id"]}
                        task={data["task"]}
                        time={data["time"]}
                      />
                    );
                  else return "";
                })}
              </div>
            </div>
            <div className="col-md-2">
              <div className="bg-light p-3">
                <h4>Thursday</h4>
                {dummy.map((data, index) => {
                  if (data["weekID"] == "4")
                    return (
                      <Singletask
                        key={index}
                        id={data["id"]}
                        task={data["task"]}
                        time={data["time"]}
                      />
                    );
                  else return "";
                })}
              </div>
            </div>
            <div className="col-md-2">
              <div className="bg-light p-3">
                <h4>Friday</h4>
                {dummy.map((data, index) => {
                  if (data["weekID"] == "5")
                    return (
                      <Singletask
                        key={index}
                        id={data["id"]}
                        task={data["task"]}
                        time={data["time"]}
                      />
                    );
                  else return "";
                })}
              </div>
            </div>
            <div className="col-md-2">
              <div className="bg-light p-3">
                <h4>Saturday</h4>
                {dummy.map((data, index) => {
                  if (data["weekID"] == "6")
                    return (
                      <Singletask
                        key={index}
                        id={data["id"]}
                        task={data["task"]}
                        time={data["time"]}
                      />
                    );
                  else return "";
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="bg-warning text-dark p-3 rounded">
          <h1>Overall Productivity</h1>
        </div>
        <div className="bg-secondary text-white p-3 rounded">
          <h1>{timeTotal.reduce(addfunc, 0)} hrs</h1>
          
        </div>
      </div>
    </>
  );
}
