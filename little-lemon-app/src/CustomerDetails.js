import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaGooglePay } from "react-icons/fa";

import "./App.css";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  credit: yup.string().required(),
});

function phoneFormat(input) {
  // Strip all characters from the input except digits
  input = input.replace(/\D/g, '');
        
  // Trim the remaining input to ten characters, to preserve phone number format
  input = input.substring(0, 10);

  // Based upon the length of the string, we add formatting as necessary
  var size = input.length;
  if (size == 0) {
    input = input;
  } else if (size < 4) {
    input = '(' + input;
  } else if (size < 7) {
    input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6);
  } else {
    input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6) + ' - ' + input.substring(6, 10);
  }
  return input;
}

function creditFormat(input) {
  
  input = input.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  let matches = input.match(/\d{4,16}/g);
  let match = (matches && matches[0]) || "";
  let parts = [];
  for (let i = 0; i < match.length; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
  if (parts.length) {
    return parts.join("-");
  } else {
    return input;
  }
}
const CustomerDetails = ({ state, dispatch }) => {
  const [validEmail, setValidEmail] = useState(null);
  const [formData, setFormData] = useState({
    resDate: "",
    resTime: "",
    occasion: "",
    guests: "",
    special: "",
  });

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(null);
  const [validName, setValidName] = useState(null);
  const [validCredit, setValidCredit] = useState(null);

  const handleOnSubmit = (values) => {

  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      credit: ""
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

  const handleNameChange1 = (e) => {
    dispatch({
      type: "setName",
      payload: { name: e.target.value },
    });
    setInputValue("name", e.target.value);
    formik.handleChange(e);
  };

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    const nameRegExp = /^[a-zA-Z ]*$/;
    const isValid = nameValue.length > 0 && nameRegExp.test(nameValue);
    setValidName(isValid);
    dispatch({
      type: "setName",
        payload: { name: e.target.value },
    });
    setInputValue("name", e.target.value);
    formik.handleChange(e);
    e.target.className =
        isValid && !formik.errors.name ? "valid" : "invalid";
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
    e.target.className =
      isValid && !formik.errors.email ? "valid" : "invalid";
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    const isValid = phoneValue.length === 16
    setValidPhone(isValid);

    const formattedPhone = phoneFormat(phoneValue);
    setInputValue("phone", formattedPhone);
    document.getElementById("phone").value = formattedPhone;
    formik.handleChange(e);
    e.target.className = isValid && !formik.errors.phone ? "valid" : "invalid";
  };



  const handleCreditChange = (e) => {
    const creditValue = e.target.value;
    const creditRegExp = /[0-9]/;
    const isValid = creditValue.length ===19 && creditRegExp.test(creditValue);

    const formattedCredit = creditFormat(creditValue);
    setInputValue("credit", formattedCredit);
    document.getElementById("credit").value = formattedCredit;

    setValidCredit(isValid);
    formik.handleChange(e);
    e.target.className = isValid && !formik.errors.credit ? "valid" : "invalid";
  };
  
  const notAllRequiredFilled = Object.keys(formik.values.name).length === 0 ||
    Object.keys(formik.values.email).length === 0 ||
    Object.keys(formik.values.phone).length === 0 ||
    Object.keys(formik.values.credit).length === 0;
  
    const allRequiredFilled =
      Object.keys(formik.values.name).length > 0 &&
      Object.keys(formik.values.email).length > 0 &&
      Object.keys(formik.values.phone).length > 0 &&
      Object.keys(formik.values.credit).length > 0;

  return (
    <React.Fragment>
      <form
        style={{
          display: "grid",
          maxWidth: "400px",
          gap: "1px",
          padding: "10px 0px 15px",
          margin: "0px",
          position: "relative",
        }}
        onSubmit={formik.onSubmit}
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
          {formik.errors.name && !!formik.touched.name ? (
            <small className="invalidDiv">{formik.errors.name}</small>
          ) : !validName && !!formik.touched.name ? (
            <small className="invalidDiv">wrong name format </small>
          ) : null}
        </div>
        <label htmlFor="phone" className="required">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="Phone Number"
          id="phone"
          name="phone"
          maxLength="16"
          value={formik.values.phone}
          onChange={handlePhoneChange}
          onBlur={formik.handleBlur}
        />
        <div className="validDiv">
          {formik.errors.phone && !!formik.touched.phone ? (
            <small className="invalidDiv">{formik.errors.phone}</small>
          ) : !validPhone && !!formik.touched.phone ? (
            <small className="invalidDiv">wrong phone </small>
          ) : null}
        </div>
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
        <div
          // style={{
          //   position: "absolute",

          //   color: "gray",
          // }}
          className="inputWithIcon"
        >
          <label htmlFor="credit" className="required">
            Credit Card
          </label>

          <input
            type="text"
            maxLength="19"
            placeholderChar={"\u2000"}
            placeholder="Card Number"
            id="credit"
            name="credit"
            value={formik.values.credit}
            onChange={handleCreditChange}
            onBlur={formik.handleBlur}
            style={{ width: "95%" }}
          />
          {/*<i
            class="fa fa-user fa-lg"
            style={{
              position: "absolute",
              left1: "15px",
              top1: "40px",
              color: "black",
            }}
          ></i>

          <i class="fa fa-key fa-lg fa-fw" aria-hidden="true">
            {" "}
          </i>*/}

          <span
            style1={{
              position: "absolute",
              left1: "15px",
              top1: "40px",
              color: "black",
            }}
            className="icon"
          >
            <FaGooglePay
              size={30}

              //className="star"
            />
          </span>
        </div>
        <div className="validDiv">
          {formik.errors.credit && !!formik.touched.credit ? (
            <small className="invalidDiv">{formik.errors.credit}</small>
          ) : !validCredit && !!formik.touched.credit ? (
            <small className="invalidDiv">wrong credit </small>
          ) : null}
        </div>
        <button
          className="book-btn"
          aria-label="Customer Detail"
          style={{ marginTop: "20px" }}
        >
          {Object.keys(formik.values.name).length > 0 &&
          Object.keys(formik.values.email).length > 0 &&
          !!validEmail ? (
            <Link
              to={notAllRequiredFilled ? "" : "/confirmedBooking"}
              className="book-link-enabled"
            >
              Confirm Your reservation
            </Link>
          ) : (
            <span style={{ fontSize: "15px" }} className="book-link-disabled">
              Confirm Your reservation
            </span>
          )}
        </button>
      </form>
    </React.Fragment>
  );
};

export default CustomerDetails;
