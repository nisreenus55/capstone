import BookingForm from "./BookingForm";

const BookingPage = ({ resTime, state, dispatch }) => {
  return <BookingForm resTime={resTime} state={state} dispatch={dispatch} />;
};
export default BookingPage;
