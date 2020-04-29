import React from "react";
import DashboardNavBar from "../components/DashboardNavBar";
import SideBar from "../components/Sidebar";
import Editor from "../components/Editor.js";

class NewFile extends React.Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div>
                <DashboardNavBar />
                <div id="sidebar-doc-container">
                    <SideBar />
                    <Editor />
                </div>

            </div>
        );
    }
}

export default NewFile;