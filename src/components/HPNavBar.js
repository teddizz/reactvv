import React from "react";
import {Link} from "react-router-dom";

function HPNavBar(props){
    
    let style = undefined;
    style = props.renderNav ? {display: "block"} : { display: "none" };
    
    return(
        <div style= {style} className="navBar" id="homePageNB">
            <ul id="hpURLList">
                <li style={{display:"inline"}}><div id="navbar-logo-container"><img id="navbar-logo" src="./images/virtual-version-log.png"></img></div></li>
                <li className="nvUpperRightOptions"><Link to="/login"><button className="hp-buttons">Log in</button></Link></li>
                <li className="nvUpperRightOptions"><Link to="/signup"><button className="hp-buttons">Sign up</button></Link></li>
            </ul>
        </div> 
    );
}

export default HPNavBar;