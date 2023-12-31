import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import "./App.css";
import { useCallback } from "react";

const schema = yup.object().shape({
  date: yup.string().required(),
});

const BookingForm = ({ resTime, dispatch, state }) => {
    const [validdate, setValidDate] = useState(null);

  const [formData, setFormData] = useState({
    date: "",
    resTime: "",
    occasion: "",
    guests: "",
    special: "",
  });

  const [date, setResDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [special, setSpecial] = useState("");

  const handleOnSubmit = (values) => { };
  
  const formik = useFormik({
    initialValues: {
      date: "",
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });
  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  const handleDateChange = (e) => {
        dispatch({
          type: "setDate",
          payload: { selectedDate: e.target.value },
        });

    setInputValue("date", e.target.value);
        setResDate(e.target.value);

    formik.handleChange(e);
    // formik.handleBlur(e);
  };
  // const handleDateChange1 = (e) => {
  //   setResDate(e.target.value);
  //   dispatch({ type: "setDate", payload: { selectedDate: e.target.value } });
  // };

  const handleSpecialChange = (e) => {
    setSpecial(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };
console.log(formik.errors)
  return (
    <React.Fragment>
      <form
        style={{
          display: "grid",
          maxWidth: "400px",
          gap: "1px",
          padding: "10px 0px 15px",
          margin: "0px",
        }}
        // onSubmit={handleSubmit}
        onSubmit={formik.handleSubmit}
      >
        <h2>Book Now</h2>
        <p className="selected">
          Selected Time : {state ? state.selectedTime : ""}
        </p>

        <label htmlFor="res-date" className="required">
          Choose date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          style={{ fontFamily: "auto" }}
          onChange={handleDateChange}
          value={formik.values.date}
          onBlur={formik.handleBlur}
        />
        <div className="validDiv">
          {formik.errors.date ? (
            <small className="invalidDiv">{formik.errors.date}</small>
          ) : null}
        </div>
        <label htmlFor="guests" className="book-label">
          Number of guests
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          style={{ fontFamily: "auto" }}
          onChange={handleGuestsChange}
        />
        <label htmlFor="occasion" className="book-label">
          Occasion
        </label>
        <select id="occasion" name="occasion" onChange={handleOccasionChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <label htmlFor="special" className="book-label">
          Special Requirements
        </label>
        <textarea
          placeholder="Special Requirements"
          id="special"
          name="special"
          onChange={handleSpecialChange}
        />
        <button className="btn" aria-label="reservation">
          {Object.keys(formik.values.date).length > 0 ? (
            <Link to="/customerDetails" style={{ color: "black" }}>
              Make Your reservation
            </Link>
          ) : (
            <span style={{ color: "black", fontSize: "15px" }}>
              Make Your reservation
            </span>
          )}
        </button>
      </form>
    </React.Fragment>
  );
};

export default BookingForm;