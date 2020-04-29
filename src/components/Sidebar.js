import React from "react";
import Options from "./Options.js";

function SideBar(props){
    
    const collapse = props.active ? 'sidebar-container-active' : 'sidebar-container';

    return(
        <div id={collapse}>
            <div id="sidebar">
                <div id="greetings-container">
                    <p id="greetings">Hello, Willy</p>
                </div>
                <Options documentsClick={props.documentsClick} />
                {/* <Options /> */}
            </div>
        </div>
    );
}

export default SideBar;