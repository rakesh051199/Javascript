import React from 'react';
import {Link} from "react-router-dom";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

const Navigation = (props) => {
    return ( 
        <>
        <Router>
        <h1><Link to="/Home">Home</Link></h1>
       <h1><Link to="/aboutus">aboutus</Link></h1>
       <h1><Link to="/contactus">contactus</Link></h1>
        </Router>
       </>
     );
}
 
export default Navigation ;