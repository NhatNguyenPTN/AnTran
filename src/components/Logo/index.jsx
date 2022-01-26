import React from "react";
import './styles.css';
import logoImg from '../../images/logo.png';
import { useHistory } from "react-router-dom";

const Logo = () => {

    const historyPage = useHistory();

    return (
        <div className="logo">
            <div>
                <img src={logoImg} alt="logoImg" />
                <span>
                    <b data-heading="i" onClick={() => historyPage.push('/')}>Recoil</b>
                </span>
            </div>
            <p>
                <b>Fast Food Restaurant</b>
            </p>
        </div>
    )
}

export default Logo