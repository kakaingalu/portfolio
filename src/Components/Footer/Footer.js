import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <hr />
            <div>
                <Link to="/" >Home</Link>
                <Link to="/projects" >Projects</Link>
                <Link to="/contacts" >Contacts</Link>
            </div>
            <p>Kakai Ngalu @2023</p>
        </footer>
    );
}

export default Footer;
