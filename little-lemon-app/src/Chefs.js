import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import chefa from "./Assets/Mario-Adrian-A.jpg";
import chefb from "./Assets/Mario-Adrian-b.jpg";

const Chefs = () => {
  return (
    <React.Fragment>
      <div className="test2">
        <section style={{ paddingLeft: "0px", marginLeft: "0px" }}>
          <h1 style={{ paddingLeft: "0px", marginLeft: "0px" }}>
            Little Lemon
          </h1>
          <article>
            <h2 style={{ paddingLeft: "0px", marginLeft: "0px" }}>Chicago</h2>
            <p style={{ paddingLeft: "0px", marginLeft: "0px" }}>
              We are a family owned Mediterranean restaurant,focused on
              traditional recipes served with a modern twist.
            </p>
          </article>
        </section>

        <aside
          style={{
            paddingLeft: "10px",
            marginLeft: "10px",
            paddingRight: "0px",
            marginRight: "0px",
          }}
        >
          <img
            src={chefa}
            alt="Little Lemon main"
            height="200px"
            width="200px"
            className="chefa"
          />
          <img
            src={chefb}
            alt="Little Lemon main"
            height="200px"
            width="200px"
            className="chefb"
          />
        </aside>
      </div>
    </React.Fragment>
  );
};

export default Chefs;
