import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import mikutano from '../../Assets/mikutano.png';
import Bekry from '../../Assets/Bekry.png';
import KuizDoc from '../../Assets/KuizDoc.png';
import Lawris from '../../Assets/lawris.png';


function Projects() {
    return (
        <div className='Projects'>
            <NavBar />
            <hr />
            <h1 style={{fontSize: "60px"}}>Projects</h1>
            
            <p style={{fontSize: "30px"}}>Welcome to my digital showcase! Here are some 
            projects that reflect my passion for frontend 
            development and my dedication to creating innovative 
            solutions:</p>
            {/*Project 1*/}
            <div className='project'>
                <div style={{fontSize: "40px"}}>1. All-in-one-planner</div>
                <ul key="p1" style={{fontSize: "30px"}}>
                    <li><strong>Description:</strong> a simple daily 
                    journal that can take a list of things to do.</li> 
                    <li><strong>Technologies:</strong> Python, 
                    tkinter.</li>
                    <li><strong>Role:</strong> FullStack.</li>
                    <li><strong>Link:</strong>  
                    <a href="https://github.com/kakaingalu/All-in-one-planner/tree/main"
                    target="_blank" rel="noreferrer">
                    Github Source Code
                    </a>
                    </li>
                </ul>
            </div>
            <img src="https://i.gifer.com/75ez.gif" alt="all-in-one-planner" style={{width: "600px", height: "400px", border: "2px solid #fff", boxShadow: "0 0 10px #fff"}}/>

            {/*Project 2*/}
            <div className='project'>
                <div style={{fontSize: "40px"}}>2. Mikutano</div>
                <ul key="p2" style={{fontSize: "30px"}}>
                    <li><strong>Description:</strong> a chatting 
                    application designed to connect software engineering 
                    students to professionals.</li> 
                    <li><strong>Technologies:</strong> React, nextJs, 
                    NodeJs and ChatEngine.</li>
                    <li><strong>Role:</strong> FrontEnd.</li>
                    <li><strong>Link:</strong> <a 
                    href="https://github.com/kakaingalu/mikutano"
                    target="_blank" rel="noreferrer">
                    Github Source Code
                    </a>
                    </li>
                </ul>
            </div>

            <img src={mikutano} alt="mikutano" style={{width: "600px", height: "400px", border: "2px solid #fff", boxShadow: "0 0 10px #fff"}}/>

            {/*Project 3*/}
            <div className='project'>
                <div style={{fontSize: "40px"}}>3. YoutubeDownloader</div>
                <ul key="p3" style={{fontSize: "30px"}}>
                    <li><strong>Description:</strong> Downloads 
                    youtube videos.</li> 
                    <li><strong>Technologies:</strong> Python, 
                    yt-dlp.</li>
                    <li><strong>Role:</strong> BackEnd.</li>
                    <li><strong>Link:</strong> <a 
                    href="https://github.com/kakaingalu/YoutubeDownloader"
                    target="_blank" rel="noreferrer">
                    Github Source Code
                    </a>
                    </li>
                </ul>
            </div>

            <img src="https://i.gifer.com/fyFl.gif" alt="youtubeDownloader" style={{width: "600px", height: "400px", border: "2px solid #fff", boxShadow: "0 0 10px #fff"}}/>

            {/*Project 4*/}
            <div className='project'>
                <div style={{fontSize: "40px"}}>4. Bekry-Ecommerce</div>
                <ul key="p4" style={{fontSize: "30px"}}>
                    <li><strong>Description:</strong> A Bakery 
                    Ecommerce website.</li> 
                    <li><strong>Technologies:</strong> React, NodeJs, 
                    Axios, fetch, json-server, json-server-auth, 
                    jwt-decode.</li>
                    <li><strong>Role:</strong> FrontEnd.</li>
                    <li><strong>Link:</strong> <a 
                    href="https://github.com/kakaingalu/Bekry-Ecommerce"
                    target="_blank" rel="noreferrer">
                    Github Source Code
                    </a>
                    </li>
                </ul>
            </div>

            <img src={Bekry} alt="Bekry-Ecommerce" style={{width: "600px", height: "800px", border: "2px solid #fff", boxShadow: "0 0 10px #fff"}}/>

            {/*Project 5*/}
            <div className='project'>
                <div style={{fontSize: "40px"}}>5. kuizDoc</div>
                <ul key="p5" style={{fontSize: "30px"}}>
                    <li><strong>Description:</strong> KuizDoc is an
                     innovative web application that seamlessly combines 
                     a custom-trained AI chatbot with a ChatGPT-powered 
                     Multiple-Choice Quiz. It empowers users to effortlessly 
                     process and understand extensive text documents, offering 
                     features like automated summarization, intelligent question 
                     generation, and a dynamic answering system..</li> 
                    <li><strong>Technologies:</strong> React, 
                    React-Router, React-Bootstrap, Nodejs, Tailwind CSS, sqlite, 
                    Axios, ChatGPT API, Django.</li>
                    <li><strong>Role:</strong> FrontEnd.</li>
                    <li><strong>Link:</strong> <a 
                    href="https://github.com/Laban254/KuizDoc"
                    target="_blank" rel="noreferrer">
                    Github Source Code
                    </a>
                    </li>
                </ul>
            </div>

            <img src={KuizDoc} alt="KuizDoc" style={{width: "600px", height: "400px", border: "2px solid #fff", boxShadow: "0 0 10px #fff"}}/>

            {/*Project 6*/}
            <div className='project'>
                <div style={{fontSize: "40px"}}>6. Lawris</div>
                <ul key="p6" style={{fontSize: "30px"}}>
                    <li><strong>Description:</strong> Lawris is a multifaceted 
                    legal software solution that caters to a wide spectrum of users, 
                    ranging from legal professionals and firms to educational 
                    institutions, the judiciary and non-litigants.</li> 
                    <li><strong>Technologies:</strong> React, 
                    React-Router, React-Bootstrap, React Redux, Nodejs, Bootstrap, 
                    mysql, Axios, firebase, Jquery,popperjs,sweetalert, ChatGPT API, 
                    Django, JSON Web Token (JWT), Microsoft API, Google API, pdfplumber,
                     pdfminer.</li>
                    <li><strong>Role:</strong> FrontEnd.</li>
                    <li><strong>Link:</strong> <a 
                    href="https://github.com/tykoon787/lawris"
                    target="_blank" rel="noreferrer">
                    Github Source Code
                    </a>
                    </li>
                </ul>
            </div>

            <img src={Lawris} alt="Lawris" style={{width: "600px", height: "400px", border: "2px solid #fff", boxShadow: "0 0 10px #fff"}}/>

            <p style={{fontSize: "30px"}}>Feel free to explore these projects to get a glimpse of my 
            skills and creativity. If you have any questions or feedback,
            don't hesitate to reach out</p>

            <img src='https://i.gifer.com/7SpL.gif' alt="contact" style={{width: "600px", height: "400px", border: "2px solid #fff", boxShadow: "0 0 10px #fff"}}/>

            <p style={{fontSize: "30px"}}>Let's turn ideas into reality, Kakai 🚀</p>
            <img src='https://i.gifer.com/JC0.gif' alt="rocket" style={{width: "600px", height: "700px", border: "2px solid #fff", boxShadow: "0 0 10px #fff"}}/>
            <Footer />
        </div>

    )
}

export default Projects;