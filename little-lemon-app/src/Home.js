import React from "react";
import Chefs from "./Chefs";
import Main from "./Main";
import Stars from "./Stars";

const Home = () => {
  return (
    <React.Fragment>
      <Main />
      <Stars />
      <Chefs />
    </React.Fragment>
  );
};
export default Home;
