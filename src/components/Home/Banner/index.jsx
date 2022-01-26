import React from "react";

import "./styles.css";
import Logo from "../../Logo";
import bannerImg from '../../../images/banner.png';
import ScrollIntoView from 'react-scroll-into-view'

const Banner = () => {

    return (
        <header>
            <div className="header-content">
                <Logo />
                <div className="content-main">
                    <h1>Satisfy your cravings by our food</h1>
                    <p>Add a joy of excellence Taste that Surprise you!</p>
                    <ScrollIntoView selector="#menu">
                        <button>
                            View menu <i className="fas fa-long-arrow-alt-right"></i> 
                        </button>
                    </ScrollIntoView>
                </div>
            </div>
            <img src={bannerImg} alt="banner-img" className="header-img"/>
        </header>
    )
}

export default Banner