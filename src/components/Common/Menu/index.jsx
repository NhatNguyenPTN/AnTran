import React from "react";
import MenuItem from "./MenuItem";

import "./styles.css";

const Menu = ({ foodList }) => {

    return (
        <main>
            {foodList.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </main>
    )
    
}

export default Menu