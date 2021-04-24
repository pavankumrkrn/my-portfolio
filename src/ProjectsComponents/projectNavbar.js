import React from "react";
import { Link } from "react-scroll";
import "./pNavbar.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const ProjectNavbar = (props) => {
  const [scr, setScrollState] = React.useState(false);
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

  const changeProjects = (val) => props.changeProjects(val);

  return (
    <>
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
                <button
                  className={"btn btn-sm back bn"}
                  onClick={() => changeProjects("ALL")}
                >
                  <a className={"nav-link text-white mainText small"} href="#">
                    ALL
                  </a>
                </button>
              </Link>
            </li>
            <li className="nav-item ml-5 mr-5 mt-auto mb-auto">
              <Link to="react" spy={true} smooth={true}>
                <button
                  className={"btn btn-sm back "}
                  onClick={() => changeProjects("React")}
                >
                  <a className="nav-link text-white mainText small" href="#">
                    React or Angular
                  </a>
                </button>
              </Link>
            </li>
            <li className="nav-item ml-5 mr-5 mt-auto mb-auto">
              <Link to="react" spy={true} smooth={true}>
                <button
                  className={"btn btn-sm back "}
                  onClick={() => changeProjects("JS")}
                >
                  <a className="nav-link text-white mainText small" href="#">
                    Vanilla JS
                  </a>
                </button>
              </Link>
            </li>
            <li className="nav-item ml-5 mr-5 mt-auto mb-auto">
              <Link to="react" spy={true} smooth={true}>
                <button
                  className={"btn btn-sm back "}
                  onClick={() => changeProjects("API")}
                >
                  <a className="nav-link text-white mainText small" href="#">
                    Api-Integrated
                  </a>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="row justify-content-center sticky-top"
        style={{ top: "300px" }}
      >
        {props.loader ? (
          <div className="col-3 offset-2">
            <div className="loadingSpinner">
              <Loader
                type={"TailSpin"}
                color={"White"}
                height={80}
                width={80}
              />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
