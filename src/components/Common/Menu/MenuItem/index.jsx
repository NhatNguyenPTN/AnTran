import React from "react";
import ButtonAddRemove from "../../ButtonAddRemove";
import "./styles.css";


const MenuItem = ({ item }) => {  

    return (
        <div className="item">
            <img src={item.img} alt="menuItem" />
            <div className="item-head_desc">
                <p className="head_desc-name">{item.name}</p>
                <p className="head_desc-info">
                    <small>{item.info}</small>
                </p>
            </div>

            <div className="item-foot_desc">
                <span className="foot_desc-price">{item.price}$</span>
                <ButtonAddRemove 
                    quantity={item?.quantity ? item.quantity : 0} 
                    item={item}
                />
            </div>
        </div>
    )
}

export default MenuItem