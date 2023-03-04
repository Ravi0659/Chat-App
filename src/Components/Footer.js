import React from "react";
import './Footer.css';
class Footer extends React.Component{
    Copyright=()=>{
        return(
        <h2 varient="body2" color="textSecondary" align = "center">
            {'copyright 0'}
            {'Ravi Development'}
            {new Date().getFullYear()}
            {'.'}
        </h2>
        )
    }
    render(){
        return(
            <Footer>
                <div class="footer-1-box is-center">

                </div>
            </Footer>
        )
    }
}
export default Footer