import React from "react";
import "./styles.css";
import emptyCartImg from "./emptyCart.png";
import { useHistory } from "react-router-dom";

const EmptyCart = () => {
    const historyPage = useHistory();

    return (
        <div className="emptyCart">
            <img src={emptyCartImg} alt="emptyCart" />
            <button onClick={() => historyPage.push('/')}>
                <i className="fas fa-long-arrow-alt-left"></i> Shop now
            </button>
        </div>
    )
}

export default EmptyCart