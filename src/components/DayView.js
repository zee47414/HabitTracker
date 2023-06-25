import React from "react";
import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitUnDone } from "../redux/features/habitslice";

const DayView = ({day}) => {
  // get today date
  const today=new Date();
  // get day from today date
  const todayDay=today.getDay();

  //  use dispatch hook a variable call dispatch
  const dispatch=useDispatch();

  // get date details from providing date
  const date=new Date(day.yyyy,day.mm,day.dd);

  // function call after click done 
  const markToDone=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    // call habit done action from reducer
    dispatch(habitDone(day.id));
  }
  

  // function call after click undone 
  const markToUnDone=()=>{
    // if(day.id>todayDay){
    //   alert("You cannot change your next days status")
    //   return;
    // }
    // call habit undone action from reducer
    dispatch(habitUnDone(day.id))
  }

  // function call after click none 
  const markToNone=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    // call habit none action from reducer
    dispatch(habitNone(day.id));
  }


  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center date-p">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <div className="btn-day-container">
      <div className={day.isDone === true ? "active" : "notdoneBtn"}>
      <img src="https://cdn-icons-png.flaticon.com/512/1633/1633830.png" onClick={markToDone} />
      </div>
      <div className={day.isDone === false ? "active" : "notdoneBtn"}>
      <img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"  onClick={markToUnDone} />
      </div>
      <div className={day.isDone === "" ? "active" : "notdoneBtn"}>
      <img src="https://cdn-icons-png.flaticon.com/128/56/56889.png" onClick={markToNone}  />
      </div>
      </div>
    </div>
  );
};

export default DayView;