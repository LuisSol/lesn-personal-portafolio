import React from 'react';
import Navigation from './Navigation'
import TypeWriter from './TypeWriter'
import styled from 'styled-components';

const HeroContent = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 500px;
    position: relative;    
    &:after{
        position: absolute;
        width: 100%;
        height: 20%;
        z-index: 3;
        bottom: 0;
        content: '';
        transform-origin: right bottom;
        transform: skewY(-2deg);
        background-color: white;
    }
`
const MainTitle = styled.div`
    position: absolute;
    width: 350px;
    bottom: 15%;
    left: 30px;
    z-index: 5;
    margin-left: 20px;
    h1 {
        font-size: 1.7rem;
    }
    p {
        font-weight: 300;
    }
`

const Hero = () => {
    return (
        <header>
            <Navigation />
            <HeroContent>
                <MainTitle>
                    <h1>My name is Luis Enrique</h1>
                    <p>I'm a Full stack javascript developer, i love to create usefull and fun to use Apps. 
                    I belive that a smile in an user face is the best reward of all.</p>
                    <button>Contact me</button>
                </MainTitle>
                <TypeWriter />
            </HeroContent>
        </header>
    );
}

export default Hero;