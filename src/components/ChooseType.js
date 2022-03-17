import React from "react";
import { Link } from "react-router-dom";
import add from "../images/add.svg";

// Choose Test Type Component
const ChooseType = () => (
  <main className="type__page">
    <div className="page-header">
      <h2 className="page-header__title">Choose Test Type</h2>
    </div>
    <div className="type__boxes">
      <Link className="blood--addBox linkBox" to="/create/blood">
        <img className="box__logo" src={add} alt="Add" />
        <div className="button">
          <div className="button--text">
            <h4>Add Blood Test</h4>
          </div>
        </div>
      </Link>
      <Link className="liver--addBox linkBox" to="/create/liver">
        <img className="box__logo" src={add} alt="Add" />
        <div className="button">
          <div className="button--text">
            <h4>Add Liver Function Test</h4>
          </div>
        </div>
      </Link>
    </div>
  </main>
);

export default ChooseType;
