import React from "react";
import "../styles/dashboard.css"
import {Link} from "react-router-dom";


function DashboardNavBar(props){
    return(
        <div id="dash-navbar">
            <div className="dash-navbar-item-containers"><button onClick={ () => {props.sidebarCollapse()} } id="hamburger-button" className="dashboard-navbar-buttons">&#9776;</button></div>
            <div className="dash-navbar-item-containers"><a onClick={() => { props.documentsClick()}}><img id="dash-logo" src="./images/virtual-version-log.png"></img></a></div>
            <div className="dash-navbar-item-containers"><button className="dashboard-navbar-buttons" onClick={() => props.newFileClick()}>New File</button></div>
        </div>
    );
}

export default DashboardNavBar;