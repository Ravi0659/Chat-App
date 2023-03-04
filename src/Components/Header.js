import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <Header class="header-login-signup">
         <div class = "header-limiter">
           <h1><a href="/">Ravi <span>Development</span></a></h1>
           <nav>
            <Link to ="/ ">Home </Link>
            <a class="selected"><Link to = "/">About App</Link></a>
           <a><Link to = "/" > Contact Us</Link></a>
           </nav>
           <ul>
            <li><Link to ="/login">Login</Link></li>
            <li><Link to ="/sign up">Sign Up</Link></li>
           </ul>
         </div>
        </Header>
    )
}
export default Header