import React from 'react';
import './pNavbar.css'
import { useHistory } from 'react-router-dom';

export const ProjectNavbar = (props) => {
    const { push } = useHistory()
    const [scr, setScrollState] = React.useState(false)
    let p = 'fullStack'
    React.useEffect(() => {
        let listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 100) {
                setScrollState(true)

            } else {
                setScrollState(false)

            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scr])

    if (props.active !== undefined) {
        p = props.active
    }
    return (
        <nav className={scr ? "navbar pnavbar navbar-expand shd navbar-light sticky-top top active" : "navbar pnavbar navbar-expand sticky-top top navbar-light"}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavP" aria-controls="navbarNavP" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavP">
                <ul className="navbar-nav ml-auto mr-auto">
                    <li className="nav-item ml-5 mr-5 mt-auto mb-auto">
                        <button className={(p === 'fullStack') ? 'btn btn-sm btn-dark buttn bn' : 'btn btn-sm bn'}>
                            <a className={"nav-link text-white mainText"} href="#"
                                onClick={() => {
                                    push('/Projects/fullStack')
                                }}>React and Angular</a>
                        </button>

                    </li>
                    <li className="nav-item ml-5 mr-5 mt-auto mb-auto">
                        <button className={(p === 'vanillaJS') ? 'btn btn-sm btn-dark buttn' : 'btn btn-sm '}>
                            <a className="nav-link text-white mainText" href="#"
                                onClick={() => {
                                    push('/Projects/vanillaJS')
                                }}>Vanilla JS</a></button>
                    </li>
                    <li className="nav-item ml-5 mr-5 mt-auto mb-auto">
                        <button className={(p === 'appClones') ? 'btn btn-sm btn-dark buttn' : 'btn btn-sm '}>
                            <a className="nav-link text-white mainText" href="#"
                                onClick={() => {
                                    push('/Projects/appClones')
                                }}>App-clones</a></button>
                    </li>
                    <li className="nav-item ml-5 mr-5 mt-auto mb-auto">
                        <button className={(p === 'API') ? 'btn btn-sm btn-dark buttn' : 'btn btn-sm '}>
                            <a className="nav-link text-white mainText" href="#"
                                onClick={() => {
                                    push('/Projects/API')
                                }}>Apis</a>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}