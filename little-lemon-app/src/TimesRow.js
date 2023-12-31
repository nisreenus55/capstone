import React from "react";
import RenderRows from "./RenderRows";
import "./App.css";

const TimesRow = ({ times, dispatch }) => {

  const handleClick = (time) => {
    dispatch({ type: "set", payload: { selectedTime: time } });
  };
  
  return (
    <React.Fragment>
      <div className="table-tr">
        <h2>Available Times</h2>
        <table className="table-tr">
          <tbody className="table-tr">
            {times.map((time, index) => {
              return (
                <RenderRows
                  time={time}
                  key={index}
                  handleClick={handleClick}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default TimesRow;
