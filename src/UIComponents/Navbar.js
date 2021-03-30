import React from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.css'
import { NavbarLi } from './NavbarLi';
export const Navbar = (props) => {
    const { pathname } = useLocation();
    const [scr, setScrollState] = React.useState(false);

    React.useEffect(() => {
        let listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 120) {
                setScrollState(true)

            } else {
                setScrollState(false)

            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scr])
    return (
        <nav className={scr ? "navbar navbar-expand shd mb-3 mt-1 sticky-top active" : "navbar navbar-expand mb-3 shd mt-1 sticky-top"}>
            <a className="navbar-brand text-white" href="#">
                Pavan K .</a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto mr-5">
                    {props.arr.map((i, index) => {
                        return (
                            <NavbarLi text={i} key={index} activ={pathname} />
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}