import React from "react";
import { Link } from "react-router-dom";
import DashboardNavBar from "../components/DashboardNavBar.js";
import SideBar from "../components/Sidebar.js"
import Documents from "../components/Documents.js";
import "../styles/dashboard.css";
import Editor from "../components/Editor.js";

class Dashboard extends React.Component{
    constructor(){
        super();
        this.state={
            active: false,
            filesLoaded: false,
            newfile: false,
            existingFile: false,
            dashboard: true,
            currentDocInfo: {}
        }

        this.sidebarCollapse = this.sidebarCollapse.bind(this);
        this.newFileClick = this.newFileClick.bind(this);
        this.documentsClick = this.documentsClick.bind(this);
    }

    sidebarCollapse(){
        const active = !this.state.active;
        this.setState({
            active: active
        })
    }

    newFileClick(){
        let temp = !this.state.newfile
        this.setState({
            dashboard: false,
            existingFile: false,
            newfile: temp
        })
    }

    documentsClick(){
        this.setState({
            dashboard: true,
            newfile: false,
            existingFile: false
        })
    }

    existingDocClick = (properties)=> {
        let temp = !this.state.existingFile
        this.setState({
            existingFile: temp,
            dashboard: false,
            newfile: false,
            currentDocInfo: properties
        })
    }
  
    render(){
        const componentToRender = this.state.dashboard ? <Documents existingDocClick={this.existingDocClick}/> : this.state.newfile ? <Editor /> : <Editor currentDocInfo={this.state.currentDocInfo}/>
        
        return(
            <div className="dashboard-container">
                <DashboardNavBar sidebarCollapse={this.sidebarCollapse} newFileClick={this.newFileClick} documentsClick={this.documentsClick}/>
                <div id="sidebar-doc-container">
                    <SideBar active={this.state.active} documentsClick={this.documentsClick} />
                    {componentToRender}                    
                </div>
            </div>
        );
    }
}

export default Dashboard; 