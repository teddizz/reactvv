import React from "react";
import '../styles/signup.css'
import {Link} from "react-router-dom";

class SingupPage extends React.Component{
    constructor(){
        super();
        this.state={
             name: '',
             username: '',
             email: '',
             password:'',
             password2: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /**Will handle the submission of the  */
    handleClick(e){
        
    }

    handleChange(e){
        const { name, value} = e.target;
        this.setState(
            /**'name' is a string value. Needs to be enclosed in [] square brackets to access that data field in our object*/
            {[name]: value}
        );
    }

    render(){
        return(
            <div className="signup-page-container">
                <div className="signup-container">
                    <img id="logo" src="../images/virtual-version-log.png"></img>
                    <p id="signup-quote">Sign up to begin virtualizing your files.</p>
                    <form id="signup-form">
                        <input className="signup-input" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name" name="name"/>
                        <input className="signup-input" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Username" name="username"/>
                        <input className="signup-input" type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email" name="email"/>
                        <input className="signup-input" type="text" value={this.state.password} onChange={this.handleChange} placeholder="Password" name="password"/>
                        <input className="signup-input" type="text" value={this.state.password2} onChange={this.handleChange} placeholder="Confirm password" name="password2"/>
                        <button id="signup-button">Signup</button>
                    </form>
                </div>
                <div className="alternative">
                    <p id="have-account">Have an account? <Link to="login"><span style={{color:"#00818A"}}>Log in</span></Link></p>
                </div>
            </div>
        );
    }
}

export default SingupPage;