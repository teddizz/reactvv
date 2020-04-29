import React from "react";
import {Link } from "react-router-dom";

function HomePageIntro (){
    return(
        <div id="hp-intro-container">
            <div id="login-signin-container">
                <div id="vv-logo">      
                </div>

                <div id="vv-logo-catch-phrase">
                    A smart and secure way to work.
                </div>

                <div>
                    <Link to="/signup">
                        <button className="hp-buttons">Sign up</button>
                    </Link>
                </div>
                
                <div>
                    <Link to="/login">
                        <button className="hp-buttons">Log in</button>
                    </Link>
                </div>
            </div>

            <div id="product-link"> 
                <a href="#show-off-product-container"><i className="down"></i></a>
            </div>
        </div>
    );  
}

export default HomePageIntro;