import React from 'react';
import Navigation from './Navigation'
import TypeWriter from './TypeWriter'
import styled from 'styled-components';
import ContactBtn from './ContactBtn'

const Hero = styled.header`
    width: 1024px;
    margin: 0 auto;
    @media (max-width: 1024px) {
        width: 100%;
    }
`
const FullDiv = styled.div`
    width: 100%;
    background-color: white;
    position: relative;  
    &:after{
        position: absolute;
        width: 100%;
        height: 20%;
        z-index: 3;
        bottom: 0;
        content: '';
        transform-origin: right bottom;
        transform: skewY(-1.5deg);
        background-color: white;
    }
`
const HeroContent = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 500px;   
    position: relative;
`
const ProfilePhoto = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    left: 70px;
    top: 20px;
    z-index: 5;
`
const MainTitle = styled.div`
    position: absolute;
    width: 350px;
    bottom: 10%;
    left: 20px;
    z-index: 5;
    h1 {
        font-size: 1.7rem;
    }
    p {
        font-weight: 300;
    }
    @media (max-width: 380px) {
        width: 300px;
    }
    @media (max-width: 320px) {
        width: 270px;
    }
`

export default ({ toggleModal }) => (
    <FullDiv>
        <Hero>
            <Navigation />
            <HeroContent>
                <ProfilePhoto src="/images/profile_photo.jpg" alt="Luis Enrique Solis" />
                <MainTitle>
                    <h1>My name is Luis Enrique</h1>
                    <p>I'm a Full stack javascript developer, i love to create useful and fun to use Apps. 
                    I belive that a smile in an user face is the best reward of all.</p>
                    <ContactBtn 
                        toggleModal={toggleModal}
                    />                    
                </MainTitle>
                <TypeWriter />
            </HeroContent>
        </Hero>
    </FullDiv>
);

