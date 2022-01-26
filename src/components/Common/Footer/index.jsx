import React from "react";
import Logo from '../../Logo'
import './styles.css';

const Footer = () => {

    return (
        <footer>
            <div>
                <p style={{marginBottom: '1rem'}}>So-called fast-food restaurants, 
                    usually operated in chains or as franchises and heavily advertised, 
                    offer limited menus—typically
                </p>
                <p>Recoil Restaurant</p>
                <p>123 Street Washinton</p>
                <p>+202 666 666</p>
            </div>
            
            <Logo />
        </footer>
    )
}

export default Footer