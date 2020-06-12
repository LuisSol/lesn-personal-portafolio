import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const LazyPDFView = React.lazy(() => import('./PDFView'));

const NavBar = styled.div`
    height: 7vh;
    background-color: #FFFFFF;
    padding-right: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 750px) {
        display: none;
    }
`
const Logo = styled.div`    
    font-family: 'Monoton', cursive;
    font-size: 2.5rem;
    margin-left: 12px;
`
const Nav = styled.nav`
    ul {
        list-style: none;
        display: flex;
    }
    a {
        text-decoration: none;
        font-weight: 300;
        color: #000;
        margin: 0 1.5rem;
    }    
`
const ResumeBtn = styled.button`
    background-color: white;
    border: 0;
    cursor: pointer;
    font-weight: 300;
    font-size: 1rem;
    color: #666;
    margin-right: 1rem;
    &:focus {
        outline: none;
    }
`

const Navigation = () => {
    const [showResume, setShowResume] = useState(false);
    const toggleShowResume = () => {
        setShowResume(!showResume);
    }

    return (
        <NavBar>
            <Logo>LESN</Logo>
            <Nav>
                <ul>
                    <li>    
                        <ResumeBtn onClick={toggleShowResume}>Resume</ResumeBtn>
                        {
                            showResume && 
                            <Modal
                                closeTimeoutMS={300}    
                                className="pdf-modal"            
                                overlayClassName="overlay"
                                isOpen={showResume}
                                onRequestClose={toggleShowResume}
                            >
                                <Suspense fallback={<div>Loading ...</div>}>
                                    <LazyPDFView />
                                </Suspense>
                            </Modal>
                        }
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </Nav>
        </NavBar>
    );
}

export default Navigation;