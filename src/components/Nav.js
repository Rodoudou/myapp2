import React from "react";
import "../App.css";

const Nav = () => {
  return (
    <>
      <div className="nav" style={backgroundColor}>
        <ul>
          <div className="li1">
            <li>
              <a href="#">Link1</a>
            </li>
            <li>
              <a href="#">Link2</a>
            </li>
            <li>
              <a href="#">Link3</a>
            </li>
          </div>

          <div>
            <li className="li2">
              <a href="#">Link4</a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Nav;
const backgroundColor = { backgroundColor: "#190D33" };
