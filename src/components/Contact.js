import React from 'react';
import styled from 'styled-components'
import ContactModal from './ContactModal';
import { ReactComponent as ExercismLogo } from './svg/exercismlogo.svg';
import { ReactComponent as CodeWarsLogo } from './svg/codewars.svg';
import { ReactComponent as TwitterLogo } from './svg/twitter.svg';
import { ReactComponent as LinkedinLogo } from './svg/linkedin.svg';
import { ReactComponent as GithubLogo } from './svg/github.svg';

const ContactView = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 450px;
    padding: 50px 45px 10px 45px;
    background-color: #232C39;
    position: relative;    
    text-align: center;
    color: white;
    .slogan {        
        margin: 0;      
        font-size: 4rem;
    }
`
const Footer = styled.footer`
    position: absolute;
    bottom: 0;    
`
const Media = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    .media-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 50px;
        margin: 0 1.5rem;
    }           
    .logo {
        width: 25px;
        height: 25px;
        fill: rgb(180, 180, 180);
        cursor: pointer;
        transition: transform 200ms ease-in;
    }
    .logo:hover {
        fill: rgb(230, 230, 230);
        transform: scale(1.2);    
    }
`

const Contact = () => {
    return (        
        <ContactView>
            <div>
                <h1 className="slogan">LET ME HELP YOU<br />TO CREATE</h1>
                <br />
                <ContactModal />
            </div>
            <Media>
                <div className="media-card">
                    <a 
                        href="https://www.codewars.com/users/LuisSol" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <CodeWarsLogo className="logo" />
                    </a>
                    <small>codewars</small>                    
                </div>                
                <div className="media-card">
                    <a 
                        href="https://exercism.io/profiles/LuisSol" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <ExercismLogo className="logo" />
                    </a>
                    <small>exercism</small>
                </div>
                <div className="media-card">
                    <a 
                        href="https://twitter.com/intent/tweet?text=Hi%20%40LuisSolNav%20i%20would%20like%20to%20talk%20with%20you" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <TwitterLogo className="logo" />
                    </a>
                    <small>twitter</small>
                </div>                
                <div className="media-card">
                    <a href="https://www.linkedin.com/in/luis-enrique-solis-navarro-86046219b/" target="_blank" rel="noopener noreferrer">
                        <LinkedinLogo className="logo" />
                    </a>
                    <small>linkedin</small>
                </div>
                <div className="media-card">
                    <a href="https://github.com/LuisSol" target="_blank" rel="noopener noreferrer">
                        <GithubLogo className="logo" />
                    </a>
                    <small>git-hub</small>
                </div>
            </Media>
            <Footer id="contact">
                <small>All rights reserved. | Luis Enrique Solis Navarro</small>
            </Footer>            
        </ContactView>        
    );
}

export default Contact;