import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return ( 
        <>
        <Link to="/">Home</Link>
        <Link to="/aboutus">aboutus</Link>
        <Link to="contactus">Contactus</Link>
       </>
     );
}
 
export default Navigation ;