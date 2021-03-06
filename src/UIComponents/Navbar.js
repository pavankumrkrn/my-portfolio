import React from "react";
import "./navbar.css";
import { NavbarLi } from "./NavbarLi";

export const Navbar = (props) => {
  const [scr, setScrollState] = React.useState(false);

  React.useEffect(() => {
    let listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scr]);
  return (
    <nav
      className={
        scr
          ? "navbar navbar-expand-lg shd mb-3 mt-1 sticky-top active"
          : "navbar navbar-expand-lg mb-3 shd mt-1 sticky-top"
      }
    >
      <a className="navbar-brand text-white" href="#">
        Pavan K .
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars text-white navbar-toggler-icon"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mr-5">
          {props.arr.map((i, index) => {
            return <NavbarLi text={i} key={index} />;
          })}
        </ul>
      </div>
    </nav>
  );
};
