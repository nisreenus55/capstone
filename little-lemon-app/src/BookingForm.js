import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import "./App.css";
import { useCallback } from "react";
import { handleSubmit } from "./Handlers";



const schema = yup.object().shape({
  date: yup.string().required(),
  special: yup.string().required(),
});

const BookingForm = ({ resTime, dispatch, state }) => {
  const [validdate, setValidDate] = useState(null);
  const [validDate, setValidDat] = useState(null);
  const [validGuests, setValidGuests] = useState(null);
  const [validOccassion, setValidOccassion] = useState(null);
  const [validSpecial, setValidSpecial] = useState(null);

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
  const [submitted, setSubmitted] = useState("");
  const [clicked, setClicked] = useState(null);

  const handleOnSubmit = (values) => {
  };
let isSubmitted;
  const formik = useFormik({
    initialValues: {
      date: "",
      special: "",
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

  const handleDateChange = (e) =>{
    const dateValue = e.target.value;
    dispatch({
      type: "setDate",
      payload: { selectedDate: dateValue },
    });

    setInputValue("date", dateValue);
    //setResDate(dateValue);
    //setValidDate(dateValue);

    document.getElementById("date").valueTest = dateValue;
    console.log(document.getElementById("date").valuetest);
    formik.handleChange(e);
    console.log("Date updated");
  }
  //   const handleDateChange = (e) => {
  //     const dateValue = e.target.value;
  //         dispatch({
  //           type: "setDate",
  //           payload: { selectedDate: dateValue },
  //         });

  //     setInputValue("date", dateValue);
  //         setResDate(dateValue);
  //     document.getElementById("date").valueTest = dateValue;
  // console.log(document.getElementById("date").valuetest);
  //     formik.handleChange(e);
  //   };

  function  handleSpecialChange (e) {
    setSpecial(e.target.value);
    setValidSpecial(dateValue);

    setInputValue("special", e.target.value);
    formik.handleChange(e);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
    setValidGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
    setValidOccassion(e.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   formik.handleSubmit();
  //   alert('submitted ' )
  //   console.log('submitted')
  //   document.getElementById("submitted-special").innerHTML = "submitted";
  //   document.getElementById("submitted-special").innerText = "submitted";
  //   isSubmitted = "submitted";
  //   alert('text : '+document.getElementById("submitted-special").innerText);
  // };

  let dateValue = document.getElementById("date")?.valuetest;
  let dateValue1 = document.getElementById("date")?.value;
  let validValue = dateValue || dateValue1;

  const handleTest = (e) => {
    const test = e.target.value;

    document.getElementById("date").valueTest = test;
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    if(!!validDate && !!validGuests && !!validOccassion && !!validSpecial)
      handleSubmit(e, formik, isSubmitted);
    setClicked(true);
  };

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
        onSubmit={handleSubmitData}
        data-testid="form"
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
          data-testid="book-date"
          placeholder="date"
          style={{ fontFamily: "auto" }}
          onChange={handleDateChange}
          value={formik.values.date}
          onBlur={formik.handleBlur}
          valuetest={(e) => e.target.valuetest}
        />
        {!validValue && (
          <div className="validDiv" data-testid="validDateDiv">
            {formik.errors.date && !!formik.touched.date ? (
              <small className="invalidDiv" data-testid="invalidDate">
                {formik.errors.date}
              </small>
            ) : null}
          </div>
        )}
        <label htmlFor="guests" className="required">
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
        <label htmlFor="occasion" className="required">
          Occasion
        </label>
        <select id="occasion" name="occasion" onChange={handleOccasionChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <label htmlFor="special" className="required">
          Special Requirements
        </label>
        <textarea
          placeholder="Special Requirements"
          id="special"
          name="special"
          data-testid="book-special"
          valuetest={(e) => e.target.valuetest}
          onChange={handleSpecialChange}
          value={formik.values.special}
          onBlur={formik.handleBlur}
        />
        <div className="validDiv" data-testid="validSpecialDiv">
          {formik.errors.special && !!formik.touched.special ? (
            <small className="invalidDiv" data-testid="invalidSpecial">
              {formik.errors.special}
            </small>
          ) : null}
        </div>
        <button
          className="book-btn"
          aria-label="On Click"
          onClick={handleSubmitData}
          data-testid="book-button"
          disabled1={
            Object.keys(formik.values.date).length === 0 &&
            Object.keys(formik.values.special).length === 0
          }
        >
          {formik.values.date &&
         formik.values.special  
         ? (
            //   Object.keys(formik.values.date).length > 0 &&
            // Object.keys(formik.values.special).length > 0 &&
            // Object.keys(formik.values.guests).length > 0 &&
            //     Object.keys(formik.values.occasion).length > 0
            <Link to="/customerDetails" className="book-link-enabled">
              Make Your reservation
            </Link>
          ) : (
            <span style={{ fontSize: "15px" }} className="book-link-disabled">
              Make Your reservation
            </span>
          )}
        </button>

        <span
          className="invalidDiv"
          data-testid="submitted-special"
          id="submitted-special"
          style={{ color: "white" }}
        ></span>
        {(!formik.values.date || !formik.values.special) &&
          //((!Object.keys(formik.values.date)) //||
          // Object.keys(formik.values.special).length < 0 ||
          // Object.keys(formik.values.guests).length < 0 ||
          // Object.keys(formik.values.occasion).length < 0
          !!clicked && (
            <span
              style={{ fontSize: "15px", color: "red" }}
              className="book-link-disabled"
            >
              Please, enter required information
            </span>
          )}
      </form>
    </React.Fragment>
  );
};

export default BookingForm;


