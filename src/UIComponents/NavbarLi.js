import { useHistory } from 'react-router-dom';
import './navbarli.css'

export const NavbarLi = (props) => {
    const { push } = useHistory();
    return (
        <li className="nav-item mr-5" >
            <button className={(props.activ.includes(props.text)) ? 'btn btn-sm buttn btn-dark bn' : 'btn btn-sm bn'}>
                <a className="nav-link text-white mainText" href='#'
                    onClick={() => {
                        push('/' + props.text);
                    }}>
                    {props.text}</a>
            </button>
        </li>
    )
}