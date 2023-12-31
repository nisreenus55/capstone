import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import "./App.css";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
});
const CustomerDetails = ({ state, dispatch }) => {
  const [validEmail, setValidEmail] = useState(null);
  const [formData, setFormData] = useState({
    resDate: "",
    resTime: "",
    occasion: "",
    guests: "",
    special: "",
  });

  const handleOnSubmit = (values) => {

  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleNameChange = (e) => {
    dispatch({
      type: "setName",
      payload: { name: e.target.value },
    });
    setInputValue("name", e.target.value);
    formik.handleChange(e);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    const emailRegExp =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const isValid = emailValue.length === 0 || emailRegExp.test(emailValue);
    setValidEmail(isValid);
    dispatch({
      type: "setEmail",
      payload: { email: e.target.value },
    });
    setInputValue("email", e.target.value);
    formik.handleChange(e);
    e.target.className = isValid && !formik.errors.email ? "valid" : "invalid";
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
        onSubmit={formik.handleSubmit}
      >
        <h2>Booking Now: Customer Data</h2>
        <p className="selected">
          Available Time : {state ? state.selectedTime : ""}
        </p>
        <p className="selected">
          Selected Date : {state ? state.selectedDate : ""}
        </p>

        <label htmlFor="name" className="required">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={handleNameChange}
          onBlur={formik.handleBlur}
        />

        <div className="validDiv">
          {formik.errors.name ? (
            <small className="invalidDiv">{formik.errors.name}</small>
          ) : null}
        </div>

        <label htmlFor="phone" className="inputLabel">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="888-525-5656"
          id="phone"
          name="phone"
          onChange={handleChange}
        />
        <label htmlFor="email" className="required">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={handleEmailChange}
          onBlur={formik.handleBlur}
        />

        <div className="validDiv">
          {formik.errors.email && !!formik.touched.email ? (
            <small className="invalidDiv">{formik.errors.email}</small>
          ) : !validEmail && !!formik.touched.email ? (
            <small className="invalidDiv">wrong Email format</small>
          ) : null}
        </div>

        <label htmlFor="credit" className="inputLabel">
          Credit Card
        </label>
        <textarea
          placeholder="1234567891012"
          id="credit"
          name="credit"
          onChange={handleChange}
        />
        <button
          className="btn"
          aria-label="Confirm"
        >
          {Object.keys(formik.values.name).length > 0 &&
          Object.keys(formik.values.email).length > 0 &&
          !!validEmail ? (
            <Link
              to={
                Object.keys(formik.values.name).length === 0 ||
                Object.keys(formik.values.email).length === 0
                  ? ""
                  : "/confirmedBooking"
              }
              style={{ color: "black" }}
            >
              {Object.keys(formik.values.name).length > 0 &&
              Object.keys(formik.values.email).length > 0
                ? "Confirm Your reservation"
                : "Please enter required data"}
            </Link>
          ) : (
            <span style={{ color: "black", fontSize: "15px" }}>
              Confirm Your reservation
            </span>
          )}
        </button>
      </form>
    </React.Fragment>
  );
};

export default CustomerDetails;
