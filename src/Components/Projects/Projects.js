import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import logo from '../../Assets/Kaks_Logo.png';

function Projects() {
    return (
        <div className='Projects'>
            <NavBar />
            <hr />
            <h1>Projects</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome to my digital showcase! Here are some 
            projects that reflect my passion for frontend 
            development and my dedication to creating innovative 
            solutions:</p>
            {/*Project 1*/}
            <div className='project'>
                <div>1. All-in-one-planner</div>
                <ul key="p1">
                    <li><strong>Description:</strong> a simple daily 
                    journal that can take a list of things to do.</li> 
                    <li><strong>Technologies:</strong> Python, 
                    tkinter.</li>
                    <li><strong>Role:</strong> FullStack.</li>
                    <li><strong>Link:</strong>  
                    <a href="https://github.com/kakaingalu/All-in-one-planner/tree/main"
                    target="_blank" rel="noreferrer">
                    Github Soruce Code
                    </a>
                    </li>
                </ul>
            </div>

            {/*Project 2*/}
            <div className='project'>
                <div>2. Mikutano</div>
                <ul key="p2">
                    <li><strong>Description:</strong> a chatting 
                    application designed to connect software engineering 
                    students to professionals.</li> 
                    <li><strong>Technologies:</strong> React, nextJs, 
                    NodeJs and ChatEngine.</li>
                    <li><strong>Role:</strong> FrontEnd.</li>
                    <li><strong>Link:</strong> <a 
                    href="https://github.com/kakaingalu/mikutano"
                    target="_blank" rel="noreferrer">
                    Github Soruce Code
                    </a>
                    </li>
                </ul>
            </div>

            {/*Project 3*/}
            <div className='project'>
                <div>3. YoutubeDownloader</div>
                <ul key="p3">
                    <li><strong>Description:</strong> Downloads 
                    youtube videos.</li> 
                    <li><strong>Technologies:</strong> Python, 
                    yt-dlp.</li>
                    <li><strong>Role:</strong> BackEnd.</li>
                    <li><strong>Link:</strong> <a 
                    href="https://github.com/kakaingalu/YoutubeDownloader"
                    target="_blank" rel="noreferrer">
                    Github Soruce Code
                    </a>
                    </li>
                </ul>
            </div>

            {/*Project 4*/}
            <div className='project'>
                <div>4. Bekry-Ecommerce</div>
                <ul key="p4">
                    <li><strong>Description:</strong> A Bakery 
                    Ecommerce website.</li> 
                    <li><strong>Technologies:</strong> React, NodeJs, 
                    Axios, fetch, json-server, json-server-auth, 
                    jwt-decode.</li>
                    <li><strong>Role:</strong> FrontEnd.</li>
                    <li><strong>Link:</strong> <a 
                    href="https://github.com/kakaingalu/Bekry-Ecommerce"
                    target="_blank" rel="noreferrer">
                    Github Soruce Code
                    </a>
                    </li>
                </ul>
            </div>

            <p>Feel free to explore these projects to get a glimpse of my 
            skills and creativity. If you have any questions or feedback,
            don't hesitate to reach out</p>

            <p>Let's turn ideas into reality, Kakai 🚀</p>
            <hr />
            <Footer />
        </div>

    )
}

export default Projects;