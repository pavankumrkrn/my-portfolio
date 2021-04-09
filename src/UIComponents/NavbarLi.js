import "./navbarli.css";
import { Link } from "react-scroll";

export const NavbarLi = (props) => {
  console.log(props);
  return (
    <li className="nav-item mr-5">
      <Link to={props.text} spy={true} smooth={true}>
        <button className={"btn btn-sm back"}>
          <a className="nav-link text-white mainText medium" href="#">
            {props.text}
          </a>
        </button>
      </Link>
    </li>
  );
};
