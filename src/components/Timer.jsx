import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // import font awesome
import {  faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


const Timer = ({moodtoggle,setmoodtoggle}) => {
   // --------------------------- Timer functions ---------------------------
  const [seconds, setseconds] = useState(0)
  const [minutes, setminutes] = useState(0)
  const [hours, sethours] = useState(0)
  const [timerRunning, settimerRunning] = useState(false)
  const [chrono, setchrono] = useState(0) //this useState is to toggle between Timer and Countdown
  
  useEffect(() => {
    let timer
    if (timerRunning) {
      timer=setInterval(()=>{
        setseconds(seconds+1)
        if(seconds===59){
          setminutes(minutes+1)
          setseconds(0)
        }
        if(minutes===59){
          sethours(hours+1)
          setminutes(0)
          setseconds(0)
        }
      },1000)
    }
    else{
      clearInterval(timer)
    }
    return()=> clearInterval(timer)
  },[timerRunning,seconds,minutes,hours])
  const reset=()=>{
    settimerRunning(false)
    sethours(0)
    setminutes(0)
    setseconds(0)
  }

  // ---------------------------Countdown functions --------------------
  const [countdownseconds, setcountdownseconds] = useState(0)
  const [countdownminutes, setcountdownminutes] = useState(0)
  const [countdownhours, setcountdownhours] = useState(0)
  const [countdownRunnig, setcountdownRunnig] = useState(false)
  useEffect(() => {
    if (countdownRunnig) {
      const interval= setInterval(() => {
        if(countdownseconds>0||countdownminutes>0||countdownhours>0){
          if (countdownseconds===0) {
            if (countdownminutes>0) {
              setcountdownminutes(countdownminutes-1)
              setcountdownseconds(59)
            }
            else if (countdownhours>0) {
              setcountdownhours(countdownhours-1)
              setcountdownminutes(59)
              setcountdownseconds(59)
            }
            
          }else{
              setcountdownseconds(countdownseconds-1)
            }
        }
        else{
            clearInterval(interval)
          }
      }, 1000);
      return ()=>clearInterval(interval)
    }
    
  }, [countdownseconds,countdownRunnig,countdownminutes,countdownhours])
  return (
    <div className={(moodtoggle)? 'chrono darkchrono':'chrono'}>
      <div className='timerORcountdown'>
        <button onClick={()=>setchrono(0)} >Timer</button>
        <button onClick={()=>setchrono(1)} >Countdown</button>
      </div>
      {(chrono===0)?
      <div className='timer'>
        <h1>Timer</h1>
        <h2> { (hours<10)? "0"+hours:hours} : {(minutes<10)? "0"+minutes:minutes} : {(seconds<10)? "0"+seconds:seconds} </h2>
        <span>
          <button onClick={()=>settimerRunning(!timerRunning)} >{(timerRunning)?"Pause":"Start"}</button>
          <button onClick={reset} >Reset</button>
        </span>
      </div>:
      <div className="countdown">
        <h1>Countdown</h1>
        <span>
          <input type="number" name="" id="" value={countdownhours} onChange={(e)=>setcountdownhours(e.target.value)} />
          <input type="number" name="" id="" value={countdownminutes} onChange={(e)=>setcountdownminutes(e.target.value)} />
          <input type="number" name="" id="" value={countdownseconds} onChange={(e)=>setcountdownseconds(e.target.value)} />
        </span>
        <button onClick={()=>setcountdownRunnig(!countdownRunnig)} > {((!countdownRunnig))?'start':'stop'} </button>
      </div>}
      
    </div>
  )
}

export default Timer
