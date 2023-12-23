import './App.css';
import Chefs from "./Chefs";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import Stars from "./Stars";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Nav />
        <Main />
        <Stars />
        <Chefs />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
