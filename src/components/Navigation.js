import React from 'react';
import styled from 'styled-components';
import { togglePDFModal } from '../redux/actions/modalActions'
import { useDispatch } from 'react-redux';

const NavBar = styled.div`
    height: 4rem;
    background-color: #FFFFFF;
    padding-right: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 700px) {
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
    const dispatch = useDispatch();

    return (
        <NavBar>
            <Logo>LESN</Logo>
            <Nav>
                <ul>
                    <li>    
                        <ResumeBtn onClick={() => dispatch(togglePDFModal())}>Resume</ResumeBtn>                        
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