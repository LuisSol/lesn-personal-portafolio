import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Project from './Project';
import ScrollIndicator from './ScrollIndicator'

const FullDiv = styled.main`
    width: 100%;
    position: relative;
    &:after {
        position: absolute;        
        content: '';
        left: 0;
        bottom: -3.5rem;
        background-color: white;
        width: 100%;
        height: 15%;
        transform-origin: left bottom;
        transform: skewY(-1.5deg);
        z-index: 1;
    }
`
const ProjectsView = styled.section`    
    height: 500px;
    width: 1024px;
    margin: 0 auto;
    color: black;    
    padding: 100px 20px 0 20px;
    position: relative;
    z-index: 2;
    .title { 
        position: absolute;
        top: 3.5rem;
        font-size: 1.7rem;
        z-index: 5;
    }
    @media (max-width: 1024px) {
        width: 100%;
    }        
`
const projects = [
    {
        id: 'lesnpro12020',
        title: 'Ahimsa',
        github: 'https://github.com/LuisSol/ahimsa-web',
        link: 'https://ahimsarelax.com/',
        detail: `<p>Created with <strong>React</strong>, using <strong>Redux</strong> to maintain in syncrony the selected routine through components, <strong>CSS</strong> styling is done through <strong>Styled-components</strong> library and the animations with <strong>Framer-motion</strong> library.</p>
        <p>The web App is hosted in Google <strong>Firebase</strong>.</p>
        <p>Native Apps are codded in <strong>React Native</strong> with the <strong>Expo Kit SDK</strong> in order to deploy to both Apple and Google store with the same code.</p><p>All the production versions are responsive to diferent device sizes.</p>`,
        android: '#',
        ios: '#',
        image: {
            large: '/images/ahimsa_dev_lar.jpg',
            medium: '/images/ahimsa_dev_med.jpg'
        }
    },
    {
        id: 'consba2020',
        title: 'Consultorio Bañuelos',
        github: '#',
        link: '#',
        detail: `<p>In construction...</p>`,
        android: '#',
        ios: '#',
        image: {
            large: '/images/construction_dev_lar.jpg',
            medium: '/images/construction_dev_med.jpg'
        }
    },
]

const Projects = () => (
    <FullDiv>
        <ProjectsView>
            <h1 className="title" id="projects">Projects</h1>                
            <Slider
                lazyLoad="progressive"
                slidesToShow={1}
                slidesToScroll={1}
                speed={400}
                arrows={false}
                fade="true"     
            >
            {
                projects.map((project) => {
                    return <Project key={project.id} {...project} />
                })   
            }
            </Slider>
            <ScrollIndicator top={{top: '-1rem'}} />
        </ProjectsView>
    </FullDiv>
)


export default Projects;