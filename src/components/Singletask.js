import React,{useState} from 'react'

export default function Singletask(props) {
    const [clicked,setClicked] = useState(false);
    const [time,setTime] = useState(props.timespent ? props.timespent : 0)

    const changeTime= (e)=>{
        setTime(e.target.value)
    }


   const ClickHandler= (e)=>{
        setClicked(true)
   }

   const uptime=(e)=>{
    e.preventDefault();
    //console.log(e)
    //setTime(e.target[0].value)
    const data = {
      id : props.id,
      timespent : e.target[0].value
    }
    fetch(`http://localhost:8000/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    }).then(rsp=>{rsp.json()}).catch((e) => console.log(e + "Oops!!"));
    setClicked(false);
    console.log(time)
   }

  return (
    <div className='container bg-primary m-1 text-white ' onClick={ClickHandler}>
   <div className="row p-2 ">{props.task}</div>
   {!clicked ? 
   <div className="row p-2 bg-success">{time} hrs spent <div className='fas fa-edit'></div></div> : 
   <form onSubmit={uptime}><input className="row p-2" value={time} onChange={changeTime}/>{time}<button type="submit">Ok</button></form>}
   <div className="row p-2">{props.time} hrs target</div>
   
</div>
  )
}
