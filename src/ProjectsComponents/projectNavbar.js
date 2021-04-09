import React from "react";
import { Link } from "react-scroll";
import "./pNavbar.css";

export const ProjectNavbar = (props) => {
  const [scr, setScrollState] = React.useState(false);
  let p = "fullStack";
  React.useEffect(() => {
    let listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scr]);

  if (props.active !== undefined) {
    p = props.active;
  }
  return (
    <nav
      className={
        scr
          ? "navbar pnavbar navbar-expand shd navbar-light sticky-top top active"
          : "navbar pnavbar navbar-expand sticky-top top navbar-light"
      }
    >
      <div className="collapse navbar-collapse" id="navbarNavP">
        <ul className="navbar-nav ml-auto mr-auto">
          <li className="nav-item ml-5 mr-5 mt-auto mb-auto">
            <Link to="react" spy={true} smooth={true}>
              <button className={"btn btn-sm back bn"}>
                <a className={"nav-link text-white mainText small"} href="#">
                  React and Angular
                </a>
              </button>
            </Link>
          </li>
          <li className="nav-item ml-5 mr-5 mt-auto mb-auto">
            <Link to="js" spy={true} smooth={true}>
              <button className={"btn btn-sm back "}>
                <a className="nav-link text-white mainText small" href="#">
                  Vanilla JS
                </a>
              </button>
            </Link>
          </li>
          <li className="nav-item ml-5 mr-5 mt-auto mb-auto">
            <Link to="app" spy={true} smooth={true}>
              <button className={"btn btn-sm back "}>
                <a className="nav-link text-white mainText small" href="#">
                  App-clones
                </a>
              </button>
            </Link>
          </li>
          <li className="nav-item ml-5 mr-5 mt-auto mb-auto">
            <Link to="api" spy={true} smooth={true}>
              <button className={"btn btn-sm back "}>
                <a className="nav-link text-white mainText small" href="#">
                  Apis
                </a>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
