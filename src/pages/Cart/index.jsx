import React from "react";
import Logo from "../../components/Logo";
import Menu from "../../components/Common/Menu";
import Footer from "../../components/Common/Footer";
import EmptyCart from "../../components/EmptyCart";

import { useRecoilValue } from "recoil";
import { cartListState, cartTotal } from "../../data/cartState";
import swal from 'sweetalert';

import './styles.css';

const Cart = () => {

    const foodList = useRecoilValue(cartListState);
    // const [foodList, setCart] = useRecoilState(cartListState);
    const total = useRecoilValue(cartTotal);

    const handleConfirm = (e) => {
        // e.preventDefault();
        console.log(e);
        swal("Confirmed!", "Bill be confirmed!", "success");
    }

    return (
        <div>
            <div className="cart-header">
                <Logo />
            </div>
            
            {foodList.length === 0 ? (
                <EmptyCart />
            ) : (
            <div className="orders">
                <h1 className="orders-heading">Your Orders</h1>
                <div className="orders-menu">
                    <Menu foodList={foodList}/>
                </div>
                <h3 className="orders-total">Your total: {total}$</h3>
                
                <div id="form-div">
                    <form className="form" 
                        id="form1" 
                        // method="POST"
                        onSubmit={(e) => handleConfirm(e)}>

                        <h2>Information</h2>
                        
                        <p className="name">
                            <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" required/>
                        </p>
                        
                        <p className="phone">
                            <input name="phone" type="text" className="validate[required,custom[phone]] feedback-input" id="phone" placeholder="Phone" required/>
                        </p>

                        <p className="address">
                            <input name="address" type="text" className="validate[required,custom[phone]] feedback-input" id="address" placeholder="Address" required/>
                        </p>
                        
                        <p className="text">
                            <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Message"></textarea>
                        </p>

                        <input className="oderListSubmit" name="orderlist" id="orderlist" value={foodList} type="text" readOnly/>
                                      
                        <button 
                            type="submit"
                            className="orders-confirm"
                            >
                            Confirm
                        </button>
                    </form>
                </div>
            </div>
            )}

            <Footer />
        </div>
    )
}

export default Cart