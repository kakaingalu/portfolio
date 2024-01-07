import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Gmail from '../../Assets/pinpng.com-instagram-icons-png-756253.png';
import LinkedIn from '../../Assets/Linkedin_Logo.png';
import Github from '../../Assets/kisspng-github-pages-logo-repository-fork-github-logo-1-magentys-5b69de71b51265.8586076615336648817417.png';
import X from '../../Assets/Twitter-X-White-Logo-PNG.png';


function Contacts() {
    return (
        <div className='Contacts'>
            <NavBar />
            <hr />
            <h1 style={{fontSize: "40px"}}>Get In Touch</h1>
            
            <h1 style={{fontSize: "40px"}}>Hey There!</h1>
            <img src="https://i.gifer.com/Wczc.gif" alt="hey there" style={{width: "600px", height: "800px", border: "2px solid #fff", boxShadow: "0 0 10px #fff"}}/>
            
            <br />
            <br />
            <br />

            <p style={{fontSize: "30px"}}>I'm thrilled to connect with you. Whether you have 
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
                        className='logos invert-colors'
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
                        className='logos invert-colors'
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
                        className='logos invert-colors'
                        /> 
                            </a>
                    </div>  
                </div>

                <div className='BottomP'>
                    <p style={{fontSize: "30px"}}>Looking forward to hearing from you!</p> 
                    <p style={{fontSize: "30px"}}>Best regards,</p>
                    <p style={{fontSize: "30px"}}>Joseph Kakai Ngalu 🚀</p>
                </div>
            <Footer />
        </div>

    )
}

export default Contacts;