import React from "react";
import { useRecoilState } from "recoil";
import { addToCart, removeToCart , cartListState } from "../../../data/cartState";
import { toast } from "react-toastify";
import './styles.css';

const ButtonAddRemove = ({ item, quantity }) => {

    const [cart, setCart] = useRecoilState(cartListState)

    const handleAdd = (thisItem) => {
        console.log('Add: ', thisItem.name);
        const newCart = addToCart(cart, thisItem);
        setCart(newCart);
    }

    const handleRemove = (thisItem) => {
        console.log('Remove: ', thisItem.name);
        const newCart = removeToCart(cart, thisItem);
        setCart(newCart);
    }

    return (
        <div className="btnAddRemove">
            {quantity !==0 ? (
                <div className="btnAddRemove-positive">
                    <i className="fa fa-minus" onClick={() => handleRemove(item)}></i>
                    <span>{quantity}</span>
                    <i className="fa fa-plus" onClick={() => handleAdd(item)}></i>
                </div>
            ): (
                <div className="btnAddRemove-negative" 
                    onClick={() => {
                        handleAdd(item);
                        toast.success(item.name + ' be added');
                    }}>
                    <span>ADD</span>
                    <i className="fa fa-plus"></i>
                </div>
            )}
        </div>
    )
}

export default ButtonAddRemove