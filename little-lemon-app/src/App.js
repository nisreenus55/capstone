import React, { useState, useReducer, useEffect } from "react";

import About from "./About";
import "./App.css";
import BookingPage from "./BookingPage";
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";
import CustomerDetails from "./CustomerDetails";
import TimesRow from "./TimesRow";
import useFetchedData from "./useFetchedData";

function App() {
  const [data, setData] = useState([]);
  const [confirmed, setConfirmed] = useState(null);
  const [reserved, setReserved] = useState(null);

  useEffect(() => {
    const date = state.selectedDate; //"2023-11-30";
  });

  useEffect(() => {
    setData(["17:00", "18:00", "19:00", "20:00", "21:00"])
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      dispatch({
        type: "setTimes",
        payload: { times: data },
      });
    }
    else
      console.log('no data')
  }, [data]);

  const availableTimes = {
    time: data,
    selectedTime: "17:00",
    selectedDate: "2023-11-30",
    name: "",
    email: "",
  };

  function checkURLchange() {
    setConfirmed(window.location.pathname === "/confirmedBooking");
    setReserved(window.location.pathname === "/customerDetails");
  }
  setInterval(checkURLchange, 1000);

  const updateTimes = (state, action) => {
    if (action.type === "set") {
      return {
        ...state,
        selectedTime: action.payload.selectedTime,
      };
    } else if (action.type === "setDate") {
      return {
        ...state,
        selectedDate: action.payload.selectedDate,
      };
    } else if (action.type === "setName") {
      return {
        ...state,
        name: action.payload.name,
      };
    } else if (action.type === "setEmail") {
      return {
        ...state,
        email: action.payload.email,
      };
    } else if (action.type === "setTimes") {
      return {
        ...state,
        time: action.payload.times,
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(updateTimes, availableTimes);

  useFetchedData(state.selectedDate);

  return (
    <React.Fragment>
      <Nav />
      {!(confirmed || reserved) && (
        <div data-testid="times-row">
          <TimesRow times={state.time} dispatch={dispatch} />
        </div>
      )}
      <div>
        <Routes data-testid="route">
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/reservation"
            element={<BookingPage state={state} dispatch={dispatch} />}
          />
          <Route
            path="/confirmedBooking"
            element={<ConfirmedBooking state={state} dispatch={dispatch} />}
          />
          <Route
            path="/customerDetails"
            element={<CustomerDetails state={state} dispatch={dispatch} />}
          />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
