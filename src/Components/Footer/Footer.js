import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
        <hr />
        <footer style={{position: "fixed", bottom: "0", backdropFilter: "blur(50px)"}}>
            
            <div style={{fontSize: "25px"}}>
                <Link to="/" >About</Link>
                <Link to="/projects" >Projects</Link>
                <Link to="/contacts" >Contacts</Link>
            </div>
            <p style={{color: "white", fontSize: "16px"}}>Joseph Kakai Ngalu @2023</p>
            <br />
        </footer>
        </>
    );
}

export default Footer;
