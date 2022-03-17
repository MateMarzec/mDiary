import React from "react";
import { Link } from "react-router-dom";
import UserName from "./UserName";
import add from "../images/add.svg";
import view from "../images/view.svg";

// Home Component
const Home = () => (
  <main className="home__page">
    <div className="home__description">
      <h4>Good Morning,</h4>
      <h3>
        <UserName />
      </h3>
      <h4>How can we help?</h4>
    </div>
    <div className="home__boxes">
      <Link className="home--addBox linkBox" to="/create">
        <img className="box__logo" src={add} alt="Add" />
        <div className="button">
          <div className="button--text">
            <h4>Add Test Result</h4>
          </div>
        </div>
      </Link>
      <Link className="home--viewBox linkBox" to="/dashboard">
        <img className="box__logo" src={view} alt="Add" />
        <div className="button">
          <div className="button--text">
            <h4>View Previous Tests</h4>
          </div>
        </div>
      </Link>
    </div>
  </main>
);

export default Home;
