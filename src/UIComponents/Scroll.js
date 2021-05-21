import React from "react";
import "./Scroll.css";
import { Link } from "react-scroll";

const Scroll = () => {
  return (
    <>
      <div class="container">
        <div class="row justify-content-center">
          <Link to={"About"} spy={true} smooth={true}>
            <p class="text-center h2" style={{ cursor: "pointer" }}>
              About
            </p>
            <div class="scroll-down"></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Scroll;
