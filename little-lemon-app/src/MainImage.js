import * as React from "react";
import mainPicture from "./Assets/restauranfood.jpg";
import "./App.css";

const MainImage = () => {
  return (
    <React.Fragment>
      <main className="main">
        <div className="test2">
          <section style={{ padding: "0px", margin: "0px" }}>
            <h1 style={{ padding: "0px", margin: "0px" }}>Little Lemon</h1>
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
              src={mainPicture}
              alt="Little Lemon main"
              height="200px"
              width="200px"
              className="imageMain"
            />
          </aside>
        </div>
      </main>
    </React.Fragment>
  );
};
export default MainImage;
