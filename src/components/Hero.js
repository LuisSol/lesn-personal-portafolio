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
`
const MainTitle = styled.div`
    position: absolute;
    width: 350px;
    bottom: 15%;
    left: 30px;
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
                </MainTitle>
                <TypeWriter />
            </HeroContent>
        </header>
    );
}

export default Hero;