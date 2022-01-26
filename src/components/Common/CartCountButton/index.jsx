import React from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartListState } from "../../../data/cartState";
import './styles.css';

const CartCountButton = ({cartCount}) => {
    const historyPage = useHistory();
    const cart = useRecoilValue(cartListState);

    return (
        <div className="btnCartCount" onClick={() => historyPage.push('/cart')}>
            <div className="count">
                {cart.length >99 ? '99+' : cart.length}
            </div>
            <i className="fas fa-shopping-cart"></i>
        </div>
    )
}

export default CartCountButton