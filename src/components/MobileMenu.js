import React, {useState} from 'react';
import styled from 'styled-components'
import { togglePDFModal } from '../redux/actions/modalActions'
import { useDispatch } from 'react-redux'

const Menu = styled.nav`
    display: none;
    position: fixed;
    z-index: 10;
    width: 50vw;
    height: 130vh;
    background-color: #F0DB4F;    
    top: -10px;
    right: -100%;
    transform: rotate(-3deg);
    transition: right 200ms ease-out;
    border-left: 1px solid #323330;
    @media (max-width: 700px) {
        display: block;        
    }
    ul {
        z-index: 11;
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100vh;
        padding-bottom: 100px;
        transform: rotate(2deg);
    }
    a {
        text-decoration: none;
        color: black;
    }
    
`
const MenuBtn = styled.button `
    display: none;
    position: fixed;
    justify-content: center;
    align-items: center;
    width:  3.5rem;
    height: 3.5rem;
    background-color: #F0DB4F;  
    right: 10%;
    bottom: 7%;
    z-index: 11;
    border-radius: 50%;
    border: 1px solid #323330;
    &:focus {
        outline: none;
    }
    #container {
        height: 20px;
        width: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    #bar1, #bar2, #bar3 {
        height: 2px;
        width: 100%;
        background-color: #323330;
        transition: all 300ms ease;
    }
    @media (max-width: 700px) {
        display: flex;
    }
`
const ResumeBtn = styled.button`
    background-color: #F0DB4F;
    border: 0;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    padding: 0;
    color: #323330;
    &:focus {
        outline: none;
    }
`

// Animations Styles
const menuOpenStyle = {
    right: '-7%',
}
const bar1Open = {
   
    transform: 'rotate(-45deg) translate(-4px, 6px)'
    
}
const bar2Open = {
    opacity: 0
}
const bar3Open = {
    transform: 'rotate(45deg) translate(-4px, -5px)'
}

const MobileMenu = () => {
    const [menuOpen, setOpen] = useState(false);
    const dispatch = useDispatch();
    const toggleMenu = () => {
        setOpen( !menuOpen );
    }

    return (
        <>
        <MenuBtn 
            onClick={toggleMenu} 
        >
            <div id="container">
                <div 
                    id="bar1" 
                    style={menuOpen ? bar1Open : {}}
                ></div>
                <div 
                    id="bar2" 
                    style={menuOpen ? bar2Open : {}}
                ></div>
                <div 
                    id="bar3" 
                    style={menuOpen ? bar3Open : {}}
                ></div>
            </div>
        </MenuBtn>
        <Menu 
            style={ menuOpen ? menuOpenStyle : {}}
        >
            <ul>
                <li>    
                    <ResumeBtn 
                        onClick={() => dispatch(togglePDFModal())}
                    >Resume</ResumeBtn>                    
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
        </Menu>
        </>
    );
}

export default MobileMenu;