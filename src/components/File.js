import React from "react";
import { Link } from "react-router-dom";

function File(props){
    /**If the files have been fetched and stored in the
     * parent component-Documents-style and return the File component
     * else return nothing.
    */
    if (props.filesLoaded){
        return(
            // <Link to="/file" id="link-to-files">
            <a onClick={() => {props.existingDocClick(props)}} id="link-to-files">
                <div id="file-info" className="file-info">
                    <div>{props.title}</div>
                    <div>{props.author}</div>
                    <div>{props.lastModified}</div>
                </div>
            </a>
            // </Link>
        );
    }
    else{
        return(
            null
        );
    }
}

export default File;