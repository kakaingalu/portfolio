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
                <div>1. Project Name 1</div>
                <ul key="p1">
                    <li><strong>Description:</strong> Brief description 
                    of the project and its goals.</li> 
                    <li><strong>Technologies:</strong> List of 
                    technologies used (e.g., HTML, CSS, React).</li>
                    <li><strong>Role:</strong> Your specific role and 
                    contributions to the project.</li>
                    <li><strong>Link:</strong> If applicable, provide a
                    link to the live project or its code repository.
                    </li>
                </ul>
            </div>

            {/*Project 2*/}
            <div className='project'>
                <div>2. Project Name 2</div>
                <ul key="p2">
                    <li><strong>Description:</strong> Brief description 
                    of the project and its goals.</li> 
                    <li><strong>Technologies:</strong> List of 
                    technologies used (e.g., HTML, CSS, React).</li>
                    <li><strong>Role:</strong> Your specific role and 
                    contributions to the project.</li>
                    <li><strong>Link:</strong> If applicable, provide a
                    link to the live project or its code repository.
                    </li>
                </ul>
            </div>

            {/*Project 3*/}
            <div className='project'>
                <div>3. Project Name 3</div>
                <ul key="p3">
                    <li><strong>Description:</strong> Brief description 
                    of the project and its goals.</li> 
                    <li><strong>Technologies:</strong> List of 
                    technologies used (e.g., HTML, CSS, React).</li>
                    <li><strong>Role:</strong> Your specific role and 
                    contributions to the project.</li>
                    <li><strong>Link:</strong> If applicable, provide a
                    link to the live project or its code repository.
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