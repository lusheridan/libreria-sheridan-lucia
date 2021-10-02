import React from 'react';
import {CartWidget} from './CartWidget';
import '../NavBar/NavBar.css';


export const NavBar = () => {

    return (
        <header>
            <nav>
            <div>
                <li className="navLi"><h1><img className="logo" src="images/header-logo.png" alt="logo sheridan"/></h1></li>
            </div>
            <div>
                <li className="navLi">Escolar</li>
            </div>
            <div>
                <li className="navLi">Artística</li>
            </div>
            <div>
                <li className="navLi">Técnica</li>
            </div>
            <div>
                <li className="navLi">Gráfica</li>
            </div>
                <li><CartWidget/></li>
            </nav>
        </header>
    )
}