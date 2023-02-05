import style from './Navbar.module.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import logo from './imagem.png';


function Navbar() {
    return (    
        <nav className={style.navbarBody} >
        
        
            <ul className={style.list} >
                <li className={style.item}> <NavLink to="/">Lista de gatos</NavLink> </li>
                <li className={style.item}> <NavLink to="/Formulario">Formulário</NavLink> </li>
               
            </ul>
            <NavLink to="/">
                <img src={logo}></img>
            </NavLink>
        </nav>
    )
}

export default Navbar

