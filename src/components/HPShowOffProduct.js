import React from "react";

function HPShowOffProduct(props){
    return(
        <div id="show-off-product-container" >
            <div id="sell-product-phrases-container">
                {/* We can add custom attributes to jsx tags 
                we can make these extra attribute using the key word 
                data. Place a dash after the keyword data then state 
                your variable name. We can access these custom attributes
                with js.
                */}
                <div id="phrases">   
                    <h2>Access your files anywhere. Anytime.</h2>
                    <p >Create, edit, and share your text documents.</p>
                </div>
                
                <img id="mobile-devices-image" src="./images/mobile_devices.png"></img>
            </div>
            
            <div id="slide-show">

            </div>
        </div>
    );
}

export default HPShowOffProduct;