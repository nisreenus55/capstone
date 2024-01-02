import React from "react";
import confirmImg from "./Assets/confirmation-1152155_640.webp";
import { Link } from "react-router-dom";

const ConfirmedBooking = ({ state }) => {
  return (
    <React.Fragment>
      <div className="grid-adjustable-columns-confirm">
        <section
          style={{
            paddingLeft: "0px",
            marginLeft: "0px",
            paddingRight: "0px",
            marginRight: "0px",
          }}
        >
          <article className="card-confirm">
            <img
              src={confirmImg}
              alt="confirm Img "
              height="100px"
              width="100px"
              className="confirm-image"
            />
            <div className="confirm">
              <h3 className="confirm">
                Congratulations {state ? state.name : ""}!
              </h3>
              <p>
                Your reservation is done on : {state ? state.selectedDate : ""}{" "}
                at : {state ? state.selectedTime : ""}. Please check you email{" "}
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {state ? state.email : ""}
                </span>{" "}
                for more details.
              </p>
            </div>

            <label className1="btn">
              <Link to="/" style1={{ color: "black" }} className="back">
                Back to Home
              </Link>
            </label>
          </article>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ConfirmedBooking;
