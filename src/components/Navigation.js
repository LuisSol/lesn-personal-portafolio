import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
    height: 7vh;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
        color: #000000;
        margin: 0 1.5rem;
    }
`

const Navigation = () => {
    return (
        <NavBar>
            <Logo>LESN</Logo>
            <Nav>
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Skills</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </Nav>
        </NavBar>
    );
}

export default Navigation;