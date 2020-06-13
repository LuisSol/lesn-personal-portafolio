import React from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import Project from './Project';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const animate = keyframes`
    0% {
        border-color: #999;
    }
    20% {
        border-color: #999;
    }
    20.1%, 100% {
        border-color: #EEE;
    }
`

const ProjectsView = styled.section`    
    height: 500px;
    color: black;    
    padding: 100px 30px 0px 30px;
    position: relative;
    z-index: 1;
    .title { 
        position: absolute;
        top: 2rem;
        font-size: 1.7rem;
        z-index: 5;
    }
    &:after {
        position: absolute;        
        content: '';
        left: 0;
        bottom: -3.5rem;
        background-color: white;
        width: 100%;
        height: 15%;
        transform-origin: left bottom;
        transform: skewY(-3deg);
        z-index: -1;
    }
    .scroll-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: -1rem;
    }
    .indicator {
        position: relative;
        display: inline-block;
        width: 9px;
        height: 9px;        
    }
    .indicator span{
        position: absolute;
        width: 100%;
        height: 100%;
        border-bottom: 2px solid #6666;
    }
    .left-indicator {        
        margin-right: .5rem;        
        transform: rotate(45deg);
    }    
    .left-indicator span {      
        border-left: 2px solid #6666;
        animation: ${animate} 3s linear infinite;
    }
    .left-indicator span:nth-child(1) {
        left: -5px;
        bottom: -5px;
        animation-delay: 0.2s;
    }
    .left-indicator span:nth-child(2) {
        left: -10px;
        bottom: -10px;
        animation-delay: 0.4s;
    }
    .left-indicator span:nth-child(3) {
        left: -15px;
        bottom: -15px;
        animation-delay: 0.6s;
    }
    .right-indicator {           
        margin-left: .5rem; 
        transform: rotate(-45deg);
    }
    .right-indicator span{
        border-right: 2px solid #6666;
        animation: ${animate} 3s linear infinite;
    }
    .right-indicator span:nth-child(1) {
        right: -5px;
        bottom: -5px;
        animation-delay: 0.2s;
    }
    .right-indicator span:nth-child(2) {
        right: -10px;
        bottom: -10px;
        animation-delay: 0.4s;
    }
    .right-indicator span:nth-child(3) {
        right: -15px;
        bottom: -15px;
        animation-delay: 0.6s;
    }
`

const projects = [
    {
        id: 'lesnpro12020',
        title: 'Ahimsa',
        github: '#',
        link: '#',
        detail: 'This is an app',
        android: '',
        ios: '',
    },
    {
        id: 'lesnpro22020',
        title: 'Arts Gym',
        github: '#',
        link: '#',
        detail: 'This is an app',
        android: '',
        ios: '',
    },
]

const Projects = () => {

    return (
        <main>
            <ProjectsView>
                <h1 className="title" id="projects">Projects</h1>                
                <Slider
                    slidesToShow={1}
                    slidesToScroll={1}
                    speed={400}
                    arrows={false}      
                >
                {
                    projects.map((project) => {
                        return <Project key={project.id} {...project} />
                    })   
                }
                </Slider>
                <div className="scroll-indicator">
                    <div className="indicator left-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                        <small>scroll</small>
                    <div className="indicator right-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>                
            </ProjectsView>
        </main>
    )
}

export default Projects;