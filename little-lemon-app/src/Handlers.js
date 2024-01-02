export const handleDateChange = (e, dispatch, setInputValue, setResDate, formik) => {
  const dateValue = e.target.value;
  dispatch({
    type: "setDate",
    payload: { selectedDate: dateValue },
  });

  setInputValue("date", dateValue);
  setResDate(dateValue);
  document.getElementById("date").valueTest = dateValue;
  console.log(document.getElementById("date").valuetest);
    formik.handleChange(e);
    console.log('Date updated')
};

export  const handleSubmit = (event, formik,  isSubmitted ) => {
  event.preventDefault();
  formik.handleSubmit();
  document.getElementById("submitted-special").innerHTML = "submitted";
  document.getElementById("submitted-special").innerText = "submitted";
  isSubmitted = "submitted";
};