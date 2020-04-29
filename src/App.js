import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
 } from "react-router-dom"

 /**Pages */
import SignupPage from "./pages/SignupPage.js";
import HomePage from "./pages/HomePage.js";
import PageNotFound from "./pages/PageNotFound.js";
// import LoginPage from "./pages/LoginPage.js";
import Dashboard from "./pages/Dashboard.js";
import NewFile from "./pages/NewFile.js"

function App(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/signup" component={SignupPage} />
                <Route exact path="/login" component={Dashboard} />
                <Route exact path="/newfile" component={NewFile} />
                <Route exact path="/404" component={PageNotFound} />
                <Redirect to="/404"/>
            </Switch>
        </Router>
    );
}

export default App;