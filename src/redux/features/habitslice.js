//import libraries
import { createSlice } from "@reduxjs/toolkit";
let id = 1;

//create a component 
export const habitSlice = createSlice({
  name: "habits",
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      const today=new Date();
      let day=today.getDate()-today.getDay();
      const month= today.getMonth();
      const year =today.getFullYear();
    
      //Create a habit to view days
      const habit = {
        id: id++,
        name: action.payload,
        weekLog: [
          {
            id: 0,
            day: "Sunday",
            dd:day,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 1,
            day: "Monday",
            dd:day+1,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 2,
            day: "Tuesday",
            dd:day+2,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 3,
            day: "Wednesday",
            dd:day+3,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 4,
            day: "Thursday",
            dd:day+4,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 5,
            day: "Friday",
            dd:day+5,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 6,
            day: "Saturday",
            dd:day+6,
            mm:month,
            yyyy:year,
            isDone: "",
          },
        ],
      };
      const tempHabits = [...state, habit];
      return tempHabits;
    },
      //Delete actions for habit
    deleteHabit: (state, action) => {
      const tempHabits = state.filter((habit) => habit.id !== action.payload);
      return tempHabits;
    },
      //Done action for habit
    habitDone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone=true;
        }
      }
      return tempHabits;
    },

    //notdone action for habit
    habitUnDone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone=false;
        }
      }
      return tempHabits;
    },
    //none or null action for habit
    habitNone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone="";
        }
      }
      return tempHabits;
  },
}});

// Action creators are generated for each case reducer function
export const { addHabit, deleteHabit,habitDone,habitUnDone,habitNone } = habitSlice.actions;

export default habitSlice.reducer;