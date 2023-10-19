import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import logo from '../../Assets/Kaks_Logo.png';
import Gmail from '../../Assets/Gmail_Logo.png';
import LinkedIn from '../../Assets/Linkedin_Logo.png';
import Github from '../../Assets/Github_Logo.svg';
import X from '../../Assets/X_Logo.png';


function Contacts() {
    return (
        <div className='Contacts'>
            <NavBar />
            <hr />
            <h1>Get In Touch</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hey There!</h1>
            <p>I'm thrilled to connect with you. Whether you have 
            a project in mind, a question about my work, or just 
            want to say hello, I'm all ears. Feel free to reach 
            out through any of the following channels:</p>
            
                <div className='logo'>
                    {/**Gmail Logo */}
                    <div>
                    <a href="mailto:josephngalu96@gmail.com">
                        <img 
                        src={Gmail} 
                        alt='Gmail Logo' 
                        className='logos'
                        /> 
                            </a>
                    </div>   

                    {/**LinkedIn Logo */}
                    <div>
                    <a href="https://www.linkedin.com/in/joseph-kakai-041a96140"
                    target='_blank' rel="noreferrer" >
                        <img 
                        src={LinkedIn} 
                        alt='LinkedIn Logo' 
                        className='logos circle'
                        /> 
                    </a>
                    </div>

                    {/**Github Logo */}
                    <div>
                    <a href="https://github.com/kakaingalu"
                    target='_blank' rel="noreferrer" >
                        <img 
                        src={Github} 
                        alt='Github Logo' 
                        className='logos'
                        /> 
                            </a>
                    </div> 

                    {/**X Logo */}
                    <div>
                    <a href="https://twitter.com/kakaingalu"
                    target='_blank' rel="noreferrer" >
                        <img 
                        src={X} 
                        alt='X Logo' 
                        className='logos'
                        /> 
                            </a>
                    </div>  
                </div>

                <div className='BottomP'>
                    <p>Looking forward to hearing from you!</p> 
                    <p>Best regards,</p>
                    <p>Kakai 🚀</p>
                </div>
            <Footer />
        </div>

    )
}

export default Contacts;