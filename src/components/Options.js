import React from "react";
import {Link} from "react-router-dom";

function Options(props){    
    return(
        <div className="options-container">
            {/* <Link to="/newfile"> */}
                <button onClick={()=>{ props.documentsClick() }} className="options">
                    <i className="fa fa-file-text-o" style={{fontSize:"25px", padding: "0px" ,border: "none"}}></i> Documents
                </button>
            {/* </Link> */}
        </div>
    );
}

export default Options;