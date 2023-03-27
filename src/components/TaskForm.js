import React, { useState, useEffect } from "react";

export default function TaskForm(props) {
  const [alldata,setAllData] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      weekID: e.target[0].value,
      task: e.target[1].value,
      time: e.target[2].value,
      timespent: e.target[3].value,
    };
    fetch('http://localhost:8000/posts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    }).then(rsp=>{setAllData(!alldata)}).catch((e) => console.log(e + "Oops!!"));
    
  }

  useEffect(()=>{props.onUpdation(alldata)},[alldata])

  return (
    <>
      <form className="bg-warning form-group p-3 m-3 d-flex justify-content-around" onSubmit={submitHandler} method="post">
        <select>
          <option value="">Select a week...</option>
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
          <option value="7">Sunday</option>
        </select>
        <label>Task Name:
        <input type="text" id="task-name" name="taskName" required /></label>
        <label>Time Duration:
        <input type="number" id="time-duration" name="timeDuration" required /></label>
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
