import React from 'react';
import styled from 'styled-components';

const ProjectsView = styled.section`
    height: 500px;
    color: black;
    padding: 10px 45px;
    position: relative;
    z-index: 1;
    .title { 
        position: absolute;
        top: 2rem;
        font-size: 1.7rem;
    }
    &:after {
        position: absolute;        
        content: '';
        left: 0;
        bottom: -3rem;
        background-color: white;
        width: 100%;
        height: 15%;
        transform-origin: left bottom;
        transform: skewY(-2deg);
    }   
`

const Projects = () => {
    return (
        <main>
            <ProjectsView>
                <h1 className="title">Projects</h1>
                
            </ProjectsView>
        </main>
    )
}

export default Projects;