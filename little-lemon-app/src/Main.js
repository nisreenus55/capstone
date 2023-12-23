import * as React from "react";

import "./App.css";
import mainPicture from "./Assets/restauranfood.jpg";
import greekSalad from "./Assets/greek-salad.jpg";
import bruchetta from "./Assets/bruchetta.svg";
import lemonDessert from "./Assets/lemon-dessert.jpg";

const Main = () => {
  return (
    <React.Fragment>
      <main className="main">
        <div className="test2">
          <section style={{ padding: "0px", margin: "0px" }}>
            <h1 style={{ padding: "0px", margin: "0px" }}>Little Lemon</h1>
            <acrticle>
              <h2 style={{ paddingLeft: "0px", marginLeft: "0px" }}>Chicago</h2>
              <p style={{ paddingLeft: "0px", marginLeft: "0px" }}>
                We are a family owned Mediterranean restaurant,focused on
                traditional recipes served with a modern twist.
              </p>
              <button className="button">Reserve a Table</button>
            </acrticle>
          </section>

          <asides
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
          </asides>
        </div>
        <section className="test3">
          <h2 className="left">This week specials!</h2>
          <button className="btn">Online Menu</button>
        </section>
        <div className="grid-adjustable-columns">
          <section
            style={{
              paddingLeft: "0px",
              marginLeft: "0px",
              paddingRight: "0px",
              marginRight: "0px",
            }}
          >
            <article className="card">
              <img
                src={greekSalad}
                alt="greek salad "
                height="200px"
                width="200px"
                className="image"
              />
              <div className="price">
                <h3 className="food">Greek Salad</h3>
                <h2 className="foodPrice">$12.99</h2>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, and rosemary croutons.
              </p>
              <a href="#" className="order">
                Order a delivery
              </a>
            </article>
          </section>
          <section
            style={{
              paddingLeft: "0px",
              marginLeft: "0px",
              paddingRight: "0px",
              marginRight: "0px",
            }}
          >
            <article className="card">
              <img
                src={bruchetta}
                alt="greek salad "
                height="200px"
                width="200px"
                className="image"
              />
              <div className="price">
                <h3 className="food">Brushetta</h3>
                <h2 className="foodPrice">$12.99</h2>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <a href="#" className="order">
                Order a delivery
              </a>
            </article>
          </section>
          <section
            style={{
              paddingLeft: "0px",
              marginLeft: "0px",
              paddingRight: "0px",
              marginRight: "0px",
            }}
          >
            <article className="card">
              <img
                src={lemonDessert}
                alt="greek salad "
                height="200px"
                width="200px"
                className="image"
              />
              <div className="price">
                <h3 className="food">Lemon Dessert</h3>
                <h2 className="foodPrice">$12.99</h2>
              </div>
              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <a href="#" className="order">
                Order a delivery
              </a>
            </article>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};
export default Main;
