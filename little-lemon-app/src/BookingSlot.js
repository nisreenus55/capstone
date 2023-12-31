import React, { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const BookingSlot = () => {
  const [data, setData] = useState({});

  const availableTimes = {
    time: ["17:00", "18:00", "19:00", "20:00", "21:00"],
    selectedTime: "17:00",
  };
  const initializeTimes = () => {
    fetch(
      "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    initializeTimes();
    console.log(data);
  }, []);

  const updateTimes = (state, action) => {
    if (action.type === "set") {
      return { ...state, selectedTime: action.payload };
    }

    return state;
  };
  const [state, dispatch] = useReducer(updateTimes, availableTimes);

  const handleTimeChange = (e) => {
    dispatch({ type: "set", payload: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label for="resTime">Choose time</label>
        <select
          id="resTime"
          name="resTime"
          value1={state.time}
          onChange={handleTimeChange}
        >
          {state.time.map((t) => (
            <option>{t}</option>
          ))}
        </select>

        <button className="btn" aria-label="time">
          <Link
            to="/reservation"
            state={state}
            dispatch={dispatch}
            style={{ color: "black" }}
          >
            Select this Time
          </Link>
        </button>
      </form>
    </React.Fragment>
  );
};

export default BookingSlot;
