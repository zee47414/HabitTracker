import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/features/habitslice";

const Navbar = ({ name }) => {
  const [visible,setVisible] = useState(false);
  // call use dispatch hook a variable call dispatch
  const dispatch=useDispatch();

  // change state acording time
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  // handling the form for adding a new habit
  function handleAddHabit(){
    setVisible(true);
  }
  
  // function for add habit and cancel
  const handleCancel=()=>{
    document.getElementById("habitName").value="";
    setVisible(false);
  }

  const handleSave=()=>{
    const habitName=document.getElementById("habitName").value;
    dispatch(addHabit(habitName));
    alert("Your habit added successfully");
    document.getElementById("habitName").value="";
  }

  return (
    <>
      <div className="navbar">
        <h3>
          {/* acording to time its shows morning,afternoon,evening and night */}
          {hour <= 12
            ? "Morning"
            : hour <= 17
            ? "Afternoon"
            : hour <= 21
            ? "Evening"
            : "Night"}
        </h3>
        <div className="right-nav">
          <h3>{name}</h3>
          <button onClick={handleAddHabit} className="add-btn">+ Add Habit</button>
        </div>
      </div>

      {/* modal for add habit form */}
          
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        {visible ?   <>
          <div className="outter-div-container">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="staticBackdropLabel">
                New Habit
              </h3>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                 <h4>NAME :</h4> 
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Enter habit name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="cancel-btn"
                data-bs-dismiss="modal"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button type="button" className="save-btn" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
        </>:null}  
       
      </div>
    </>
  );
};

export default Navbar;